import { IOptions } from "../../components/common-interface";

export interface ISelectSettingProps {
	value: string | number;
	values: IOptions<string, string>[];
	onChange: any;
}
