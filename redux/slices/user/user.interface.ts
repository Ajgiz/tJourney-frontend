import { NextPageContext } from "next";
export interface IUserState {
	isAuth: boolean;
	user: IUser;
}

export interface IUser {
	email: string;
	fullName: string;
}

export enum ASYNC_CREATE_ACTION_USER_ENUM {
	REGISTER = "user/register-auth",
	LOGIN = "user/login-auth",
	LOGOUT = "user/logout",
	REFRESH = "user/refresh-auth",
}

export interface IRefresh {
	token: string;
	ctx: NextPageContext;
}
