import {
	Box,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Image from "next/image";
import { IHero } from "../../contentful";
import SectionWrapper from "../SectionWrapper";

interface Props extends IHero {}

const heroImageBorderRadius = 2;

const Hero = ({ greeting, name, headline, descriptions }: Props) => {
	const { breakpoints, spacing } = useTheme();
	const mdUp = useMediaQuery(breakpoints.up("md"));

	return (
		<SectionWrapper>
			<Stack minHeight="50vh" justifyContent="center">
				<Grid
					container
					direction={{ xs: "column-reverse", sm: "row" }}
					alignItems="center"
					justifyContent="space-between"
					spacing={{ xs: 3, sm: 0 }}
				>
					<Grid item xs={12} sm={6} md={7}>
						<Typography variant="h5">{greeting}</Typography>
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
					</Grid>
					<Grid item xs={12} sm md>
						<Box
							sx={{
								width: { xs: `calc(100vw - 32px)`, sm: "100%" },
								borderRadius: spacing(heroImageBorderRadius),
								boxShadow: 12,
							}}
						>
							<Image
								src="/hero.jpg"
								alt="hero-image"
								width={1600}
								height={1200}
								layout="responsive"
								style={{ borderRadius: spacing(heroImageBorderRadius) }}
							/>
						</Box>
					</Grid>
				</Grid>
			</Stack>
		</SectionWrapper>
	);
};

export default Hero;
