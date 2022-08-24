import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Typography,
	useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

type Props = {
	drawerItems: {
		name: string;
		href: string;
	}[];
};

const NavigationDrawer = ({ drawerItems }: Props) => {
	const { spacing } = useTheme();
	const router = useRouter();
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleClick = (href: string) => {
		setDrawerOpen(false);
		router.push(href);
	};

	return (
		<Fragment>
			<Box display={{ xs: "block", sm: "none" }} p={4} />
			<Box
				width="52px"
				height="52px"
				bgcolor="white"
				display={{ xs: "block", sm: "none" }}
				position="fixed"
				top={spacing(2)}
				right={spacing(2)}
				zIndex="appBar"
				borderRadius="36px"
			>
				<IconButton onClick={() => setDrawerOpen(true)}>
					<MenuIcon
						sx={{ color: "primary.main", width: "36px", height: "36px" }}
					/>
				</IconButton>
			</Box>
			<Drawer
				open={drawerOpen}
				anchor="right"
				onClose={() => setDrawerOpen(false)}
				sx={{ display: { xs: "block", sm: "none" } }}
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
		</Fragment>
	);
};

export default NavigationDrawer;
