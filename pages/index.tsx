import { Box } from "@mui/material";
import _ from "lodash";
import type { NextPage } from "next";
import { About, Contact, Hero, Timeline } from "../components/Home";
import {
	getHomePageEntries,
	IAbout,
	IContact,
	IHero,
	ITimeline,
} from "../contentful";

type Props = {
	timelineProps: ITimeline;
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
			<Timeline {...timelineProps} />
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
		props: {
			timelineProps: { data: experience },
			heroProps,
			aboutProps,
			contactProps,
		},
	};
}

export default Home;
