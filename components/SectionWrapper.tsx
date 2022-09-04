import { Box, Container } from "@mui/material";
import React from "react";

interface Props {
	children: React.ReactNode;
	dark?: boolean;
	color?: string;
	bgcolor?: string;
	id?: string;
}

const SectionWrapper = ({
	children,
	id,
	color,
	bgcolor,
	dark = false,
}: Props) => {
	return (
		<Box
			id={id}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			bgcolor={bgcolor || (dark && "primary.main") || "white"}
		>
			<Container>
				<Box py={5} color={color || dark ? "white" : "black"}>
					{children}
				</Box>
			</Container>
		</Box>
	);
};

export default SectionWrapper;
