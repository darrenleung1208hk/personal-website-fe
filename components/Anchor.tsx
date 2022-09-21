import { Box } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";
import React from "react";

type Props = {
	id: string;
};

const Anchor: React.FC<Props> = ({ id }) => {
	return (
		<Box
			id={id}
			component="span"
			position="relative"
			top={({ breakpoints, mixins }) => ({
				xs: `${-(mixins.toolbar.minHeight as number) || 0}px`,
				lg: `${
					-((mixins.toolbar[breakpoints.up("sm")] as CSSProperties)
						.minHeight as number) || 0
				}px`,
			})}
		/>
	);
};

export default Anchor;
