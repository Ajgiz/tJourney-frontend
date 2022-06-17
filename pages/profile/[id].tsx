import {
	Avatar,
	Box,
	Button,
	Paper,
	Tab,
	Tabs,
	TextField,
	Typography,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { MainLayouts } from "../../components/layouts/main-layouts";
import styles from "../../styles/profile.module.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import { Post } from "../../components/post";
const Profile: NextPage = () => {
	return (
		<MainLayouts contentFullWidth hideComments>
			<Paper className={styles.profile} elevation={0}>
				<div className={styles.content}>
					<div className={styles.info}>
						<Avatar
							className={styles.avatar}
							src="https://leonardo.osnova.io/aa08c3bd-0d34-5626-9986-7f06f5bedd24/-/scale_crop/108x108/-/format/webp/"
						/>
						<Typography className={styles.name} variant="h4">
							Ajgiz Usmanov
						</Typography>
						<p className={styles.setting}>
							<Link href={"#"}>
								<a>Изменить описание</a>
							</Link>
						</p>
						<p>На проекте с 11 июн 2022</p>
					</div>
					<div className={styles.right}>
						<SettingsIcon className={styles.settingIcon} />
						<Button color="primary" variant="contained">
							<ChatIcon />
							Написать
						</Button>
					</div>
				</div>
				<footer className={styles.footer}>
					<Tabs
						className={styles.tabs}
						value={0}
						indicatorColor="primary"
						textColor="inherit"
					>
						<Tab label="Статьи" />
						<Tab label="Комментарии" />
						<Tab label="Закладки" />
					</Tabs>
				</footer>
			</Paper>
			<div className={styles.wrapper}>
				<div className={styles.myContent}>
					<Paper className={styles.paper}>
						<Box sx={{ display: "flex" }}>
							<Avatar src="https://leonardo.osnova.io/aa08c3bd-0d34-5626-9986-7f06f5bedd24/-/scale_crop/108x108/-/format/webp/" />
							<input placeholder="Новая запись" className={styles.input} />
						</Box>
					</Paper>
					<Post />
					<Post />
					<Post />
				</div>
				<div className={styles.subscriptions}>
					<Paper className={styles.paper}>
						<Typography sx={{ marginBottom: "10px", fontWeight: 600 }}>
							Подписчики
						</Typography>
						<Typography sx={{ margin: 0, color: "#000000a6" }}>
							У вас нет ещё подписчиков
						</Typography>
					</Paper>
					<Paper className={styles.paper}>
						<Typography sx={{ marginBottom: "10px", fontWeight: 600 }}>
							Подписки
						</Typography>
						<Typography sx={{ margin: 0, color: "#3766a9", cursor: "pointer" }}>
							Настроить ленту
						</Typography>
					</Paper>
				</div>
			</div>
		</MainLayouts>
	);
};

export default Profile;
