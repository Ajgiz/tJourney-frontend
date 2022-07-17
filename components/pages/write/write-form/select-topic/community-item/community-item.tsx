import Image from "next/image";
import React from "react";
import { MOCK_AVATAR } from "../../../../../constant/constant";
import { ITopicItem } from "../select-topic.interface";
import styles from "./community.module.scss";

interface ICommunityProps {
	name: string;
	id: string | null;
	subs?: number;
	active: boolean;
	image?: string;
	setTopic: (tag: ITopicItem) => void;
}

export const CommunityItem: React.FC<ICommunityProps> = ({
	name,
	subs,
	setTopic,
	active,
	id,
	image = MOCK_AVATAR,
}) => {
	return (
		<div
			className={active ? styles.activeContainer : styles.container}
			onClick={() => setTopic({ name, image: image || MOCK_AVATAR, id })}
		>
			<Image width={30} height={30} src={image || MOCK_AVATAR} />
			<div className={styles.info}>
				<p className={styles.name}>{name}</p>
				{subs != undefined && (
					<p className={styles.subs}> {subs} подписчиков</p>
				)}
			</div>
		</div>
	);
};
