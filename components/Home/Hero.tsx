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
				>
					Darren Leung.
				</Typography>
				<Typography
					variant={mdUp ? "h4" : "h5"}
					fontWeight={700}
					color="primary.light"
					paragraph
				>
					Frontend Developer
				</Typography>
				<Typography variant="h6">
					Experienced in headless CMS integration. <br />
					Implement responsive frontends using React and Material library.
				</Typography>
			</Box>
		</Container>
	);
};

export default Hero;
