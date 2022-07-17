import { Box, Input, IconButton, Button } from "@mui/material";
import React from "react";
import styles from "./input.module.scss";
import CollectionsIcon from "@mui/icons-material/Collections";

interface IInputCommentsProps {
	value: string;
	setValue: (value: string) => void;
	setParent: (v: string | null) => void;
	createComment: () => void;
}

export const InputComments: React.FC<IInputCommentsProps> = ({
	setValue,
	value,
	createComment,
	setParent,
}) => {
	const [clicked, setClicked] = React.useState(false);
	const handleFocus = () => {
		setParent(null);
		setClicked(true);
	};
	return (
		<Box
			sx={{
				backgroundColor: "rgb(0,0,0,0.1)",
				padding: "12px",
				borderRadius: "10px",
				marginBottom: "20px",
			}}
		>
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onFocus={() => handleFocus()}
				sx={{
					marginBottom: clicked ? "50px" : "0px",
				}}
				multiline
				className={styles.input}
				placeholder="Написать комментарий..."
			/>
			<Box
				sx={{
					justifyContent: "space-between",
					display: clicked ? "flex" : "none",
				}}
			>
				<IconButton>
					<CollectionsIcon />
				</IconButton>
				<Button disabled={!value} onClick={createComment} variant="contained">
					Отправить
				</Button>
			</Box>
		</Box>
	);
};
