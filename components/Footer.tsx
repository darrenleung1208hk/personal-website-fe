import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box bgcolor="primary.dark" color="#fff" py={{ xs: 6, md: 2 }}>
			<Container>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Grid
						item
						xs={12}
						md={6}
						container
						justifyContent={{ xs: "center", md: "flex-start" }}
					>
						<Typography variant="body2">
							© {new Date().getFullYear()} Darren Leung. All Rights Reserved.
						</Typography>
					</Grid>
					<Grid
						item
						xs
						md
						container
						justifyContent={{ xs: "center", md: "flex-end" }}
					>
						<IconButton>
							<LinkedInIcon sx={{ color: "#fff", fontSize: "36px" }} />
						</IconButton>
						<IconButton>
							<EmailIcon sx={{ color: "#fff", fontSize: "36px" }} />
						</IconButton>
						<IconButton>
							<GitHubIcon sx={{ color: "#fff", fontSize: "36px" }} />
						</IconButton>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
