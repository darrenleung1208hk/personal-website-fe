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
	},
});

export default theme;
