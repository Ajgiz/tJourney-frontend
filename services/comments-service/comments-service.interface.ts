import { SortType } from "../../components/pages/components/post/components/comments/comments.interface";
import { IPersonInfo } from "../post-service/post-service.interface";
export interface IGetCommentsPayload {
	post: string;
	limit: number;
	parent: string | undefined;
	skip: number;
	exclude: string[];
	sort: SortType;
}

export interface ICommentResponse {
	text: string;
	user: string;
	_id: string;
	post: string;
	createdAt: string;
	likes: string[];
	dislikes: string[];
	updatedAt: string;
	parent: string;
}
export interface IFullCommentResponse extends ICommentResponse {
	userInfo: IPersonInfo;
	countSubComments: number;
}

export interface ICreateCommentPayload {
	text: string;
	post: string;
	parent: string | null;
}

export interface ILikeResponse {
	_id: string;
	likes: string[];
	dislikes: string[];
}
