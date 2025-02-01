import { SidebarWrapper, SidebarItem } from "@/styles/ProjectSidebarStyles";
import { useState } from "react";
export default function ProjectSidebar() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <SidebarWrapper>
      <SidebarItem
        active={activeTab === "overview"}
        onClick={() => setActiveTab("overview")}
      >
        overview
      </SidebarItem>
      <SidebarItem
        active={activeTab === "my role"}
        onClick={() => setActiveTab("my role")}
      >
        my role
      </SidebarItem>
      <SidebarItem
        active={activeTab === "tech stack"}
        onClick={() => setActiveTab("tech stack")}
      >
        tech stack
      </SidebarItem>
      <SidebarItem
        active={activeTab === "key features"}
        onClick={() => setActiveTab("key features")}
      >
        key features
      </SidebarItem>
      <SidebarItem
        active={activeTab === "challenges & outcomes"}
        onClick={() => setActiveTab("challenges & outcomes")}
      >
        challenges & outcomes
      </SidebarItem>
    </SidebarWrapper>
  );
}
