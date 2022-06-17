import type { NextPage } from "next";
import { Button, MenuItem, Paper, Select, Typography } from "@mui/material";
import styles from "../styles/home.module.scss";
import React from "react";
import { News } from "../components/news";
import { Post } from "../components/post";
import { MainLayouts } from "../components/layouts/main-layouts";
const Home: NextPage = () => {
	const [newsCategory, setNewsCategory] = React.useState(
		`${new Date().getDate()} июня`
	);
	return (
		<div className="page">
			<MainLayouts contentFullWidth={false} hideComments={false}>
				<div className={styles.content}>
					<Select
						variant="outlined"
						classes={{ outlined: styles.selectNewsCategory }}
						onChange={(e) => setNewsCategory(e.target.value)}
						value={newsCategory}
					>
						<MenuItem value="Все время">Все время</MenuItem>
						<MenuItem value="Месяц">Месяц</MenuItem>
						<MenuItem value={`${new Date().getDate()} июня`}>
							{`${new Date().getDate()} июня`}
						</MenuItem>
					</Select>
					<News />
					<Post />
				</div>
			</MainLayouts>
		</div>
	);
};

export default Home;
