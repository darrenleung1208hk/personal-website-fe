import "@fontsource/poppins";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { AppProps } from "next/app";
import { AppBar, NavigationDrawer } from "../components";
import "../styles/globals.css";
import theme from "../styles/theme";

const routes = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Skills", href: "#skills" },
	{ name: "Education", href: "#education" },
];

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Parallax pages={2} style={{ top: 0, left: 0 }}>
				<ParallaxLayer offset={0} sticky={{ start: 0, end: 2 }}>
					<NavigationDrawer drawerItems={routes} />
				</ParallaxLayer>
				<AppBar navItems={routes} />
				<Component {...pageProps} />
			</Parallax>
		</ThemeProvider>
	);
}

export default MyApp;
