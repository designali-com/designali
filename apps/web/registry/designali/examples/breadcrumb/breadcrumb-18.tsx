import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

export default function ChipBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="border bg-background px-2 py-1 hover:bg-muted"
          >
            Docs
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="border bg-background px-2 py-1 hover:bg-muted"
          >
            Design systems
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="bg-primary px-2 py-1 text-primary-foreground">
            Color tokens
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
