import { AxiosInstance } from "axios";
import { ILikeResponse } from "../comments-service/comments-service.interface";
import {
	IFullPostResponse,
	IPost,
	IPostResponse,
} from "./post-service.interface";

export const postService = ($api: AxiosInstance) => ({
	async getAll() {
		const { data } = await $api.get<IFullPostResponse[]>("post");
		return data;
	},
	async savePost(post: IPost) {
		const { data } = await $api.post<IPostResponse>("post/create", post);
		return data;
	},
	async getPost(id: string) {
		const { data } = await $api.get<IPostResponse>("post/" + id);
		return data;
	},
	async likePost(id: string) {
		const { data } = await $api.patch<ILikeResponse>("post/like", { id });
		return data;
	},
	async dislikePost(id: string) {
		const { data } = await $api.patch<ILikeResponse>("post/dislike", { id });
		return data;
	},
});
