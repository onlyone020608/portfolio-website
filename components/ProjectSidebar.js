import { SidebarWrapper, SidebarItem } from "@/styles/ProjectSidebarStyles";
import { useState } from "react";
export default function ProjectSidebar({ activeTab, onTabChange }) {
  const tabs = [
    "overview",
    "my role",
    "tech stack",
    "key features",
    "challenges & outcomes",
  ];
  return (
    <SidebarWrapper>
      {tabs.map((tab) => (
        <SidebarItem
          key={tab}
          active={activeTab === tab}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </SidebarItem>
      ))}
    </SidebarWrapper>
  );
}
