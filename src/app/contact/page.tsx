"use client";

import { FC } from "react";
import {
	FaLinkedinIn,
	FaGithub,
	FaFacebookF,
	FaTelegramPlane,
} from "react-icons/fa";
import styles from "./Contact.module.scss";
import Field from "@/components/ui/field/Field";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMyForm } from "@/types/form.types";
import Textarea from "@/components/ui/textarea/Textarea";
import { motion } from "framer-motion";
import {
	textAnimationRight,
	textLeftAnimation,
	textOpacityAnimation,
} from "@/animations/animations";

const Contact: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IMyForm>();

	const onSubmit: SubmitHandler<IMyForm> = (data) => {
		console.log(data);
	};

	return (
		<motion.div className={styles.contact} initial="hidden" animate="visible">
			<div className={styles.contactInfo}>
				<motion.div className={styles.left} variants={textLeftAnimation}>
					<h2 className={styles.title}>Contact Us.</h2>
					<p className={styles.text}>
						Feel free to reach out to us through any of the following platforms:
					</p>
				</motion.div>
				<motion.div className={styles.icons} variants={textAnimationRight}>
					<a
						href="https://www.linkedin.com/in/yaroslav-kucherenko-500783263/"
						target="_blank"
						className={`${styles.iconWrap} ${styles.linkedin}`}
					>
						<span className={styles.icon}>
							<FaLinkedinIn />
						</span>
						<span className={styles.iconText}>LinkedIn</span>
					</a>
					<a
						href="https://github.com/Yaroslav1q2w"
						target="_blank"
						className={`${styles.iconWrap} ${styles.github}`}
					>
						<span className={styles.icon}>
							<FaGithub />
						</span>
						<span className={styles.iconText}>GitHub</span>
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=100020676831386"
						target="_blank"
						className={`${styles.iconWrap} ${styles.facebook}`}
					>
						<span className={styles.icon}>
							<FaFacebookF />
						</span>
						<span className={styles.iconText}>Facebook</span>
					</a>
					<a
						href="https://t.me/yarik_kucherenko"
						target="_blank"
						className={`${styles.iconWrap} ${styles.telegram}`}
					>
						<span className={styles.icon}>
							<FaTelegramPlane />
						</span>
						<span className={styles.iconText}>Telegram</span>
					</a>
				</motion.div>
			</div>
			<div className={styles.contactForm}>
				<motion.div
					className={styles.innerForm}
					custom={1}
					variants={textOpacityAnimation}
				>
					<h2 className={styles.formTitle}>Send me an email</h2>

					<form className={styles.formWrap} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.leftForm}>
							<Field
								name="name"
								placeholder="Name"
								register={register}
								type="text"
								registerOptions={{ required: "Name is required" }}
								errors={errors.name}
							/>

							<Field
								name="email"
								placeholder="Email"
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

						<div className={styles.rightForm}>
							<Textarea
								name="message"
								placeholder="Message"
								register={register}
								registerOptions={{ required: "Message is required" }}
								errors={errors.message}
							/>
						</div>

						<button type="submit" className={styles.formButton}>
							Send email
						</button>
					</form>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Contact;
