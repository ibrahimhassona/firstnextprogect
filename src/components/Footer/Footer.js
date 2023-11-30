import Image from "next/image";
import styles from "./footer.module.css";
import { social_media } from "./data";
export default function Footer() {
  return (
    <div className={styles.container}>
      <p>©2023 <span className={styles.logo}>HASSOUNA-SHOP</span>. All rights reversed.</p>
      <div className={styles.social}>
        {social_media.map((media) => {
          return (
            <Image
              className={styles.image}
              src={`/images/${media.title}.png`}
              key={media.id}
              width={25}
              height={25}
              alt={`Hexashop ${media.title.toLocaleUpperCase()} Image`}
            />
          );
        })}
      </div>
    </div>
  );
}
