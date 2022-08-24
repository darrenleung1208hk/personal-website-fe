import { Typography } from "@mui/material";
import { IAbout } from "../../contentful";
import SectionWrapper from "../SectionWrapper";

const About = ({ description }: IAbout) => {
	return (
		<SectionWrapper>
			<Typography variant="h3" fontWeight={700} paragraph>
				About Me.
			</Typography>
			<Typography>{description}</Typography>
		</SectionWrapper>
	);
};

export default About;
