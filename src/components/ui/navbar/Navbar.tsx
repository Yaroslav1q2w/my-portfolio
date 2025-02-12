"use client";

import { FC } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { menu } from "./menu.data";
import { usePathname } from "next/navigation";
import cn from "clsx";
import { motion } from "framer-motion";
import { bottomAnimation } from "@/animations/animations";
import MobileMenu from "../mobileMenu/MobileMenu";
import logoImg from "../../../../public/logo.png"
import Image from "next/image";

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
        <Image
						className={styles.logoImg}
						src={logoImg}
						alt="Logo"
						// priority={true}
					/>
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
				<MobileMenu />
			</motion.div>
		</header>
	);
};

export default Navbar;
