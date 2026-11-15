import { InboxIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

export default function EmptyResultsPagination() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex flex-col items-center gap-1 py-4 text-center">
        <InboxIcon className="size-6 text-muted-foreground" />
        <span className="text-sm font-medium">No orders yet</span>
        <span className="text-xs text-muted-foreground">
          Orders will appear here once customers check out.
        </span>
      </div>
      <div className="flex items-center justify-between border-t pt-3">
        <span className="text-xs text-muted-foreground">0 results</span>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                aria-disabled
                tabIndex={-1}
                className="pointer-events-none opacity-50"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                aria-disabled
                tabIndex={-1}
                className="pointer-events-none opacity-50"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
