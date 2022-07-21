import {
	Box,
	Button,
	IconButton,
	Input,
	MenuItem,
	Paper,
	Typography,
} from "@mui/material";
import React from "react";
import styles from "./comments.module.scss";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import { CommentItem } from "./components/comment-item/comment-item";
import { InputComments } from "./components/input/input";
import ScrollableAnchor from "react-scrollable-anchor";
import { Menu } from "../../../menu/menu";
import { IOptionMenu } from "../../../menu/menu.interface";
import { useFetch } from "../../../../../../hooks/useFetch";
import { Api } from "../../../../../../services/api";
import { useAppSelector } from "../../../../../../redux/hooks";
import { selectIsAuth } from "../../../../../../redux/slices/user/user.slice";
import { ICommentsProps, ICommentState, SortType } from "./comments.interface";
import { convertToRightValueMenu } from "../../../../../common/helper-functions";

export const Comments: React.FC<ICommentsProps> = ({
	postId,
	commentsProps,
}) => {
	const isAuth = useAppSelector(selectIsAuth);
	const [text, setText] = React.useState("");
	const [sort, setSort] = React.useState<SortType>("new");
	const [parent, setParent] = React.useState<null | string>(null);
	const [comments, setComments] =
		React.useState<ICommentState[]>(commentsProps);
	const ELEMENTS_MENU: IOptionMenu[] = [
		{
			label: "Популярные",
			func: () => handleSortComments("popular"),
		},
		{
			label: "Последние",
			func: () => handleSortComments("new"),
		},
	];

	const [createComment, loadingCreate, errorCreateComment] = useFetch(
		async () => {
			const comment = await Api().comment.create({
				text,
				post: postId,
				parent,
			});
			setComments([{ ...comment, children: [] }, ...comments]);
		}
	);
	const handleCreateComment = async () => {
		createComment();
		setText("");
	};

	const handleSortComments = (sortType: SortType) => {
		setSort(sortType);
		const commentsCopy = JSON.parse(JSON.stringify(comments));
		handleSortHelper(commentsCopy, sortType);
		setComments(commentsCopy);
	};

	const handleSortHelper = (
		comments: ICommentState[] | ICommentState,
		sortType: SortType
	) => {
		if (Array.isArray(comments)) {
			comments.sort((a, b) =>
				sortType === "popular"
					? b.likes.length - a.likes.length
					: b.createdAt.localeCompare(a.createdAt)
			);
			comments.forEach((el) => handleSortHelper(el, sortType));
		} else {
			comments.children.sort((a, b) =>
				sortType === "new"
					? b.likes.length - a.likes.length
					: b.createdAt.localeCompare(a.createdAt)
			);
			comments.children.forEach((el) => handleSortHelper(el, sortType));
		}
	};

	return (
		<>
			<ScrollableAnchor id={"comments"}>
				<Paper
					sx={{
						padding: "20px 200px",
						mb: "300px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							marginBottom: "20px",
						}}
					>
						<Typography
							variant="h6"
							sx={{ mb: "30px", fontWeight: 600, marginBottom: 0, flex: 1 }}
						>
							{comments?.length} комментариев
						</Typography>
						<Menu
							value={convertToRightValueMenu(sort)}
							label={<FormatLineSpacingIcon sx={{ cursor: "pointer" }} />}
							options={ELEMENTS_MENU}
						/>
					</Box>
					{isAuth && (
						<InputComments
							createComment={handleCreateComment}
							setValue={setText}
							value={text}
							setParent={setParent}
						/>
					)}
					<Box>
						{comments.map((c) => {
							return (
								<CommentItem
									sort={sort}
									comments={comments}
									setComments={setComments}
									selectedParent={parent}
									setParent={setParent}
									key={c._id}
									{...c}
								/>
							);
						})}
					</Box>
				</Paper>
			</ScrollableAnchor>
		</>
	);
};
