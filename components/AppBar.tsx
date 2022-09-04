import {
	AppBar as MuiAppBar,
	Box,
	Button,
	Container,
	Stack,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@mui/material";
import Link from "next/link";

type Props = {
	navItems: {
		name: string;
		href: string;
	}[];
};

const AppBar = ({ navItems }: Props) => {
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

	return (
		<Box display={{ xs: "none", sm: "block" }}>
			<Toolbar />
			<MuiAppBar elevation={trigger ? 4 : 0} color="inherit" position="fixed">
				<Container>
					<Toolbar
						disableGutters
						sx={{ display: "flex", justifyContent: "flex-end" }}
					>
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
				</Container>
			</MuiAppBar>
		</Box>
	);
};

export default AppBar;
