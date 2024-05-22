import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./SuccessPopup.module.scss";

interface SuccessPopupProps {
	message: string;
	onClose: () => void;
}

const popupVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const SuccessPopup: FC<SuccessPopupProps> = ({ message, onClose }) => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="hidden"
			variants={popupVariants}
			className={styles.popupGlob}
		>
			<div className={styles.popupWrapper}>
				<div className={styles.popupContent}>
					<p>{message}</p>
					<button onClick={onClose} className={styles.closeButton}>
						Close
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default SuccessPopup;
