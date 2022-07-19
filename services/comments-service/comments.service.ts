import { getQueryParams } from "./../../components/common/helper-functions";
import {
	ICreateCommentPayload,
	IFullCommentResponse,
	IGetCommentsPayload,
	ILikeResponse,
} from "./comments-service.interface";
import { AxiosInstance } from "axios";

export const commentsService = ($api: AxiosInstance) => ({
	async getComments(query: IGetCommentsPayload) {
		const { data } = await $api.get<IFullCommentResponse[]>(
			`comments/find${getQueryParams(query)}`
		);
		return data;
	},

	async create(payload: ICreateCommentPayload) {
		const { data } = await $api.post<IFullCommentResponse>(
			"comments/create",
			payload
		);
		return data;
	},

	async likePost(id: string) {
		const { data } = await $api.patch<ILikeResponse>("comments/like", {
			id,
		});
		return data;
	},

	async dislikePost(id: string) {
		const { data } = await $api.patch<ILikeResponse>("comments/dislike", {
			id,
		});
		return data;
	},
});
