import { ICommentState, SortType } from "../../comments.interface";
import { IFullCommentResponse } from "./../../../../../../../../services/comments-service/comments-service.interface";
export interface ICommentItemProps extends IFullCommentResponse {
	setParent: (v: string | null) => void;
	selectedParent: string | null;
	children: ICommentState[];
	sort: SortType;
	comments: ICommentState[];
	setComments: React.Dispatch<React.SetStateAction<ICommentState[]>>;
}

export type ICommentsStateType = ICommentState[] | ICommentState;
