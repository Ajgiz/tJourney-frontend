import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormSchema } from "../validation-schema/validation";
import { FormField } from "../form-field/form-field";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@mui/material/Alert";
import { IAuthPayloadLogin } from "../../../../../services/auth-service/auth-service.interface";
import { useAppDispatch } from "../../../../../redux/hooks";
import { login } from "../../../../../redux/slices/user/user-create-async-action";

export const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	const dispatch = useAppDispatch();
	const [errorMessage, setErrorForm] = React.useState<string | string[]>("");
	const onSubmit = async (data: IAuthPayloadLogin) => {
		try {
			await dispatch(login(data)).unwrap();
			setErrorForm("");
			onClose();
		} catch (e: any) {
			if (e.response) {
				setErrorForm(e.response.data.message);
			} else setErrorForm("Неизвестная ошибка");
			console.warn(e);
		}
	};
	const form = useForm<IAuthPayloadLogin>({
		mode: "onChange",
		resolver: yupResolver(LoginFormSchema),
	});
	return (
		<div>
			<FormProvider {...form}>
				<FormField label="Пароль" name="password" />
				<FormField label="Почта" name="email" />
				{errorMessage && (
					<Alert sx={{ marginBottom: "20px" }} severity="error">
						{errorMessage}
					</Alert>
				)}
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Button
						type="submit"
						sx={{ marginBottom: "10px" }}
						fullWidth
						disabled={!form.formState.isValid || form.formState.isSubmitting}
						variant="contained"
					>
						Войти
					</Button>
				</form>
			</FormProvider>
		</div>
	);
};
