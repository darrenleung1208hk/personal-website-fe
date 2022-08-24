import { Box, Button, Container, Typography } from "@mui/material";

const Contact = () => {
	return (
		<Container>
			<Typography variant="h3" fontWeight={700} color="white" paragraph>
				Get in Touch.
			</Typography>
			<Typography color="white" paragraph sx={{ width: "75%" }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, optio earum
				veniam nulla quod enim sapiente fugiat accusantium ipsam commodi est cum
				voluptatum consequatur! Provident dolore consequuntur odio libero
				cupiditate.
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
