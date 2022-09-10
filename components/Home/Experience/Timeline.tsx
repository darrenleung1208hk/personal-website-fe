import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import format from "date-fns/format";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { IJobExperience } from "../../../contentful";

type Props = {
	data: IJobExperience[];
};

const getWebsiteFavicon = (domain: string, size = 16) =>
	`https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

const Timeline = ({ data }: Props) => {
	return (
		<Box pt={2}>
			<Swiper slidesPerView={3} spaceBetween={24} centeredSlides grabCursor>
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
							<Card sx={{ m: 2, p: 2, minHeight: "500px" }} raised>
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
											<Tooltip title={`Learn more about ${companyName}`} arrow>
												<IconButton href={companyWebsite} target="_blank">
													<OpenInNewIcon />
												</IconButton>
											</Tooltip>
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
