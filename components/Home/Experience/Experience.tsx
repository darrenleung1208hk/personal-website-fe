import { Box, Container, Stack, Typography } from "@mui/material";
import format from "date-fns/format";
import { IJobExperience } from "../../../contentful";

type Props = {
	data: IJobExperience[];
};

const formatPattern = "MMM yyyy";

const Experience = ({ data }: Props) => {
	return (
		<Box id="experience" py={12}>
			<Container>
				<Typography
					variant="h3"
					fontWeight={700}
					color="primary.main"
					textAlign="center"
					paragraph
				>
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
								<Stack component="ul" spacing={2}>
									{job.jobDescriptions?.items?.map(({ payload }, index) => (
										<li key={`job-${index}-description-${index}`}>{payload}</li>
									))}
								</Stack>
							</Typography>
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	);
};

export default Experience;
