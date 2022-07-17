export interface IAuthPayloadLogin {
	password: string;
	email: string;
}

export interface IAuthPayloadRegister extends IAuthPayloadLogin {
	fullName: string;
}

export interface IAuthResponse {
	accessToken: string;
	fullName: string;
	email: string;
	refreshToken: string;
}
