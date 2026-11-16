import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

export default function BlogPostPrevNext() {
  return (
    <Pagination className="max-w-md">
      <PaginationContent className="w-full justify-between gap-4">
        <PaginationItem className="min-w-0">
          <PaginationPrevious href="#" text="Previous post" />
          <p className="truncate ps-2 text-xs text-muted-foreground">
            Shipping 460+ designali blocks
          </p>
        </PaginationItem>
        <PaginationItem className="min-w-0 text-end">
          <PaginationNext href="#" text="Next post" />
          <p className="truncate pe-2 text-xs text-muted-foreground">
            Design se code tak: Figma to Next.js
          </p>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
