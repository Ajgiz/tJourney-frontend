import { NextPageContext } from "next";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	IAuthPayloadRegister,
	IAuthPayloadLogin,
} from "../../../services/auth-service/auth-service.interface";
import { ASYNC_CREATE_ACTION_USER_ENUM, IRefresh } from "./user.interface";
import { serializeError } from "./user.slice";
import { Api } from "../../../services/api";
export const register = createAsyncThunk(
	ASYNC_CREATE_ACTION_USER_ENUM.REGISTER,
	async (data: IAuthPayloadRegister) => {
		return await Api().auth.register(data);
	},
	serializeError()
);

export const login = createAsyncThunk(
	ASYNC_CREATE_ACTION_USER_ENUM.LOGIN,
	async (data: IAuthPayloadLogin) => {
		return await Api().auth.login(data);
	},
	serializeError()
);

export const logout = createAsyncThunk(
	ASYNC_CREATE_ACTION_USER_ENUM.LOGOUT,
	async () => {
		return await Api().auth.logout();
	},
	serializeError()
);

export const refresh = createAsyncThunk(
	ASYNC_CREATE_ACTION_USER_ENUM.REFRESH,
	async ({ token, ctx }: IRefresh) => {
		return await Api().user.refresh(token, ctx);
	},
	serializeError()
);
