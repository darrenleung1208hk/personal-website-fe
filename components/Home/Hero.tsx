import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { IHero } from "../../contentful";
import SectionWrapper from "../SectionWrapper";

interface Props extends IHero {}

const Hero = ({ greeting, name, headline, descriptions }: Props) => {
	const { breakpoints } = useTheme();
	const mdUp = useMediaQuery(breakpoints.up("md"));

	return (
		<SectionWrapper>
			<Typography variant="h5" paragraph={!mdUp}>
				{greeting}
			</Typography>
			<Typography
				variant={mdUp ? "h2" : "h3"}
				fontWeight={700}
				component="h1"
				color="primary.main"
			>
				{name}
			</Typography>
			<Typography
				variant={mdUp ? "h4" : "h5"}
				fontWeight={700}
				color="primary.light"
				paragraph
			>
				{headline}
			</Typography>
			{descriptions?.map((line: string, index: number) => (
				<Typography key={`hero-description-${index}`} variant="h6">
					{line}
				</Typography>
			))}
		</SectionWrapper>
	);
};

export default Hero;
