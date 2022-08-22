import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import { About, Experience, Hero } from "../components/Home";

const Home: NextPage = () => {
	const { breakpoints, palette } = useTheme();
	const mdUp = useMediaQuery(breakpoints.up("md"));

	return (
		<Box>
			<ParallaxLayer
				offset={0}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Hero />
			</ParallaxLayer>
			{mdUp && (
				<ParallaxLayer
					id="about"
					offset={1}
					speed={2}
					style={{ backgroundColor: palette.primary.main }}
				/>
			)}
			<ParallaxLayer
				id={!mdUp ? "about" : undefined}
				offset={1}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: !mdUp ? palette.primary.main : undefined,
				}}
			>
				<About />
			</ParallaxLayer>
			<ParallaxLayer
				id="experience"
				offset={2}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Experience />
			</ParallaxLayer>
		</Box>
	);
};

export default Home;
