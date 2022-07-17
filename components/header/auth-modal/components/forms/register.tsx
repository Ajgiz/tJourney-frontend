import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "../validation-schema/validation";
import { FormField } from "../form-field/form-field";
import { Button } from "@mui/material";
import { IAuthPayloadRegister } from "../../../../../services/auth-service/auth-service.interface";
import Alert from "@mui/material/Alert";
import { useAppDispatch } from "../../../../../redux/hooks";
import { register } from "../../../../../redux/slices/user/user-create-async-action";

export const RegisterForm: React.FC<{ onClose: () => void }> = ({
	onClose,
}) => {
	const dispatch = useAppDispatch();
	const [errorMessage, setErrorForm] = React.useState<string | string[]>("");
	const onSubmit = async (data: IAuthPayloadRegister) => {
		try {
			await dispatch(register(data)).unwrap();
			onClose();
			setErrorForm("");
		} catch (e: any) {
			if (e.response) {
				console.log(e);
				setErrorForm(Object.values<any>(e.response.data.message)[0]);
			} else setErrorForm("Неизвестая ошибка");
			console.warn(e);
		}
	};
	const form = useForm<IAuthPayloadRegister>({
		mode: "onChange",
		resolver: yupResolver(RegisterFormSchema),
	});
	return (
		<div>
			<FormProvider {...form}>
				<FormField label="Пароль" name="password" />
				<FormField label="Почта" name="email" />
				<FormField label="Имя и фамилия" name="fullName" />
				{errorMessage && (
					<Alert sx={{ marginBottom: "20px" }} severity="error">
						{errorMessage}
					</Alert>
				)}
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Button
						type="submit"
						fullWidth
						sx={{ marginBottom: "10px" }}
						disabled={!form.formState.isValid || form.formState.isSubmitting}
						variant="contained"
					>
						Зарегистрироваться
					</Button>
				</form>
			</FormProvider>
		</div>
	);
};
