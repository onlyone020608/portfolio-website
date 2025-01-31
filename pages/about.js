import {
  ContactIcon,
  TechBar,
  TechBarItem,
  TechIconWrapper,
} from "../styles/AboutStyle";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
import styles from "../styles/components/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(globalStyles.flexRow, styles.bodyUpperWrapper)}
      >
        <div
          className={classNames(
            globalStyles.flexColumn,
            styles.bodyUpperLeftWrapper
          )}
        >
          <div className={styles.name}>Hyewon Kim</div>
          <div
            className={classNames(globalStyles.flexRow, styles.contactWrapper)}
          >
            <ContactIcon>
              <Image
                src="/github.svg"
                alt="GitHub Logo"
                width={54}
                height={54}
              />
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
        <div className={styles.description}>
          Building scalable software and <br></br>solving complex backend
          challenges.
        </div>
      </div>
      <div className={styles.techTitle}>Tech Stack</div>
      <div className={styles.techWrapper}>
        <TechBar>
          <TechBarItem>Languages</TechBarItem>
          <TechBarItem>Backend</TechBarItem>
          <TechBarItem>Frontend</TechBarItem>
          <TechBarItem>Database</TechBarItem>
          <TechBarItem>Tools</TechBarItem>
        </TechBar>
        <TechIconWrapper>
          <Image src="/django.svg" alt="Django Logo" width={40} height={40} />
          <Image src="/spring.svg" alt="Spring Logo" width={40} height={40} />
        </TechIconWrapper>
      </div>
    </div>
  );
}
