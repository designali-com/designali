import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function CardHeaderBreadcrumb() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Reports</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Weekly signups</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CardTitle>2,418 new accounts</CardTitle>
        <CardDescription>
          Up 12% compared with the previous week.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-16 items-end gap-1">
          {[40, 55, 35, 70, 60, 85, 75].map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-primary/80"
              style={{ height: value + "%" }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
