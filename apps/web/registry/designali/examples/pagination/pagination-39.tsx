import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

const current = 4
const total = 9

export default function QueryStringPagination() {
  const href = (page: number) => "?status=active&page=" + page

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-2">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={href(current - 1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={href(1)}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          {[current - 1, current, current + 1].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink href={href(p)} isActive={p === current}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={href(total)}>{total}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={href(current + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <code className="bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
        /orders{href(current)}
      </code>
    </div>
  )
}
