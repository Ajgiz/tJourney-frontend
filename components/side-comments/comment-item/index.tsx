import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./comment-item.module.scss";
export const ComentItem = () => {
	return (
		<div className={styles.root}>
			<div className={styles.user}>
				<Avatar
					className={styles.avatar}
					src={"https://www.blexar.com/avatar.png"}
				/>
				<Link href={"#"}>
					<a>
						<b>Ajgiz</b>
					</a>
				</Link>
			</div>
			<p className={styles.text}>
				The index to start the search at. If the index is greater than or equal
				to the length, -1 is returned, which means the array will not be
				searched. If the provided index value is a negative number, it is taken
			</p>
			<Link href={"#"}>
				<a>
					<span className={styles.postTitle}>
						The first index of the element in the array
					</span>
				</a>
			</Link>
		</div>
	);
};
