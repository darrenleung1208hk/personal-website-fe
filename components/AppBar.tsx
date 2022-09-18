import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar as MuiAppBar,
	Box,
	Button,
	Container,
	IconButton,
	Popover,
	Stack,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

type Props = {
	navItems: {
		name: string;
		href: string;
	}[];
};

const AppBar = ({ navItems }: Props) => {
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const menuOpen = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
							<IconButton onClick={handleClick}>
								<MenuIcon color="primary" />
							</IconButton>
							<Popover
								open={menuOpen}
								onClose={handleClose}
								anchorEl={anchorEl}
								anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
								PaperProps={{ sx: { width: "60%", p: 2 } }}
							>
								{navItems.map(({ name, href }) => (
									<Link href={href} key={name} passHref>
										<Button
											component="a"
											onClick={handleClose}
											sx={{ display: "block" }}
										>
											<Typography>{name}</Typography>
										</Button>
									</Link>
								))}
							</Popover>
						</Box>
					</Toolbar>
				</Container>
			</MuiAppBar>
		</Box>
	);
};

export default AppBar;
