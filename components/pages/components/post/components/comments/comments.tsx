import {
	Box,
	Button,
	IconButton,
	MenuItem,
	Paper,
	Typography,
} from "@mui/material";
import React from "react";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import { Menu } from "../../../menu/menu";
import CollectionsIcon from "@mui/icons-material/Collections";
import styles from "./comments.module.scss";
import { CommentItem } from "./comment-item/comment-item";
export const Comments = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Paper
			sx={{
				padding: "20px 200px",
				mb: "300px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "20px",
				}}
			>
				<Typography
					variant="h6"
					sx={{ mb: "30px", fontWeight: 600, marginBottom: 0 }}
				>
					45 комментариев
				</Typography>
				<IconButton
					aria-haspopup="true"
					aria-expanded={Boolean(anchorEl) ? "true" : undefined}
					aria-controls={Boolean(anchorEl) ? "menuSort" : undefined}
					id="menuSort"
					sx={{
						borderRadius: 0,
						padding: "0",
						height: "min-content",
						position: "relative",
					}}
					onClick={handleClick}
				>
					<FormatLineSpacingIcon sx={{ cursor: "pointer" }} />
				</IconButton>
				<Menu
					anchorEl={anchorEl}
					handleClose={handleClose}
					options={[
						{ func: () => alert("Лучшие"), label: "Лучшие" },
						{ func: () => alert("Последние"), label: "Последние" },
					]}
				/>
			</Box>
			<Box
				sx={{
					backgroundColor: "rgb(0,0,0,0.1)",
					padding: "12px",
					borderRadius: "10px",
					marginBottom: "20px",
				}}
			>
				<textarea
					className={styles.input}
					placeholder="Написать комментарий..."
				/>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<IconButton>
						<CollectionsIcon />
					</IconButton>
					<Button variant="contained">Отправить</Button>
				</Box>
			</Box>
			<Box>
				<CommentItem />
				<CommentItem />
			</Box>
		</Paper>
	);
};
