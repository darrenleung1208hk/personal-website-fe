import { Box, Link as MuiLink, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/" passHref>
			<MuiLink variant="h6" underline="none" sx={{ display: "inline-block" }}>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Image src="/logo.png" width={24} height={24} />
					<Box>darrenleung.io</Box>
				</Stack>
			</MuiLink>
		</Link>
	);
};

export default Logo;
