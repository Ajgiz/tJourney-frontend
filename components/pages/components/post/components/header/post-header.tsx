import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import styles from "./post-header.module.scss";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { IPersonInfo } from "../../../../../../services/post-service/post-service.interface";
import { MOCK_AVATAR } from "../../../../../constant/constant";
import { formatDistanceToNow, parseISO } from "date-fns";
import Link from "next/link";
import { ShowTimeCreate } from "../../../time-show/time-show";

interface IPosHeaderProps {
	authorInfo: IPersonInfo;
	topicInfo?: IPersonInfo;
	createdAt: string;
	author: string;
	topic?: string;
}

export const PostHeader: React.FC<IPosHeaderProps> = ({
	authorInfo,
	createdAt,
	topicInfo,
	author,
	topic,
}) => {
	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					{topicInfo && (
						<Link href={`/profile/${topic}`}>
							<a>
								<Box className={styles.topic}>
									<Image
										width={28}
										height={28}
										src={topicInfo?.avatar || MOCK_AVATAR}
									/>
									<Typography className={styles.topicInfoName}>
										{topicInfo?.name}
									</Typography>
								</Box>
							</a>
						</Link>
					)}

					<Link href={`/profile/${author}`}>
						<a>
							<Box className={styles.author}>
								{!topic && (
									<Image
										width={28}
										height={28}
										src={authorInfo?.avatar || MOCK_AVATAR}
									/>
								)}
								<Typography className={styles.authorName}>
									{authorInfo?.name}
								</Typography>
							</Box>
						</a>
					</Link>
				</Box>
				<ShowTimeCreate className={styles.timeAdded} time={createdAt} />
			</div>
			<div className={styles.right}>
				<PersonAddIcon className={styles.personAddIcon} />
				<LinearScaleIcon />
			</div>
		</header>
	);
};
