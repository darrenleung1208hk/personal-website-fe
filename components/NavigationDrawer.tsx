import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Toolbar,
	Typography,
	useScrollTrigger,
	useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
	drawerItems: {
		name: string;
		href: string;
	}[];
};

const NavigationDrawer = ({ drawerItems }: Props) => {
	const { spacing } = useTheme();
	const router = useRouter();
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleClick = (href: string) => {
		setDrawerOpen(false);
		router.push(href);
	};

	return (
		<Box display={{ xs: "block", sm: "none" }}>
			<AppBar elevation={trigger ? 4 : 0} color="inherit" position="fixed">
				<Toolbar
					sx={{ display: "flex", justifyContent: "flex-end", height: "64px" }}
				>
					<IconButton onClick={() => setDrawerOpen(true)}>
						<MenuIcon
							sx={{ color: "primary.main", width: "36px", height: "36px" }}
						/>
					</IconButton>
				</Toolbar>
			</AppBar>
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
							<ListItemButton onClick={() => handleClick(href)}>
								<Typography fontWeight={700} color="primary.main">
									{name}
								</Typography>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

export default NavigationDrawer;
