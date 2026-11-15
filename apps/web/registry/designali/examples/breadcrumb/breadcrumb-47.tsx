import { Fragment } from "react"
import { FolderKanbanIcon, HomeIcon, LayoutTemplateIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const levels = [
  { label: "Home", icon: HomeIcon },
  { label: "Projects", icon: FolderKanbanIcon },
  { label: "Website redesign", icon: LayoutTemplateIcon },
]

export default function IconOnlyTooltipBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {levels.map((level) => (
          <Fragment key={level.label}>
            <BreadcrumbItem>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <BreadcrumbLink
                      href="#"
                      aria-label={level.label}
                      className="flex size-6 items-center justify-center hover:bg-muted"
                    >
                      <level.icon className="size-3.5" />
                    </BreadcrumbLink>
                  }
                />
                <TooltipContent>{level.label}</TooltipContent>
              </Tooltip>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>Homepage hero</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
