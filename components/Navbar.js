import styles from "../styles/components/navbar.module.css";
import { MenuItem, DropItem } from "../styles/NavBarStyles";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);
  const projectList = useMemo(
    () => [
      {
        key: "1",
        label: <a href="/projects/grocey">Grocey</a>,
        disabled: pathname === "/projects/grocey",
      },
      {
        key: "2",
        label: <a href="/projects/wiseowl">Wiseowl</a>,
        disabled: pathname === "/projects/wiseowl",
      },
      {
        key: "3",
        label: <a href="/projects/grocey">notyet</a>,
        disabled: pathname === "/",
      },
    ],
    [pathname]
  );
  return (
    <div className={classNames(globalStyles.flexRow, styles.navWrapper)}>
      <div className={styles.menuWrapper}>
        <MenuItem href="/" active={pathname === "/"}>
          home
        </MenuItem>
        {pathname.startsWith("/projects/") ? (
          <Dropdown menu={{ items: projectList }}>
            <DropItem
              active={pathname.startsWith("/projects")}
              onClick={(e) => e.preventDefault()}
            >
              projects <DownOutlined />
            </DropItem>
          </Dropdown>
        ) : (
          <MenuItem href="/projects" active={pathname.startsWith("/projects")}>
            project
          </MenuItem>
        )}
        {/* <MenuItem href="/projects" active={pathname.startsWith("/projects")}>
          project
        </MenuItem> */}
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
