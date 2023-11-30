import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/home.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your one-stop e-commerice destination!</h1>
        <p className={styles.describtion}>
          Discover a word of endless shopping possibilities,choose, and order
          your favorite products from the comfort of your home .
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.image} src={Hero} alt="Hexa Shop" />
      </div>
    </div>
  );
}
