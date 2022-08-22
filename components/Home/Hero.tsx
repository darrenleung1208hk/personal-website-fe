import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

const Hero = () => {
	const { breakpoints } = useTheme();
	const mdUp = useMediaQuery(breakpoints.up("md"));

	return (
		<Container>
			<Box width={{ lg: "75%" }}>
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

export default Hero;
