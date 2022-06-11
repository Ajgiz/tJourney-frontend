import { createTheme } from "@mui/material";
export const theme = createTheme({
	palette: {},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "10px",
				},
				contained: {
					backgroundColor: "white",
					color: "black",
					":hover": {
						backgroundColor: "white",
					},
				},
				text: {
					color: "black",
				},
			},
		},
	},
});
