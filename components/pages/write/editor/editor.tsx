import EditorJS, { API, OutputData } from "@editorjs/editorjs";
import React from "react";
import { ImageTools } from "./tools/image.tools";
import HeaderTool from "@editorjs/header";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import CheckListTool from "@editorjs/checklist";
import ListTool from "@editorjs/list";
import EmbedTool from "@editorjs/embed";
import QuoteTool from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import InlineCodeTool from "@editorjs/inline-code";
import UnderlineTool from "@editorjs/underline";
import DelimiterTool from "@editorjs/delimiter";

export interface IEditorProps {
	onChange: (blocks: OutputData["blocks"]) => void;
	initialBlocks: OutputData["blocks"];
}

export const Editor: React.FC<IEditorProps> = ({ onChange, initialBlocks }) => {
	React.useEffect(() => {
		const editor = new EditorJS({
			autofocus: true,
			holder: "editor",
			data: {
				blocks: initialBlocks,
			},
			tools: {
				embed: EmbedTool,
				header: HeaderTool,
				raw: RawTool,
				code: CodeTool,
				quote: QuoteTool,
				inlineCode: InlineCodeTool,
				underline: UnderlineTool,
				delimiter: DelimiterTool,
				// image: {
				// 	class: ImageTools,
				// 	inlineToolbar: true,
				// },
				checklist: {
					inlineToolbar: true,
					class: CheckListTool,
				},
				list: {
					class: ListTool,
					inlineToolbar: true,
				},
			},
			placeholder: "Введите текст вашей статьи",
			async onChange(api, event) {
				const { blocks } = await editor.save();
				console.log(blocks);
				onChange(blocks);
			},
		});

		return () => {
			editor.isReady
				.then(() => {
					editor.destroy();
				})
				.catch((e) => console.error("ERROR editor cleanup", e));
		};
	}, []);

	return <div id="editor" />;
};
