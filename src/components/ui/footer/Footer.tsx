import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import {
	FaLinkedinIn,
	FaGithub,
	FaFacebookF,
	FaTelegramPlane,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<h3 className={styles.logo}>© 2024 Yaroslav Kucherenko</h3>

				<div className={styles.socialIcons}>
					<a
						href="https://www.linkedin.com/in/yaroslav-kucherenko-500783263/"
						target="_blank"
						className={styles.icon}
					>
						<FaLinkedinIn />
					</a>
					<a
						href="https://github.com/Yaroslav1q2w"
						target="_blank"
						className={styles.icon}
					>
						<FaGithub />
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=100020676831386"
						target="_blank"
						className={styles.icon}
					>
						<FaFacebookF />
					</a>
					<a
						href="https://t.me/yarik_kucherenko"
						target="_blank"
						className={styles.icon}
					>
						<FaTelegramPlane />
					</a>
				</div>
				<div className={styles.right}>
					<Link href="/" className={styles.link}>
						Home
					</Link>
					<Link href="/about" className={styles.link}>
						About
					</Link>
					<Link href="/projects" className={styles.link}>
						Projects
					</Link>
					<Link href="/contact" className={styles.link}>
						Contact
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
