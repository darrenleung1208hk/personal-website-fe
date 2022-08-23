import { Box, useTheme } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import { About, Contact, Experience, Hero } from "../components/Home";
import {
	getHomePageEntries,
	IAbout,
	IContact,
	IHero,
	IJobExperience,
} from "../contentful";

type Props = {
	workExperience: IJobExperience[];
	hero: IHero;
	about: IAbout;
	contact: IContact;
};

const Home: NextPage = ({ hero, about, workExperience, contact }: Props) => {
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
				<About {...about} />
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
				<Contact {...contact} />
			</ParallaxLayer>
		</Box>
	);
};

export async function getStaticProps() {
	const { hero, about, workExperience, contact } = await getHomePageEntries();

	return {
		props: { hero, about, workExperience, contact },
	};
}

export default Home;
