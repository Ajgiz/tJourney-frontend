import { SortType } from "./../pages/components/post/components/comments/comments.interface";
import {
	ILikeAndDislikeCount,
	ILikePayload,
} from "./../pages/components/like/like.interface";
export const getQueryParams = <T>(query: T): string => {
	const formattedQuery = Object.entries(query).filter((q) => q[1] != undefined);
	const queries = formattedQuery.map((q) => `&${q[0]}=${q[1]}`);
	return queries.join("").replace("&", "?");
};

export const getLikesAndDislikesPost = (
	payload: ILikePayload
): ILikeAndDislikeCount => {
	return {
		dislikes: payload.dislikes.length,
		likes: payload.likes.length,
	};
};

export const convertToRightValueMenu = (sort: SortType) => {
	if (sort === "new") return "Последние";
	if (sort === "popular") return "Популярные";
};
