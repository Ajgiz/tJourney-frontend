import EditorJS, { API } from "@editorjs/editorjs";
import React from "react";

export const Editor = () => {
	const editor = React.useRef<any | null>(null);
	React.useEffect(() => {
		if (editor.current) {
			editor.current = new EditorJS({
				initialBlock: "paragraph",
				holder: "editor",
				placeholder: "Введите текст вашей статьи",
			});
		}

		return function clean() {
			if (editor.current && editor.current.destroy) {
				editor.current.destroy();
			}
		};
	}, []);

	return <div ref={editor} id="editor" />;
};
