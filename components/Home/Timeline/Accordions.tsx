import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionSummary,
	Avatar,
	Box,
	Stack,
	Typography,
} from "@mui/material";
import { IExperience } from "../../../contentful";
import { getPositionPeriod, getWebsiteFavicon } from "./utils";

type Props = {
	data: IExperience[];
};

const Accordions = ({ data }: Props) => {
	return (
		<Box>
			{data?.map(
				({ title, organization, startDate, endDate, descriptions }, index) => (
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Stack direction="row" alignItems="center" spacing={2}>
								<Avatar src={getWebsiteFavicon(organization.website)} />
								<Box>
									<Typography variant="h6" color="primary.main">
										{title}
									</Typography>
									<Typography variant="subtitle2" color="text.secondary">
										{organization.name}, {getPositionPeriod(startDate, endDate)}
									</Typography>
								</Box>
							</Stack>
						</AccordionSummary>
						{/* <AccordionDetails></AccordionDetails> */}
					</Accordion>
				)
			)}
		</Box>
	);
};

export default Accordions;
