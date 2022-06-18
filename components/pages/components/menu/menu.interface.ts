export interface IMenuProps {
	anchorEl: null | HTMLElement;
	handleClose: () => void;
	options: IOptionMenu[];
}

interface IOptionMenu {
	label: string;
	func: () => void;
}
