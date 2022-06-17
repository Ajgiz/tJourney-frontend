import { Button } from "@mui/material";
import React from "react";
import styles from "./left-side.module.scss";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import BookmarksIcon from "@mui/icons-material/BookmarksOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUpOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
export const LeftMenu = () => {
	return (
		<>
			<div className={styles.leftSide}>
				<ul className={styles.menu}>
					<li>
						<Button>
							<LocalFireDepartmentIcon />
							Популярное
						</Button>
					</li>
					<li>
						<Button>
							<CollectionsBookmarkIcon />
							Моя Лента
						</Button>
					</li>
					<li>
						<Button>
							<BookmarksIcon />
							Закладки
						</Button>
					</li>
					<li>
						<Button>
							<ChatBubbleIcon />
							Сообщения
						</Button>
					</li>
					<li>
						<Button>
							<TrendingUpIcon />
							Рейтинг TJ
						</Button>
					</li>
				</ul>
			</div>
		</>
	);
};
