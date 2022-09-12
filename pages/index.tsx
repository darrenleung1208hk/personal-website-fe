import { Box } from "@mui/material";
import _ from "lodash";
import type { NextPage } from "next";
import { About, Contact, Hero, Timeline } from "../components/Home";
import {
	getHomePageEntries,
	IAbout,
	IContact,
	IExperience,
	IHero,
} from "../contentful";

type Props = {
	timelineProps: IExperience[];
	heroProps: IHero;
	aboutProps: IAbout;
	contactProps: IContact;
};

const Home: NextPage<Props> = ({
	timelineProps,
	heroProps,
	aboutProps,
	contactProps,
}: Props) => {
	return (
		<Box>
			<Hero {...heroProps} />
			<About {...aboutProps} />
			<Timeline data={timelineProps} />
			<Contact {...contactProps} />
		</Box>
	);
};

export async function getStaticProps() {
	const { experience = null, profile = null } = await getHomePageEntries();

	const heroProps = _.pick(profile, ["name", "title"]);
	const aboutProps = _.pick(profile, ["introduction", "skills"]);
	const contactProps = _.pick(profile, ["conclusion", "email"]);

	return {
		props: { timelineProps: experience, heroProps, aboutProps, contactProps },
	};
}

export default Home;
