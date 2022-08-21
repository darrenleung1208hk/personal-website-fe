import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<Container sx={{ py: "20vh" }}>
			<Typography variant="h5">Hi there! I am...</Typography>
			<Typography variant="h2" fontWeight={700} color="primary.main" paragraph>
				Darren Leung.
			</Typography>
			<Typography variant="h6">
				I'm a front-end web developer experienced in headless <br />
				CMS integration. I implement responsive frontends using <br />
				React and the Material UI library to build exceptional
				<br />
				user experiences.
			</Typography>
		</Container>
	);
};

export default Home;
