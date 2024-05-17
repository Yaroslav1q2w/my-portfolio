import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface IMyForm {
	name: string;
	email: string;
	message: string;
}

export interface IFieldProps {
	name: string;
	placeholder: string;
	type: string;
	register: UseFormRegister<any>;
	registerOptions?: RegisterOptions;
	errors?: any;
}

export interface ITextareaProps {
	name: string;
	placeholder?: string;
	register: UseFormRegister<any>;
	registerOptions?: RegisterOptions;
	errors?: any;
}
