import { ChevronRightIcon, EllipsisIcon, FolderIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const hidden = ["Clients", "Northwind", "2026 campaigns"]

export default function BreadcrumbOverflowMenu() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1 text-xs text-muted-foreground"
    >
      <a href="#" className="hover:text-foreground">
        Drive
      </a>
      <ChevronRightIcon className="size-3.5" />
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Show hidden folders"
            />
          }
        >
          <EllipsisIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          {hidden.map((folder) => (
            <DropdownMenuItem
              key={folder}
              nativeButton={false}
              render={<a href="#" />}
            >
              <FolderIcon />
              {folder}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <ChevronRightIcon className="size-3.5" />
      <a href="#" className="hover:text-foreground">
        Spring launch
      </a>
      <ChevronRightIcon className="size-3.5" />
      <span className="font-medium text-foreground">Hero assets</span>
    </nav>
  )
}
