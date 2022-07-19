import { Button } from "@mui/material";
import React from "react";
import styles from "./left-side.module.scss";
import PopularPostsIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import MyLentIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import BookmarksIcon from "@mui/icons-material/BookmarksOutlined";
import RatingIcon from "@mui/icons-material/TrendingUpOutlined";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import { useRouter } from "next/router";
const routes = [
	{
		text: "Свежее",
		icon: <PopularPostsIcon />,
		path: "#popular",
	},
	{
		text: "Моя лента",
		icon: <MyLentIcon />,
		path: "/mylent",
	},
	{
		text: "Закладки",
		icon: <BookmarksIcon />,
		path: "/bookmarks",
	},
	{
		text: "Сообщения",
		icon: <ChatIcon />,
		path: "/messages",
	},
	{
		text: "Рейтинг TJ",
		icon: <RatingIcon />,
		path: "/rating",
	},
];
export const LeftMenu = () => {
	const router = useRouter();
	return (
		<>
			<div className={styles.leftSide}>
				<ul className={styles.menu}>
					{routes.map((el) => {
						return (
							<li key={el.path}>
								<Link href={el.path}>
									<Button
										href={el.path}
										color={
											router.pathname === el.path ? "secondary" : "primary"
										}
										variant={router.asPath === el.path ? "contained" : "text"}
									>
										{el.icon}
										{el.text}
									</Button>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
