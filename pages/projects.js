import { ProjectName, ProjectLink } from "../styles/ProjectsStyle";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
import styles from "../styles/components/projects.module.css";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={classNames(globalStyles.flexRow, styles.indexWrapper)}>
      <div>
        <ProjectLink href="/projects/grocey">
          <ProjectName>01</ProjectName>
          <ProjectName>Grocey</ProjectName>
        </ProjectLink>
      </div>
      <div>
        <ProjectLink href="/projects/wiseowl">
          <ProjectName>02</ProjectName>
          <ProjectName>Wiseowl</ProjectName>
        </ProjectLink>
      </div>
      <div>
        <ProjectName>03</ProjectName>
        <ProjectName>Comming</ProjectName>
        <ProjectName>Soon</ProjectName>
      </div>
    </div>
  );
}
