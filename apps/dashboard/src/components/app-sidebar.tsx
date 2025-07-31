"use client";

import {
  IconBrain,
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconInnerShadowTop,
  IconMessage,
  IconMessageCircle,
  IconPuzzle,
  IconRobot,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Chatbots",
      url: "#",
      icon: IconRobot,
    },
    {
      title: "Conversations",
      url: "#",
      icon: IconMessageCircle,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
  ],
  quickAccess: [
    {
      name: "Knowledge Base",
      url: "#",
      icon: IconBrain,
    },
    {
      name: "Integrations",
      url: "#",
      icon: IconPuzzle,
    },
    {
      name: "Templates",
      url: "#",
      icon: IconMessage,
    },
  ],
  navSecondary: [
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Help",
      url: "#",
      icon: IconHelp,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">TalqBot</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.quickAccess} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
