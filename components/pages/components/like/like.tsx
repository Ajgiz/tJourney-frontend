import { IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useFetch } from "../../../../hooks/useFetch";
import { ILikeResponse } from "../../../../services/comments-service/comments-service.interface";
import { ILikeProps } from "./like.interface";

export const Like: React.FC<ILikeProps> = ({
	dislikes,
	likes,
	fetchDislike,
	fetchLike,
}) => {
	const [likeCount, setLikeCount] = React.useState(likes - dislikes);
	const [setLike, likeLoading, likeError] = useFetch(async () => {
		const data = await fetchLike();
		setLikeCount(data.likes - data.dislikes);
	});

	const [setDislike, dislikeLoading, dislikeError] = useFetch(async () => {
		const data = await fetchDislike();
		setLikeCount(data.likes - data.dislikes);
	});
	return (
		<>
			<IconButton onClick={() => setDislike()}>
				<KeyboardArrowDownIcon />
			</IconButton>
			<Typography>{likeCount}</Typography>
			<IconButton onClick={() => setLike()}>
				<KeyboardArrowDownIcon sx={{ transform: "rotate(180deg)" }} />
			</IconButton>
		</>
	);
};
