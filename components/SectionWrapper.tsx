import { Box, Container } from "@mui/material";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
	return (
		<Box
			height="100vh"
			display="flex"
			flexDirection="column"
			justifyContent="center"
		>
			<Container>
				<Box width={{ lg: "75%" }}>{children}</Box>
			</Container>
		</Box>
	);
};

export default SectionWrapper;
