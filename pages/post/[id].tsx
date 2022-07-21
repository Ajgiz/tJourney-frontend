import { Alert } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { MainLayouts } from "../../components/layouts/main-layouts";
import { Comments } from "../../components/pages/components/post/components/comments/comments";
import { FullPost } from "../../components/pages/components/post/components/full/full-post";
import { Api } from "../../services/api";
import { IFullCommentResponse } from "../../services/comments-service/comments-service.interface";
import { IFullPostResponse } from "../../services/post-service/post-service.interface";

interface IPostPage {
	post: IFullPostResponse;
	comments: IFullCommentResponse[];
	error?: any;
}

const FullPostPage: NextPage<IPostPage> = ({ post, error, comments }) => {
	return (
		<MainLayouts contentFullWidth hideComments>
			{error && (
				<Alert sx={{ marginBottom: "20px" }} severity="error">
					Произошла ошибка, зайдите позже или обратитесь в службу поддержки
				</Alert>
			)}
			{!error && <FullPost {...post} />}
			<Comments
				postId={post._id}
				commentsProps={comments.map((el) => ({ ...el, children: [] }))}
			/>
		</MainLayouts>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const id = ctx?.params?.id as string;
		const post = await Api(ctx as any).post.getPost(id);

		const comments = await Api(ctx as any).comment.getComments({
			parent: undefined,
			limit: 10,
			post: id,
			skip: 0,
			exclude: [],
			sort: "new",
		});
		console.log("HEREREREREFRERE");
		console.log(comments);
		return {
			props: {
				post,
				comments,
			},
		};
	} catch (e) {
		console.log(e);
		return {
			props: {
				error: "internal server error",
			},
		};
	}
};
export default FullPostPage;
