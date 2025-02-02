import {
  ContactIcon,
  TechBar,
  TechBarItem,
  TechIconWrapper,
  TipContent,
  CopyIcon,
} from "../styles/AboutStyle";
import globalStyles from "../styles/globals.module.css";
import classNames from "classnames";
import styles from "../styles/components/about.module.css";
import Image from "next/image";
import { message, Tooltip } from "antd";
import { CopyFilled, CheckCircleFilled } from "@ant-design/icons";
import { useState } from "react";

export default function About() {
  const email = "onlyone0608@hufs.ac.kr";
  const [tooltipText, setTooltipText] = useState(email);
  const [copied, setCopied] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

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
                width={54}
                height={54}
              />
              GitHub
            </ContactIcon>
            <ContactIcon
              href="https://www.linkedin.com/in/hyewonkim0608/"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                width={54}
                height={54}
              />
              LinkedIn
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
                  width={54}
                  height={54}
                />
                Gmail
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
      <div className={styles.techWrapper}>
        <TechBar>
          <TechBarItem>Languages</TechBarItem>
          <TechBarItem>Backend</TechBarItem>
          <TechBarItem>Frontend</TechBarItem>
          <TechBarItem>Database</TechBarItem>
          <TechBarItem>Tools</TechBarItem>
        </TechBar>
        <TechIconWrapper>
          <Image src="/django.svg" alt="Django Logo" width={40} height={40} />
          <Image src="/spring.svg" alt="Spring Logo" width={40} height={40} />
        </TechIconWrapper>
      </div>
    </div>
  );
}
