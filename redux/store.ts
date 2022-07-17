import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./slices/user/user.slice";
import postReducer from "./slices/post/post.slice";
import { createWrapper } from "next-redux-wrapper";

export function makeStore() {
	return configureStore({
		reducer: { user: userReducer, post: postReducer },
	});
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;
export const wrapper = createWrapper<AppStore>(makeStore);
export default store;
