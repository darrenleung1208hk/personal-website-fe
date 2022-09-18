import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

const BackToTop = () => {
	const [display, setDisplay] = useState("none");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setDisplay("inline-flex");
			}
			if (window.scrollY === 0) {
				setDisplay("none");
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Fab
			color="primary"
			size="small"
			sx={{
				display,
				position: "fixed",
				bottom: ({ spacing }) => spacing(2),
				right: ({ spacing }) => spacing(2),
				zIndex: "appBar",
			}}
			onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
		>
			<KeyboardArrowUpIcon />
		</Fab>
	);
};

export default BackToTop;
