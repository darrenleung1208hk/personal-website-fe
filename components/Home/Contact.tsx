import { Button, Typography } from "@mui/material";
import { IContact } from "../../contentful";
import SectionWrapper from "../SectionWrapper";

const Contact = ({ description }: IContact) => {
	return (
		<SectionWrapper dark id="contact">
			<Typography variant="h3" fontWeight={700} color="white" paragraph>
				Get in Touch.
			</Typography>
			<Typography color="white" paragraph>
				{description}
			</Typography>
			<Box textAlign="center">
				<Button
					disableElevation
					variant="contained"
					color="inherit"
					sx={{ color: "primary.main" }}
					component="a"
					href="mailto:leungyatlong1208@gmail.com"
				>
					Let's Talk
				</Button>
			</Box>
		</Container>
	);
};

export default Contact;
