import { BASE_CONFIG } from "./../../config/index";
import axios from "axios";
import { GetServerSideProps, NextPageContext } from "next";
import Cookies, { parseCookies } from "nookies";
import { authService } from "../auth-service/auth.service";
import { userService } from "../user-service/user.service";
import { postService } from "../post-service/post.service";
import { communityService } from "../community-service/community.service";
import { commentsService } from "../comments-service/comments.service";

export type ApiReturnType = {
	auth: ReturnType<typeof authService>;
	user: ReturnType<typeof userService>;
	post: ReturnType<typeof postService>;
	community: ReturnType<typeof communityService>;
	comment: ReturnType<typeof commentsService>;
};

export const Api = (
	ctx?: NextPageContext | GetServerSideProps
): ApiReturnType => {
	const cookies = ctx ? Cookies.get(ctx as any) : parseCookies();
	const token = cookies.accessToken;

	const $api = axios.create({
		baseURL: BASE_CONFIG.BACKEND_URL,
		withCredentials: true,
		headers: {
			Authorization: `Bearer ` + token,
		},
	});

	return {
		auth: authService($api),
		user: userService($api),
		post: postService($api),
		comment: commentsService($api),
		community: communityService($api),
	};
};
