import {
  ArchiveIcon,
  FolderIcon,
  FolderInputIcon,
  InboxIcon,
  ReceiptIcon,
  ShieldAlertIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function EmailMoveToNestedMenu() {
  return (
    <div className="flex items-center gap-1 border p-1">
      <Button variant="ghost" size="icon-sm" aria-label="Archive">
        <ArchiveIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Delete">
        <Trash2Icon />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="sm" />}>
          <FolderInputIcon data-icon="inline-start" />
          Move
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuItem>
            <InboxIcon />
            Inbox
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <FolderIcon />
              Projects
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-40">
              <DropdownMenuItem>Harbor redesign</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Clients</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-36">
                  <DropdownMenuItem>Willow & Co</DropdownMenuItem>
                  <DropdownMenuItem>Brightside</DropdownMenuItem>
                  <DropdownMenuItem>Kestrel Labs</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>Internal</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <ReceiptIcon />
            Receipts
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ShieldAlertIcon />
            Report spam
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
