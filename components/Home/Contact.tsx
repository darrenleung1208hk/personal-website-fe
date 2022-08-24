import { Box, Button, Typography } from "@mui/material";
import { IContact } from "../../contentful";
import SectionWrapper from "../SectionWrapper";

interface Props extends IContact {}

const Contact = ({ description }: Props) => {
	return (
		<SectionWrapper dark id="contact">
			<Typography variant="h3" fontWeight={700} color="white" paragraph>
				Get in Touch.
			</Typography>
			<Typography color="white" paragraph>
				{description}
			</Typography>
			<Box pt={2}>
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
		</SectionWrapper>
	);
};

export default Contact;
