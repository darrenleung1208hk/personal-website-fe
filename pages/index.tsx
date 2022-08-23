import { Box, useTheme } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import { About, Contact, Experience, Hero } from "../components/Home";
import { getAllWorkExperience } from "../contentful/api";

type WorkExperience = {
	jobTitle: string;
	companyName: string;
	companyWebsite?: string;
	jobLocation: string;
	startDate: Date;
	endDate?: Date;
	jobDuties?: string[];
}[];

type Props = {
	workExperience: WorkExperience;
};

const Home: NextPage = ({ workExperience }: Props) => {
	const { palette } = useTheme();

	return (
		<Box>
			<ParallaxLayer
				offset={0}
				style={{
					paddingBottom: "10%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Hero />
			</ParallaxLayer>
			<ParallaxLayer
				id="about"
				offset={1}
				style={{
					paddingBottom: "10%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: palette.primary.main,
				}}
			>
				<About />
			</ParallaxLayer>
			<ParallaxLayer
				id="experience"
				offset={2}
				style={{
					paddingBottom: "10%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Experience data={workExperience} />
			</ParallaxLayer>
			<ParallaxLayer
				id="contact"
				offset={3}
				style={{
					paddingBottom: "10%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: palette.primary.main,
				}}
			>
				<Contact />
			</ParallaxLayer>
		</Box>
	);
};

export async function getStaticProps() {
	const workExperience: WorkExperience = await getAllWorkExperience();

	return {
		props: { workExperience },
	};
}

export default Home;
