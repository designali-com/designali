import { ArrowRightIcon, ChevronsRightIcon, DotIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const styles = [
  { label: "Chevron", separator: null },
  { label: "Slash", separator: "/" },
  { label: "Dot", separator: "dot" },
  { label: "Arrow", separator: "arrow" },
  { label: "Chevrons", separator: "chevrons" },
]

function Sep({ type }: { type: string | null }) {
  if (type === "/") return <BreadcrumbSeparator>/</BreadcrumbSeparator>
  if (type === "dot")
    return (
      <BreadcrumbSeparator>
        <DotIcon />
      </BreadcrumbSeparator>
    )
  if (type === "arrow")
    return (
      <BreadcrumbSeparator>
        <ArrowRightIcon />
      </BreadcrumbSeparator>
    )
  if (type === "chevrons")
    return (
      <BreadcrumbSeparator>
        <ChevronsRightIcon />
      </BreadcrumbSeparator>
    )
  return <BreadcrumbSeparator />
}

export default function SeparatorStylesBreadcrumb() {
  return (
    <div className="grid gap-3">
      {styles.map((style) => (
        <div
          key={style.label}
          className="grid grid-cols-[72px_1fr] items-center gap-2"
        >
          <span className="text-[10px] text-muted-foreground uppercase">
            {style.label}
          </span>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <Sep type={style.separator} />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Reports</BreadcrumbLink>
              </BreadcrumbItem>
              <Sep type={style.separator} />
              <BreadcrumbItem>
                <BreadcrumbPage>Q3</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      ))}
    </div>
  )
}
