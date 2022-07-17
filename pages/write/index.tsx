import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { MainLayouts } from "../../components/layouts/main-layouts";
import { WriteForm } from "../../components/pages/write/write-form/write-form";

const WritePost: NextPage = () => {
	return (
		<MainLayouts hideComments contentFullWidth={false} hideLeftMenu>
			<WriteForm />
		</MainLayouts>
	);
};

export default WritePost;
