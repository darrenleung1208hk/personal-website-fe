import { Box, Container, Typography } from "@mui/material";
import { IAbout } from "../../contentful";

interface Props extends IAbout {}

const About = ({ description }: Props) => {
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
