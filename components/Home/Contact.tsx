import { Button, Container, Typography } from "@mui/material";
import { IContact } from "../../contentful";

const Contact = ({ description }: IContact) => {
	return (
		<Container>
			<Typography variant="h3" fontWeight={700} color="white" paragraph>
				Get in Touch.
			</Typography>
			<Typography color="white" paragraph sx={{ width: "75%" }}>
				{description}
			</Typography>
			<Button
				disableElevation
				variant="outlined"
				color="secondary"
				component="a"
				href="mailto:leungyatlong1208@gmail.com"
			>
				Chat
			</Button>
		</Container>
	);
};

export default Contact;
