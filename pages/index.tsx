import type { GetServerSideProps, NextPage } from "next";
import { Alert, MenuItem, Paper, Select, Typography } from "@mui/material";
import styles from "../styles/home.module.scss";
import React from "react";
import { News } from "../components/pages/components/news";
import { Post } from "../components/pages/components/post/post";
import { MainLayouts } from "../components/layouts/main-layouts";
import { Api } from "../services/api";
import { IFullPostResponse } from "../services/post-service/post-service.interface";

interface IHomeProps {
	posts: IFullPostResponse[];
	error?: string;
}

const Home: NextPage<IHomeProps> = ({ posts, error }) => {
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
					{error && (
						<Alert severity="error">
							{typeof error === "string" ? error : "Неизвестная ошибка"}
						</Alert>
					)}
					{posts &&
						posts.map((post) => {
							return <Post {...post} author={post.author} key={post._id} />;
						})}
				</div>
			</MainLayouts>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const posts = await Api(ctx as any).post.getAll();
		return {
			props: { posts },
		};
	} catch (e: any) {
		return {
			props: { error: e.message },
		};
	}
};

export default Home;
