import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { IAuthModalProps } from "./auth-modal.interface";
import { Box, Link, Typography } from "@mui/material";
import styles from "./auth-modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RegisterForm } from "./components/forms/register";
import { LoginForm } from "./components/forms/login";
export const AuthModal: React.FC<IAuthModalProps> = ({ onClose, state }) => {
	const [typeAuth, setTypeAuth] = React.useState<"email" | "external-service">(
		"external-service"
	);
	const [isLogin, setIsLogin] = React.useState(false);
	return (
		<Dialog
			className={styles.root}
			maxWidth="xs"
			fullWidth
			open={state}
			onClose={onClose}
		>
			<CloseIcon onClick={onClose} className={styles.close} />
			<Typography
				sx={{ marginTop: "20px" }}
				fontWeight={500}
				textAlign={"center"}
				component="h6"
			>
				{isLogin ? "Вход" : "Регистрация"} в Tjourney
			</Typography>
			<DialogContent>
				{typeAuth === "email" && (
					<Box
						className={styles.backStep}
						onClick={() => setTypeAuth("external-service")}
					>
						<ArrowBackIcon /> к авторизации
					</Box>
				)}
				{typeAuth === "external-service" ? (
					<Box className={styles.socialBttn}>
						<Button
							onClick={() => setTypeAuth("email")}
							color="secondary"
							fullWidth
						>
							<AlternateEmailIcon /> Почта
						</Button>
						<Button color="secondary" fullWidth>
							<LinkedInIcon /> ВКонтакте
						</Button>
						<Button color="secondary" fullWidth>
							<GoogleIcon /> Google
						</Button>
					</Box>
				) : (
					<>
						{isLogin ? (
							<LoginForm onClose={onClose} />
						) : (
							<RegisterForm onClose={onClose} />
						)}
					</>
				)}
				{!isLogin && <Typography component="span">Есть аккаунт?</Typography>}
				<Typography
					onClick={() => setIsLogin(!isLogin)}
					sx={{
						color: "blue",
						cursor: "pointer",
						marginLeft: !isLogin ? "10px" : "",
					}}
					component="span"
				>
					{!isLogin ? "Войти" : "Регистрация"}
				</Typography>
				{isLogin && typeAuth === "email" && (
					<Typography
						sx={{ fontSize: "16px", color: "blue", cursor: "pointer" }}
					>
						Забыли пароль?
					</Typography>
				)}
			</DialogContent>
			<DialogActions></DialogActions>
		</Dialog>
	);
};
