import EmailIcon from "@mui/icons-material/Email";
import { Box, Button, Container, Typography } from "@mui/material";
import { IContact } from "../../contentful";

interface Props extends IContact {}

const Contact = ({ conclusion, email }: Props) => {
	return (
		<Box
			id="contact"
			py={{ xs: 4, md: 12 }}
			bgcolor="primary.main"
			sx={{
				boxShadow: `inset 0px 12px 6px -6px rgba(0,0,0,0.14), inset 0px -12px 6px -6px rgba(0,0,0,0.20)`,
			}}
		>
			<Container>
				<Typography
					variant="h3"
					fontWeight={700}
					color="#fff"
					textAlign="center"
					paragraph
				>
					Get in Touch.
				</Typography>
				<Typography variant="subtitle1" align="center" color="#fff" paragraph>
					{conclusion}
				</Typography>
				<Box pt={2} textAlign="center">
					<Button
						disableElevation
						variant="contained"
						color="secondary"
						size="large"
						startIcon={<EmailIcon />}
						sx={{ borderRadius: "32px" }}
						component="a"
						href={`mailto:${email}`}
					>
						Let&apos;s Talk
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default Contact;
