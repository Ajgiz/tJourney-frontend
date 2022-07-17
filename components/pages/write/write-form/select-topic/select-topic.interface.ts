export interface ITopicItem {
	name: string;
	image: string;
	id: string | null;
}

export interface IselectTagProps {
	topic: ITopicItem;
	setTopic: (tag: ITopicItem) => void;
}
