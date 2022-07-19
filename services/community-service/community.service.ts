import { AxiosInstance } from "axios";
import { getQueryParams } from "../../components/common/helper-functions";
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
	async search(query: ICommunitySearchParams) {
		const { data } = await $api.get<ICommunityResponse[]>(
			`communities/search${getQueryParams(query)}`
		);
		return data;
	},
});
