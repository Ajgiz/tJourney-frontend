import { ISize } from "./../common-styles.interface";
import { IMargin, IPadding } from "../common-styles.interface";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export interface IBoxLineProps extends IPadding, IMargin, ISize {
	d?: "flex" | "inline" | "inline-block" | "block" | "grid";
	jc?:
		| "space-between"
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly";
	ai?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
	fw?: "wrap";
	gap?: string;
	className?: string;
	children?: any;
	cp?: boolean;
	sx?: CSSProperties;
    
}
