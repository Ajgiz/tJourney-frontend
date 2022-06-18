import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import styles from "./post-header.module.scss";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const PostHeader = () => {
	return (
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
	);
};
