import { Box, Typography } from "@mui/material";
import { IJobExperience } from "../../../contentful";
import Timeline from "./Timeline";

type Props = {
	data: IJobExperience[];
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
			<Timeline data={data} />
		</Box>
	);
};

export default Experience;
