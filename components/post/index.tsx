import { Box, IconButton, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./post.module.scss";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import CommentIcon from "@mui/icons-material/Comment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const Post = () => {
	return (
		<Paper className={styles.post}>
			<header className={styles.header}>
				<div className={styles.left}>
					<Box className={styles.author}>
						<Image
							width={28}
							height={28}
							src={
								"https://leonardo.osnova.io/db2809a7-e775-54ab-8f85-16c2b474f29e/-/scale_crop/64x64/"
							}
						/>
						<Typography>Лига Терпил</Typography>
					</Box>
					<Typography className={styles.timeAdded}>3 часа</Typography>
				</div>
				<div className={styles.right}>
					<PersonAddIcon className={styles.personAddIcon} />
					<LinearScaleIcon />
				</div>
			</header>
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
			<footer className={styles.footer}>
				<div className={styles.left}>
					<CommentIcon />
					<Typography className={styles.comments}>120</Typography>
				</div>
				<div className={styles.right}>
					<IconButton>
						<KeyboardArrowDownIcon />
					</IconButton>
					<Typography>345</Typography>
					<IconButton>
						<KeyboardArrowDownIcon className={styles.arrowUp} />
					</IconButton>
				</div>
			</footer>
		</Paper>
	);
};
