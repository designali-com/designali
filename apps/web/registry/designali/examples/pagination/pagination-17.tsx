import { LockIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

export default function DisabledPagination() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-2">
      <Pagination aria-disabled className="pointer-events-none opacity-50">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" tabIndex={-1} />
          </PaginationItem>
          {[1, 2, 3].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink href="#" tabIndex={-1} isActive={p === 1}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" tabIndex={-1} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <LockIcon className="size-3" />
        Navigation paused while the index rebuilds
      </p>
    </div>
  )
}
