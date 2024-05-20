"use client";

import { FC, useRef, useEffect, useState } from "react";
import styles from "./MyWork.module.scss";
import { projects } from "@/app/projects/projects.data";
import ProjectItem from "@/components/ui/projectItem/ProjectItem";
import { motion, useInView } from "framer-motion";
import {
	containerListAnimation,
	listAnimation,
	textTopAnimation,
} from "@/animations/animations";

const MyWork: FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [startAnimation, setStartAnimation] = useState(false);

	useEffect(() => {
		if (isInView) {
			setStartAnimation(true);
		}
	}, [isInView]);

	const firstThreeProjects = projects.slice(0, 3);

	return (
		<motion.div
			className={styles.container}
			ref={ref}
			initial="hidden"
			animate={startAnimation ? "visible" : "hidden"}
		>
			<motion.div
				className={styles.inner}
				variants={textTopAnimation}
				custom={0.8}
			>
				<motion.h2 className={styles.title}>SOME OF MY LATEST WORK</motion.h2>
				<motion.div
					className={styles.projects}
					variants={containerListAnimation}
				>
					{firstThreeProjects.map((project) => (
						<motion.div key={project.projectName} variants={listAnimation}>
							<ProjectItem
								url={project.url}
								imageSrc={project.imageSrc}
								projectName={project.projectName}
							/>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className={styles.moreInfo}
					variants={textTopAnimation}
					custom={0.8}
				>
					If you want to see more projects, please visit the "Projects" page.
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default MyWork;
