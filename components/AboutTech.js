import Image from "next/image";
import styles from "../styles/components/about.module.css";

export default function AboutTech({ icons }) {
  return (
    <div className={styles.techWrapper}>
      {icons.map((icon) => (
        <Image src={icon} width={40} height={40}></Image>
      ))}
    </div>
  );
}
