import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
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
						{ title, organization, startDate, endDate, descriptions, skills },
						index1
					) => {
						return (
							<SwiperSlide key={`timeline-${index1}`}>
								<Card sx={{ m: 2, p: 2, height: "550px" }} raised>
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
										<Stack direction="row" spacing={1}>
											{skills?.map((skill, skillIndex) => (
												<Chip
													key={`${organization}-${title}-${skill}-${skillIndex}`}
													label={skill}
													color="primary"
													size="small"
													variant="outlined"
												/>
											))}
										</Stack>
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
													<ListItemText
														primary={item}
														primaryTypographyProps={{ variant: "body1" }}
													/>
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
