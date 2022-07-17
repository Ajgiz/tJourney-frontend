import { Box } from "@mui/material";
import React from "react";
import styles from "./loader-1.module.css";

export const LoaderOne = () => {
	return (
		<div className={styles["lds-ripple"]}>
			<div></div>
			<div></div>
		</div>
	);
};
