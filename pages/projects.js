import { ProjectName } from "../styles/ProjectsStyle";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
import styles from "../styles/components/projects.module.css";

export default function Projects() {
  return (
    <div className={classNames(globalStyles.flexRow, styles.indexWrapper)}>
      <div>
        <ProjectName>01</ProjectName>
        <ProjectName>Grocey</ProjectName>
      </div>
      <div>
        <ProjectName>02</ProjectName>
        <ProjectName>Wiseowl</ProjectName>
      </div>
      <div>
        <ProjectName>03</ProjectName>
        <ProjectName>Comming</ProjectName>
        <ProjectName>Soon</ProjectName>
      </div>
    </div>
  );
}
