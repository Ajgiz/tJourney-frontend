export type TypeMeasure = number | string;
export interface IPadding {
	pd?: TypeMeasure;
	pt?: TypeMeasure;
	pb?: TypeMeasure;
	pl?: TypeMeasure;
	pr?: TypeMeasure;
}

export interface IMargin {
	mg?: TypeMeasure;
	mb?: TypeMeasure;
	mt?: TypeMeasure;
	ml?: TypeMeasure;
	mr?: TypeMeasure;
}

export interface ISize {
	width?: TypeMeasure;
	height?: TypeMeasure;
}
