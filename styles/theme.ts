import { createTheme } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1a237e",
			light: "#534bae",
			dark: "#000051",
		},
		secondary: {
			main: "#ffd54f",
			light: "#ffff81",
			dark: "#c8a415",
			contrastText: "#455a64",
		},
	},
	typography: {
		fontFamily: `Poppins`,
	},
});

export default theme;
