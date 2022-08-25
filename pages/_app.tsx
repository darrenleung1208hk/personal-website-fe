import "@fontsource/poppins";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { AppBar, NavigationDrawer } from "../components";
import "../styles/globals.css";
import theme from "../styles/theme";
import Head from "next/head";

const routes = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Contact", href: "#contact" },
];

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Darren Leung - Frontend Developer</title>
				<meta
					name="description"
					content="Experienced in headless CMS integration. Build responsive websites using React."
				/>
				<meta name="author" content="Darren Leung" />
				<meta property="og:title" content="Darren Leung | Frontend Developer" />
				<meta
					property="og:description"
					content="Experienced in headless CMS integration. Build responsive websites using React."
				/>
				<meta property="og:url" content="https://darrenleung.io" />
				<meta name="apple-mobile-web-app-title" content="darrenleung.io"></meta>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				></link>
			</Head>
			<CssBaseline />
			<NavigationDrawer drawerItems={routes} />
			<AppBar navItems={routes} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
