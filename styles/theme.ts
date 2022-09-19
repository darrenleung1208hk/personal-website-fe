import { createTheme, responsiveFontSizes } from "@mui/material";

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
		h1: { fontSize: "3.815rem" },
		h2: { fontSize: "3.052rem" },
		h3: { fontSize: "2.441rem" },
		h4: { fontSize: "1.953rem" },
		h5: { fontSize: "1.563rem" },
		h6: { fontSize: "1.25rem" },
		body1: { fontFamily: "Inter" },
		body2: { fontFamily: "Inter", fontSize: "0.8rem" },
		button: { textTransform: "none", fontSize: "0.8rem" },
		caption: { fontSize: "0.64rem" },
		overline: { fontSize: "0.64rem" },
	},
});

export default responsiveFontSizes(theme);
