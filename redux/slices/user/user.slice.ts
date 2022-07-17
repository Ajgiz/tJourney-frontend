import { MAX_AGE_ACCESS_TOKEN, MAX_AGE_REFRESH_TOKEN } from "./constant";
import { IAuthResponse } from "./../../../services/auth-service/auth-service.interface";
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { IUserState } from "./user.interface";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { AppState } from "../../store";
import { HYDRATE } from "next-redux-wrapper";
import { logout } from "./user-create-async-action";

export const serializeError = () => ({
	serializeError: (x: unknown) => x as SerializedError,
});

const initialState: IUserState = {
	user: {
		email: "",
		fullName: "",
	},
	isAuth: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => {
			return {
				...state,
				...action.payload.user,
			};
		});
		builder.addCase(logout.fulfilled, (state, action) => {
			state.user.email = "";
			state.user.fullName = "";
			state.isAuth = false;
			destroyCookie(null, "refreshToken");
			destroyCookie(null, "accessToken");
		});
		builder.addMatcher(
			(action) =>
				action.type.includes("-auth") && action.type.endsWith("/fulfilled"),
			(state, action: PayloadAction<IAuthResponse>) => {
				state.isAuth = true;
				const { accessToken, refreshToken, ...userData } = action.payload;
				setCookie(null, "accessToken", accessToken, {
					maxAge: MAX_AGE_ACCESS_TOKEN,
					path: "/",
				});
				setCookie(null, "refreshToken", refreshToken, {
					maxAge: MAX_AGE_REFRESH_TOKEN,
					path: "/",
				});
				state.user = userData;
			}
		);
	},
});

// export const {} = userSlice.actions;
export const selectIsAuth = (state: AppState) => state.user.isAuth;
export default userSlice.reducer;
