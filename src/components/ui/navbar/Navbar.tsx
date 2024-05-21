"use client";

import { FC } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { menu } from "./menu.data";
import { usePathname } from "next/navigation";
import cn from "clsx";
import { motion } from "framer-motion";
import { bottomAnimation } from "@/animations/animations";

const Navbar: FC = () => {
	const pathname = usePathname();

	return (
		<header className={styles.navHeader}>
			<motion.div
				className={styles.navContainer}
				initial="hidden"
				animate="visible"
				variants={bottomAnimation}
				custom={1}
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
