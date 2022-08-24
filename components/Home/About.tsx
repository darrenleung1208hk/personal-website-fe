import { Typography } from "@mui/material";
import { IAbout } from "../../contentful";
import SectionWrapper from "../SectionWrapper";

interface Props extends IAbout {}

const About = ({ description }: Props) => {
	return (
		<SectionWrapper dark id="about">
			<Typography variant="h3" fontWeight={700} paragraph>
				About Me.
			</Typography>
			<Typography>{description}</Typography>
		</SectionWrapper>
	);
};

export default About;
