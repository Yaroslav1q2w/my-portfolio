import { FC } from "react";
import styles from "./About.module.scss";
import profileImage from "../../assets/images/profile.jpg";
import Image from "next/image";

const About: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerBlock}>
				<div className={styles.imageContainer}>
					<Image
						src="/IMG_6690.jpg"
						alt="about-img"
						width={400}
						height={600}
						className={styles.profileImage}
					/>
				</div>
				<div className={styles.content}>
					<h2 className={styles.title}>About Me.</h2>
					<p className={styles.text}>
						As a frontend developer with a deep passion for creating dynamic web
						applications, I specialize in using cutting-edge technologies and
						best development practices. My skills encompass HTML5, CSS3,
						JavaScript (ES6+), React, and Node.js, allowing me to create
						user-friendly and adaptive designs optimized for the best user
						experience.
					</p>
					<p className={styles.text}>
						In my professional development, I am constantly progressing and
						refining my skills. I enjoy setting myself new challenges and
						continuously improving my abilities to provide quality and
						innovative solutions in my projects. I believe that continuous
						self-improvement is the key to success in any field, so I
						enthusiastically embrace new challenges and enrich my knowledge."
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
