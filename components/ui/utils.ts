export const helperMeasure = (value: string | number) => {
	return typeof value === "number" ? `${value}px` : value;
};
