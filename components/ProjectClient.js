import { useState } from "react";
import ProjectSidebar from "@/components/ProjectSidebar";
import styles from "@/styles/components/project.module.css";
import { LinkItem } from "@/styles/ProjectStyles";
import Overview from "./projects/Overview";
import Myrole from "./projects/Myrole";
import KeyFeatures from "./projects/KeyFeatures";
import Techstack from "./projects/Techstack";
import Image from "next/image";

export default function ProjectClient({ project }) {
  const [activeTab, setActiveTab] = useState("overview");

  const TABS = {
    overview: Overview,
    "my role": Myrole,
    "tech stack": Techstack,
    "key features": KeyFeatures,
    // "challenges & outcomes":Challenges
  };

  const ActiveComponent = TABS[activeTab] || Overview;

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
        <ProjectSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
        ></ProjectSidebar>
        {/* <div>내용이 들어갈 부분입니다.</div> */}
        <ActiveComponent project={project} />
      </div>
    </div>
  );
}
