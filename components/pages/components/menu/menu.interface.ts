export interface IMenuProps {
	options?: IOptionMenu[];
	rootClassName?: string;
	optionClassName?: string;
	label: any;
	value?: string;
	body?: any;
	arrowIcon?: boolean;
}

export interface IOptionMenu {
	label: string;
	func: () => void;
}
