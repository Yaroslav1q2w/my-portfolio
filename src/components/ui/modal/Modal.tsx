import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./Modal.module.scss";
import { opacityAnimation } from "@/animations/animations";
import { IProjectItem } from "@/types/projectItem.types";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: IProjectItem | null;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, project }) => {
	const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	if (!project) return null;

	return (
		<AnimatePresence>
			{isOpen && project && (
				<motion.div
					className={styles.overlay}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
				>
					<motion.div
						className={styles.modal}
						layoutId={project.id}
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 50, opacity: 0 }}
						onClick={handleModalClick}
					>
						<motion.button
							onClick={onClose}
							className={styles.closeButton}
							variants={opacityAnimation}
							initial="hidden"
							animate="visible"
							custom={0.6}
						>
							<IoMdCloseCircle />
						</motion.button>
						<motion.div className={styles.projectDetails}>
							<motion.h2 className={styles.projectName}>
								{project.projectName}
							</motion.h2>

							<motion.h3 className={styles.sectionTitle}>
								Technologies:
							</motion.h3>
							<motion.ul className={styles.technologyList}>
								{project.technologies.map((tech, index) => (
									<motion.li key={index} className={styles.technologyItem}>
										{tech}
									</motion.li>
								))}
							</motion.ul>
							<motion.h3 className={styles.sectionTitle}>Features:</motion.h3>
							<motion.ul className={styles.featureList}>
								{project.features.map((feature, index) => (
									<motion.li key={index} className={styles.featureItem}>
										{feature}
									</motion.li>
								))}
							</motion.ul>
							<motion.a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.projectLink}
								whileHover={{ scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 8 }}
							>
								Visit Project
							</motion.a>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
