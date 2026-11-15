import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

export default function SmallSizePagination() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-3">
      <span className="text-xs font-medium">Recent deployments</span>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" size="sm" />
          </PaginationItem>
          {[1, 2, 3, 4].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                size="icon-sm"
                isActive={p === 2}
                className="text-[11px]"
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" size="sm" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
