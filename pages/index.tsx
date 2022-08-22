import { Box, useTheme } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import { About, Experience, Hero } from "../components/Home";

const Home: NextPage = () => {
	const { palette } = useTheme();

	return (
		<Box>
			<ParallaxLayer
				offset={0}
				style={{
					paddingBottom: "10%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Hero />
			</ParallaxLayer>
			<ParallaxLayer
				id="about"
				offset={1}
				style={{
					paddingBottom: "10%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: palette.primary.main,
				}}
			>
				<About />
			</ParallaxLayer>
			<ParallaxLayer
				id="experience"
				offset={2}
				style={{
					paddingBottom: "10%",
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
