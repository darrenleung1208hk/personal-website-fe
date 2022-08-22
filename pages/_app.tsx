import "@fontsource/poppins";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Parallax } from "@react-spring/parallax";
import type { AppProps } from "next/app";
import { AppBar, NavigationDrawer } from "../components";
import "../styles/globals.css";
import theme from "../styles/theme";

const routes = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Contact", href: "#contact" },
];

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavigationDrawer drawerItems={routes} />
			<Parallax pages={4} style={{ top: 0, left: 0 }}>
				<AppBar navItems={routes} />
				<Component {...pageProps} />
			</Parallax>
		</ThemeProvider>
	);
}

export default MyApp;
