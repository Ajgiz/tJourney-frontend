import { IPersonInfo } from "./../post-service/post-service.interface";
export interface IUserResponse {
	fullName: string;
	_id: string;
	email: string;
	avatar: string;
	subscriptionBlogs: string[];
	subscriptionCommunities: string[];
	subscribers: string[];
	description: string;
	cover: string;
}

export interface ISubscribesInfo extends IPersonInfo {
	_id: string;
}

export interface IFullUserResponse extends IUserResponse {
	subscribersInfo: ISubscribesInfo[];
}
