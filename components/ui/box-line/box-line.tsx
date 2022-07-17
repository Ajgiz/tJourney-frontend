import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { IBoxLineProps } from "./box-line.interface";
import { helperMeasure } from "../utils";
export const BoxLine: React.FC<IBoxLineProps> = ({
	children,
	className = "",
	ai = "stretch",
	d = "block",
	fw = "",
	gap = "",
	height = "",
	jc = "flex-start",
	mb = "",
	mg = "",
	ml = "",
	mr = "",
	mt = "",
	pb = "",
	pd = "",
	pl = "",
	pr = "",
	pt = "",
	width = "",
	cp,
	sx = {},
}) => {
	return (
		<Box
			component="div"
			sx={{
				width: helperMeasure(width) === "" ? "auto" : helperMeasure(width),
				height: helperMeasure(height) === "" ? "auto" : helperMeasure(height),
				display: d,
				justifyContent: jc,
				alignItems: ai,
				flexWrap: fw,
				gap: gap,
				marginBottom: helperMeasure(mb),
				marginTop: helperMeasure(mt),
				marginLeft: helperMeasure(ml),
				marginRight: helperMeasure(mr),
				margin: mg,
				padding: pd,
				paddingTop: helperMeasure(pt),
				paddingBottom: helperMeasure(pb),
				paddingLeft: helperMeasure(pl),
				paddingRight: helperMeasure(pr),
				cursor: cp ? "pointer" : "",
				sx,
			}}
			className={className}
		>
			{children}
		</Box>
	);
};
