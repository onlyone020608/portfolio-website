import { ContactIcon, TipContent, CopyIcon } from "../styles/AboutStyle";
import globalStyles from "../styles/globals.module.css";
import AboutTech from "@/components/AboutTech";
import classNames from "classnames";
import styles from "../styles/components/about.module.css";
import Image from "next/image";
import { ConfigProvider, message, Tooltip, Segmented } from "antd";
import { CopyFilled, CheckCircleFilled } from "@ant-design/icons";
import { getIcons } from "@/utils/getIcons";
import { useState } from "react";
export async function getStaticProps() {
  const techStacks = {
    Languages: getIcons("languages"),
    Backend: getIcons("backend"),
    Frontend: getIcons("frontend"),
    Tools: getIcons("tools"),
    Database: getIcons("database"),
  };

  return { props: { techStacks } };
}

export default function About({ techStacks }) {
  const email = "onlyone0608@hufs.ac.kr";
  const [tooltipText, setTooltipText] = useState(email);
  const [copied, setCopied] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [mode, setMode] = useState("Languages");
  // const tabItems = ["Languages", "Backend", "Frontend", "Database", "Tools"];
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTooltipText("Email copied to clipboard");
      setTimeout(() => {
        setTooltipText(email);
        setCopied(false);
      }, 2000);
    } catch (err) {
      messageApi.error("Couldn’t copy to clipboard. Please try again.");
    }
  };
  return (
    <div className={styles.wrapper}>
      {contextHolder}
      <div
        className={classNames(globalStyles.flexRow, styles.bodyUpperWrapper)}
      >
        <div
          className={classNames(
            globalStyles.flexColumn,
            styles.bodyUpperLeftWrapper
          )}
        >
          <div className={styles.name}>Hyewon Kim</div>
          <div
            className={classNames(globalStyles.flexRow, styles.contactWrapper)}
          >
            <ContactIcon
              href="https://github.com/onlyone020608"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="GitHub Logo"
                width={42}
                height={42}
              />
              <span>GitHub</span>
            </ContactIcon>
            <ContactIcon
              href="https://www.linkedin.com/in/hyewonkim0608/"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                width={42}
                height={42}
              />
              <span>LinkedIn</span>
            </ContactIcon>
            <Tooltip
              title={
                <TipContent>
                  {tooltipText}
                  {copied ? (
                    <CopyIcon style={{ color: "#52c41a" }}>
                      <CheckCircleFilled
                        style={{ background: "transparent" }}
                      />
                    </CopyIcon>
                  ) : (
                    <CopyIcon onClick={copyEmail}>
                      <CopyFilled
                        style={{ background: "transparent" }}
                        onClick={copyEmail}
                      />
                    </CopyIcon>
                  )}
                </TipContent>
              }
              placement="bottom"
              mouseLeaveDelay={1}
            >
              <ContactIcon>
                <Image
                  src="/gmail.svg"
                  alt="Gmail Logo"
                  width={42}
                  height={42}
                />
                <span>Gmail</span>
              </ContactIcon>
            </Tooltip>
          </div>
        </div>
        <div className={styles.description}>
          Building scalable software and <br></br>solving complex backend
          challenges.
        </div>
      </div>
      <div className={styles.techTitle}>Tech Stack</div>
      <Segmented
        options={["Languages", "Backend", "Frontend", "Database", "Tools"]}
        value={mode}
        onChange={setMode}
        defaultValue="Languages"
      />

      <AboutTech icons={techStacks[mode]} />
    </div>
  );
}
