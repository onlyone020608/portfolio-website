import styles from "../styles/components/navbar.module.css";
import { MenuItem } from "../styles/NavBarStyles";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  const goToAbout = () => {
    router.push("/about");
  };

  const goToHome = () => {
    router.push("/");
  };

  const goToProject = () => {
    router.push("/projects");
  };

  return (
    <div className={classNames(globalStyles.flexRow, styles.navWrapper)}>
      <div className={styles.menuWrapper}>
        <MenuItem onClick={goToHome}>home</MenuItem>
        <MenuItem onClick={goToProject}>project</MenuItem>
        <MenuItem onClick={goToAbout}>info</MenuItem>
      </div>
      <div className={classNames(globalStyles.flexRow, styles.languageWrapper)}>
        <MenuItem>EN</MenuItem>
        <MenuItem>KR</MenuItem>
      </div>
    </div>
  );
}
