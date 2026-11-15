import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const sizes = [
  { label: "Small", list: "text-[11px] gap-1", icon: "[&>svg]:size-3" },
  { label: "Default", list: "", icon: "" },
  { label: "Large", list: "text-sm gap-2", icon: "[&>svg]:size-4" },
]

export default function SizeScaleBreadcrumb() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col gap-1">
          <span className="text-[10px] tracking-wide text-muted-foreground uppercase">
            {size.label}
          </span>
          <Breadcrumb>
            <BreadcrumbList className={size.list}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Account</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className={size.icon} />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Billing</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className={size.icon} />
              <BreadcrumbItem>
                <BreadcrumbPage>Invoices</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      ))}
    </div>
  )
}
