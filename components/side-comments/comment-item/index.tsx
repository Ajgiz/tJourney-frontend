import { Avatar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { ILeftMenuCommentItemProps } from "./comment-item.interface";
import styles from "./comment-item.module.scss";
export const ComentItem: React.FC<ILeftMenuCommentItemProps> = ({
	id,
	text,
	user,
	post,
}) => {
	return (
		<div className={styles.root}>
			<div className={styles.user}>
				<Link href={`/profile/${user.id}`}>
					<Typography
						component="a"
						sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
					>
						<Avatar className={styles.avatar} src={user.avatar} />
						<b>{user.fullName}</b>
					</Typography>
				</Link>
			</div>
			<p className={styles.text}>{text}</p>
			<Link href={`/news/${post.id}`}>
				<a>
					<span className={styles.postTitle}>{post.title}</span>
				</a>
			</Link>
		</div>
	);
};
