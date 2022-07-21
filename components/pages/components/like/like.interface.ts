export interface ILikeAndDislikeCount {
	likes: number;
	dislikes: number;
}
export interface ILikeProps {
	fetchLike: () => Promise<ILikeAndDislikeCount>;
	fetchDislike: () => Promise<ILikeAndDislikeCount>;
	likes: number;
	dislikes: number;
}

export interface ILikePayload {
	likes: string[];
	dislikes: string[];
}
