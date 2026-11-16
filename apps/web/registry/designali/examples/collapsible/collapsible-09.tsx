import {
  ChartBar as ChartBarIcon,
  ChevronRight as ChevronRightIcon,
  FolderKanban as FolderKanbanIcon,
  LayoutDashboard as LayoutDashboardIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

const sections = [
  {
    title: "Workspace",
    icon: LayoutDashboardIcon,
    links: ["Overview", "Inbox", "Calendar"],
    open: true,
  },
  {
    title: "Projects",
    icon: FolderKanbanIcon,
    links: ["designali.com refresh", "Templates", "Brand identity"],
    open: true,
  },
  {
    title: "Reports",
    icon: ChartBarIcon,
    links: ["Template sales", "Downloads"],
    open: false,
  },
]

export default function SidebarNavSections() {
  return (
    <nav className="flex w-full max-w-60 flex-col gap-1 border bg-background p-2">
      {sections.map((section) => (
        <Collapsible key={section.title} defaultOpen={section.open}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <section.icon />
                {section.title}
                <ChevronRightIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-90" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ul className="ml-4 flex flex-col border-l py-1 pl-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={cn(
                      "block px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground",
                      link === "Templates" &&
                        "bg-muted font-medium text-foreground"
                    )}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </nav>
  )
}
