'use client';

import * as React from "react"
import { LayoutDashboard, Bug, Users } from "lucide-react"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
   
    {
      title: "Dashboard",
      url: "/admin",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
      {
      title: "News",
      url: "/login",
      icon: <Bug className="w-5 h-5" />
    },
     {
      title: "Pests",
      url: "/adminpest",
      icon: <Bug className="w-5 h-5" />
    },
     {
      title: "Logs",
      url: "/login",
      icon: <Users className="w-5 h-5" />
    },
     {
      title: "Datasets",
      url: "/login",
      icon: <Users className="w-5 h-5" />
    },
       {
      title: "Users",
      url: "/login",
      icon: <Users className="w-5 h-5" />
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", {
      method: "POST",
    });

    router.push("/"); // Redirect to login or home page
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
   
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-medium">
                      {item.icon}
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
       <Button variant="destructive" onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  )
}
