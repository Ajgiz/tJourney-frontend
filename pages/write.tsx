import { NextPage } from "next";
import React from "react";
import { MainLayouts } from "../components/layouts/main-layouts";
import { WriteForm } from "../components/pages/write/write-form/write-form";

const Write: NextPage = () => {
	return (
		<MainLayouts hideComments contentFullWidth={false} hideLeftMenu>
			<WriteForm placeholder="Загаловок" />
		</MainLayouts>
	);
};

export default Write;
