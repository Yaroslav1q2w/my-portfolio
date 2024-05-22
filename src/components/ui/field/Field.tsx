import { FC } from "react";
import styles from "./Field.module.scss";
import { IFieldProps } from "@/types/form.types";

const Field: FC<IFieldProps> = ({
	name,
	placeholder,
	type,
	register,
	registerOptions,
	errors,
}) => {
	return (
		<div className={styles.formGroup}>
			<input
				type={type}
				placeholder={placeholder}
				className={styles.formInput}
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

export default Field;
