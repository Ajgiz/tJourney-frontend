import clsx from "clsx";
import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { LeftMenu } from "../left-menu";
import { SideComments } from "../side-comments";
import { IMainLayoutProps } from "./layouts.interface";
import styles from "./layouts.module.scss";
export const MainLayouts: FC<PropsWithChildren<IMainLayoutProps>> = ({
	children,
	contentFullWidth,
	hideComments,
	hideLeftMenu,
}) => {
	return (
		<div className={styles.wrapper}>
			{!hideLeftMenu && <LeftMenu />}
			<div className={contentFullWidth ? styles.contentFull : styles.content}>
				{children}
			</div>
			{!hideComments && <SideComments />}
		</div>
	);
};
