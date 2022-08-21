import { AppBar as MuiAppBar, Box, Toolbar, Typography } from "@mui/material";

type Props = {};

const AppBar = (props: Props) => {
	return (
		<Box>
			<Toolbar />
			<MuiAppBar elevation={0}>
				<Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Typography>Experience</Typography>
				</Toolbar>
			</MuiAppBar>
		</Box>
	);
};

export default AppBar;
