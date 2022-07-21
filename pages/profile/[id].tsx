import {
	Avatar,
	Box,
	Button,
	Paper,
	Tab,
	TextField,
	Typography,
} from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { MainLayouts } from "../../components/layouts/main-layouts";
import styles from "../../styles/profile.module.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import { Post } from "../../components/pages/components/post/post";
import { Tabs } from "../../components/pages/components/tabs/tabs";
import {
	MOCK_IMAGE,
	OptionsTabsProfile,
} from "../../components/constant/constant";
import { Api } from "../../services/api";
import { useRouter } from "next/router";
import {
	IFullUserResponse,
	IUserResponse,
} from "../../services/user-service/user-service.interface";
import { ICommunityResponse } from "../../services/community-service/community-service.interface";
import { PersonAvatar } from "../../components/pages/profile/person-avatar/person-avatar";

interface IProfileProps {
	user: IFullUserResponse;
	subscribeCommunities: ICommunityResponse[];
	subscribeBlogs: IUserResponse[];
}

const Profile: NextPage<IProfileProps> = ({
	user,
	subscribeBlogs,
	subscribeCommunities,
}) => {
	const [tab, setTab] = React.useState("");
	const [subscriptions, setЫubscriptions] = React.useState<
		(ICommunityResponse | IUserResponse)[]
	>(
		[...subscribeBlogs, ...subscribeCommunities].sort(
			(a, b) => a.subscribers.length - b.subscribers.length
		)
	);
	const [tabProfile, setTabProfile] = React.useState(0);
	const router = useRouter();
	return (
		<MainLayouts contentFullWidth hideComments>
			<Paper className={styles.profile} elevation={0}>
				<div className={styles.content}>
					<div className={styles.info}>
						<Avatar
							className={styles.avatar}
							src={user?.avatar || MOCK_IMAGE}
						/>
						<Typography className={styles.name} variant="h4">
							{user?.fullName}
						</Typography>
						<p className={styles.setting}>
							<Link href={"#"}>
								<a>Изменить описание</a>
							</Link>
						</p>
						<p>На проекте с 11 июн 2022</p>
					</div>
					<div className={styles.right}>
						<Link href={"/profile/settings"}>
							<a>
								<SettingsIcon className={styles.settingIcon} />
							</a>
						</Link>
						<Button color="primary" variant="contained">
							<ChatIcon />
							Написать
						</Button>
					</div>
				</div>
				<footer className={styles.footer}>
					<Tabs
						options={OptionsTabsProfile}
						value={tabProfile}
						setValue={setTabProfile}
					/>
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
				</div>
				<div className={styles.subscribers}>
					<Paper className={styles.paper}>
						<Typography sx={{ marginBottom: "10px", fontWeight: 600 }}>
							Подписчики
						</Typography>
						<div className={styles.personsAvatar}>
							{user.subscribers.length ? (
								user.subscribersInfo.slice(0, 12).map((sub) => {
									return (
										<>
											<PersonAvatar
												avatar={sub.avatar}
												key={sub._id}
												_id={sub._id}
											/>
											{user.subscribersInfo.length > 12 ||
												(true && (
													<p className={styles.showAllSubcribes}>
														Показать все
													</p>
												))}
										</>
									);
								})
							) : (
								<Typography sx={{ margin: 0, color: "#000000a6" }}>
									У вас нет ещё подписчиков
								</Typography>
							)}
						</div>
					</Paper>
					<Paper className={styles.paper}>
						<Typography sx={{ marginBottom: "10px", fontWeight: 600 }}>
							Подписки
						</Typography>
						<div className={styles.subscriptions}>
							{subscriptions.length ? (
								subscriptions
									.slice(0, 6)
									.map((sub) => (
										<PersonAvatar
											_id={sub._id}
											avatar={sub.avatar}
											key={sub._id}
											fullName={
												(sub as IUserResponse).fullName ||
												(sub as ICommunityResponse).title
											}
										/>
									))
							) : (
								<Typography
									sx={{ margin: 0, color: "#3766a9", cursor: "pointer" }}
								>
									Настроить ленту
								</Typography>
							)}
							{subscriptions.length > 6 && (
								<p className={styles.showAll}>Показать все</p>
							)}
						</div>
					</Paper>
				</div>
			</div>
		</MainLayouts>
	);
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const user = await Api(ctx as any).user.getMe();
		const subscribeCommunities = await Api(
			ctx as any
		).community.getSubscribeCommunities();
		const subscribeBlogs = await Api(ctx as any).user.getMeSubcribersBlogs();
		console.log(user);
		return {
			props: { user, subscribeCommunities, subscribeBlogs },
		};
	} catch (e) {
		console.log(e);
		return {
			props: {},
		};
	}
};
