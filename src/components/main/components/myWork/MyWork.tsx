import React, { FC } from "react";
import styles from "./MyWork.module.scss";
import { projects } from "@/app/projects/projects.data";
import ProjectItem from "@/components/ui/projectItem/ProjectItem";

const MyWork: FC = () => {
	const firstThreeProjects = projects.slice(0, 3);
	console.log(firstThreeProjects);

	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<h2 className={styles.title}>SOME OF MY LATEST WORK</h2>
				<div className={styles.projects}>
					{firstThreeProjects.map((project) => (
						<ProjectItem
							key={project.projectName}
							url={project.url}
							imageSrc={project.imageSrc}
							projectName={project.projectName}
						/>
					))}
				</div>

				<div className={styles.moreInfo}>
					If you want to see more projects, please visit the "Projects" page.
				</div>
			</div>
		</div>
	);
};

export default MyWork;
