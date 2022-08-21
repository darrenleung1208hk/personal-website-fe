import "@fontsource/poppins";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { AppBar, NavigationDrawer } from "../components";
import "../styles/globals.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar />
			<NavigationDrawer />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
