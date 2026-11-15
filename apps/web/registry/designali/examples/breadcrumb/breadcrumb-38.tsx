import { CornerDownRightIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@workspace/ui/components/breadcrumb"

const levels = ["Acme Wiki", "Engineering", "Runbooks", "Database failover"]

export default function VerticalTreeBreadcrumb() {
  return (
    <Breadcrumb className="w-full max-w-xs border p-3">
      <BreadcrumbList className="flex-col items-start gap-1">
        {levels.map((level, index) => {
          const isLast = index === levels.length - 1
          return (
            <BreadcrumbItem
              key={level}
              style={{ paddingInlineStart: index * 12 }}
            >
              {index > 0 && (
                <CornerDownRightIcon className="size-3 text-muted-foreground/60" />
              )}
              {isLast ? (
                <BreadcrumbPage className="font-medium">{level}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href="#">{level}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
