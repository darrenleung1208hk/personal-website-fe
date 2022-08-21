import {
	AppBar as MuiAppBar,
	Box,
	Button,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import Link from "next/link";

const navItems = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Skills", href: "#skills" },
	{ name: "Education", href: "#education" },
];

const AppBar = () => {
	return (
		<Box display={{ xs: "none", sm: "block" }}>
			<Toolbar sx={{ p: 2 }} />
			<MuiAppBar elevation={0} color="inherit" sx={{ p: 2 }}>
				<Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Stack direction="row" spacing={1}>
						{navItems.map(({ name, href }) => (
							<Link href={href} key={href}>
								<Button disableElevation>
									<Typography>{name}</Typography>
								</Button>
							</Link>
						))}
					</Stack>
				</Toolbar>
			</MuiAppBar>
		</Box>
	);
};

export default AppBar;
