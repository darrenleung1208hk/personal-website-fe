import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Avatar,
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
	Link,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IExperience } from "../../../contentful";
import { getPositionPeriod, getWebsiteFavicon } from "./utils";

type Props = {
	data: IExperience[];
};

const Accordions = ({ data }: Props) => {
	return (
		<Box>
			{data?.map(
				({ title, organization, startDate, endDate, descriptions }, index1) => (
					<Accordion
						key={`timeline-${index1}`}
						defaultExpanded={index1 === 0}
						elevation={0}
					>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Stack direction="row" alignItems="center" spacing={2}>
								<Avatar src={getWebsiteFavicon(organization.website)} />
								<Box>
									<Typography variant="h6" color="primary.main">
										{title}
									</Typography>
									<Typography variant="subtitle1" color="text.secondary">
										<Link
											href={organization.website}
											target="_blank"
											underline="hover"
										>
											{organization.name}
										</Link>
										, {getPositionPeriod(startDate, endDate)}
									</Typography>
								</Box>
							</Stack>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								{descriptions?.map((item, index2) => (
									<ListItem
										key={`timeline-${index1}-description-${index2}`}
										dense
										disableGutters
										alignItems="flex-start"
									>
										<ListItemIcon sx={{ minWidth: "30px" }}>
											<ArrowRightIcon sx={{ color: "primary.main" }} />
										</ListItemIcon>
										<ListItemText
											primary={item}
											primaryTypographyProps={{ variant: "body1" }}
										/>
									</ListItem>
								))}
							</List>
						</AccordionDetails>
					</Accordion>
				)
			)}
		</Box>
	);
};

export default Accordions;
