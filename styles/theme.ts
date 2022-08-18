import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#303f9f",
			light: "#666ad1",
			dark: "#001970",
			contrastText: "#fafafa",
		},
		secondary: {
			main: "#ffd54f",
			light: "#ffff81",
			dark: "#c8a415",
			contrastText: "#455a64",
		},
		background: {
			default: "#303f9f",
			paper: "#303f9f",
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
