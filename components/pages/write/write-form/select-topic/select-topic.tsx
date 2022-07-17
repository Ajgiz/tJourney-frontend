import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./select.topic.module.scss";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CommunityItem } from "./community-item/community-item";
import { useAppSelector } from "../../../../../redux/hooks";
import Image from "next/image";
import { IselectTagProps, ITopicItem } from "./select-topic.interface";
import { Api } from "../../../../../services/api";
import { useGetFetch } from "../../../../../hooks/useSwr";
import { ICommunityResponse } from "../../../../../services/community-service/community-service.interface";

export const SelectTags: React.FC<IselectTagProps> = ({ setTopic, topic }) => {
	const { user } = useAppSelector((state) => state.user);
	const [visible, setVisible] = React.useState(false);
	const [limit, setLimit] = React.useState(10);
	const [skip, setSkip] = React.useState(0);
	const [description, setDescription] = React.useState("");

	const { data: myComunities, loading: myComunitiesLoad } = useGetFetch<
		ICommunityResponse[]
	>("get-my-communities", async () => {
		return await Api().community.getMyCommunity();
	});
	const { data: subscribeCommunities, loading: subsCommunityLoading } =
		useGetFetch<ICommunityResponse[]>("get-subscribe-communities", async () => {
			return await Api().community.getSubscribeCommunities();
		});

	const { data: allCommunities, loading: communityLoading } = useGetFetch<
		ICommunityResponse[]
	>("search-communities", async () => {
		return await Api().community.search({
			limit,
			skip,
			description,
			email: user.email,
		});
	});

	const onChangeVisible = () => {
		setVisible(!visible);
	};
	const onChangeTag = (topic: ITopicItem) => {
		setTopic(topic);
		setVisible(false);
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.output} onClick={onChangeVisible}>
					<Image width={30} height={30} src={topic.image} />
					<p> {topic.name}</p>
					<KeyboardArrowDownIcon />
				</div>
				{visible && (
					<>
						<div className={styles.dropdown}>
							<div className={styles.searchBlock}>
								<SearchIcon />
								<Input placeholder="Поиск" className={styles.search} />
							</div>
							<div className={styles.content}>
								<p className={styles.titleSection}>Мои сообщества</p>
								<CommunityItem
									id={null}
									active={topic.id === null}
									setTopic={onChangeTag}
									name={"Мой блог"}
								/>
								{myComunitiesLoad && <p> подождите</p>}
								{myComunities &&
									myComunities?.map((el) => {
										return (
											<CommunityItem
												id={el._id}
												key={el._id}
												image={el.avatar}
												active={el._id === topic.id}
												setTopic={onChangeTag}
												name={el.title}
												subs={el.subscribers.length}
											/>
										);
									})}
								<p className={styles.titleSection}>Подписки</p>
								{subsCommunityLoading ? (
									<p>Подождите</p>
								) : (
									subscribeCommunities?.map((el) => {
										return (
											<CommunityItem
												image={el.avatar}
												id={el._id}
												key={el._id}
												active={el._id === topic.id}
												setTopic={onChangeTag}
												name={el.title}
												subs={el.subscribers.length}
											/>
										);
									})
								)}
								<p className={styles.titleSection}>Сообщества</p>
								{communityLoading ? (
									<p>Зазрузка</p>
								) : (
									allCommunities?.map((el) => {
										return (
											<CommunityItem
												image={el.avatar}
												id={el._id}
												key={el._id}
												active={el._id === topic.id}
												setTopic={onChangeTag}
												name={el.title}
												subs={el.subscribers.length}
											/>
										);
									})
								)}
							</div>
						</div>
					</>
				)}
			</div>
			{visible && (
				<div onClick={onChangeVisible} className={styles.cover}></div>
			)}
		</>
	);
};
