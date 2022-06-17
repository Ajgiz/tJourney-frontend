import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { MainLayouts } from "../../components/layouts/main-layouts";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "../../styles/profile-setting.module.scss";
import { InputSetting } from "../../components/pages/setting/input/input";
import { SelectSetting } from "../../components/pages/setting/select/select";

const Settings = () => {
	const [status, setStatus] = React.useState("show");
	const [description, setDescription] = React.useState("");
	const [name, setName] = React.useState("Ajgiz Usmanov");
	const [password, setPassword] = React.useState("Demion2289");
	return (
		<MainLayouts hideComments contentFullWidth={false}>
			<Paper sx={{ padding: "20px" }} elevation={0}>
				<Typography
					sx={{
						fontSize: "16px",
						color: "#000000a6",
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						marginBottom: "25px",
					}}
					variant="h6"
				>
					<ArrowBackIosIcon sx={{ fontSize: "16px" }} />
					Ajgiz Usmanov
				</Typography>
				<div className={styles.block}>
					<p className={styles.title}>Описание к блогу</p>
					<InputSetting
						type="text"
						onChange={setDescription}
						value={description}
						placeholder="Пара слов о себе"
					/>
				</div>
				<div className={styles.block}>
					<p className={styles.title}>Статус онлайн</p>
					<SelectSetting
						onChange={setStatus}
						value={status}
						values={[
							{ label: "Скрыть от всех", value: "hide" },
							{ label: "Показать когда я онлайн", value: "show" },
						]}
					/>
				</div>
				<div className={styles.block}>
					<p className={styles.title}>Отображаемое имя</p>
					<InputSetting type="input" onChange={setName} value={name} />
				</div>
				<div className={styles.block}>
					<p className={styles.title}>Почта и пароль</p>
					<InputSetting type="input" onChange={setPassword} value={password} />
					<Typography
						component="span"
						sx={{
							color: "#3766a9",
							marginTop: "10px",
							display: "inline-block",
							transition: "all 0.3s ease 0s",
							":hover": {
								color: "red",
								cursor: "pointer",
							},
						}}
					>
						Изменить пароль
					</Typography>
				</div>
				<Box>
					<Button variant="contained">Сохранить</Button>
				</Box>
			</Paper>
		</MainLayouts>
	);
};

export default Settings;
