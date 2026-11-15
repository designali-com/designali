import { GraduationCapIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Progress } from "@workspace/ui/components/progress"

export default function CourseLessonBreadcrumb() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1.5">
              <GraduationCapIcon className="size-3.5" />
              Product analytics
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Module 3</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lesson 2: Funnels</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center gap-2">
        <Progress value={42} className="flex-1" />
        <span className="text-[11px] text-muted-foreground">42%</span>
      </div>
    </div>
  )
}
