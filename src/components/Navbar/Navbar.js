import Link from "next/link";
import styles from "./Navbar.module.css";
import { Links } from "./data";
import Button from "../Button/Button";
import { Lobster_Two } from "next/font/google";
import DarkMoodToggle from "../DarkMoodToggle/DarkMoodToggle";
const logoFont = Lobster_Two({ subsets: ["latin"], weight: ["700"] });

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo} ${logoFont.className}`}>
        HASSOUNA-<span>SHOP</span>
      </Link>
      <div className={styles.list}>
        <DarkMoodToggle />
        {Links.map((link) => {
          return (
            <Link href={link.url} key={link.id} className={styles.link}>
              {link.title}
            </Link>
          );
        })}

        <Button />
      </div>
    </div>
  );
}
