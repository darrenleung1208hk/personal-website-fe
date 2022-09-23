import "@fontsource/inter";
import "@fontsource/ubuntu";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppBar, Footer } from "../components";
import BackToTop from "../components/BackToTop";
import "../styles/globals.css";
import theme from "../styles/theme";

const routes = [
	{ name: "About", href: "#about" },
	{ name: "Timeline", href: "#timeline" },
	{ name: "Contact", href: "#contact" },
];

function MyApp({ Component, pageProps }: AppProps) {
	const title = `${pageProps?._appProps?.name} - ${pageProps?._appProps?.title}`;
	const description = pageProps?._appProps?.shortIntroduction?.join(" ");

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta name="author" content={pageProps?._appProps?.name} />
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
				<link rel="icon" href="/favicon.ico"></link>
				<link rel="manifest" href="/site.webmanifest"></link>
			</Head>
			<CssBaseline />
			<AppBar navItems={routes} />
			<BackToTop />
			<Component {...pageProps} />
			<Footer
				linkedin={pageProps?._appProps?.linkedin}
				email={pageProps?._appProps?.email}
				github={pageProps?._appProps?.github}
			/>
		</ThemeProvider>
	);
}

export default MyApp;
