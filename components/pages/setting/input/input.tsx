import clsx from "clsx";
import React, { FC } from "react";
import { IInputSettingProps } from "./input.interface";
import styles from "./input.module.scss";
export const CustomInput: FC<IInputSettingProps> = ({
	placeholder,
	onChange,
	value,
	inputClassName,
	wrapperClassName,
	type,
}) => {
	return (
		<div
			className={clsx(
				type === "text" ? styles.wrapperText : styles.wrapperInput,
				wrapperClassName
			)}
		>
			{type === "text" ? (
				<textarea
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className={clsx(styles.input, inputClassName)}
				/>
			) : (
				<input
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className={clsx(styles.input, inputClassName)}
				/>
			)}
		</div>
	);
};
