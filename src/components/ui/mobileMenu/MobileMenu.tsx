"use client";

import { FC, useState, useEffect } from "react";
import styles from "./MobileMenu.module.scss";
import Link from "next/link";
import { menu } from "../navbar/menu.data";
import { motion, useAnimate, stagger } from "framer-motion";
import { usePathname } from "next/navigation";
import cn from "clsx";
import useMenuAnimation from "@/hooks/useMenuAnimation";

const MobileMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const scope = useMenuAnimation(isOpen);
	const pathname = usePathname();

	const toggleOpen = () => setIsOpen((prev) => !prev);

	return (
		<div ref={scope} className={styles.menuContainer}>
			<motion.nav
				initial={false}
				animate={isOpen ? "open" : "closed"}
				className={styles.mobileMenu}
			>
				<motion.ul>
					{menu.map((item, index) => (
						<motion.li key={item.name} custom={index} onClick={toggleOpen}>
							<Link
								href={item.link}
								className={cn(styles.navItem, {
									[styles.active]: pathname === item.link,
								})}
							>
								{item.name}
							</Link>
						</motion.li>
					))}
				</motion.ul>
			</motion.nav>
			<button className={styles.menuToggle} onClick={toggleOpen}>
				<motion.div
					animate={isOpen ? "open" : "closed"}
					transition={{ duration: 0.6, ease: [0.08, 0.65, 0.53, 0.96] }}
				>
					<svg width="23" height="18" viewBox="0 0 23 18">
						<motion.path
							className="top"
							fill="transparent"
							strokeWidth="3"
							stroke="#fff"
							strokeLinecap="round"
							d="M 2 2.5 L 20 2.5"
						/>
						<motion.path
							className="middle"
							fill="transparent"
							strokeWidth="3"
							stroke="#fff"
							strokeLinecap="round"
							d="M 2 9.423 L 20 9.423"
						/>
						<motion.path
							className="bottom"
							fill="transparent"
							strokeWidth="3"
							stroke="#fff"
							strokeLinecap="round"
							d="M 2 16.346 L 20 16.346"
						/>
					</svg>
				</motion.div>
			</button>
		</div>
	);
};

export default MobileMenu;
