import { IFullCommentResponse } from "../../../../../../services/comments-service/comments-service.interface";

export type SortCommentsType = "Популярные" | "Последние";

export interface ICommentState extends IFullCommentResponse {
	children: ICommentState[];
}

export interface ICommentsProps {
	postId: string;
	commentsProps: ICommentState[];
}
