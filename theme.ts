import { createTheme } from "@mui/material";
export const theme = createTheme({
	palette: {
		primary: {
			main: "#4683d9",
		},
		secondary: {
			main: "#fff",
		},
		common: {
			black: "black",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "10px",
				},
				containedSecondary: {
					backgroundColor: "white",
					color: "black",
					":hover": {
						backgroundColor: "white",
						boxShadow: "3px 3px 5px rgb(0, 0, 0, 0.1)",
					},
				},
				text: {
					color: "black",
				},
				containedPrimary: {
					backgroundColor: "#4683d9",
					":hover": {
						backgroundColor: "#437CCE",
					},
					paddingTop: "8px",
					color: "white",
					paddingBottom: "8px",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				elevation: {
					boxShadow: "none",
				},
				rounded: {
					borderRadius: 8,
				},
			},
		},
	},
});
