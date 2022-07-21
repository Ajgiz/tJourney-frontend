import { IFullCommentResponse } from "../../../../../../services/comments-service/comments-service.interface";

export type SortType = "popular" | "new";

export interface ICommentState extends IFullCommentResponse {
	children: ICommentState[];
}

export interface ICommentsProps {
	postId: string;
	commentsProps: ICommentState[];
}
