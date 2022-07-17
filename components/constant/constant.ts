import { ICommentItemProps } from "../pages/components/post/components/comments/components/comment-item/comment-item.interface";
import { ILeftMenuCommentItemProps } from "../side-comments/comment-item/comment-item.interface";

export const OptionsTabsRating = [
	{ label: "Июнь", value: 0 },
	{ label: "За 3 месяца", value: 1 },
	{ label: "За все время", value: 2 },
];

export const OptionsTabsProfile = [
	{ label: "Статьи", value: 0 },
	{ label: "Комментарии", value: 1 },
	{ label: "Подробнее", value: 2 },
];

export const MockCommentsLeftMenu: ILeftMenuCommentItemProps[] = [
	{
		id: "1",
		text: "Посмотрел я на весь этот цирк с этим экономическим форумом, с речью Путина, а также с поведением Токаева. И понял вот что: Путин слабеет.",
		user: {
			id: "12",
			avatar: "https://www.blexar.com/avatar.png",
			fullName: "Alex Friman",
		},
		post: {
			id: "1",
			title:
				"Патриарх Кирилл в проповеди после литургии в Спасском кафедральном соборе Пензы порассуждал о том, что подталкивает",
		},
	},
	{
		id: "2",
		text: "Посмотрел я на весь этот цирк с этим экономическим форумом, с речью Путина, а также с поведением Токаева. И понял вот что: Путин слабеет.",
		user: {
			id: "24",
			avatar: "https://www.blexar.com/avatar.png",
			fullName: "Alex Friman",
		},
		post: {
			id: "3",
			title:
				"Патриарх Кирилл в проповеди после литургии в Спасском кафедральном соборе Пензы порассуждал о том, что подталкивает",
		},
	},
];

export const MOCK_AVATAR =
	"https://leonardo.osnova.io/db2809a7-e775-54ab-8f85-16c2b474f29e/-/scale_crop/64x64/";
