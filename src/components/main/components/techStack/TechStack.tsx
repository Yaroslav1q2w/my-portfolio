import { FC } from "react";
import styles from "./TechStack.module.scss";
import { technologies } from "./tech.data";

const TechStack: FC = () => {
	return (
		<div className={styles.techStack}>
			<div className={styles.techContent}>
				<h3 className={styles.techTitle}>The technologies I use</h3>
				<div className={styles.techList}>
					{technologies.map((item) => (
						<div key={item.name} className={styles.techItem}>
							<span className={styles.techIcon}>
								<item.Icon />
							</span>
							<span className={styles.techName}>{item.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechStack;
