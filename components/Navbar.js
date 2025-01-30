import styles from "../styles/components/navbar.module.css";
import { MenuItem } from "../styles/NavBarStyles";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
export default function NavBar() {
  return (
    <div className={classNames(globalStyles.flexRow, styles.navWrapper)}>
      <div className={styles.menuWrapper}>
        <MenuItem>home</MenuItem>
        <MenuItem>project</MenuItem>
        <MenuItem>info</MenuItem>
      </div>
      <div className={classNames(globalStyles.flexRow, styles.languageWrapper)}>
        <MenuItem>EN</MenuItem>
        <MenuItem>KR</MenuItem>
      </div>
    </div>
  );
}
