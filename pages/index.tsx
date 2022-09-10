import { Box } from "@mui/material";
import type { NextPage } from "next";
import { About, Contact, Hero, Timeline } from "../components/Home";
import {
	getHomePageEntries,
	IAbout,
	IContact,
	IHero,
	IExperience,
} from "../contentful";

type Props = {
	experience: IExperience[];
	hero: IHero;
	about: IAbout;
	contact: IContact;
};

const Home: NextPage<Props> = ({ hero, about, experience, contact }) => {
	return (
		<Box>
			<Hero {...hero} />
			<About {...about} />
			<Timeline data={experience} />
			<Contact {...contact} />
		</Box>
	);
};

export async function getStaticProps() {
	const {
		hero = null,
		about = null,
		experience = null,
		contact = null,
	} = await getHomePageEntries();

	return {
		props: { hero, about, experience, contact },
	};
}

export default Home;
