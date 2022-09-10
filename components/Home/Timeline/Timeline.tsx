import { Box, Typography } from "@mui/material";
import { IExperience } from "../../../contentful";
import Carousel from "./Carousel";

type Props = {
	data: IExperience[];
};

const Experience = ({ data }: Props) => {
	return (
		<Box id="timeline" py={12}>
			<Typography
				variant="h3"
				fontWeight={700}
				color="primary.main"
				textAlign="center"
				paragraph
			>
				Timeline.
			</Typography>
			<Carousel data={data} />
		</Box>
	);
};

export default Experience;
