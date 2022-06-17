import { MenuItem, Select } from "@mui/material";
import React, { FC } from "react";
import { ISelectSettingProps } from "./select.interface";
import styles from "./select.module.scss";

export const SelectSetting: FC<ISelectSettingProps> = ({
	onChange,
	value,
	values,
}) => {
	return (
		<Select
			className={styles.root}
			sx={{ width: "100%" }}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			{values.map((item) => {
				return (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				);
			})}
		</Select>
	);
};
