import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Theme,
	Tooltip,
	useMediaQuery,
} from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { IExperience } from "../../../contentful";
import { getPositionPeriod, getWebsiteFavicon } from "./utils";

type Props = {
	data: IExperience[];
};

const Timeline = ({ data }: Props) => {
	const xlUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

	return (
		<Box pt={2}>
			<Swiper
				slidesPerView={xlUp ? 3 : 2}
				spaceBetween={24}
				centeredSlides
				grabCursor
			>
				{data?.map(
					(
						{ title, organization, startDate, endDate, descriptions },
						index1
					) => {
						return (
							<SwiperSlide key={`timeline-${index1}`}>
								<Card sx={{ m: 2, p: 2, height: "500px" }} raised>
									<CardHeader
										title={title}
										titleTypographyProps={{
											variant: "h6",
											color: "primary.main",
										}}
										subheader={`${organization.name}, ${getPositionPeriod(
											startDate,
											endDate
										)}`}
										avatar={
											organization.website && (
												<Avatar
													src={getWebsiteFavicon(organization.website, 64)}
												/>
											)
										}
										action={
											organization.website && (
												<Tooltip
													title={`Learn more about ${organization.name}`}
													arrow
												>
													<IconButton
														href={organization.website}
														target="_blank"
													>
														<OpenInNewIcon />
													</IconButton>
												</Tooltip>
											)
										}
									/>
									<CardContent>
										<List>
											{descriptions?.map((item, index2) => (
												<ListItem
													key={`timeline-${index1}-description-${index2}`}
													dense
													disableGutters
													alignItems="flex-start"
												>
													<ListItemIcon sx={{ minWidth: "40px" }}>
														<ArrowRightIcon sx={{ color: "primary.main" }} />
													</ListItemIcon>
													<ListItemText primary={item} />
												</ListItem>
											))}
										</List>
									</CardContent>
								</Card>
							</SwiperSlide>
						);
					}
				)}
			</Swiper>
		</Box>
	);
};

export default Timeline;
