"use client";

import React, { FC, useRef, useEffect, useState } from "react";
import styles from "./Experience.module.scss";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import laptop from "../../../../../public/laptop.webp";
import { leftAnimation, opacityAnimation } from "@/animations/animations";

const Experience: FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [startAnimation, setStartAnimation] = useState(false);

	useEffect(() => {
		if (isInView) {
			setStartAnimation(true);
		}
	}, [isInView]);

	return (
		<motion.div
			className={styles.experienceContainer}
			ref={ref}
			initial="hidden"
			animate={startAnimation ? "visible" : "hidden"}>
			<motion.div className={styles.experienceInner}>
				<motion.div className={styles.experienceHeader}>
					<motion.h1
						className={styles.experienceTitle}
						variants={opacityAnimation}
						custom={0.2}>
						My Professional Experience
					</motion.h1>
					<motion.h2
						className={styles.companyName}
						variants={opacityAnimation}
						custom={0.4}>
						WhoCPA
					</motion.h2>
					<motion.p
						className={styles.workDuration}
						variants={opacityAnimation}
						custom={0.6}>
						Frontend Developer
					</motion.p>
					<motion.p
						className={styles.workDuration}
						variants={opacityAnimation}
						custom={0.8}>
						December 2022 - March 2024
					</motion.p>
				</motion.div>

				<motion.div className={styles.experienceContent}>
					<motion.div
						variants={leftAnimation}
						custom={0.8}
						className={styles.imageWrapper}>
						<Image
							src={laptop}
							alt="Company Logo"
							className={styles.experienceImg}
						/>
					</motion.div>
					<motion.div className={styles.experienceDetails}>
						<motion.p
							className={styles.workDescription}
							variants={opacityAnimation}
							custom={1}>
							<span className={styles.experienceColor}>
								As a frontend developer
							</span>
							, I specialized in developing responsive web pages for product
							promotion, ensuring an optimized user experience across various
							devices. My role involved full-cycle development—from the initial
							concept to implementation—focusing on creating visually appealing
							and highly functional interfaces.
						</motion.p>
						<motion.p
							className={styles.workDescription}
							variants={opacityAnimation}
							custom={1.2}>
							<span className={styles.experienceColor}>Depending </span> on
							project requirements, I utilized a diverse set of technologies,
							including React for dynamic, interactive applications, Gulp for
							task automation, and SCSS for efficient styling. While working on
							simpler projects, I relied on HTML, CSS, and JavaScript to create
							fast and reliable web pages. For more complex, multi-page
							websites, I implemented React to manage state and ensure smooth
							interaction between components, often integrating API requests for
							dynamic content loading and user-specific data display.
						</motion.p>
						<motion.p
							className={styles.workDescription}
							variants={opacityAnimation}
							custom={1.4}>
							<span className={styles.experienceColor}>In addition </span>, I
							was responsible for implementing user-friendly interfaces and
							incorporating interactive features such as forms and
							questionnaires, which contributed to higher user engagement. My
							approach to coding emphasized maintaining clean, scalable code
							that adhered to modern web standards and performed consistently
							across different browsers and devices.
						</motion.p>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Experience;
