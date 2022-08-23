import { Box, Container, Typography } from "@mui/material";
import { IAbout } from "../../contentful";

const About = ({ description }: IAbout) => {
	return (
		<Container>
			<Box width={{ lg: "75%", color: "white" }}>
				<Typography variant="h3" fontWeight={700} paragraph>
					About Me.
				</Typography>
				<Typography>{description}</Typography>
			</Box>
		</Container>
	);
};

export default About;
