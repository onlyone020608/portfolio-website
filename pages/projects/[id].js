import ProjectSidebar from "@/components/ProjectSidebar";
import styles from "@/styles/components/project.module.css";
import { LinkItem } from "@/styles/ProjectStyles";
import Image from "next/image";
export default function project() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.projectTitle}>Grocey</div>
          <div className={styles.projectSubtitle}>
            grocery recommendation system
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <LinkItem>
            <Image
              src="/livedemo.svg"
              alt="GitHub Logo"
              width={40}
              height={40}
            />
            Live Demo
          </LinkItem>
          <LinkItem>
            <Image
              src="/github2.svg"
              alt="GitHub Logo"
              width={40}
              height={40}
            />
            GitHub
          </LinkItem>
        </div>
      </div>
      <div className={styles.bodyWrapper}>
        <ProjectSidebar></ProjectSidebar>
        <div>내용이 들어갈 부분입니다.</div>
      </div>
    </div>
  );
}
