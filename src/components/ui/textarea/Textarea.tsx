import { forwardRef } from "react";
import styles from "./Textarea.module.scss";
import { ITextareaProps } from "@/types/form.types";

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
	({ name, placeholder, register, registerOptions, errors }, ref) => {
		return (
			<div className={styles.formGroup}>
				<textarea
					id={name}
					placeholder={placeholder}
					className={styles.formTextarea}
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

export default Textarea;
