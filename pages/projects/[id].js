import ProjectSidebar from "@/components/ProjectSidebar";
import styles from "@/styles/components/project.module.css";
import { LinkItem } from "@/styles/ProjectStyles";
import { useState } from "next/navigation";
import projectData from "@/data/projects";
import Image from "next/image";
import ProjectClient from "@/components/ProjectClient";

export async function getServerSideProps({ params }) {
  const { id } = params;
  const project = projectData[id] || null;
  console.log(projectData[id]);
  return {
    props: { project },
  };
}

export default function project({ project }) {
  return (
    <div>
      <ProjectClient project={project}></ProjectClient>
    </div>
  );
}
