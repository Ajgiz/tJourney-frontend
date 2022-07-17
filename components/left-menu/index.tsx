import { Button } from "@mui/material";
import React from "react";
import styles from "./left-side.module.scss";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import BookmarksIcon from "@mui/icons-material/BookmarksOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUpOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Link from "next/link";
import { useRouter } from "next/router";
const routes = [
	{
		text: "Популярное",
		icon: <LocalFireDepartmentIcon />,
		path: "/popular",
	},
	{
		text: "Моя лента",
		icon: <CollectionsBookmarkIcon />,
		path: "/mylent",
	},
	{
		text: "Закладки",
		icon: <BookmarksIcon />,
		path: "/bookmarks",
	},
	{
		text: "Сообщения",
		icon: <ChatBubbleIcon />,
		path: "/messages",
	},
	{
		text: "Рейтинг TJ",
		icon: <TrendingUpIcon />,
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
										color={router.asPath === el.path ? "secondary" : "primary"}
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
