import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./post.module.scss";
import { PostFooter } from "./components/footer/post-footer";
import { PostHeader } from "./components/header/post-header";
import { IPostProps, TypeBlock } from "./post.interface";
import dynamic from "next/dynamic";
import Link from "next/link";

const Output = dynamic<any>(
	//@ts-ignore
	async () => (await import("editorjs-react-renderer")).default,
	{ ssr: false }
);
export const Post: React.FC<IPostProps> = ({
	title,
	views,
	body,
	authorInfo,
	dislikes,
	likes,
	topicInfo,
	createdAt,
	_id,
	author,
	topic,
	commentsCount,
}) => {
	return (
		<Paper className={styles.post}>
			<PostHeader
				authorInfo={authorInfo}
				topicInfo={topicInfo}
				createdAt={createdAt}
				author={author}
				topic={topic}
			/>
			<Box className={styles.content}>
				<Link href={`/post/${_id}`}>
					<a>
						<Typography className={styles.title} variant={"h5"}>
							{title}
						</Typography>
					</a>
				</Link>
				<Link href={`/post/${_id}`}>
					<a className={styles.body}>
						{body && <Output data={{ blocks: body }} />}
					</a>
				</Link>
				<Typography>{views.length} просмотров</Typography>
			</Box>
			<PostFooter
				dislikes={dislikes.length}
				id={_id}
				commentsCount={commentsCount}
				likes={likes.length}
			/>
		</Paper>
	);
};
