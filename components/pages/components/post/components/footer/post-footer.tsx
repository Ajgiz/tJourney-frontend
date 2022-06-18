import { Typography, IconButton } from "@mui/material";
import React from "react";
import styles from "./post-footer.module.scss";
import CommentIcon from "@mui/icons-material/Comment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const PostFooter = () => {
	return (
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
	);
};
