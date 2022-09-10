import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
	useTheme,
} from "@mui/material";
import format from "date-fns/format";
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { IJobExperience } from "../../../contentful";

type Props = {
	data: IJobExperience[];
};

const getWebsiteFavicon = (domain: string, size = 16) =>
	`https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

const Timeline = ({ data }: Props) => {
	const { palette } = useTheme();
	console.log(data);

	return (
		<Box>
			<Swiper
				slidesPerView={3}
				spaceBetween={24}
				centeredSlides
				modules={[Navigation]}
			>
				{data.map(
					({
						jobTitle,
						companyName,
						companyWebsite,
						jobDescriptions,
						startDate,
						endDate,
					}) => (
						<SwiperSlide>
							<Card sx={{ m: 2, p: 2, height: "500px" }}>
								<CardHeader
									title={jobTitle}
									subheader={`${companyName}, ${format(
										new Date(startDate),
										"yyyy"
									)} - ${
										endDate ? format(new Date(endDate), "yyyy") : "Present"
									}`}
									avatar={
										companyWebsite && (
											<Avatar src={getWebsiteFavicon(companyWebsite, 64)} />
										)
									}
									action={
										companyWebsite && (
											<IconButton href={companyWebsite} target="_blank">
												<OpenInNewIcon />
											</IconButton>
										)
									}
									titleTypographyProps={{ variant: "h6" }}
								/>
								<CardContent>
									<Typography component="ul">
										{jobDescriptions?.items?.map(({ payload }) => (
											<li>{payload}</li>
										))}
									</Typography>
								</CardContent>
							</Card>
						</SwiperSlide>
					)
				)}
			</Swiper>
		</Box>
	);
};

export default Timeline;
