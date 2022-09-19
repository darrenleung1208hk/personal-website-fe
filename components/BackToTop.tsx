import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, useScrollTrigger } from "@mui/material";

const BackToTop = () => {
	const trigger = useScrollTrigger({ disableHysteresis: true });

	return (
		<Fab
			color="primary"
			size="small"
			sx={{
				display: trigger ? "inline-flex" : "none",
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
