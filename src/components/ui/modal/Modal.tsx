import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./Modal.module.scss";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: {
		id: string;
		imageSrc: string;
		projectName: string;
		url: string;
		technologies: string[];
		features: string[];
	} | null;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, project }) => {
	return (
		<AnimatePresence>
			{isOpen && project && (
				<motion.div
					className={styles.overlay}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className={styles.modal}
						layoutId={project.id}
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 50, opacity: 0 }}
					>
						<motion.button onClick={onClose} className={styles.closeButton}>
							<IoMdCloseCircle />
						</motion.button>
						<motion.div className={styles.projectDetails}>
							<motion.h2 className={styles.projectName}>
								{project.projectName}
							</motion.h2>
							<motion.a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.projectLink}
							>
								Visit Project
							</motion.a>
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
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
