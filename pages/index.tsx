import { Box, useTheme } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import { About, Contact, Experience, Hero } from "../components/Home";
import {
	getAllWorkExperience,
	getHero,
	IHero,
	IJobExperience,
} from "../contentful";

type Props = {
	workExperience: IJobExperience[];
	hero: IHero;
};

const Home: NextPage = ({ hero, workExperience }: Props) => {
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
				<Hero {...hero} />
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
	const hero: IHero = await getHero();
	const workExperience: IJobExperience[] = await getAllWorkExperience();

	return {
		props: { hero, workExperience },
	};
}

export default Home;
