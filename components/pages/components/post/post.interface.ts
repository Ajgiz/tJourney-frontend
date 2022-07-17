import { OutputData } from "@editorjs/editorjs";
import { IPersonInfo } from "./../../../../services/post-service/post-service.interface";
export interface IPostProps {
	_id: string;
	title: string;
	views: string[];
	body: OutputData["blocks"];
	authorInfo: IPersonInfo;
	author: string;
	topic?: string;
	topicInfo?: IPersonInfo;
	createdAt: string;
	likes: string[];
	dislikes: string[];
	commentsCount: number;
}

export type TypeBlock =
	| "paragraph"
	| "header"
	| "checklist"
	| "quote"
	| "list"
	| "code"
	| "delimiter";
