export interface ILeftMenuCommentItemProps {
	user: {
		fullName: string;
		avatar: string;
		id: string;
	};
	post: {
		id: string;
		title: string;
	};
	id: string;
	text: string;
}
