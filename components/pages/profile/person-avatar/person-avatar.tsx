import { Avatar } from "@mui/material";
import Link from "next/link";
import { MOCK_IMAGE } from "../../../constant/constant";
import { IPersonAvatarProps } from "./person-avatar.interface";
import styles from "./person-avatar.module.scss";
export const PersonAvatar: React.FC<IPersonAvatarProps> = ({
	_id,
	avatar,
	fullName,
}) => {
	return (
		<Link href={`/profile/${_id}`}>
			{fullName ? (
				<div className={styles.container}>
					<Avatar src={avatar || MOCK_IMAGE} className={styles.avatarSm} />
					<p className={styles.name}>{fullName}</p>
				</div>
			) : (
				<a>
					<Avatar src={avatar || MOCK_IMAGE} className={styles.avatar} />
				</a>
			)}
		</Link>
	);
};
