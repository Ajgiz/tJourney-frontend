export interface IMenuProps {
	options?: IOptionMenu[];
	rootClassName?: string;
	optionClassName?: string;
	label: any;
	value?: string;
	body?: any;
}

export interface IOptionMenu {
	label: string;
	func: () => void;
}
