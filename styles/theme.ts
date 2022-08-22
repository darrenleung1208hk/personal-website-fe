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
		fontFamily: `Poppins`,
		button: { textTransform: "none" },
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: "md",
			},
		},
	},
});

export default theme;
