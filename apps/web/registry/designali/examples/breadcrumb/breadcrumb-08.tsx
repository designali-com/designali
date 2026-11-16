import { Fragment } from "react"
import {
  GitBranch as GitBranchIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const segments = ["src", "components", "checkout"]

export default function RepositoryPathBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 border p-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium">
              lumen-labs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium text-foreground">
              storefront
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Badge variant="outline" className="gap-1 font-mono">
              <GitBranchIcon />
              main
            </Badge>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbList className="font-mono">
          {segments.map((segment) => (
            <Fragment key={segment}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{segment}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>CartSummary.tsx</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
