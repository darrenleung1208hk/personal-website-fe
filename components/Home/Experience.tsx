import { Box, Container, Stack, Typography } from "@mui/material";

const Experience = () => {
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
					<Box>
						<Typography variant="h5" fontWeight={700} paragraph>
							Web Developer,{" "}
							<a href="https://www.smartdrop.com.hk/" target="_blank">
								Smart Drop
							</a>
						</Typography>
						<Typography>Jun 2021 -Present</Typography>
						<Typography component="div">
							<ul>
								<li>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
									non varius sapien.
								</li>
								<li>Aenean accumsan sagittis semper.</li>
								<li>Integer nec pretium massa, sit amet porta libero.</li>
								<li>
									Sed hendrerit consectetur suscipit. Maecenas sagittis bibendum
									metus ac condimentum.
								</li>
							</ul>
						</Typography>
					</Box>
					<Box>
						<Typography variant="h5" fontWeight={700} paragraph>
							Intern, Technology-Enriched Learning Initiative
						</Typography>
						<Typography>Jun 2020 - Aug 2020</Typography>
						<Typography component="div">
							<ul>
								<li>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
									non varius sapien.
								</li>
								<li>Aenean accumsan sagittis semper.</li>
								<li>Integer nec pretium massa, sit amet porta libero.</li>
								<li>
									Sed hendrerit consectetur suscipit. Maecenas sagittis bibendum
									metus ac condimentum.
								</li>
							</ul>
						</Typography>
					</Box>
				</Stack>
			</Box>
		</Container>
	);
};

export default Experience;