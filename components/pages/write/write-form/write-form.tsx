import { Box, Button, Input } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import { IWriteFormProps } from "./write-form.interface";
import styles from "./write-form.module.scss";

const Editor = dynamic(
	() => import("../editor/editor").then((m) => m.Editor) as any,
	{
		ssr: false,
	}
);
export const WriteForm: React.FC<IWriteFormProps> = ({ placeholder }) => {
	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", paddingBottom: "10px" }}
		>
			<Input placeholder={placeholder} className={styles.input} />
			<Box sx={{ fontSize: "18px", flex: "70vh" }}>
				<Editor />
			</Box>
			<Button sx={{ width: "150px", margin: "0 auto" }} variant="contained">
				Опубликовать
			</Button>
		</Box>
	);
};
