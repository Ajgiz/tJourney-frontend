import { IPostResponse } from "../../../services/post-service/post-service.interface";

export interface IPostState {
	posts: IPostResponse[];
}

export enum ASYNC_CREATE_ACTION_POST_ENUM {
	GET_POSTS = "post/get-post",
}
