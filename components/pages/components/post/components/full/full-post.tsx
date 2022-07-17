import { Box, Paper, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { IPostProps } from "../../post.interface";
import { PostFooter } from "../footer/post-footer";
import { PostHeader } from "../header/post-header";
import styles from "./full-post.module.scss";
interface IFullPostProps extends IPostProps {}

const Output = dynamic<any>(
	//@ts-ignore
	async () => (await import("editorjs-react-renderer")).default,
	{ ssr: false }
);

export const FullPost: React.FC<IFullPostProps> = ({
	_id,
	author,
	authorInfo,
	body,
	commentsCount,
	createdAt,
	dislikes,
	likes,
	title,
	views,
	topic,
	topicInfo,
}) => {
	return (
		<Paper
			sx={{ marginTop: "-10px", padding: "20px 200px", marginBottom: "50px" }}
		>
			<PostHeader
				author={author}
				authorInfo={authorInfo}
				createdAt={createdAt}
				topic={topic}
				topicInfo={topicInfo}
			/>
			<Typography sx={{ marginBottom: "20px" }}>{}</Typography>
			<Box
				sx={{
					padding: "10px 0",
					marginBottom: "20px",
				}}
			>
				<Output data={{ blocks: body }} />
			</Box>

			<Typography>{views.length} просмотров</Typography>
			<PostFooter
				dislikes={dislikes.length}
				id={_id}
				commentsCount={commentsCount}
				likes={likes.length}
			/>
		</Paper>
	);
};
