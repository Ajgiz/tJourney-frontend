import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./post.module.scss";

import { PostFooter } from "./components/footer/post-footer";
import { PostHeader } from "./components/header/post-header";

export const Post = () => {
	return (
		<Paper className={styles.post}>
			<PostHeader />
			<Box className={styles.content}>
				<Typography className={styles.title} variant={"h5"}>
					Е***ь
				</Typography>
				<Typography className={styles.text}>
					Вы запилили анимацию плюса и минуса. Уважаю. Не, в натуре. Классно
					Чётко Умеете, Могёте.
				</Typography>
				<Typography>9113 просмотров</Typography>
			</Box>
			<PostFooter />
		</Paper>
	);
};
