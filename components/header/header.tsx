import React from "react";
import styles from "./header.module.scss";
import {
	Avatar,
	Button,
	IconButton,
	Paper,
	StyledEngineProvider,
} from "@mui/material";
import {
	Search,
	Edit,
	Message,
	Notifications,
	Menu,
} from "@mui/icons-material";
export const Header: React.FC = () => {
	return (
		<Paper classes={{ root: styles.header }} elevation={0}>
			<div className={styles.left}>
				<IconButton>
					<Menu />
				</IconButton>
				<div className={styles.logo}>LOGO</div>
				<div className={styles.searchBlock}>
					<Search />
					<input placeholder="Поиск" />
				</div>
				<Button variant="contained" classes={{ root: styles.editButton }}>
					<Edit />
				</Button>
			</div>
			<div className={styles.right}>
				<IconButton>
					<Message />
				</IconButton>
				<IconButton>
					<Notifications />
				</IconButton>
				<Avatar src="https://leonardo.osnova.io/aa08c3bd-0d34-5626-9986-7f06f5bedd24/-/scale_crop/108x108/-/format/webp/" />
			</div>
		</Paper>
	);
};
