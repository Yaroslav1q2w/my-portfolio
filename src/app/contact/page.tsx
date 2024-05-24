"use client";

import { FC, useState } from "react";
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
	rightAnimation,
	leftAnimation,
	opacityAnimation,
	topAnimation,
	bottomAnimation,
} from "@/animations/animations";
import { init, send } from "emailjs-com";
import SuccessPopup from "@/components/ui/SuccessPopup/SuccessPopup";

init("9VFiCnV0zpHAtARGe");

const Contact: FC = () => {
	const [showPopup, setShowPopup] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IMyForm>();

	const onSubmit: SubmitHandler<IMyForm> = async (data) => {
		const templateParams = {
			name: data.name,
			email: data.email,
			message: data.message,
		};

		try {
			await send("service_v9pkoei", "template_yt45lj9", templateParams);
			reset();
			setShowPopup(true);
		} catch (error) {
			console.error("Error sending email:", error);
		}
	};

	return (
		<motion.div className={styles.contact} initial="hidden" animate="visible">
			<div className={styles.contactInfo}>
				<motion.div
					className={styles.left}
					variants={leftAnimation}
					custom={0.3}
				>
					<h2 className={styles.title}>Contact Me.</h2>
					<p className={styles.text}>
						Feel free to reach out to us through any of the following platforms:
					</p>
				</motion.div>
				<motion.div
					className={styles.icons}
					variants={rightAnimation}
					custom={0.3}
				>
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
				<div className={styles.innerForm}>
					<motion.h2
						className={styles.formTitle}
						variants={bottomAnimation}
						custom={0.3}
					>
						Send me an email
					</motion.h2>

					<motion.form
						className={styles.formWrap}
						onSubmit={handleSubmit(onSubmit)}
						variants={opacityAnimation}
						custom={0.8}
					>
						<div className={styles.leftForm}>
							<Field
								name="name"
								placeholder="Name"
								register={register}
								type="text"
								registerOptions={{ required: "Name is required" }}
								errors={errors}
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
								errors={errors}
							/>
						</div>

						<div className={styles.rightForm}>
							<Textarea
								name="message"
								placeholder="Message"
								register={register}
								registerOptions={{ required: "Message is required" }}
								errors={errors}
							/>
						</div>

						<button type="submit" className={styles.formButton}>
							Send email
						</button>
					</motion.form>
				</div>
			</div>

			{showPopup && (
				<SuccessPopup
					message="Thank you for your message! I'll get back to you as soon as possible."
					onClose={() => setShowPopup(false)}
				/>
			)}
		</motion.div>
	);
};

export default Contact;
