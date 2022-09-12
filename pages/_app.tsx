import "@fontsource/poppins";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { AppBar, Footer, NavigationDrawer } from "../components";
import "../styles/globals.css";
import theme from "../styles/theme";
import Head from "next/head";

const routes = [
	{ name: "About", href: "#about" },
	{ name: "Timeline", href: "#timeline" },
	{ name: "Contact", href: "#contact" },
];

function MyApp({ Component, pageProps }: AppProps) {
	const { _appProps } = pageProps;
	const title = `${_appProps.name} | ${_appProps.title}`;
	const description = _appProps.shortIntroduction?.join(" ");

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta name="author" content={_appProps.name} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content="https://darrenleung.io" />
				<meta
					property="og:image"
					content="https://og-image.vercel.app/Darren%20Leung.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&widths=400&heights="
				/>
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
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/android-chrome-512x512.png"
				></link>
			</Head>
			<CssBaseline />
			<NavigationDrawer drawerItems={routes} />
			<AppBar navItems={routes} />
			<Component {...pageProps} />
			<Footer
				linkedin={_appProps.linkedin}
				email={_appProps.email}
				github={_appProps.github}
			/>
		</ThemeProvider>
	);
}

export default MyApp;
