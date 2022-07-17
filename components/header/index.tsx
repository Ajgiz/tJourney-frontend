import React from "react";
import styles from "./header.module.scss";
import {
	Avatar,
	Box,
	Button,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";
import {
	Search,
	Message,
	Notifications,
	Menu as MenuMui,
} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { AuthModal } from "./auth-modal/auth-modal";
import { selectIsAuth } from "../../redux/slices/user/user.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import clsx from "clsx";
import { Menu } from "../pages/components/menu/menu";
import { MenuItem } from "@szhsin/react-menu";
import CommunityIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Api } from "../../services/api";
import { logout } from "../../redux/slices/user/user-create-async-action";
import { parseCookies } from "nookies";

export const Header: React.FC = () => {
	const isAuth = useAppSelector(selectIsAuth);
	const dispatch = useAppDispatch();
	const [errorMessage, setErrorMessage] = React.useState("");
	const { user } = useAppSelector((state) => state.user);
	const [visibleAuthModal, setVisibleAuthModal] = React.useState(false);
	const handleCloseAuthModal = () => {
		setVisibleAuthModal(false);
	};
	const logoutHandle = async () => {
		try {
			await dispatch(logout()).unwrap();
		} catch (e: any) {
			setErrorMessage(e);
		}
	};
	return (
		<>
			<AuthModal state={visibleAuthModal} onClose={handleCloseAuthModal} />
			<Paper
				className={clsx(styles.header)}
				classes={{ root: styles.header }}
				elevation={0}
			>
				<div className={styles.left}>
					<IconButton>
						<MenuMui />
					</IconButton>
					<Link href="/">
						<a>
							<div className={styles.logo}>LOGO</div>
						</a>
					</Link>
					<div className={styles.searchBlock}>
						<Search />
						<input placeholder="Поиск" />
					</div>
					{isAuth && (
						<Link href="/write">
							<a>
								<Button
									color="secondary"
									variant="contained"
									classes={{ root: styles.editButton }}
								>
									Новая запись
								</Button>
							</a>
						</Link>
					)}
				</div>
				<div className={styles.right}>
					<IconButton>
						<Message />
					</IconButton>
					<IconButton>
						<Notifications />
					</IconButton>

					{isAuth ? (
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Link href={"/profile/1"}>
								<a>
									<Avatar src="https://leonardo.osnova.io/aa08c3bd-0d34-5626-9986-7f06f5bedd24/-/scale_crop/108x108/-/format/webp/" />
								</a>
							</Link>
							<Menu
								rootClassName={styles.menu}
								label={
									<ArrowDown
										sx={{
											paddingLeft: "5px",
											cursor: "pointer",
											":hover": { color: "gray" },
										}}
									/>
								}
								body={() => {
									return (
										<>
											<Typography
												sx={{ fontWeight: 600, marginBottom: "10px" }}
											>
												Мой профиль
											</Typography>
											<MenuItem>
												<Link href={"/profile/1"}>
													<a className={styles.avatarMenu}>
														<Avatar src="https://leonardo.osnova.io/aa08c3bd-0d34-5626-9986-7f06f5bedd24/-/scale_crop/108x108/-/format/webp/" />
														<Typography sx={{ paddingLeft: "10px" }}>
															{user.fullName}
														</Typography>
													</a>
												</Link>
											</MenuItem>
											<MenuItem className={styles.mb}>
												<Typography
													sx={{
														display: "flex",
													}}
												>
													<CommunityIcon />
													Создать сообщество
												</Typography>
											</MenuItem>
											<MenuItem>
												<Typography
													sx={{
														display: "flex",
													}}
												>
													<SettingsIcon />
													Настройки
												</Typography>
											</MenuItem>
											<MenuItem>
												<Typography
													onClick={logoutHandle}
													sx={{
														display: "flex",
													}}
												>
													<LogoutIcon />
													Выйти
												</Typography>
											</MenuItem>
										</>
									);
								}}
							/>
						</Box>
					) : (
						<Box
							onClick={() => setVisibleAuthModal(true)}
							display="flex"
							alignItems="center"
							className={styles.login}
						>
							<AccountCircleIcon
								sx={{
									width: "30px",
									height: "30px",
									paddingRight: "5px",
								}}
							/>
							<Typography component="p">Войти</Typography>
						</Box>
					)}
				</div>
			</Paper>
		</>
	);
};
