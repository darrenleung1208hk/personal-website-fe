import { Box, Container, Typography } from "@mui/material";

const About = () => {
	return (
		<Container>
			<Box width={{ lg: "75%", color: "white" }}>
				<Typography variant="h3" fontWeight={700} paragraph>
					About Me.
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
					varius sapien. Aenean accumsan sagittis semper. Integer nec pretium
					massa, sit amet porta libero. Sed hendrerit consectetur suscipit.
					Maecenas sagittis bibendum metus ac condimentum. Nam luctus augue quis
					ex blandit tempus. Vivamus non sem non turpis malesuada vehicula id
					non eros.
				</Typography>
				<br />
				<Typography>
					Here are some technologies that I develop my projects with:
				</Typography>
				<Typography>- React</Typography>
			</Box>
		</Container>
	);
};

export default About;
