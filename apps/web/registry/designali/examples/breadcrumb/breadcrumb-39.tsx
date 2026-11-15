import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

export default function UnderlineActiveBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="underline-offset-4 hover:underline"
          >
            Journal
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="underline-offset-4 hover:underline"
          >
            Travel
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="border-b-2 border-primary pb-0.5 font-medium">
            Three days in Kyoto
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
