import { Button, Input } from "@mui/material";
import React from "react";
import styles from "./input.module.scss";
interface IInputResponseProps {
	value: string;
	setValue: (v: string) => void;
	handleCancel: () => void;
	handleResponse: () => void;
}

export const InputResponse: React.FC<IInputResponseProps> = ({
	setValue,
	value,
	handleCancel,
	handleResponse,
}) => {
	return (
		<div className={styles.response}>
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				sx={{
					marginBottom: "10px",
				}}
				multiline
				fullWidth
				className={styles.input}
				placeholder="Написать ответ..."
			/>
			<div className={styles.footerResponse}>
				<Button disableElevation variant="text" onClick={handleCancel}>
					Отмена
				</Button>

				<Button
					disabled={!value}
					disableElevation
					variant="contained"
					onClick={handleResponse}
				>
					Отправить
				</Button>
			</div>
		</div>
	);
};
