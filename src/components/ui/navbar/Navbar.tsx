"use client";

import { FC } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { menu } from "./menu.data";
import { usePathname } from "next/navigation";
import cn from "clsx";
import { motion } from "framer-motion";

const headerAnimation = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
			delay: 1,
		},
	},
};

const Navbar: FC = () => {
	const pathname = usePathname();

	return (
		<header className={styles.navHeader}>
			<motion.div
				className={styles.navContainer}
				initial="hidden"
				animate="visible"
				variants={headerAnimation}
			>
				<Link href="/" className={styles.navLogo}>
					Portfolio
				</Link>
				<nav className={styles.navList}>
					{menu.map((item) => (
						<Link
							key={item.name}
							href={item.link}
							className={cn(styles.navItem, {
								[styles.active]: pathname === item.link,
							})}
						>
							{item.name}
						</Link>
					))}
				</nav>
			</motion.div>
		</header>
	);
};

export default Navbar;
