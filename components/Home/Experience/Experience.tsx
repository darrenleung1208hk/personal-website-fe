import { Box, Typography } from "@mui/material";
import { IJobExperience } from "../../../contentful";
import Timeline from "./Timeline";

type Props = {
	data: IJobExperience[];
};

const formatPattern = "MMM yyyy";

const Experience = ({ data }: Props) => {
	return (
		<Box id="experience" py={12}>
			<Typography
				variant="h3"
				fontWeight={700}
				color="primary.main"
				textAlign="center"
				paragraph
			>
				Work Experience.
			</Typography>
			<Timeline data={data} />
		</Box>
	);
};

export default Experience;
