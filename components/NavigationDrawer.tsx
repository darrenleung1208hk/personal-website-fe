import { IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { Fragment } from "react";

const NavigationDrawer = () => {
	const { spacing } = useTheme();

	return (
		<Fragment>
			<IconButton
				sx={{ position: "fixed", top: spacing(2), right: spacing(2) }}
			>
				<MenuIcon
					sx={{ color: "primary.main", width: "36px", height: "36px" }}
				/>
			</IconButton>
		</Fragment>
	);
};

export default NavigationDrawer;
