import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

export default function LargeSizePagination() {
  return (
    <Pagination>
      <PaginationContent className="gap-1">
        <PaginationItem>
          <PaginationPrevious href="#" size="lg" className="text-sm" />
        </PaginationItem>
        {[1, 2, 3].map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href="#"
              size="icon-lg"
              isActive={p === 1}
              className="text-sm"
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" size="lg" className="text-sm" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
