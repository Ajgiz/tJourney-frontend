import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
import styles from "./news.module.scss";
import styledPost from "../post/post.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const News = () => {
	return (
		<div>
			<Paper className={styledPost.post}>
				<div className={styles.news}>
					<Typography variant="h6">
						Комитет против пыток» внесли в реестр незарегистрированных
						объединений-иноагентов
					</Typography>
					<CommentIcon />
					<p>92</p>
				</div>
				<div className={styles.news}>
					<Typography variant="h6">
						Дуров официально анонсировал подписку Telegram Premium в июне 2022
						года
					</Typography>
					<CommentIcon />
					<p>102</p>
				</div>
				<div className={styles.news}>
					<Typography variant="h6">
						Forbes: Минцифры заморозило идею электронных паспортов — власти
						сомневаются, что проект окупится и для него хватит чипов
					</Typography>
					<CommentIcon />
					<p>92</p>
				</div>
				<div className={styles.news}>
					<Typography variant="h6">
						В Госдуму внесли законопроект, запрещающий иностранцам владеть более
						чем 20% в российских онлайн-сервисах объявлений
					</Typography>
					<CommentIcon />
					<p>2</p>
				</div>
				<Button variant="text">
					Показать еще <ArrowDropDownIcon />
				</Button>
			</Paper>
		</div>
	);
};
