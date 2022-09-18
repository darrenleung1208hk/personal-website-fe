import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab } from "@mui/material";

const BackToTop = () => {
	return (
		<Fab
			color="primary"
			size="small"
			sx={{
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
