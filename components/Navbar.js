import styles from "../styles/components/navbar.module.css";
import { MenuItem } from "../styles/NavBarStyles";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

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
        {/* <MenuItem onClick={goToHome}>home</MenuItem> */}
        <MenuItem href="/" active={pathname === "/"}>
          home
        </MenuItem>
        <MenuItem href="/projects" active={pathname === "/projects"}>
          project
        </MenuItem>
        <MenuItem href="/about" active={pathname === "/about"}>
          info
        </MenuItem>
      </div>
      <div className={classNames(globalStyles.flexRow, styles.languageWrapper)}>
        {/* <MenuItem>EN</MenuItem>
        <MenuItem>KR</MenuItem> */}
      </div>
    </div>
  );
}
