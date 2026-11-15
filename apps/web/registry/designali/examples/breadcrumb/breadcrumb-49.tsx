import { KanbanIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const members = ["JS", "AK", "LT"]

export default function ProjectBoardBreadcrumb() {
  return (
    <div className="flex w-full max-w-lg flex-wrap items-center justify-between gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Roadmap</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Q1 2027</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="flex items-center gap-1.5">
              <KanbanIcon className="size-3.5" />
              Board
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <AvatarGroup>
        {members.map((member) => (
          <Avatar key={member} size="sm">
            <AvatarFallback>{member}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+4</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
