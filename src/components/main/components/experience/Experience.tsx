"use client";

import React, { FC, useRef, useEffect, useState } from "react";
import styles from "./Experience.module.scss";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import laptop from "../../../../../public/laptop.webp";
import { leftAnimation, opacityAnimation, rightAnimation } from "@/animations/animations";

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
        <motion.h1
          className={styles.experienceTitle}
          variants={opacityAnimation}
          custom={0.2}>
          My Professional Experience
        </motion.h1>
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
            <motion.div className={styles.experienceItem}>
              <motion.div className={styles.experienceHeader}>
                <motion.h2
                  className={styles.companyName}
                  variants={rightAnimation}
                  custom={0.4}>
                  WhoCPA
                </motion.h2>
                <motion.p
                  className={styles.workDuration}
                  variants={rightAnimation}
                  custom={0.6}>
                  Frontend Developer,  March 2023 – May 2024
                </motion.p>
              </motion.div>
              <motion.p
                className={styles.workDescription}
                variants={rightAnimation}
                custom={0.8}>
                As a frontend developer, I created responsive web pages to ensure optimized user experiences across devices. I used technologies like React for interactive applications, Gulp for task automation, and SCSS for styling. For simpler projects, I relied on HTML, CSS, and JavaScript, while for complex websites, I used React to manage state and integrate APIs for dynamic content. I focused on building user-friendly interfaces and interactive features, maintaining clean, scalable code aligned with modern web standards.
              </motion.p>
            </motion.div>
            <motion.div className={styles.experienceItem}>
              <motion.div className={styles.experienceHeader}>
                <motion.h2
                  className={styles.companyName}
                  variants={rightAnimation}
                  custom={1}>
                  VinAssessment
                </motion.h2>
                <motion.p
                  className={styles.workDuration}
                  variants={rightAnimation}
                  custom={1.2}>
                  Frontend Developer, September – December
                </motion.p>
              </motion.div>
              <motion.p
                className={styles.workDescription}
                variants={rightAnimation}
                custom={1.4}>
                Worked with a small team to develop the front-end for platforms built on Ruby on Rails, delivering detailed vehicle reports and enhancing the vehicle marketplace.
                Platforms provide car dealers, retail customers, and marketplace users with vehicle valuations, ownership history, condition assessments, and detailed listings for various car types, including new, used, and auction vehicles.
                Contributed to developing a React-based Chrome Extension, allowing users to access comprehensive vehicle reports directly in their browser.
              </motion.p>
            </motion.div>
          </motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Experience;
