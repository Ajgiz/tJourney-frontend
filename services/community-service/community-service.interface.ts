export interface ICommunitySearchParams {
	description?: string;
	skip: number;
	limit: number;
	email: string;
}
export interface ICommunityResponse {
	title: string;
	_id: string;
	description: string;
	cover: string;
	subscribers: string[];
	avatar: string;
	author: string;
}
