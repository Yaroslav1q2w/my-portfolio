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
			animate={startAnimation ? "visible" : "hidden"}
		>
			<motion.div className={styles.experienceInner}>
				<motion.div className={styles.experienceHeader}>
					<motion.h1
						className={styles.experienceTitle}
						variants={opacityAnimation}
						custom={1}
					>
						My Professional Experience
					</motion.h1>
					<motion.h2
						className={styles.companyName}
						variants={opacityAnimation}
						custom={1.2}
					>
						WhoCPA
					</motion.h2>
					<motion.p
						className={styles.workDuration}
						variants={opacityAnimation}
						custom={1.4}
					>
						Frontend Developer
					</motion.p>
					<motion.p
						className={styles.workDuration}
						variants={opacityAnimation}
						custom={1.6}
					>
						December 2022 - March 2024
					</motion.p>
				</motion.div>

				<motion.div className={styles.experienceContent}>
					<motion.div variants={leftAnimation} custom={2}>
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
							custom={2}
						>
							<span className={styles.experienceColor}>
								As a frontend developer
							</span>
							, I specialized in designing adaptive landing and pre-landing
							pages, ensuring a high-quality user experience across a variety of
							devices. My work encompassed the full cycle of webpage
							creation—from conception to implementation—with a particular focus
							on interface detailing and interaction optimization.
						</motion.p>
						<motion.p
							className={styles.workDescription}
							variants={opacityAnimation}
							custom={2.2}
						>
							<span className={styles.experienceColor}>I effectively </span>
							implemented engaging animations and transitions that significantly
							increased user engagement and enhanced site interaction. This not
							only ensured the smoothness and visual appeal of the pages but
							also contributed to increased conversion rates thanks to a better
							user experience.
						</motion.p>
						<motion.p
							className={styles.workDescription}
							variants={opacityAnimation}
							custom={2.4}
						>
							<span className={styles.experienceColor}>Additionally </span>, I
							developed web pages with integrated server requests to optimize
							functionality and ensure fast content delivery. My proficiency in
							HTML, CSS, and JavaScript allowed me to produce clean, efficient
							code that meets modern web standards and adjusts to different
							browsers and screen sizes.
						</motion.p>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Experience;
