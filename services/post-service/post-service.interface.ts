import { OutputData } from "@editorjs/editorjs";

export interface IPersonInfo {
	name: string;
	avatar: string;
}

export interface IPostResponse {
	title: string;
	_id: string;
	body: OutputData["blocks"];
	topic?: string;
	views: string[];
	author: string;
	createdAt: string;
	updatedAt: string;
	dislikes: string[];
	likes: string[];
}

export interface IFullPostResponse extends IPostResponse {
	authorInfo: IPersonInfo;
	topicInfo?: IPersonInfo;
	commentsCount: number;
}

export interface IPost {
	title: string;
	body: OutputData["blocks"];
	topic: string | null;
}
