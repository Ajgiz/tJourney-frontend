export interface ISelectSettingProps {
	value: string | number;
	values: IValues<string | number>[];
	onChange: any;
}

export interface IValues<T> {
	value: T;
	label: T;
}
