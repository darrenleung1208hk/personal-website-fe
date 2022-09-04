import { Chip, Container, Grid, Typography } from "@mui/material";
import { IAbout } from "../../contentful";
import SectionWrapper from "../SectionWrapper";

interface Props extends IAbout {}

const About = ({ description, skills }: Props) => {
	return (
		<SectionWrapper id="about">
			<Container maxWidth="md">
				<Typography
					variant="h3"
					fontWeight={700}
					color="primary.main"
					align="center"
					paragraph
				>
					About Me.
				</Typography>
				<Typography variant="subtitle1" align="center" paragraph>
					{description}
				</Typography>
				<Typography variant="subtitle1" align="center" paragraph>
					Here's my tech stack:
				</Typography>
				<Grid container justifyContent="center" spacing={1}>
					{skills?.map((skill, index) => (
						<Grid key={`skill-${index}`} item>
							<Chip label={skill} color="primary" />
						</Grid>
					))}
				</Grid>
			</Container>
		</SectionWrapper>
	);
};

export default About;
