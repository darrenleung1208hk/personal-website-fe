import { Box, Stack, Typography } from "@mui/material";
import format from "date-fns/format";
import { IJobExperience } from "../../contentful";
import SectionWrapper from "../SectionWrapper";

type Props = {
	data: IJobExperience[];
};

const formatPattern = "MMM yyyy";

const Experience = ({ data }: Props) => {
	return (
		<SectionWrapper id="experience">
			<Typography variant="h3" fontWeight={700} color="primary.main" paragraph>
				Work Experience.
			</Typography>
			<Stack spacing={2}>
				{data?.map((job, index) => (
					<Box key={`job-${index}`}>
						<Typography variant="h5" fontWeight={700} paragraph>
							{job.jobTitle},{" "}
							<a href={job.companyWebsite} target="_blank" rel="noreferrer">
								{job.companyName}
							</a>
						</Typography>
						<Typography>
							{format(new Date(job.startDate), formatPattern)} -{" "}
							{job.endDate
								? format(new Date(job.endDate), formatPattern)
								: "Present"}
						</Typography>
						<Typography component="div">
							<ul>
								{job.jobDuties?.map((duty) => (
									<li key={`job-${index}-duty-${duty}`}>{duty}</li>
								))}
							</ul>
						</Typography>
					</Box>
				))}
			</Stack>
		</SectionWrapper>
	);
};

export default Experience;
