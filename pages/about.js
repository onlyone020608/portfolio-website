import { ContactIcon } from "../styles/AboutStyle";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
import styles from "../styles/components/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className={styles.name}>Hyewon Kim</div>
      <div className={globalStyles.flexRow}>
        <ContactIcon>
          <Image src="/github.svg" alt="GitHub Logo" width={54} height={54} />
          GitHub
        </ContactIcon>
        <ContactIcon>
          <Image
            src="/linkedin.svg"
            alt="LinkedIn Logo"
            width={54}
            height={54}
          />
          LinkedIn
        </ContactIcon>
        <ContactIcon>
          <Image src="/gmail.svg" alt="Gmail Logo" width={54} height={54} />
          Gmail
        </ContactIcon>
      </div>
    </div>
  );
}
