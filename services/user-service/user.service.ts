import { AxiosInstance } from "axios";
import { setCookie } from "nookies";
import {
	MAX_AGE_ACCESS_TOKEN,
	MAX_AGE_REFRESH_TOKEN,
} from "../../redux/slices/user/constant";
import { IAuthResponse } from "../auth-service/auth-service.interface";
import { IUserResponse } from "./user-service.interface";

export const userService = ($api: AxiosInstance) => ({
	async refresh(token: string, ctx?: any) {
		const { data } = await $api.get<IAuthResponse>("auth/refresh", {
			headers: { Cookie: `refreshToken=${token}` },
		});
		setCookie(ctx, "accessToken", data.accessToken, {
			// здесь снова ставим куки, потому что на сервере нужен контекс чтобы куки изменились у клиента.
			// В итоге если ставим куки на клиенте, то null в первом аргументе, иначе на сервере ctx
			maxAge: MAX_AGE_ACCESS_TOKEN,
			path: "/",
		});
		setCookie(ctx, "refreshToken", data.refreshToken, {
			maxAge: MAX_AGE_REFRESH_TOKEN,
			path: "/",
		});
		return data;
	},
	async getMe() {
		const { data } = await $api.get<IUserResponse>("user/me/profile");
		return data;
	},
});
