import { FC } from "react";
import styles from "./Projects.module.scss";
import Image from "next/image";
import ProjectItem from "@/components/ui/projectItem/ProjectItem";
import { projects } from "./projects.data";

const Projects: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.innerHeaderBlock}>
				<div className={styles.headerSection}>
					<div className={styles.textSection}>
						<h2 className={styles.title}>Projects.</h2>
						<p className={styles.text}>
							Welcome to the Projects section! Here you can explore my latest
							works and projects that I have been working on. Learn more about
							my skills and work style by browsing this section. I hope you
							enjoy it.
						</p>
					</div>

					<div className={styles.imageSection}>
						<Image
							src="/WEB-min.png"
							alt="Project"
							width={400}
							height={300}
							className={styles.projectImage}
						/>
					</div>
				</div>
			</div>

			<div className={styles.projectsSection}>
				<div className={styles.projectInner}>
					<div className={styles.projectList}>
						{projects.map((project) => (
							<ProjectItem
								imageSrc={project.imageSrc}
								projectName={project.projectName}
								url={project.url}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
