import { IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useFetch } from "../../../../hooks/useFetch";
import { ILikeResponse } from "../../../../services/comments-service/comments-service.interface";

interface ILikeProps {
	fetchLike: () => Promise<ILikeResponse>;
	fetchDislike: () => Promise<ILikeResponse>;
	likes: number;
	dislikes: number;
}

export const Like: React.FC<ILikeProps> = ({
	dislikes,
	likes,
	fetchDislike,
	fetchLike,
}) => {
	const [likeCount, setLikeCount] = React.useState(likes - dislikes);
	const [setLike, likeLoading, likeError] = useFetch(async () => {
		const data = await fetchLike();
		setLikeCount(data.like - data.dislike);
	});

	const [setDislike, dislikeLoading, dislikeError] = useFetch(async () => {
		const data = await fetchDislike();
		setLikeCount(data.like - data.dislike);
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
