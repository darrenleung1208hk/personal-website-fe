import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { IHero } from "../../contentful";

const Hero = ({ greeting, name, headline, descriptions }: IHero) => {
	const { breakpoints } = useTheme();
	const mdUp = useMediaQuery(breakpoints.up("md"));

	return (
		<Container>
			<Box width={{ lg: "75%" }}>
				<Typography variant="h5" paragraph={!mdUp}>
					{greeting}
				</Typography>
				<Typography
					variant={mdUp ? "h2" : "h3"}
					fontWeight={700}
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
			</Box>
		</Container>
	);
};

export default Hero;
