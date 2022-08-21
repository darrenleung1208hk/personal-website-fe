import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
	const theme = useTheme();
	const mdUp = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Container sx={{ py: { md: "10vh", lg: "20vh" } }}>
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
	);
};

export default Home;
