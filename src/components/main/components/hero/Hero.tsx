import { FC } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero: FC = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroContent}>
				<div className={styles.heroDescription}>
					<h1 className={styles.heroTitle}>I'm Yaroslav Kucherenko</h1>
					<h1 className={styles.heroTitle}>Frontend Web Developer</h1>
					<p className={styles.heroText}>
						Front end developer who writes clean, elegant and efficient code.
						<br />
						Crafting responsive, user-centric websites and web applications with
						the latest technologies for seamless digital experiences.
					</p>
				</div>
				<Image src="/IMG_6690.jpg" alt="hero" width={400} height={600} />
			</div>
		</div>
	);
};

export default Hero;
