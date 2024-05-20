import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./ProjectItem.module.scss";
import { IProjectItem } from "@/types/projectItem.types";

const ProjectItem: FC<IProjectItem> = ({ url, imageSrc, projectName }) => {
	return (
		<Link target="_blank" href={url} className={styles.projectItem}>
			<div className={styles.imgContainer}>
				<Image
					src={imageSrc}
					alt={projectName}
					className={styles.projectImage}
				/>
			</div>
			<div className={styles.projectDescription}>
				{projectName} <MdKeyboardArrowRight className={styles.arrow} />
			</div>
		</Link>
	);
};

export default ProjectItem;
