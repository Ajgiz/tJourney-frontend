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
			white: "#fff",
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					textTransform: "capitalize",
					borderRadius: "10px",
					boxShadow: "none",
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
				textSecondary: {
					outline: "1px solid rgb(0,0,0,0.2)",
					boxShadow: "1px 1px 1px rgb(0,0,0,0.2)",
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
				root: {
					padding: "20px",
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: "capitalize",
					fontSize: " 16px",
					padding: 0,
					marginRight: "15px",
					minWidth: "maxContent",
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					boxShadow: "none",
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				root: {
					padding: 0,
				},
				list: {
					padding: "5px 0",
				},
				paper: {
					padding: "5px",
					boxShadow: "2px 3px 5px black",
				},
			},
		},
		MuiInput: {
			styleOverrides: {
				root: {
					":focus": {
						"&::placeholder": {
							color: " rgb(0, 0, 0, 0.2)",
						},
					},
					"&::before": {
						display: "none",
					},
					"&:after": {
						display: "none",
					},
				},
			},
		},
	},
});
