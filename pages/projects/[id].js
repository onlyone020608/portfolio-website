import ProjectSidebar from "@/components/ProjectSidebar";
import styles from "@/styles/components/project.module.css";
import { LinkItem } from "@/styles/ProjectStyles";
import Image from "next/image";
export default function project() {
  return (
    <>
      <div className={styles.projectTitle}>Grocey</div>
      <div className={styles.projectSubtitle}>
        grocery recommendation system
      </div>
      <div>
        <LinkItem>
          <Image src="/livedemo.svg" alt="GitHub Logo" width={40} height={40} />
          Live Demo
        </LinkItem>
        <LinkItem>
          <Image src="/github2.svg" alt="GitHub Logo" width={40} height={40} />
          GitHub
        </LinkItem>
      </div>
      <ProjectSidebar></ProjectSidebar>
    </>
  );
}
