import { FC } from "react";
import styles from "./Textarea.module.scss";
import { ITextareaProps } from "@/types/form.types";

const Textarea: FC<ITextareaProps> = ({
	name,
	placeholder,
	register,
	registerOptions,
	errors,
}) => {
	return (
		<div className={styles.formGroup}>
			<textarea
				id={name}
				placeholder={placeholder}
				className={styles.formTextarea}
				{...register(name, registerOptions)}
			/>
			{errors && errors[name] && (
				<span className={styles.errorMessage}>
					{typeof errors[name]?.message === "string"
						? errors[name]?.message
						: "An error occurred"}
				</span>
			)}
		</div>
	);
};

export default Textarea;
