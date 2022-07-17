import { TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
interface IFormField {
	name: string;
	label: string;
}

export const FormField: React.FC<IFormField> = ({ label, name }) => {
	const { register, formState } = useFormContext();
	return (
		<TextField
			{...register(name)}
			name={name}
			sx={{ marginBottom: "20px" }}
			size="small"
			label={label}
			variant="outlined"
			error={!!formState.errors[name]?.message}
			helperText={formState.errors[name]?.message}
			fullWidth
		/>
	);
};
