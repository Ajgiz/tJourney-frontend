import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
export const FollowButton = () => {
	const [followed, setFollowed] = React.useState(false);
	return (
		<Button
			onClick={() => setFollowed(!followed)}
			variant="contained"
			color="secondary"
			sx={{
				minWidth: "30px",
				width: "35px",
				height: "30px",
				border: "1px solid rgb(0,0,0,0.3)",
				boxShadow: "none",
				borderRadius: "5px",
				":hover": {
					boxShadow: "none",
				},
			}}
		>
			{followed ? <CheckOutlinedIcon /> : <AddIcon />}
		</Button>
	);
};
