import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import { IAbout } from "../../contentful";
import Anchor from "../Anchor";

interface Props extends IAbout {}

const About = ({ introduction, skills }: Props) => {
	return (
		<Box component="section">
			<Anchor tag="about" />
			<Box
				py={{ xs: 4, md: 12 }}
				bgcolor="primary.main"
				sx={{
					boxShadow: `inset 0px 12px 6px -6px rgba(0,0,0,0.14), inset 0px -12px 6px -6px rgba(0,0,0,0.20)`,
				}}
			>
				<Container>
					<Typography variant="h3" color="#fff" align="center" paragraph>
						About Me.
					</Typography>
					<Typography align="center" color="#fff" paragraph>
						{introduction}
					</Typography>
					<Typography align="center" color="#fff" paragraph>
						Here&apos;s my recent tech stack:
					</Typography>
					<Grid container justifyContent="center" spacing={1}>
						{skills?.map((skill, index) => (
							<Grid key={`skill-${index}`} item>
								<Chip label={skill} color="secondary" sx={{ boxShadow: 2 }} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};

export default About;
