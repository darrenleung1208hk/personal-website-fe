import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

const Experience = () => {
	return (
		<Container>
			<Box width={{ lg: "75%" }}>
				<Typography
					variant="h3"
					fontWeight={700}
					color="primary.main"
					paragraph
				>
					Work Experience.
				</Typography>
				<Typography variant="h5" fontWeight={700} paragraph>
					Web Developer, Smart Drop
				</Typography>
				<Typography>Jun 2021 -Present</Typography>
				<Typography component="div">
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
							varius sapien.
						</li>
						<li>Aenean accumsan sagittis semper.</li>
						<li>Integer nec pretium massa, sit amet porta libero.</li>
						<li>
							Sed hendrerit consectetur suscipit. Maecenas sagittis bibendum
							metus ac condimentum.
						</li>
					</ul>
				</Typography>
			</Box>
		</Container>
	);
};

export default Experience;
