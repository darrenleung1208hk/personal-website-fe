import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1a237e",
			light: "#534bae",
			dark: "#000051",
			contrastText: "#fafafa",
		},
		secondary: {
			main: "#ffd54f",
			light: "#ffff81",
			dark: "#c8a415",
			contrastText: "#455a64",
		},
		background: {
			default: "#1a237e",
			paper: "#534bae",
		},
		text: {
			primary: "#fafafa",
			secondary: "#455a64",
		},
	},
	typography: {
		fontFamily: `Poppins`,
	},
});

export default theme;
