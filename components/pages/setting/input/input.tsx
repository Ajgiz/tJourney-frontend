import React, { FC } from "react";
import { IInputSettingProps } from "./input.interface";
import styles from "./input.module.scss";
export const InputSetting: FC<IInputSettingProps> = ({
	placeholder,
	onChange,
	value,
	type,
}) => {
	return (
		<div className={type === "text" ? styles.wrapperText : styles.wrapperInput}>
			{type === "text" ? (
				<textarea
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className={styles.input}
				/>
			) : (
				<input
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className={styles.input}
				/>
			)}
		</div>
	);
};
