import { Box, Container, Stack, Typography } from "@mui/material";

type JobExperience = {
	jobTitle: string;
	companyName: string;
	companyWebsite?: string;
	jobLocation: string;
	startDate: Date;
	endDate?: Date;
	jobDuties?: string[];
};

type Props = {
	data: JobExperience[];
};

const Experience = ({ data }: Props) => {
	return (
		<Container>
			<Box width={{ lg: "75%" }}>
				<Typography
					variant="h3"
					fontWeight={700}
					color="primary.main"
					paragraph
				>
					Work Experience.
				</Typography>
				<Stack spacing={2}>
					{data?.map((job, index) => (
						<Box key={`job-${index}`}>
							<Typography variant="h5" fontWeight={700} paragraph>
								{job.jobTitle},{" "}
								<a href={job.companyWebsite} target="_blank">
									{job.companyName}
								</a>
							</Typography>
							<Typography>
								{job.startDate} - {job.endDate || "Present"}
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
			</Box>
		</Container>
	);
};

export default Experience;
