import { Box, useTheme } from "@mui/material";
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

const Home: NextPage<Props> = ({ hero, about, workExperience, contact }) => {
	return (
		<Box>
			<Hero {...hero} />
			<About {...about} />
			<Experience data={workExperience} />
			<Contact {...contact} />
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
