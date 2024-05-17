"use client";

import { FC } from "react";
import styles from "./FormSection.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Field from "@/components/ui/field/Field";
import Textarea from "@/components/ui/textarea/Textarea";
import { IMyForm } from "@/types/form.types";

const FormSection: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IMyForm>();

	const onSubmit: SubmitHandler<IMyForm> = (data) => {
		console.log(data);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.content}>
					<h2 className={styles.title}>Have any questions?</h2>
					<p className={styles.text}>
						Feel free to drop us a message, and I'll get back to you as soon as
						possible!
					</p>
				</div>
				<div className={styles.form}>
					<form className={styles.formElem} onSubmit={handleSubmit(onSubmit)}>
						<Field
							name="name"
							placeholder="Enter your name"
							register={register}
							type="text"
							registerOptions={{ required: "Name is required" }}
							errors={errors.name}
						/>

						<Field
							name="email"
							placeholder="Enter your email"
							type="email"
							register={register}
							registerOptions={{
								required: "Email is required",
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Invalid email address",
								},
							}}
							errors={errors.email}
						/>

						<Textarea
							name="message"
							placeholder="Enter your message"
							register={register}
							registerOptions={{ required: "Message is required" }}
							errors={errors.message}
						/>

						<button type="submit" className={styles.formButton}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormSection;
