import React, { FC } from "react";
import styles from "./Experience.module.scss";
import Image from "next/image";

const Experience: FC = () => {
	return (
		<div className={styles.experienceContainer}>
			<div className={styles.experienceInner}>
				<div className={styles.experienceHeader}>
					<h1 className={styles.experienceTitle}>My Professional Experience</h1>

					<h2 className={styles.companyName}>WhoCPA</h2>
					<p className={styles.workDuration}>Frontend Developer</p>

					<p className={styles.workDuration}>December 2022 - March 2024</p>
				</div>

				<div className={styles.experienceContent}>
					<Image
						src="/laptop.webp"
						alt="Company Logo"
						width={400}
						height={600}
						className={styles.experienceImg}
					/>
					<div className={styles.experienceDetails}>
						<p className={styles.workDescription}>
							<span className={styles.experienceColor}>
								As a frontend developer
							</span>
							, I specialized in designing adaptive landing and pre-landing
							pages, ensuring a high-quality user experience across a variety of
							devices. My work encompassed the full cycle of webpage
							creation—from conception to implementation—with a particular focus
							on interface detailing and interaction optimization.
						</p>
						<p className={styles.workDescription}>
							<span className={styles.experienceColor}>I effectively </span>
							implemented engaging animations and transitions that significantly
							increased user engagement and enhanced site interaction. This not
							only ensured the smoothness and visual appeal of the pages but
							also contributed to increased conversion rates thanks to a better
							user experience.
						</p>
						<p className={styles.workDescription}>
							<span className={styles.experienceColor}>Additionally </span>,
							experienceColorI developed web pages with integrated server
							requests to optimize functionality and ensure fast content
							delivery. My proficiency in HTML, CSS, and JavaScript allowed me
							to produce clean, efficient code that meets modern web standards
							and adjusts to different browsers and screen sizes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
