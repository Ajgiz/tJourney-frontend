import { Box, Typography } from "@mui/material";
import React from "react";
import { MockCommentsLeftMenu } from "../constant/constant";
import { ComentItem } from "./comment-item";
import styles from "./side-comments.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SideComments = () => {
	const [visible, setVisible] = React.useState(true);
	return (
		<Box sx={{ width: visible ? "400px" : "200px" }} className={styles.root}>
			<Typography
				sx={{
					cursor: "pointer",
					marginBottom: "10px",
					display: "flex",
					fontWeight: 600,
				}}
				onClick={() => setVisible(!visible)}
			>
				Комментарии
				<KeyboardArrowDownIcon
					sx={{ transform: visible ? "rotate(270deg)" : "rotate(90deg)" }}
				/>
			</Typography>
			{visible &&
				MockCommentsLeftMenu.map((c) => {
					return <ComentItem key={c.id} {...c} />;
				})}
		</Box>
	);
};
