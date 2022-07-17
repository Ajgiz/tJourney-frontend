import { OutputData } from "@editorjs/editorjs";
import { Alert, Box, Button, Input } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { Api } from "../../../../services/api";
import { LoaderOne } from "../../../loaders/loader-1";
import { IEditorProps } from "../editor/editor";
import { SelectTags } from "./select-topic/select-topic";
import { ITopicItem } from "./select-topic/select-topic.interface";
import { IWriteFormProps } from "./write-form.interface";
import styles from "./write-form.module.scss";

const Editor = dynamic<IEditorProps>(
	() => import("../editor/editor").then((m) => m.Editor) as any,
	{
		ssr: false,
	}
);

export const WriteForm: React.FC<IWriteFormProps> = ({ data }) => {
	const router = useRouter();
	const { user } = useAppSelector((state) => state.user);
	const [title, setTitle] = React.useState("");
	const [block, setBlock] = React.useState<OutputData["blocks"]>([]);
	const [isLoading, setLoading] = React.useState(false);
	const [topic, setTopic] = React.useState<ITopicItem>({
		id: null,
		name: user.fullName,
		image:
			"https://leonardo.osnova.io/db2809a7-e775-54ab-8f85-16c2b474f29e/-/scale_crop/64x64/",
	});
	const [errorMessage, setErrorMessage] = React.useState("");
	const validate = () => {
		if (!title) return setErrorMessage("Заполните заголовок статьи");
		if (block == []) return setErrorMessage("Напишитн что-нибудь");
		return true;
	};
	const publishPost = async () => {
		if (!validate()) return;
		try {
			setErrorMessage("");
			setLoading(true);
			const post = await Api().post.savePost({
				body: block,
				title,
				topic: topic.id,
			});
			router.push(`/post/${post._id}`);
		} catch (e: any) {
			console.log(e);
			setErrorMessage(e.response.data.message);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 500);
		}
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				paddingBottom: "10px",
				position: "relative",
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<SelectTags topic={topic} setTopic={setTopic} />
				<Input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder={"Введите текст статьи"}
					className={styles.input}
				/>
				<Box sx={{ fontSize: "18px" }}>
					<Editor initialBlocks={block} onChange={setBlock} />
				</Box>
			</Box>
			<Box
				sx={{
					position: "sticky",
					bottom: 0,
					left: 0,
					zIndex: 10,
					paddingBottom: "15px",
				}}
			>
				<Button
					sx={{
						textAlign: "center",
						width: "250px",
						display: "block",
						margin: "0 auto 15px",
						position: "relative",
					}}
					onClick={publishPost}
					disabled={isLoading}
					variant="contained"
				>
					{isLoading && (
						<Box
							sx={{
								position: "absolute",
								left: "10%",
								top: "50%",
								transform: "translateY(-50%)",
							}}
						>
							<LoaderOne />
						</Box>
					)}
					Опубликовать
				</Button>
				{errorMessage && (
					<Alert severity="error">
						{typeof errorMessage !== "string"
							? "internal server"
							: errorMessage}
					</Alert>
				)}
			</Box>
		</Box>
	);
};
