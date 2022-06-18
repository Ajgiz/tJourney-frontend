import { IOptions } from "../common-interface";

export interface ITabsProps {
	value: number;
	setValue: any;
	options: IOptions<number, string>[];
}
