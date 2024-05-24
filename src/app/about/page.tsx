"use client";

import { FC } from "react";
import styles from "./About.module.scss";
import profileImage from "../../../public/IMG_5559-min.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { leftAnimation, rightAnimation } from "@/animations/animations";

const About: FC = () => {
	return (
		<motion.div className={styles.container} initial="hidden" animate="visible">
			<motion.div className={styles.innerBlock}>
				<motion.div
					className={styles.imageContainer}
					variants={leftAnimation}
					custom={0.3}
				>
					<Image
						src={profileImage}
						alt="about-img"
						className={styles.profileImage}
						priority={true}
					/>
				</motion.div>
				<motion.div className={styles.content}>
					<motion.h2
						className={styles.title}
						variants={rightAnimation}
						custom={0.3}
					>
						About Me.
					</motion.h2>
					<motion.p
						className={styles.text}
						variants={rightAnimation}
						custom={0.4}
					>
						As a frontend developer with a deep passion for creating dynamic web
						applications, I specialize in using cutting-edge technologies and
						best development practices. My skills encompass HTML5, CSS3,
						JavaScript (ES6+), React, and Node.js, allowing me to create
						user-friendly and adaptive designs optimized for the best user
						experience.
					</motion.p>
					<motion.p
						className={styles.text}
						variants={rightAnimation}
						custom={0.5}
					>
						In my professional development, I am constantly progressing and
						refining my skills. I enjoy setting myself new challenges and
						continuously improving my abilities to provide quality and
						innovative solutions in my projects. I believe that continuous
						self-improvement is the key to success in any field, so I
						enthusiastically embrace new challenges and enrich my knowledge.
					</motion.p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default About;
