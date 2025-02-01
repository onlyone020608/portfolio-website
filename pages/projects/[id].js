import ProjectSidebar from "@/components/ProjectSidebar";
import styles from "@/styles/components/project.module.css";
import { LinkItem } from "@/styles/ProjectStyles";
import { useRouter } from "next/navigation";
import projectData from "@/data/projects";
import Image from "next/image";

export async function getServerSideProps({ params }) {
  const { id } = params;
  const project = projectData[id] || null;
  console.log(projectData[id]);
  return {
    props: { project },
  };
}

export default function project({ project }) {
  // const project = projectData[id];

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.projectTitle}>{project.title}</div>
          <div className={styles.projectSubtitle}>{project.description}</div>
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
