import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";

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
				<Container>
					<Box width={{ lg: "60%" }}>
						<Typography variant="h5" paragraph={!mdUp}>
							Hi there! I am...
						</Typography>
						<Typography
							variant={mdUp ? "h2" : "h3"}
							fontWeight={700}
							color="primary.main"
							paragraph
						>
							Darren Leung.
						</Typography>
						<Typography variant="h6">
							I&apos;m a front-end web developer experienced in headless CMS
							integration. I implement responsive frontends using React and the
							Material UI library to build exceptional user experiences.
						</Typography>
					</Box>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer
				offset={1}
				speed={2}
				style={{ backgroundColor: palette.primary.main }}
			/>
			<ParallaxLayer
				offset={1}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Container>
					<Box width={{ lg: "60%", color: "white" }}>
						<Typography variant="h3" fontWeight={700}>
							About Me.
						</Typography>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
							varius sapien. Aenean accumsan sagittis semper. Integer nec
							pretium massa, sit amet porta libero. Sed hendrerit consectetur
							suscipit. Maecenas sagittis bibendum metus ac condimentum. Nam
							luctus augue quis ex blandit tempus. Vivamus non sem non turpis
							malesuada vehicula id non eros.
						</Typography>
						<br />
						<Typography>
							Here are some technologies that I develop my projects with:
						</Typography>
					</Box>
				</Container>
			</ParallaxLayer>
		</Box>
	);
};

export default Home;
