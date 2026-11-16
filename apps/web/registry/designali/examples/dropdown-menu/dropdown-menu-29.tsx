import {
  ChevronRight as ChevronRightIcon,
  Ellipsis as EllipsisIcon,
  Folder as FolderIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const hidden = ["Clients", "Designali", "2026 projects"]

export default function BreadcrumbOverflowMenu() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1 text-xs text-muted-foreground"
    >
      <a href="#" className="hover:text-foreground">
        Studio
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
        Brand identity
      </a>
      <ChevronRightIcon className="size-3.5" />
      <span className="font-medium text-foreground">Logo assets</span>
    </nav>
  )
}
