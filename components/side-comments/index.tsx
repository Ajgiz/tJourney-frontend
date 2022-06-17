import React from "react";
import { ComentItem } from "./comment-item";
import styles from "./side-comments.module.scss";
export const SideComments = () => {
	return (
		<div className={styles.root}>
			<h3>Комментарии</h3>
			<ComentItem />
		</div>
	);
};
