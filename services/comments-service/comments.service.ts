import {
	ICreateCommentPayload,
	IFullCommentResponse,
	IGetCommentsPayload,
	ILikeResponse,
} from "./comments-service.interface";
import { AxiosInstance } from "axios";

export const commentsService = ($api: AxiosInstance) => ({
	async getComments({ limit, parent, post, skip }: IGetCommentsPayload) {
		const parentParams = parent ? "&parent=" + parent : "";
		const { data } = await $api.get<IFullCommentResponse[]>(
			`comments/find?post=${post}&limit=${limit}&skip=${skip}${parentParams}`
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
