"use client";

import { FC } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import heroImg from "../../../../../public/IMG_6690.jpg";
import { motion } from "framer-motion";
import {
	textLeftAnimation,
	imageAnimationRight,
} from "../../../../animations/animations";

const Hero: FC = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroContent}>
				<motion.div
					className={styles.heroDescription}
					initial="hidden"
					animate="visible"
				>
					<motion.h1
						className={styles.heroTitle}
						custom={0}
						variants={textLeftAnimation}
					>
						I'm Yaroslav Kucherenko
					</motion.h1>
					<motion.h1
						className={styles.heroTitle}
						custom={0.2}
						variants={textLeftAnimation}
					>
						Frontend Web Developer
					</motion.h1>
					<motion.p
						className={styles.heroText}
						custom={0.4}
						variants={textLeftAnimation}
					>
						Front end developer who writes clean, elegant and efficient code.
						<br />
						Crafting responsive, user-centric websites and web applications with
						the latest technologies for seamless digital experiences.
					</motion.p>
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={imageAnimationRight}
				>
					<Image
						className={styles.heroImg}
						src={heroImg}
						alt="hero"
						priority={true}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
