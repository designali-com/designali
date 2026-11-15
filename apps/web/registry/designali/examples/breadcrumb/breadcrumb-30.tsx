"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const pages = ["General", "Billing", "Members", "Security", "Integrations"]

export default function SiblingSwitcherBreadcrumb() {
  const [page, setPage] = React.useState("Billing")

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type="button"
                  className="flex items-center gap-1 text-foreground"
                >
                  {page}
                  <ChevronDownIcon className="size-3.5" />
                </button>
              }
            />
            <DropdownMenuContent align="start" className="w-40">
              <DropdownMenuRadioGroup value={page} onValueChange={setPage}>
                {pages.map((item) => (
                  <DropdownMenuRadioItem key={item} value={item}>
                    {item}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
