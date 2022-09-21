import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
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

	return (
		<Container sx={{ pt: { sm: 6 }, pb: { xs: 4, sm: 10 } }}>
			<Grid
				container
				direction={{ xs: "column-reverse", sm: "row" }}
				alignItems="center"
				justifyContent="space-between"
				spacing={{ xs: 3, sm: 0 }}
			>
				<Grid item xs={12} sm={6} md={7}>
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
				</Grid>
				<Grid item xs={12} sm md>
					<Box
						sx={{
							width: { xs: `calc(100vw - 32px)`, sm: "100%" },
							borderRadius: ({ spacing }) => spacing(heroImageBorderRadius),
							boxShadow: 12,
						}}
					>
						<Image
							src={heroImage?.url}
							alt="hero-image"
							width={heroImage?.width || 1600}
							height={heroImage?.height || 1200}
							layout="responsive"
							style={{ borderRadius: spacing(heroImageBorderRadius) }}
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
