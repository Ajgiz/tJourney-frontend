import styles from "./image.tools.module.css";

const ICON_IMAGE_TOOLS =
	'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>';
export class ImageTools {
	private imageFile: any;
	private input: any;
	private label: any;

	constructor(data: any) {
		this.imageFile = "";
		this.label = "";
		this.input = "";
	}
	render() {
		this.label = document.createElement("label");
		this.input = document.createElement("input");
		this.input.type = "file";
		this.input.className = styles.inputImageTools;
		this.label.classList.add(styles.labelImageTools);
		this.label.innerText = "Вставьте изображение";
		this.label.prepend(this.input);
		this.input.addEventListener("change", (value: any) => {
			this.imageFile = value.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(this.imageFile);
			reader.onload = (e) => {
				const src = `${e.target?.result}.png`;
				this.label.insertAdjacentHTML(
					"afterbegin",
					`<img class=${styles.readyImage} src=${src.replace(
						/^data:image\/[a-z]+;base64,/,
						""
					)}/>`
				);
			};
			this.showImage();
		});
		return this.label;
	}

	showImage() {
		console.log(this.imageFile);
		const image = document.createElement("img");
		this.label.prepend();
		this.input.classList.add(styles.inputImageToolsActive);
	}

	save(content: any) {
		console.log(content.firstElementChild.value);
		return {
			url: content.firstElementChild.value,
		};
	}
	static get toolbox() {
		return {
			title: "Image",
			icon: ICON_IMAGE_TOOLS,
		};
	}
}
