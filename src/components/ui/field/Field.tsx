import { forwardRef } from "react";
import styles from "./Field.module.scss";
import { IFieldProps } from "@/types/form.types";

const Field = forwardRef<HTMLInputElement, IFieldProps>(
	({ name, placeholder, type, register, registerOptions, errors }, ref) => {
		return (
			<div className={styles.formGroup}>
				<input
					type={type}
					placeholder={placeholder}
					className={styles.formInput}
					{...register(name, registerOptions)}
					ref={ref}
				/>
				{errors && (
					<span className={styles.errorMessage}>
						{typeof errors.message === "string"
							? errors.message
							: "An error occurred"}
					</span>
				)}
			</div>
		);
	}
);

export default Field;
