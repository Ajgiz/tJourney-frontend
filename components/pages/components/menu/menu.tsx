import React from "react";
import { IMenuProps } from "./menu.interface";
import { Menu as MenuMui, MenuItem } from "@mui/material";
export const Menu: React.FC<IMenuProps> = ({
	anchorEl,
	handleClose,
	options,
}) => {
	return (
		<MenuMui
			sx={{
				"& .MuiPaper-root": {
					padding: "5px",
					boxShadow: "2px 2px 5px rgb(0,0,0,0.2)",
				},
			}}
			MenuListProps={{
				"aria-labelledby": "basic-button",
			}}
			id="menuSort"
			open={Boolean(anchorEl)}
			onClose={handleClose}
			anchorEl={anchorEl}
			keepMounted
		>
			{options.map((op) => {
				return (
					<MenuItem key={op.label} onClick={op.func}>
						{op.label}
					</MenuItem>
				);
			})}
		</MenuMui>
	);
};
