import { Box, Container, Typography } from "@mui/material";
import { IExperience } from "../../../contentful";
import Anchor from "../../Anchor";
import Accordion from "./Accordions";
import Carousel from "./Carousel";

type Props = {
	data: IExperience[];
};

const Experience = ({ data }: Props) => {
	return (
		<Box component="section">
			<Anchor tag="timeline" />
			<Box py={{ xs: 4, md: 12 }}>
				<Typography
					variant="h3"
					color="primary.main"
					textAlign="center"
					paragraph
				>
					Timeline.
				</Typography>
				<Box display={{ xs: "none", md: "block" }}>
					<Carousel data={data} />
				</Box>
				<Box display={{ xs: "block", md: "none" }}>
					<Container>
						<Accordion data={data} />
					</Container>
				</Box>
			</Box>
		</Box>
	);
};

export default Experience;
