import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {
	CssBaseline,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material";
import { theme } from "../theme";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<Component {...pageProps} />
			</StyledEngineProvider>
		</ThemeProvider>
	);
}

export default MyApp;
