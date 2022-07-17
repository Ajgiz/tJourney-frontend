import { AxiosInstance } from "axios";
import {
	ICommunityResponse,
	ICommunitySearchParams,
} from "./community-service.interface";
export const communityService = ($api: AxiosInstance) => ({
	async getMyCommunity() {
		const { data } = await $api.get<ICommunityResponse[]>("communities/me");
		return data;
	},

	async getSubscribeCommunities() {
		const { data } = await $api.get<ICommunityResponse[]>(
			"communities/me/subscribe"
		);
		return data;
	},
	async search({ limit, skip, description, email }: ICommunitySearchParams) {
		const searchParams = description
			? `&description=${description}&title=${description}`
			: "" + email
			? `&email=${email}`
			: "";
		const { data } = await $api.get<ICommunityResponse[]>(
			`communities/search?limit=${limit}&skip=${skip}${searchParams}`
		);
		return data;
	},
});
