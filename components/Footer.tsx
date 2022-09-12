import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box bgcolor="primary.dark" color="#fff" pt={6} pb={3}>
			<Container>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Grid item xs={4} container>
						<Typography variant="body2">
							© {new Date().getFullYear()} Darren Leung. All Rights Reserved.
						</Typography>
					</Grid>
					<Grid item xs container justifyContent="flex-end">
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
