"use client";

import { FC, useRef, useEffect, useState } from "react";
import styles from "./Projects.module.scss";
import Image from "next/image";
import ProjectItem from "@/components/ui/projectItem/ProjectItem";
import webMin from "../../../public/WEB-min.png";
import { projects } from "./projects.data";
import { motion, useInView } from "framer-motion";
import {
	textLeftAnimation,
	imageAnimationRight,
	containerListAnimation,
	listAnimation,
} from "../../animations/animations";

const Projects: FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [startAnimation, setStartAnimation] = useState(false);

	useEffect(() => {
		if (isInView) {
			setStartAnimation(true);
		}
	}, [isInView]);

	return (
		<motion.div className={styles.wrapper} initial="hidden" animate="visible">
			<div className={styles.innerHeaderBlock}>
				<motion.div
					className={styles.headerSection}
					initial="hidden"
					animate="visible"
				>
					<motion.div
						className={styles.textSection}
						variants={textLeftAnimation}
					>
						<h2 className={styles.title}>Projects.</h2>
						<p className={styles.text}>
							Welcome to the Projects section! Here you can explore my latest
							works and projects that I have been working on. Learn more about
							my skills and work style by browsing this section. I hope you
							enjoy it.
						</p>
					</motion.div>

					<motion.div
						className={styles.imageSection}
						variants={imageAnimationRight}
					>
						<Image
							src={webMin}
							alt="Project"
							className={styles.projectImage}
							priority={true}
						/>
					</motion.div>
				</motion.div>
			</div>

			<div className={styles.projectsSection}>
				<div className={styles.projectInner}>
					<motion.div
						className={styles.projectList}
						variants={containerListAnimation}
						initial="hidden"
						animate={startAnimation ? "visible" : "hidden"}
						ref={ref}
					>
						{projects.map((project) => (
							<motion.div key={project.projectName} variants={listAnimation}>
								<ProjectItem
									imageSrc={project.imageSrc}
									projectName={project.projectName}
									url={project.url}
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
