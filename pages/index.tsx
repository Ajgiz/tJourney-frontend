import type { GetServerSideProps, NextPage } from "next";
import { Alert, MenuItem, Paper, Select, Typography } from "@mui/material";
import styles from "../styles/home.module.scss";
import React from "react";
import { News } from "../components/pages/components/news";
import { Post } from "../components/pages/components/post/post";
import { MainLayouts } from "../components/layouts/main-layouts";
import { Api } from "../services/api";
import { IFullPostResponse } from "../services/post-service/post-service.interface";
import { Menu } from "../components/pages/components/menu/menu";
import { IOptionMenu } from "../components/pages/components/menu/menu.interface";
import { SortPostsType } from "../components/pages/home/index.interface";
import { useFetch } from "../hooks/useFetch";
import { LoaderOne } from "../components/loaders/loader-1";
import { SortType } from "../components/pages/components/post/components/comments/comments.interface";
import { convertToRightValueMenu } from "../components/common/helper-functions";

interface IHomeProps {
	postsProps: IFullPostResponse[];
	error?: string;
}

const Home: NextPage<IHomeProps> = ({ postsProps, error }) => {
	const [posts, setPosts] = React.useState(postsProps);
	const [limitPosts, setLimitPosts] = React.useState(15);
	const [skipPosts, setSkipPosts] = React.useState(0);
	const [sortPostsType, setSortPostsType] = React.useState<SortType>("new");
	const [getSortedPosts, loadingPosts, errorPosts] = useFetch<SortType>(
		async (type) => {
			const posts = await Api().post.searchPosts({
				limit: limitPosts,
				skip: skipPosts,
				new: type === "new" ? -1 : undefined,
				views: type === "popular" ? -1 : undefined,
			});
			setPosts(posts);
		}
	);

	const handleSortPosts = (type: SortType) => {
		if (sortPostsType === type) return;
		setSortPostsType(type);
		getSortedPosts(type);
	};

	const optionsMenuSortPosts: IOptionMenu[] = [
		{
			func: () => handleSortPosts("popular"),
			label: "Популярные",
		},
		{
			func: () => handleSortPosts("new"),
			label: "Новые",
		},
	];
	return (
		<div className="page">
			<MainLayouts contentFullWidth={false} hideComments={false}>
				<div className={styles.content}>
					<div className={styles.top}>
						<Menu
							arrowIcon
							value={convertToRightValueMenu(sortPostsType)}
							label={
								<p className={styles["menu-label"]}>
									{convertToRightValueMenu(sortPostsType)}
								</p>
							}
							rootClassName={styles.sortTypeMenu}
							options={optionsMenuSortPosts}
						/>
					</div>

					<News />
					{[error, errorPosts].some((el) => el && true) && (
						<Alert severity="error">
							{typeof error === "string" ? error : "Неизвестная ошибка"}
						</Alert>
					)}
					{loadingPosts && <LoaderOne />}
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
		const postsProps = await Api(ctx as any).post.searchPosts({
			limit: 15,
			skip: 0,
			new: -1,
		});
		return {
			props: { postsProps },
		};
	} catch (e: any) {
		return {
			props: { error: e.message },
		};
	}
};

export default Home;
