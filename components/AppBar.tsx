import TagRoundedIcon from "@mui/icons-material/TagRounded";
import {
	AppBar as MuiAppBar,
	Box,
	Button,
	Container,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
	useScrollTrigger,
	useTheme,
} from "@mui/material";
import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

type Props = {
	navItems: {
		name: string;
		href: string;
	}[];
};

const AppBar = ({ navItems }: Props) => {
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
	const { palette } = useTheme();
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const hamburgerEl = document.getElementById("hamburger");
		setAnchorEl(hamburgerEl);
	}, []);

	const handleClick = () => {
		setMenuOpen((prev) => !prev);
	};

	const handleClose = () => {
		setMenuOpen(false);
	};

	return (
		<Box>
			<Toolbar />
			<MuiAppBar elevation={trigger ? 4 : 0} color="inherit" position="fixed">
				<Container>
					<Toolbar
						disableGutters
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Logo />
						<Stack
							direction="row"
							spacing={1}
							display={{ xs: "none", sm: "block" }}
						>
							{navItems.map(({ name, href }) => (
								<Link href={href} key={href}>
									<Button disableElevation>
										<Typography>{name}</Typography>
									</Button>
								</Link>
							))}
						</Stack>
						<Box display={{ xs: "block", sm: "none" }}>
							<Box id="hamburger">
								<Hamburger
									toggled={menuOpen}
									toggle={handleClick}
									rounded
									size={20}
									color={palette.primary.main}
								/>
							</Box>
							<Menu
								open={menuOpen}
								onClose={handleClose}
								anchorEl={anchorEl}
								sx={{
									"& .MuiPaper-root": {
										width: "60%",
									},
								}}
							>
								{navItems.map(({ name, href }) => (
									<Link href={href} key={name} passHref>
										<MenuItem component="a" onClick={handleClose}>
											<ListItemIcon>
												<TagRoundedIcon color="primary" />
											</ListItemIcon>
											<ListItemText primary={name} />
										</MenuItem>
									</Link>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</MuiAppBar>
		</Box>
	);
};

export default AppBar;
