import {
	Box,
	Container,
	Grid,
	Theme,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { IHero } from "../../contentful";

interface Props extends IHero {}

const heroImageBorderRadius = 2;

const Hero: React.FC<Props> = ({
	greeting,
	name,
	title,
	shortIntroduction,
	heroImage,
}) => {
	const { spacing } = useTheme();
	const smUp = useMediaQuery(({ breakpoints }: Theme) => breakpoints.up("sm"));

	return (
		<Container
			disableGutters={!smUp}
			sx={{ pt: { sm: 6 }, pb: { xs: 6, sm: 12 } }}
		>
			<Grid
				container
				direction={{ xs: "column-reverse", sm: "row" }}
				alignItems="center"
				justifyContent="space-between"
				spacing={{ xs: 4, sm: 0 }}
			>
				<Grid item xs={12} sm={6} md={7}>
					<Container disableGutters={smUp}>
						<Typography variant="h5" color="secondary.contrastText">
							{greeting}
						</Typography>
						<Typography variant="h1" color="primary.main">
							{name}
						</Typography>
						<Typography variant="h2" color="primary.light" paragraph>
							{title}
						</Typography>
						{shortIntroduction?.map((line: string, index: number) => (
							<Typography key={`hero-description-${index}`} variant="h5">
								{line}
							</Typography>
						))}
					</Container>
				</Grid>
				<Grid item xs={12} sm md>
					<Box
						sx={({ spacing }) => ({
							width: { xs: `calc(100vw)`, sm: "100%" },
							borderRadius: { sm: spacing(heroImageBorderRadius) },
							boxShadow: { sm: 12 },
						})}
					>
						<Image
							src={heroImage?.url}
							alt="hero-image"
							width={heroImage?.width || 1600}
							height={heroImage?.height || 1200}
							layout="responsive"
							style={{
								borderRadius: smUp ? spacing(heroImageBorderRadius) : 0,
							}}
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
