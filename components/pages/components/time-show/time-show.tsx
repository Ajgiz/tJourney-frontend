import { Typography } from "@mui/material";
import { formatDistanceToNow, parseISO } from "date-fns";
interface IShowTimeCreateProps {
	className?: string;
	time: string;
}

export const ShowTimeCreate: React.FC<IShowTimeCreateProps> = ({
	className,
	time,
}) => {
	if (typeof window == undefined) return <></>;
	const timeAdded = () => {
		const date = parseISO(time);
		const timePeriod = formatDistanceToNow(date);
		return `${timePeriod} ago`;
	};
	return <Typography className={className}>{timeAdded()}</Typography>;
};
