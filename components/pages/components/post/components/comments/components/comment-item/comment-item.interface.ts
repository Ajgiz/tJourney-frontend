import { ICommentState } from "../../comments.interface";
import { IFullCommentResponse } from "./../../../../../../../../services/comments-service/comments-service.interface";
export interface ICommentItemProps extends IFullCommentResponse {
	setParent: (v: string | null) => void;
	selectedParent: string | null;
	children: ICommentState[];
	comments: ICommentState[];
	setComments: React.Dispatch<React.SetStateAction<ICommentState[]>>;
}
