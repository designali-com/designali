import {
  Archive as ArchiveIcon,
  Copy as CopyIcon,
  Ellipsis as MoreHorizontalIcon,
  Pencil as PencilIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const invoices = [
  { id: "INV-2041", customer: "Brand identity project", amount: "$1,240.00" },
  { id: "INV-2042", customer: "Designali Templates", amount: "$860.50" },
  { id: "INV-2043", customer: "Next.js website build", amount: "$3,120.00" },
]

export default function TableRowActions() {
  return (
    <div className="w-full max-w-md divide-y border">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="flex items-center gap-3 px-3 py-2 text-xs"
        >
          <span className="font-mono text-muted-foreground">{invoice.id}</span>
          <span className="flex-1 truncate font-medium">
            {invoice.customer}
          </span>
          <span className="tabular-nums">{invoice.amount}</span>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label={"Actions for " + invoice.id}
                />
              }
            >
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>
                <PencilIcon />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}
