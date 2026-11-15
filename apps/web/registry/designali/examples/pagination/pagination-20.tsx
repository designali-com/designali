import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

export default function RtlPagination() {
  return (
    <div dir="rtl" className="w-full max-w-md">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" text="السابق" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">١</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              ٢
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">٣</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" text="التالي" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
