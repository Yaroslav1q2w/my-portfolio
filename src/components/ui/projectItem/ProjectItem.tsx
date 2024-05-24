import Image from "next/image";
import { FC } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./ProjectItem.module.scss";
import { IProjectItem } from "@/types/projectItem.types";

const ProjectItem: FC<IProjectItem> = ({ imageSrc, projectName }) => {
	return (
		<div className={styles.projectItem}>
			<div className={styles.imgContainer}>
				<Image
					priority={true}
					src={imageSrc}
					alt={projectName}
					className={styles.projectImage}
				/>
			</div>
			<div className={styles.projectDescription}>
				{projectName} <MdKeyboardArrowRight className={styles.arrow} />
			</div>
		</div>
	);
};

export default ProjectItem;
