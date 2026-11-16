import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from "@designali/icons"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@workspace/ui/components/pagination"

export default function DocsPrevNextCards() {
  return (
    <Pagination className="max-w-md">
      <PaginationContent className="grid w-full grid-cols-2 gap-3">
        <PaginationItem>
          <a
            href="#"
            className="flex flex-col gap-1 border p-3 transition-colors hover:bg-muted"
          >
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <ArrowLeftIcon className="size-3" /> Previous
            </span>
            <span className="truncate text-sm font-medium">Installation</span>
          </a>
        </PaginationItem>
        <PaginationItem>
          <a
            href="#"
            className="flex flex-col items-end gap-1 border p-3 text-end transition-colors hover:bg-muted"
          >
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              Next <ArrowRightIcon className="size-3" />
            </span>
            <span className="truncate text-sm font-medium">Theming</span>
          </a>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
