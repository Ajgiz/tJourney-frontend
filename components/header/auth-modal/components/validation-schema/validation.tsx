import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
	email: yup.string().email("Неверная почта").required("Почта обязательна"),
	password: yup
		.string()
		.min(6, "Пароль должен быть не менее 6 символов")
		.max(25, "Пароль должен содержать не более 25 символов")
		.required("Пароль обязательный"),
});

export const RegisterFormSchema = yup
	.object()
	.shape({
		fullName: yup
			.string()
			.min(4, "Минимум 4 символа")
			.max(55, "Максимум 55 символов")
			.required("Имя и фамилия обязательны"),
	})
	.concat(LoginFormSchema);
