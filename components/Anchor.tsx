import { Box } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";
import React from "react";

type Props = {
	tag: string;
};

const Anchor: React.FC<Props> = ({ tag }) => {
	return (
		<Box
			id={tag}
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
