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

type Props = {
	drawerItems: {
		name: string;
		href: string;
	}[];
};

const NavigationDrawer = ({ drawerItems }: Props) => {
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
