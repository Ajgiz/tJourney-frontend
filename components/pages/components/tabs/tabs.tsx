import { Tab, Tabs as TabsMui } from "@mui/material";
import React, { FC } from "react";
import { ITabsProps } from "./tabs.interface";
import styles from "./tabs.module.scss";
export const Tabs: FC<ITabsProps> = ({ options, setValue, value }) => {
	return (
		<TabsMui
			className={styles.root}
			value={value}
			indicatorColor="primary"
			textColor="inherit"
		>
			{options.map((el) => {
				return (
					<Tab
						className={styles.tab}
						onClick={() => setValue(el.value)}
						key={el.value}
						label={el.label}
					/>
				);
			})}
		</TabsMui>
	);
};
