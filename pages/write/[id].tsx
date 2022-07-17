import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { MainLayouts } from "../../components/layouts/main-layouts";
import { WriteForm } from "../../components/pages/write/write-form/write-form";
import { Api } from "../../services/api";

const EditPost: NextPage = ({}) => {
	return (
		<MainLayouts hideComments contentFullWidth={false} hideLeftMenu>
			<WriteForm />
		</MainLayouts>
	);
};

export default EditPost;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	try {
// 		const id = ctx.params?.id as string;
// 		const user = await Api(ctx as any).user.getMe();
// 		const post = await Api(ctx as any).post.getMyPost(id);
// 	} catch (e) {}
// };
