import { parseCookies } from "nookies";
import { AxiosInstance } from "axios";
import {
	IAuthPayloadLogin,
	IAuthPayloadRegister,
	IAuthResponse,
} from "./auth-service.interface";

export const authService = ($api: AxiosInstance) => ({
	async register(payload: IAuthPayloadRegister) {
		const { data } = await $api.post<IAuthResponse>("auth/register", payload);
		return data;
	},
	async login(payload: IAuthPayloadLogin) {
		const { data } = await $api.post<IAuthResponse>("auth/login", payload);
		return data;
	},
	async logout() {
		console.log(parseCookies());
		await $api.post("auth/logout");
	},
});
