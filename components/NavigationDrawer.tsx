import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Typography,
	useTheme,
} from "@mui/material";
import { Fragment, useState } from "react";

const drawerItems = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Skills", href: "#skills" },
	{ name: "Education", href: "#education" },
];

const NavigationDrawer = () => {
	const { spacing } = useTheme();
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<Fragment>
			<IconButton
				sx={{ position: "fixed", top: spacing(2), right: spacing(2) }}
				onClick={() => setDrawerOpen(true)}
			>
				<MenuIcon
					sx={{ color: "primary.main", width: "36px", height: "36px" }}
				/>
			</IconButton>
			<Drawer
				open={drawerOpen}
				anchor="right"
				onClose={() => setDrawerOpen(false)}
			>
				<IconButton
					sx={{
						position: "absolute",
						top: spacing(2),
						right: spacing(2),
						zIndex: "appBar",
					}}
					onClick={() => setDrawerOpen(false)}
				>
					<CloseIcon
						sx={{ color: "primary.main", width: "36px", height: "36px" }}
					/>
				</IconButton>
				<List sx={{ width: "65vw", pt: 10 }}>
					{drawerItems.map(({ name, href }) => (
						<ListItem key={href}>
							<ListItemButton>
								<Typography fontWeight={700} color="primary.main">
									{name}
								</Typography>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Fragment>
	);
};

export default NavigationDrawer;
