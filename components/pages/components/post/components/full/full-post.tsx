import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PostFooter } from "../footer/post-footer";
import { PostHeader } from "../header/post-header";
import styles from "./full-post.module.scss";
export const FullPost = () => {
	return (
		<Paper
			sx={{ marginTop: "-10px", padding: "20px 200px", marginBottom: "50px" }}
		>
			<PostHeader />
			<Typography sx={{ marginBottom: "20px" }}>
				Вероятно это самый печальный ДР в моей жизни. Больше всего хотелось бы
				чтобы сейчас рядом был отец и здоровая мама. И не думать о том, как
				вылечить собаку и чем кормить. Не думать о том что в стране происходит
				полный пздц. Вот такой он, ДР.
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					bgcolor: "rgb(0,0,0,0.1)",
					padding: "10px 0",
					marginBottom: "20px",
				}}
			>
				<Image
					width={300}
					height={300}
					objectFit="cover"
					src={
						"https://leonardo.osnova.io/aec36a2f-626e-54d1-b554-ee836a7bb506/-/preview/700/-/format/webp/"
					}
				/>
			</Box>

			<Typography>1956 просмотров</Typography>
			<PostFooter />
		</Paper>
	);
};
