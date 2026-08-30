"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  FileCode,
  AppWindow
} from "lucide-react";

import type { source } from "@/src/lib/source";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";

const TOP_LEVEL_SECTIONS = [
  {
    name: "Introduction",
    href: "/docs",
    icon: BookOpen,
  },
];

const BOTTOM_LEVEL_SECTIONS = [
  {
    name: "Templates",
    href: "/templates",
    icon: AppWindow,
  },
];


const EXCLUDED_SECTIONS: string[] = [];
const EXCLUDED_PAGES: string[] = [];
const NEW_COMPONENTS: string[] = [];

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  tree: typeof source.pageTree;
}) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="mt-6" {...props}>
      <SidebarContent>
        <SidebarTrigger className="absolute right-2.5 top-6 z-10 opacity-60" />
        <SidebarGroup >
          <SidebarGroupContent>
            <SidebarMenu className="pt-12">
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => {
                const isActive = pathname === href;

                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={name}
                      render={<Link href={href} />}
                      className={`
                        transition-opacity hover:text-primary duration-200
                        ${isActive
                          ? "opacity-100 text-primary"
                          : "opacity-60 hover:opacity-100"
                        }
                    `}
                    >
                      <BookOpen className="size-3.5 shrink-0" />
                      <span>{name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Dynamic Documentation Sections */}
        {tree.children.map((section) => {
          const sectionId = section.$id ? String(section.$id) : "";
          const sectionNameStr = section.name ? String(section.name) : "";

          if (EXCLUDED_SECTIONS.includes(sectionId)) {
            return null;
          }

          if (section.type !== "folder") {
            return null;
          }


          return (
            <SidebarGroup key={sectionId || sectionNameStr}>
              <SidebarGroupLabel className="flex items-center gap-2">
                <span>{section.name}</span>
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {section.children.map((page) => {
                    if (page.type !== "page") {
                      return null;
                    }

                    if (EXCLUDED_PAGES.includes(page.url)) {
                      return null;
                    }

                    const isActive = pathname === page.url;
                    const isNew = NEW_COMPONENTS.includes(
                      page.$id ? String(page.$id) : ""
                    );
                    const pageNameStr = page.name ? String(page.name) : "";

                    return (
                      <SidebarMenuItem key={page.url}>
                        <SidebarMenuButton
                          isActive={isActive}
                          tooltip={pageNameStr}
                          render={<Link href={page.url} />}
                          className={`
                            transition-opacity hover:text-primary duration-200
                            ${isActive
                              ? "opacity-100 text-primary"
                              : "opacity-60 hover:opacity-100"
                            }
                        `}
                        >
                          <FileCode className="size-3.5 shrink-0" />
                          <span>{page.name}</span>
                          {isNew && (
                            <span
                              className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                              aria-label="New"
                            />
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>

              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
        <SidebarGroup>
          <SidebarMenu>
            {BOTTOM_LEVEL_SECTIONS.map(({ name, href }) => {
              const isActive = pathname === href;

              return (
                <SidebarMenuItem key={name}>
                  <SidebarMenuButton
                    isActive={isActive}
                    tooltip={name}
                    render={<Link href={href} />}
                    className={`
                        transition-opacity hover:text-primary duration-200
                        ${isActive
                        ? "opacity-100 text-primary"
                        : "opacity-60 hover:opacity-100"
                      }
                    `}
                  >
                    <BookOpen className="size-3.5 shrink-0" />
                    <span>{name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}