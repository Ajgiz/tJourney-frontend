import React from "react";
import { MainLayouts } from "../../components/layouts/main-layouts";
import { Comments } from "../../components/pages/components/post/components/comments/comments";
import { FullPost } from "../../components/pages/components/post/components/full/full-post";

const FullPostPage = () => {
	return (
		<MainLayouts contentFullWidth hideComments>
			<FullPost />
			<Comments />
		</MainLayouts>
	);
};
export default FullPostPage;
