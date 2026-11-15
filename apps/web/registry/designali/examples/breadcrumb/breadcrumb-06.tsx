import { Fragment } from "react"
import { FileTextIcon, FolderIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const folders = ["My Drive", "Clients", "Northwind Studio"]

export default function FileManagerBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {folders.map((folder) => (
          <Fragment key={folder}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                <FolderIcon className="size-3.5" />
                {folder}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1.5">
            <FileTextIcon className="size-3.5" />
            Brand guidelines.pdf
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
