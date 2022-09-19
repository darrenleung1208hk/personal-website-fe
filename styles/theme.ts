import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#01579b",
			light: "#4f83cc",
			dark: "#002f6c",
		},
		secondary: {
			main: "#ffd54f",
			light: "#ffff81",
			dark: "#c8a415",
			contrastText: "#455a64",
		},
	},
	typography: {
		fontFamily: ["Ubuntu", "Inter"].join(","),
		subtitle1: { fontFamily: "Inter" },
		subtitle2: { fontFamily: "Inter" },
		body1: { fontFamily: "Inter" },
		body2: { fontFamily: "Inter" },
		button: { textTransform: "none" },
	},
});

export default theme;
