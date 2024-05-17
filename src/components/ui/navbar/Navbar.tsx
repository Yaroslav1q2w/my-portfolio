"use client";

import { FC } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { menu } from "./menu.data";
import { usePathname } from "next/navigation";
import cn from "clsx";

const Navbar: FC = () => {
	const pathname = usePathname();

	return (
		<header className={styles.navHeader}>
			<div className={styles.navContainer}>
				<Link href="/" className={styles.navLogo}>
					Portfolio
				</Link>
				<nav>
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
			</div>
		</header>
	);
};

export default Navbar;
