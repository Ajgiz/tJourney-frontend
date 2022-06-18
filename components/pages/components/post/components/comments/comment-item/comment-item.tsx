import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./comments-item.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "../../../../menu/menu";
export const CommentItem = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box sx={{ marginBottom: "20px" }}>
			<header className={styles.header}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Image
						className={styles.avatar}
						src="https://leonardo.osnova.io/aec36a2f-626e-54d1-b554-ee836a7bb506/-/preview/700/-/format/webp/"
						height={42}
						width={42}
						objectFit="cover"
					/>
					<Box sx={{ marginLeft: "10px" }}>
						<Typography fontSize="16px" fontWeight={600}>
							Victor Grin
						</Typography>
						<Typography fontSize="12px" color="grey">
							5 часов
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						aligItems: " center",
						padding: "0px",
					}}
				>
					<IconButton>
						<KeyboardArrowDownIcon />
					</IconButton>
					<Typography sx={{ lineHeight: 3, margin: "0px 5px" }}>345</Typography>
					<IconButton>
						<KeyboardArrowDownIcon sx={{ transform: "rotate(180deg)" }} />
					</IconButton>
				</Box>
			</header>
			<Typography sx={{ marginBottom: "5px" }}>
				Я вот только что плакал сидел. Новости очередные почитал. Бесит ебаное
				лицемерие. Сотни людей из-за войны гибнут каждый день. Пиздец.
			</Typography>
			<Button className={styles.bttn}>Ответить</Button>{" "}
			<Button onClick={handleClick} className={styles.bttn}>
				...
			</Button>
			<Menu
				anchorEl={anchorEl}
				handleClose={handleClose}
				options={[
					{ func: () => alert("Включен игнор"), label: "Игнорировать" },
					{
						func: () => alert("Ваша жалоба будет расмотрена"),
						label: "Пожаловаться",
					},
					{
						func: () => alert("Добавлено в закладки"),
						label: "Добавить в закладки",
					},
				]}
			/>
		</Box>
	);
};
