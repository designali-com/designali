import { SearchIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Kbd } from "@workspace/ui/components/kbd"

export default function SearchScopeBreadcrumb() {
  return (
    <InputGroup className="w-full max-w-md">
      <InputGroupAddon>
        <SearchIcon />
        <Breadcrumb>
          <BreadcrumbList className="flex-nowrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>API</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </InputGroupAddon>
      <InputGroupInput placeholder="Search endpoints..." />
      <InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}
