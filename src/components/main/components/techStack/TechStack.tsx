"use client";

import { FC, useRef, useEffect, useState } from "react";
import styles from "./TechStack.module.scss";
import { technologies } from "./tech.data";
import { motion, useInView } from "framer-motion";
import {
	containerListAnimation,
	listAnimation,
} from "../../../../animations/animations";

const TechStack: FC = () => {
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
			className={styles.techStack}
			variants={containerListAnimation}
			initial="hidden"
			animate={startAnimation ? "visible" : "hidden"}
			ref={ref}
		>
			<div className={styles.techContent}>
				<motion.h3 className={styles.techTitle} variants={listAnimation}>
					The technologies I use
				</motion.h3>
				<div className={styles.techList}>
					{technologies.map((item) => (
						<motion.div
							variants={listAnimation}
							key={item.name}
							className={styles.techItem}
						>
							<span className={styles.techIcon}>
								<item.Icon />
							</span>
							<span className={styles.techName}>{item.name}</span>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default TechStack;
