"use client";

import { FC, useRef, useEffect, useState } from "react";
import styles from "./FormSection.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Field from "@/components/ui/field/Field";
import Textarea from "@/components/ui/textarea/Textarea";
import { IMyForm } from "@/types/form.types";
import { motion, useInView } from "framer-motion";
import { formAnimations, topAnimation } from "@/animations/animations";

const FormSection: FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [startAnimation, setStartAnimation] = useState(false);

	useEffect(() => {
		if (isInView) {
			setStartAnimation(true);
		}
	}, [isInView]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IMyForm>();

	const onSubmit: SubmitHandler<IMyForm> = (data) => {
		console.log(data);
	};

	return (
		<motion.div
			className={styles.wrapper}
			ref={ref}
			initial="hidden"
			animate={startAnimation ? "visible" : "hidden"}
			variants={formAnimations}
		>
			<div className={styles.inner}>
				<motion.div
					className={styles.content}
					variants={topAnimation}
					custom={0.5}
				>
					<h2 className={styles.title}>Have any questions?</h2>
					<p className={styles.text}>
						Feel free to drop us a message, and I'll get back to you as soon as
						possible!
					</p>
				</motion.div>
				<motion.div
					className={styles.form}
					variants={topAnimation}
					custom={0.6}
				>
					<form className={styles.formElem} onSubmit={handleSubmit(onSubmit)}>
						<div>
							<Field
								name="name"
								placeholder="Enter your name"
								register={register}
								type="text"
								registerOptions={{ required: "Name is required" }}
								errors={errors.name}
							/>
						</div>
						<div>
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
						</div>
						<div>
							<Textarea
								name="message"
								placeholder="Enter your message"
								register={register}
								registerOptions={{ required: "Message is required" }}
								errors={errors.message}
							/>
						</div>
						<div>
							<button type="submit" className={styles.formButton}>
								Submit
							</button>
						</div>
					</form>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default FormSection;
