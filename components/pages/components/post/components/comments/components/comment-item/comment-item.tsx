import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./comments-item.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
	ICommentItemProps,
	ICommentsStateType,
} from "./comment-item.interface";
import { useAppSelector } from "../../../../../../../../redux/hooks";
import { selectIsAuth } from "../../../../../../../../redux/slices/user/user.slice";
import { ShowTimeCreate } from "../../../../../time-show/time-show";
import { Like } from "../../../../../like/like";
import { Api } from "../../../../../../../../services/api";
import { CustomInput } from "../../../../../../setting/input/input";
import { InputResponse } from "./input/input";
import { ICommentState } from "../../comments.interface";
import { useFetch } from "../../../../../../../../hooks/useFetch";

export const CommentItem: React.FC<ICommentItemProps> = ({
	_id,
	createdAt,
	likes,
	dislikes,
	text,
	setParent,
	post,
	parent,
	userInfo,
	countSubComments,
	setComments,
	comments,
	selectedParent,
	children,
	sort,
}) => {
	const [inputText, setInputText] = React.useState("");
	const [countChildrenComments, setCountChildrenComments] =
		React.useState(countSubComments);
	const handleResponse = () => {
		setParent(_id);
	};
	const [exclude, setExclude] = React.useState<string[]>([]);
	const [skip, setSkip] = React.useState(0);
	const isAuth = useAppSelector(selectIsAuth);
	const handleFetchLike = async () => {
		const comment = await Api().comment.likePost(_id);
		likeDislikeComment(comment._id, "like", comment.likes);
		return {
			likes: comment.likes.length,
			dislikes: comment.dislikes.length,
		};
	};

	const updateNestedComments = (func: (comments: ICommentState) => void) => {
		const updateComments = (comments: ICommentsStateType) => {
			if (Array.isArray(comments)) {
				comments.forEach((c) => updateComments(c));
			} else {
				func(comments);
				comments.children.forEach((el) => updateComments(el));
			}
		};
		const commentsCopy = comments.slice();
		updateComments(commentsCopy);
		setComments(commentsCopy);
	};

	const likeDislikeComment = (
		id: string,
		type: "like" | "dislike",
		value: string[]
	) => {
		updateNestedComments((comment: ICommentState) => {
			if (comment._id === id) {
				if (type === "like") comment.likes = value;
				if (type === "dislike") comment.dislikes = value;
			}
		});
	};

	const [getSubComments, loadingGetComments, errorGetComments] = useFetch(
		async () => {
			const comments = await Api().comment.getComments({
				limit: 15,
				post,
				skip,
				parent: _id,
				exclude,
				sort,
			});
			addNewComment(comments.map((c) => ({ ...c, children: [] })));
		}
	);

	const addNewComment = (newComments: ICommentsStateType) => {
		updateNestedComments((comment: ICommentState) => {
			if (Array.isArray(newComments)) {
				newComments.forEach((el) => {
					if (el.parent === comment._id) {
						comment.children.push(el);
					}
				});
			} else {
				if (newComments.parent === comment._id)
					comment.children.push(newComments);
			}
		});
	};

	const handleCancelResponse = () => {
		setParent(null);
	};

	const handleFetchDislike = async () => {
		const comment = await Api().comment.dislikePost(_id);
		likeDislikeComment(comment._id, "dislike", comment.dislikes);
		return {
			likes: comment.likes.length,
			dislikes: comment.dislikes.length,
		};
	};

	const handleGetSubComments = async () => {
		getSubComments();
		setSkip(skip + 15);
	};

	const handleCreateComment = async () => {
		const comment = await Api().comment.create({
			parent: _id,
			post,
			text: inputText,
		});

		addNewComment({ ...comment, children: [] });
		setInputText("");
		setParent(null);
		setExclude([...exclude, comment._id]);
		setCountChildrenComments((el) => el + 1);
	};

	return (
		<>
			<Box sx={{ marginBottom: "20px" }}>
				<header className={styles.header}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Image
							className={styles.avatar}
							src={userInfo?.avatar || "https://www.blexar.com/avatar.png"}
							height={42}
							width={42}
							objectFit="cover"
						/>
						<Box sx={{ marginLeft: "10px" }}>
							<Typography fontSize="16px" fontWeight={600}>
								{userInfo?.name}
							</Typography>
							<ShowTimeCreate className={styles.timeShow} time={createdAt} />
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							padding: "0px",
						}}
					>
						<Like
							dislikes={dislikes.length}
							likes={likes.length}
							fetchDislike={handleFetchDislike}
							fetchLike={handleFetchLike}
						/>
					</Box>
				</header>
				<Typography sx={{ marginBottom: "5px" }}>{text}</Typography>
				<Button onClick={handleResponse} className={styles.bttn}>
					Ответить
				</Button>
				<Button className={styles.bttn}>...</Button>
			</Box>

			<div className={styles.subComment}>
				{selectedParent === _id && isAuth && (
					<InputResponse
						handleResponse={handleCreateComment}
						handleCancel={handleCancelResponse}
						setValue={setInputText}
						value={inputText}
					/>
				)}
				{!(countChildrenComments - children.length <= 0) ? (
					<p onClick={handleGetSubComments} className={styles.countSubComment}>
						{countChildrenComments - children.length} комментарий
					</p>
				) : null}
				{children &&
					children.map((c) => {
						return (
							<CommentItem
								comments={comments}
								setComments={setComments}
								selectedParent={selectedParent}
								key={c._id}
								sort={sort}
								{...c}
								setParent={setParent}
							/>
						);
					})}
			</div>
		</>
	);
};
