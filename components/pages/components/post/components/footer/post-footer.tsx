import { Typography, IconButton } from "@mui/material";
import React from "react";
import styles from "./post-footer.module.scss";
import CommentIcon from "@mui/icons-material/Comment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useFetch } from "../../../../../../hooks/useFetch";
import { Api } from "../../../../../../services/api";
import { useRouter } from "next/router";
import Link from "next/link";
import { Like } from "../../../like/like";

export interface IPostFooterProps {
	likes: number;
	dislikes: number;
	commentsCount: number;
	id: string;
}

export const PostFooter: React.FC<IPostFooterProps> = ({
	likes = 0,
	dislikes = 0,
	id,
	commentsCount = 0,
}) => {
	const router = useRouter();
	const [likeCount, setLikeCount] = React.useState(likes - dislikes);
	const [setLike, likeLoading, likeError] = useFetch(async () => {
		const data = await Api().post.likePost(id);
		setLikeCount(data.like - data.dislike);
	});

	const fetchDislike = async () => {
		return await Api().post.dislikePost(id);
	};

	const fetchLike = async () => {
		return await Api().post.likePost(id);
	};

	const commentLabel = (
		<div className={styles.left}>
			<CommentIcon sx={{ marginRight: "10px" }} />
			<p className={styles.commentsCount}>{commentsCount || "Обсудить"}</p>
		</div>
	);
	return (
		<footer className={styles.footer}>
			{!router.asPath.includes("post") ? (
				<Link href={`/post/${id}/#comments`}>
					<a>{commentLabel}</a>
				</Link>
			) : (
				<a href="#comments">{commentLabel}</a>
			)}
			<div className={styles.right}>
				<Like
					dislikes={dislikes}
					likes={likes}
					fetchDislike={fetchDislike}
					fetchLike={fetchLike}
				/>
			</div>
		</footer>
	);
};
