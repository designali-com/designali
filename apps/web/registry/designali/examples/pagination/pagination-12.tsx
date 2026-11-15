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
            Designing calmer onboarding
          </p>
        </PaginationItem>
        <PaginationItem className="min-w-0 text-end">
          <PaginationNext href="#" text="Next post" />
          <p className="truncate pe-2 text-xs text-muted-foreground">
            Notes on dense data tables
          </p>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
