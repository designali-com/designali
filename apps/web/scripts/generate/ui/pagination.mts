import { type Example } from "./_lib.mjs"

/** Shared page-range helper embedded in examples that need ellipses. */
const RANGE = `
function getPages(current: number, total: number, siblings = 1) {
  const pages: (number | "ellipsis")[] = [1]
  const start = Math.max(2, current - siblings)
  const end = Math.min(total - 1, current + siblings)
  if (start > 2) pages.push("ellipsis")
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push("ellipsis")
  if (total > 1) pages.push(total)
  return pages
}`

const examples: Example[] = [
  {
    name: "ControlledPagination",
    description: "Stateful pagination that disables Previous and Next at the first and last page.",
    code: `
const TOTAL = 5

export default function ControlledPagination() {
  const [page, setPage] = React.useState(1)

  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    setPage(Math.min(TOTAL, Math.max(1, next)))
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => go(event, page - 1)}
            />
          </PaginationItem>
          {Array.from({ length: TOTAL }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink href="#" isActive={p === page} onClick={(event) => go(event, p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              aria-disabled={page === TOTAL}
              className={cn(page === TOTAL && "pointer-events-none opacity-50")}
              onClick={(event) => go(event, page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-xs text-muted-foreground">
        Page {page} of {TOTAL}
      </p>
    </div>
  )
}`,
  },
  {
    name: "EllipsisRangePagination",
    description: "Pagination for 24 pages that collapses distant pages into ellipses around the current page.",
    code: `
${RANGE}

const TOTAL = 24

export default function EllipsisRangePagination() {
  const [page, setPage] = React.useState(9)

  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    setPage(Math.min(TOTAL, Math.max(1, next)))
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={(event) => go(event, page - 1)} />
        </PaginationItem>
        {getPages(page, TOTAL).map((p, index) =>
          p === "ellipsis" ? (
            <PaginationItem key={"ellipsis-" + index}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink href="#" isActive={p === page} onClick={(event) => go(event, p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext href="#" onClick={(event) => go(event, page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
  },
  {
    name: "TableFooterPagination",
    description: "Customer table that slices rows per page with a range summary and pagination in the footer.",
    code: `
const customers = [
  { name: "Maya Chen", plan: "Pro", seats: 12 },
  { name: "Jonah Okafor", plan: "Starter", seats: 3 },
  { name: "Priya Raman", plan: "Business", seats: 48 },
  { name: "Leo Varga", plan: "Pro", seats: 9 },
  { name: "Ines Duarte", plan: "Starter", seats: 2 },
  { name: "Tomas Lind", plan: "Business", seats: 31 },
  { name: "Aiko Mori", plan: "Pro", seats: 15 },
  { name: "Sam Whitfield", plan: "Starter", seats: 1 },
  { name: "Noor Haddad", plan: "Pro", seats: 7 },
  { name: "Elena Petrova", plan: "Business", seats: 64 },
  { name: "Kofi Mensah", plan: "Starter", seats: 4 },
]

const PAGE_SIZE = 4

export default function TableFooterPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(customers.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const rows = customers.slice(start, start + PAGE_SIZE)

  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    setPage(Math.min(pageCount, Math.max(1, next)))
  }

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-end">Seats</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.plan}</TableCell>
              <TableCell className="text-end tabular-nums">{row.seats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t p-2">
        <p className="text-xs text-muted-foreground">
          {start + 1}-{Math.min(start + PAGE_SIZE, customers.length)} of {customers.length}
        </p>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={(event) => go(event, page - 1)} />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink href="#" size="icon-sm" isActive={p === page} onClick={(event) => go(event, p)}>
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={(event) => go(event, page + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PageSizeTogglePagination",
    description: "Pagination whose page count updates when the page size is switched with a toggle group.",
    code: `
const TOTAL_ITEMS = 120

export default function PageSizeTogglePagination() {
  const [size, setSize] = React.useState(20)
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(TOTAL_ITEMS / size)
  const visible = Array.from({ length: Math.min(pageCount, 5) }, (_, i) => i + 1)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">Items per page</span>
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          value={[String(size)]}
          onValueChange={(value) => {
            if (!value.length) return
            setSize(Number(value[0]))
            setPage(1)
          }}
        >
          {[10, 20, 40].map((option) => (
            <ToggleGroupItem key={option} value={String(option)}>
              {option}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <Pagination>
        <PaginationContent>
          {visible.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          {pageCount > 5 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={page === pageCount}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(pageCount)
                  }}
                >
                  {pageCount}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
      <p className="text-center text-xs text-muted-foreground">
        {pageCount} pages of {size} items
      </p>
    </div>
  )
}`,
  },
  {
    name: "FirstLastPagination",
    description: "Pagination with jump-to-first and jump-to-last icon links beside Previous and Next.",
    code: `
const TOTAL = 40

export default function FirstLastPagination() {
  const [page, setPage] = React.useState(12)
  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    setPage(Math.min(TOTAL, Math.max(1, next)))
  }
  const atStart = page === 1
  const atEnd = page === TOTAL

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to first page"
            aria-disabled={atStart}
            className={cn(atStart && "pointer-events-none opacity-50")}
            onClick={(event) => go(event, 1)}
          >
            <ChevronsLeftIcon />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={atStart}
            className={cn(atStart && "pointer-events-none opacity-50")}
            onClick={(event) => go(event, page - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size="default" onClick={(event) => event.preventDefault()}>
            {page} / {TOTAL}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={atEnd}
            className={cn(atEnd && "pointer-events-none opacity-50")}
            onClick={(event) => go(event, page + 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to last page"
            aria-disabled={atEnd}
            className={cn(atEnd && "pointer-events-none opacity-50")}
            onClick={(event) => go(event, TOTAL)}
          >
            <ChevronsRightIcon />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
  },
  {
    name: "IconOnlyPageIndicator",
    description: "Icon-only previous and next links around a plain page indicator for tight toolbars.",
    code: `
const TOTAL = 18

export default function IconOnlyPageIndicator() {
  const [page, setPage] = React.useState(3)

  return (
    <div className="flex w-full max-w-xs items-center justify-between border px-3 py-1.5">
      <span className="text-xs font-medium">Activity</span>
      <Pagination className="mx-0 w-auto">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationLink
              href="#"
              size="icon-sm"
              aria-label="Previous page"
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            >
              <ChevronLeftIcon />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <span className="px-1 text-xs tabular-nums text-muted-foreground">
              Page {page} of {TOTAL}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              size="icon-sm"
              aria-label="Next page"
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(TOTAL, p + 1))
              }}
            >
              <ChevronRightIcon />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "CompactMobilePagination",
    description: "Full-width mobile pagination with large tap targets and a centered page counter.",
    code: `
const TOTAL = 9

export default function CompactMobilePagination() {
  const [page, setPage] = React.useState(4)

  return (
    <Pagination className="max-w-xs">
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            text="Back"
            className="border"
            onClick={(event) => {
              event.preventDefault()
              setPage((p) => Math.max(1, p - 1))
            }}
          />
        </PaginationItem>
        <PaginationItem className="text-sm tabular-nums">
          <span className="font-semibold">{page}</span>
          <span className="text-muted-foreground"> / {TOTAL}</span>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            text="More"
            className="border"
            onClick={(event) => {
              event.preventDefault()
              setPage((p) => Math.min(TOTAL, p + 1))
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
  },
  {
    name: "JumpToPagePagination",
    description: "Ellipsis pagination paired with a go-to-page field that validates the entered number.",
    code: `
${RANGE}

const TOTAL = 64

export default function JumpToPagePagination() {
  const [page, setPage] = React.useState(1)
  const [draft, setDraft] = React.useState("")
  const value = Number(draft)
  const invalid = draft !== "" && (!Number.isInteger(value) || value < 1 || value > TOTAL)

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          {getPages(page, TOTAL).map((p, index) =>
            p === "ellipsis" ? (
              <PaginationItem key={"e" + index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === page}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(p)
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}
        </PaginationContent>
      </Pagination>
      <form
        className="flex items-center gap-2"
        onSubmit={(event) => {
          event.preventDefault()
          if (invalid || draft === "") return
          setPage(value)
          setDraft("")
        }}
      >
        <Label htmlFor="jump-page" className="text-xs text-muted-foreground">
          Go to
        </Label>
        <Input
          id="jump-page"
          inputMode="numeric"
          placeholder={String(page)}
          value={draft}
          aria-invalid={invalid}
          onChange={(event) => setDraft(event.target.value)}
          className="h-8 w-16"
        />
        <Button type="submit" size="sm" variant="outline" disabled={invalid || draft === ""}>
          Go
        </Button>
      </form>
      {invalid && <p className="text-xs text-destructive">Enter a page between 1 and {TOTAL}.</p>}
    </div>
  )
}`,
  },
  {
    name: "BlogPostPrevNext",
    description: "Article footer pagination with previous and next post titles instead of page numbers.",
    code: `
export default function BlogPostPrevNext() {
  return (
    <Pagination className="max-w-md">
      <PaginationContent className="w-full justify-between gap-4">
        <PaginationItem className="min-w-0">
          <PaginationPrevious href="#" text="Previous post" />
          <p className="truncate ps-2 text-xs text-muted-foreground">Designing calmer onboarding</p>
        </PaginationItem>
        <PaginationItem className="min-w-0 text-end">
          <PaginationNext href="#" text="Next post" />
          <p className="truncate pe-2 text-xs text-muted-foreground">Notes on dense data tables</p>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
  },
  {
    name: "SearchResultsPagination",
    description: "Search results list with a result count and centered pagination underneath.",
    code: `
const results = [
  { title: "Rotating API keys safely", path: "docs / security" },
  { title: "Key scopes and permissions", path: "docs / access" },
  { title: "Revoking a leaked key", path: "guides / incidents" },
]

export default function SearchResultsPagination() {
  const [page, setPage] = React.useState(1)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <p className="text-xs text-muted-foreground">About 1,240 results for &quot;api keys&quot;</p>
      <ul className="flex flex-col gap-3">
        {results.map((result) => (
          <li key={result.title} className="flex flex-col gap-0.5">
            <span className="text-[11px] text-muted-foreground">{result.path}</span>
            <a href="#" className="text-sm font-medium hover:underline">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            />
          </PaginationItem>
          {[1, 2, 3, 4].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => p + 1)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "ProductGridPagination",
    description: "Storefront product grid that pages through items with gradient placeholders.",
    code: `
const products = [
  { name: "Linen Tote", price: 38, tone: "from-amber-200 to-orange-300" },
  { name: "Canvas Cap", price: 24, tone: "from-sky-200 to-indigo-300" },
  { name: "Wool Beanie", price: 29, tone: "from-rose-200 to-pink-300" },
  { name: "Trail Bottle", price: 19, tone: "from-emerald-200 to-teal-300" },
  { name: "Desk Mat", price: 42, tone: "from-violet-200 to-purple-300" },
  { name: "Cork Coasters", price: 16, tone: "from-lime-200 to-green-300" },
  { name: "Field Notebook", price: 12, tone: "from-yellow-200 to-amber-300" },
  { name: "Pocket Lamp", price: 34, tone: "from-cyan-200 to-sky-300" },
  { name: "Clay Mug", price: 22, tone: "from-orange-200 to-red-300" },
]

const PAGE_SIZE = 3

export default function ProductGridPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(products.length / PAGE_SIZE)
  const items = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {items.map((product) => (
          <div key={product.name} className="flex flex-col gap-1.5">
            <div className={cn("aspect-square bg-gradient-to-br", product.tone)} />
            <span className="truncate text-xs font-medium">{product.name}</span>
            <span className="text-xs text-muted-foreground">\${product.price}</span>
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            />
          </PaginationItem>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              aria-disabled={page === pageCount}
              className={cn(page === pageCount && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(pageCount, p + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "CommentsThreadPagination",
    description: "Discussion thread showing a page of comments with older and newer navigation.",
    code: `
const pages = [
  [
    { author: "Rhea Kapoor", time: "2h ago", body: "The new export flow is so much faster." },
    { author: "Dario Mendes", time: "3h ago", body: "Can we get CSV headers localized too?" },
  ],
  [
    { author: "Hana Sato", time: "Yesterday", body: "Filed the date-format bug on the tracker." },
    { author: "Owen Brandt", time: "Yesterday", body: "Thanks for shipping the dark mode fix!" },
  ],
  [
    { author: "Lucia Romero", time: "2 days ago", body: "First! Looking forward to the beta." },
  ],
]

export default function CommentsThreadPagination() {
  const [page, setPage] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Comments</span>
        <Badge variant="secondary">5</Badge>
      </div>
      <ul className="flex min-h-32 flex-col gap-3">
        {pages[page]!.map((comment) => (
          <li key={comment.author} className="flex gap-2">
            <Avatar size="sm">
              <AvatarFallback>
                {comment.author
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium">
                {comment.author} <span className="font-normal text-muted-foreground">· {comment.time}</span>
              </span>
              <p className="text-xs text-muted-foreground">{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Newer"
              aria-disabled={page === 0}
              className={cn(page === 0 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(0, p - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text="Older"
              aria-disabled={page === pages.length - 1}
              className={cn(page === pages.length - 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(pages.length - 1, p + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "InboxRangePagination",
    description: "Mail toolbar with a message range label and icon-only paging controls.",
    code: `
const TOTAL = 2384
const PAGE_SIZE = 50

export default function InboxRangePagination() {
  const [page, setPage] = React.useState(1)
  const start = (page - 1) * PAGE_SIZE + 1
  const end = Math.min(page * PAGE_SIZE, TOTAL)
  const last = Math.ceil(TOTAL / PAGE_SIZE)

  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2 border-b px-2 py-1">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="Refresh">
          <RefreshCwIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Archive">
          <ArchiveIcon />
        </Button>
      </div>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem className="pe-1 text-xs tabular-nums text-muted-foreground">
            {start.toLocaleString()}-{end.toLocaleString()} of {TOTAL.toLocaleString()}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              size="icon-sm"
              aria-label="Newer messages"
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            >
              <ChevronLeftIcon />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              size="icon-sm"
              aria-label="Older messages"
              aria-disabled={page === last}
              className={cn(page === last && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(last, p + 1))
              }}
            >
              <ChevronRightIcon />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "DisabledPagination",
    description: "Fully disabled pagination shown while a dataset is locked for re-indexing.",
    code: `
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
}`,
  },
  {
    name: "LoadingPagePagination",
    description: "Pagination that shows a spinner on the requested page while results load.",
    code: `
export default function LoadingPagePagination() {
  const [page, setPage] = React.useState(1)
  const [pending, setPending] = React.useState<number | null>(null)

  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    if (pending || next === page) return
    setPending(next)
    window.setTimeout(() => {
      setPage(next)
      setPending(null)
    }, 900)
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <div className="flex h-16 w-full items-center justify-center border border-dashed text-xs text-muted-foreground">
        {pending ? "Fetching page " + pending + "..." : "Showing results on page " + page}
      </div>
      <Pagination aria-busy={pending !== null}>
        <PaginationContent>
          {[1, 2, 3, 4, 5].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink href="#" isActive={p === page} onClick={(event) => go(event, p)}>
                {pending === p ? <Spinner /> : p}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "ChangelogNewerOlder",
    description: "Changelog pager with custom Newer and Older labels and the current release in between.",
    code: `
const releases = ["v3.4.0", "v3.3.2", "v3.3.1", "v3.3.0", "v3.2.0"]

export default function ChangelogNewerOlder() {
  const [index, setIndex] = React.useState(1)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline">{releases[index]}</Badge>
        {index === 0 && <Badge>Latest</Badge>}
      </div>
      <p className="text-xs text-muted-foreground">
        Improved sync reliability, faster cold starts, and a new audit log export.
      </p>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Newer"
              aria-disabled={index === 0}
              className={cn(index === 0 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setIndex((i) => Math.max(0, i - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text="Older"
              aria-disabled={index === releases.length - 1}
              className={cn(index === releases.length - 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setIndex((i) => Math.min(releases.length - 1, i + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "RtlPagination",
    description: "Right-to-left pagination with Arabic labels where the chevrons flip automatically.",
    code: `
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
}`,
  },
  {
    name: "SmallSizePagination",
    description: "Dense small-size pagination for side panels and compact widgets.",
    code: `
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
              <PaginationLink href="#" size="icon-sm" isActive={p === 2} className="text-[11px]">
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
}`,
  },
  {
    name: "LargeSizePagination",
    description: "Large pagination with bigger hit areas for touch-first dashboards and kiosks.",
    code: `
export default function LargeSizePagination() {
  return (
    <Pagination>
      <PaginationContent className="gap-1">
        <PaginationItem>
          <PaginationPrevious href="#" size="lg" className="text-sm" />
        </PaginationItem>
        {[1, 2, 3].map((p) => (
          <PaginationItem key={p}>
            <PaginationLink href="#" size="icon-lg" isActive={p === 1} className="text-sm">
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
}`,
  },
  {
    name: "SegmentedPagination",
    description: "Joined, bordered pagination segments that read as a single control.",
    code: `
export default function SegmentedPagination() {
  const [page, setPage] = React.useState(3)

  return (
    <Pagination>
      <PaginationContent className="gap-0 border [&_li+li]:border-s">
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Previous page"
            onClick={(event) => {
              event.preventDefault()
              setPage((p) => Math.max(1, p - 1))
            }}
          >
            <ChevronLeftIcon />
          </PaginationLink>
        </PaginationItem>
        {[1, 2, 3, 4, 5].map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href="#"
              isActive={p === page}
              className="border-0 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              onClick={(event) => {
                event.preventDefault()
                setPage(p)
              }}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Next page"
            onClick={(event) => {
              event.preventDefault()
              setPage((p) => Math.min(5, p + 1))
            }}
          >
            <ChevronRightIcon />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
  },
  {
    name: "DotsPagination",
    description: "Dot-style pagination for a testimonial slider, with arrows and accessible labels.",
    code: `
const quotes = [
  { text: "We closed our books two days faster.", who: "Farah Idris, Finance Lead" },
  { text: "Onboarding new hires is finally painless.", who: "Mateo Silva, Ops Manager" },
  { text: "The reports basically write themselves.", who: "Grace Liu, Analyst" },
  { text: "Support answers within minutes, every time.", who: "Ben Adler, Founder" },
]

export default function DotsPagination() {
  const [index, setIndex] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 border p-5 text-center">
      <QuoteIcon className="size-5 text-muted-foreground" />
      <p className="text-sm">{quotes[index]!.text}</p>
      <span className="text-xs text-muted-foreground">{quotes[index]!.who}</span>
      <Pagination>
        <PaginationContent className="gap-1">
          {quotes.map((quote, i) => (
            <PaginationItem key={quote.who}>
              <PaginationLink
                href="#"
                size="icon-xs"
                isActive={i === index}
                aria-label={"Show testimonial " + (i + 1)}
                className="border-0 hover:bg-transparent"
                onClick={(event) => {
                  event.preventDefault()
                  setIndex(i)
                }}
              >
                <span
                  className={cn(
                    "block size-1.5 rounded-full bg-muted-foreground/40 transition-all",
                    i === index && "w-4 bg-foreground"
                  )}
                />
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "OnboardingStepPagination",
    description: "Onboarding wizard footer with Back and Continue links and a step counter.",
    code: `
const steps = ["Create workspace", "Invite your team", "Connect a data source", "Pick a template"]

export default function OnboardingStepPagination() {
  const [step, setStep] = React.useState(1)
  const last = step === steps.length - 1

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Step {step + 1} of {steps.length}
        </span>
        <span className="text-sm font-medium">{steps[step]}</span>
      </div>
      <div className="flex gap-1">
        {steps.map((label, i) => (
          <span key={label} className={cn("h-1 flex-1 bg-muted", i <= step && "bg-primary")} />
        ))}
      </div>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Back"
              aria-disabled={step === 0}
              className={cn(step === 0 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setStep((s) => Math.max(0, s - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text={last ? "Finish" : "Continue"}
              className="border"
              onClick={(event) => {
                event.preventDefault()
                setStep((s) => Math.min(steps.length - 1, s + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "AlphabetPagination",
    description: "A-to-Z directory index where letters without entries are disabled.",
    code: `
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const available = new Set(["A", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W"])

export default function AlphabetPagination() {
  const [letter, setLetter] = React.useState("M")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Pagination>
        <PaginationContent className="flex-wrap justify-center">
          {letters.map((l) => {
            const disabled = !available.has(l)
            return (
              <PaginationItem key={l}>
                <PaginationLink
                  href="#"
                  size="icon-xs"
                  isActive={l === letter}
                  aria-disabled={disabled}
                  className={cn("text-[11px]", disabled && "pointer-events-none opacity-30")}
                  onClick={(event) => {
                    event.preventDefault()
                    setLetter(l)
                  }}
                >
                  {l}
                </PaginationLink>
              </PaginationItem>
            )
          })}
        </PaginationContent>
      </Pagination>
      <p className="text-center text-xs text-muted-foreground">Showing contacts starting with {letter}</p>
    </div>
  )
}`,
  },
  {
    name: "MonthNavigatorPagination",
    description: "Month-by-month report navigator with a Today shortcut and month label.",
    code: `
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function MonthNavigatorPagination() {
  const [offset, setOffset] = React.useState(10)
  const year = 2026 + Math.floor(offset / 12)
  const label = months[((offset % 12) + 12) % 12] + " " + year

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-2 border p-2">
      <Button variant="outline" size="sm" onClick={() => setOffset(10)}>
        Today
      </Button>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Previous month"
              onClick={(event) => {
                event.preventDefault()
                setOffset((o) => o - 1)
              }}
            >
              <ChevronLeftIcon />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-32 text-center text-sm font-medium">{label}</PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Next month"
              onClick={(event) => {
                event.preventDefault()
                setOffset((o) => o + 1)
              }}
            >
              <ChevronRightIcon />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "DocsPrevNextCards",
    description: "Documentation footer with bordered previous and next cards that show page titles.",
    code: `
export default function DocsPrevNextCards() {
  return (
    <Pagination className="max-w-md">
      <PaginationContent className="grid w-full grid-cols-2 gap-3">
        <PaginationItem>
          <a href="#" className="flex flex-col gap-1 border p-3 transition-colors hover:bg-muted">
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <ArrowLeftIcon className="size-3" /> Previous
            </span>
            <span className="truncate text-sm font-medium">Installation</span>
          </a>
        </PaginationItem>
        <PaginationItem>
          <a href="#" className="flex flex-col items-end gap-1 border p-3 text-end transition-colors hover:bg-muted">
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              Next <ArrowRightIcon className="size-3" />
            </span>
            <span className="truncate text-sm font-medium">Theming</span>
          </a>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
  },
  {
    name: "GalleryThumbnailPagination",
    description: "Gallery viewer where gradient thumbnails act as the page links.",
    code: `
const slides = [
  "from-rose-400 to-orange-300",
  "from-sky-400 to-indigo-400",
  "from-emerald-400 to-lime-300",
  "from-violet-400 to-fuchsia-400",
  "from-amber-300 to-yellow-200",
]

export default function GalleryThumbnailPagination() {
  const [index, setIndex] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className={cn("relative aspect-video bg-gradient-to-br", slides[index])}>
        <span className="absolute end-2 bottom-2 bg-background/80 px-1.5 py-0.5 text-[11px] tabular-nums">
          {index + 1} / {slides.length}
        </span>
      </div>
      <Pagination>
        <PaginationContent className="gap-1.5">
          {slides.map((tone, i) => (
            <PaginationItem key={tone}>
              <PaginationLink
                href="#"
                isActive={i === index}
                aria-label={"Show image " + (i + 1)}
                className={cn(
                  "h-9 w-12 bg-gradient-to-br p-0 opacity-60 hover:opacity-100 data-[active=true]:opacity-100 data-[active=true]:ring-2 data-[active=true]:ring-ring",
                  tone
                )}
                onClick={(event) => {
                  event.preventDefault()
                  setIndex(i)
                }}
              />
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "CursorPagination",
    description: "Cursor-based API pagination that keeps a history stack instead of page numbers.",
    code: `
const cursors = ["evt_9f2a", "evt_81cd", "evt_77b0", "evt_6e13"]

export default function CursorPagination() {
  const [history, setHistory] = React.useState<string[]>([cursors[0]!])
  const current = history[history.length - 1]!
  const nextIndex = cursors.indexOf(current) + 1
  const hasMore = nextIndex < cursors.length

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Webhook events</span>
        <code className="bg-muted px-1.5 py-0.5 font-mono text-[11px]">after={current}</code>
      </div>
      <p className="text-xs text-muted-foreground">
        {history.length} {history.length === 1 ? "batch" : "batches"} loaded · 25 events each
      </p>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={history.length === 1}
              className={cn(history.length === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setHistory((h) => h.slice(0, -1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text={hasMore ? "Next" : "End of feed"}
              aria-disabled={!hasMore}
              className={cn(!hasMore && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                if (hasMore) setHistory((h) => [...h, cursors[nextIndex]!])
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "KeyboardPagination",
    description: "Pagination that also responds to the left and right arrow keys, with key hints.",
    code: `
const TOTAL = 8

export default function KeyboardPagination() {
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (target.closest("input, textarea")) return
      if (event.key === "ArrowLeft") setPage((p) => Math.max(1, p - 1))
      if (event.key === "ArrowRight") setPage((p) => Math.min(TOTAL, p + 1))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          {Array.from({ length: TOTAL }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                size="icon-sm"
                isActive={p === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        Use <Kbd>←</Kbd> <Kbd>→</Kbd> to change pages
      </p>
    </div>
  )
}`,
  },
  {
    name: "UnreadMarkerPagination",
    description: "Review queue pagination with dots marking pages that contain unread items.",
    code: `
const unread = new Set([2, 5])

export default function UnreadMarkerPagination() {
  const [page, setPage] = React.useState(1)

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-2">
      <Pagination>
        <PaginationContent>
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                className="relative"
                aria-label={unread.has(p) ? "Page " + p + ", has unread reviews" : "Page " + p}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
                {unread.has(p) && <span className="absolute end-1 top-1 size-1.5 rounded-full bg-primary" />}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <p className="text-xs text-muted-foreground">Pages with a dot contain unread reviews</p>
    </div>
  )
}`,
  },
  {
    name: "QuizQuestionPagination",
    description: "Exam navigator showing answered, flagged, and current questions as page links.",
    code: `
const answered = new Set([1, 2, 3, 5, 6, 8])
const flagged = new Set([4, 9])

export default function QuizQuestionPagination() {
  const [question, setQuestion] = React.useState(7)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Question {question} of 12</span>
        <span className="text-muted-foreground">{answered.size} answered</span>
      </div>
      <Pagination>
        <PaginationContent className="grid grid-cols-6 gap-1">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((q) => (
            <PaginationItem key={q}>
              <PaginationLink
                href="#"
                size="icon-sm"
                isActive={q === question}
                className={cn(
                  "w-full",
                  answered.has(q) && q !== question && "bg-muted",
                  flagged.has(q) && "text-amber-600 dark:text-amber-400"
                )}
                onClick={(event) => {
                  event.preventDefault()
                  setQuestion(q)
                }}
              >
                {flagged.has(q) ? <FlagIcon className="size-3" /> : q}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <div className="flex gap-3 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="size-2 bg-muted ring-1 ring-border" /> Answered
        </span>
        <span className="flex items-center gap-1">
          <FlagIcon className="size-3 text-amber-600 dark:text-amber-400" /> Flagged
        </span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "InvoiceListPagination",
    description: "Billing card listing invoices page by page with status badges.",
    code: `
const invoices = [
  { id: "INV-2041", date: "Nov 1, 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-2017", date: "Oct 1, 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1988", date: "Sep 1, 2026", amount: "$199.00", status: "Refunded" },
  { id: "INV-1952", date: "Aug 1, 2026", amount: "$199.00", status: "Paid" },
  { id: "INV-1930", date: "Jul 1, 2026", amount: "$199.00", status: "Failed" },
  { id: "INV-1904", date: "Jun 1, 2026", amount: "$199.00", status: "Paid" },
]

const PAGE_SIZE = 3

export default function InvoiceListPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(invoices.length / PAGE_SIZE)
  const rows = invoices.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <CardDescription>Billing history for Northwind Studio</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col divide-y">
        {rows.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between py-2 text-xs">
            <div className="flex flex-col">
              <span className="font-medium">{invoice.id}</span>
              <span className="text-muted-foreground">{invoice.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="tabular-nums">{invoice.amount}</span>
              <Badge variant={invoice.status === "Failed" ? "destructive" : invoice.status === "Paid" ? "secondary" : "outline"}>
                {invoice.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.max(1, p - 1))
                }}
              />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === page}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(p)
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.min(pageCount, p + 1))
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "AuditLogPagination",
    description: "Admin audit log with a rows-per-page select that resets pagination to the first page.",
    code: `
${RANGE}

const TOTAL_EVENTS = 312
const sizes = [
  { label: "10", value: "10" },
  { label: "25", value: "25" },
  { label: "50", value: "50" },
]

export default function AuditLogPagination() {
  const [size, setSize] = React.useState(25)
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(TOTAL_EVENTS / size)
  const start = (page - 1) * size + 1

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-sm font-medium">
          <ShieldCheckIcon className="size-4" /> Audit log
        </span>
        <Select
          items={sizes}
          value={String(size)}
          onValueChange={(value) => {
            setSize(Number(value))
            setPage(1)
          }}
        >
          <SelectTrigger size="sm" className="w-20" aria-label="Rows per page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <p className="text-xs text-muted-foreground">
        Events {start}-{Math.min(start + size - 1, TOTAL_EVENTS)} of {TOTAL_EVENTS}
      </p>
      <Pagination>
        <PaginationContent>
          {getPages(page, pageCount).map((p, index) =>
            p === "ellipsis" ? (
              <PaginationItem key={"e" + index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  size="icon-sm"
                  isActive={p === page}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(p)
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "TabsWithPagination",
    description: "Issue tracker tabs where each tab keeps its own independent page state.",
    code: `
const counts: Record<string, number> = { open: 6, closed: 3 }

export default function TabsWithPagination() {
  const [pages, setPages] = React.useState<Record<string, number>>({ open: 1, closed: 1 })

  return (
    <Tabs defaultValue="open" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="open">Open</TabsTrigger>
        <TabsTrigger value="closed">Closed</TabsTrigger>
      </TabsList>
      {Object.keys(counts).map((tab) => (
        <TabsContent key={tab} value={tab} className="flex flex-col gap-3 border p-3">
          <p className="text-xs text-muted-foreground">
            Viewing page {pages[tab]} of {counts[tab]} {tab} issues
          </p>
          <Pagination>
            <PaginationContent>
              {Array.from({ length: counts[tab]! }, (_, i) => i + 1).map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    href="#"
                    size="icon-sm"
                    isActive={p === pages[tab]}
                    onClick={(event) => {
                      event.preventDefault()
                      setPages((prev) => ({ ...prev, [tab]: p }))
                    }}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "FilteredListPagination",
    description: "Searchable team list whose pagination resets and recalculates as the filter changes.",
    code: `
const people = [
  "Ava Lindqvist", "Ben Osei", "Cara Novak", "Dev Malhotra", "Eli Brooks", "Fatima Zahir",
  "Gus Moreau", "Hiro Tanaka", "Isla Grant", "Jae Park", "Kira Volkov", "Liam Doyle",
  "Mina Rahimi", "Nico Bauer",
]

const PAGE_SIZE = 4

export default function FilteredListPagination() {
  const [query, setQuery] = React.useState("")
  const [page, setPage] = React.useState(1)
  const filtered = people.filter((p) => p.toLowerCase().includes(query.toLowerCase()))
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Filter teammates"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setPage(1)
          }}
        />
      </InputGroup>
      <ul className="flex min-h-28 flex-col divide-y border">
        {rows.length ? (
          rows.map((person) => (
            <li key={person} className="px-3 py-1.5 text-xs">
              {person}
            </li>
          ))
        ) : (
          <li className="p-3 text-center text-xs text-muted-foreground">No teammates match.</li>
        )}
      </ul>
      <Pagination>
        <PaginationContent>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                size="icon-sm"
                isActive={p === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "EmptyResultsPagination",
    description: "Empty state with pagination controls rendered but disabled because there are no results.",
    code: `
export default function EmptyResultsPagination() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex flex-col items-center gap-1 py-4 text-center">
        <InboxIcon className="size-6 text-muted-foreground" />
        <span className="text-sm font-medium">No orders yet</span>
        <span className="text-xs text-muted-foreground">Orders will appear here once customers check out.</span>
      </div>
      <div className="flex items-center justify-between border-t pt-3">
        <span className="text-xs text-muted-foreground">0 results</span>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" aria-disabled tabIndex={-1} className="pointer-events-none opacity-50" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" aria-disabled tabIndex={-1} className="pointer-events-none opacity-50" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}`,
  },
  {
    name: "QueryStringPagination",
    description: "Server-rendered style pagination whose links point at ?page= URLs with no client state.",
    code: `
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
}`,
  },
  {
    name: "VerticalPagination",
    description: "Vertically stacked pagination used as a section rail in a settings sidebar.",
    code: `
const sections = ["Profile", "Security", "Notifications", "Billing", "Integrations"]

export default function VerticalPagination() {
  const [active, setActive] = React.useState(1)

  return (
    <div className="flex w-full max-w-sm gap-4 border p-3">
      <Pagination className="mx-0 w-auto">
        <PaginationContent className="flex-col items-stretch">
          {sections.map((section, i) => (
            <PaginationItem key={section}>
              <PaginationLink
                href="#"
                size="sm"
                isActive={i === active}
                className="w-full justify-start gap-2"
                onClick={(event) => {
                  event.preventDefault()
                  setActive(i)
                }}
              >
                <span className="text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {section}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <div className="flex flex-1 flex-col gap-1 border-s ps-4">
        <span className="text-sm font-medium">{sections[active]}</span>
        <span className="text-xs text-muted-foreground">Section {active + 1} of {sections.length}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ChapterReaderPagination",
    description: "E-reader footer with chapter navigation and a reading progress bar.",
    code: `
const chapters = ["The Harbor", "Salt and Iron", "A Quiet Ledger", "North Wind", "Lanterns", "Homecoming"]

export default function ChapterReaderPagination() {
  const [chapter, setChapter] = React.useState(2)
  const progress = Math.round(((chapter + 1) / chapters.length) * 100)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">
          Chapter {chapter + 1}: {chapters[chapter]}
        </span>
        <span className="text-xs text-muted-foreground tabular-nums">{progress}%</span>
      </div>
      <Progress value={progress} />
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Prev chapter"
              aria-disabled={chapter === 0}
              className={cn(chapter === 0 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setChapter((c) => Math.max(0, c - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text="Next chapter"
              aria-disabled={chapter === chapters.length - 1}
              className={cn(chapter === chapters.length - 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setChapter((c) => Math.min(chapters.length - 1, c + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "WeekRangePagination",
    description: "Schedule header that pages week by week and shows the visible date range.",
    code: `
const base = new Date(2026, 10, 9)

function formatRange(offset: number) {
  const start = new Date(base)
  start.setDate(base.getDate() + offset * 7)
  const end = new Date(start)
  end.setDate(start.getDate() + 6)
  const fmt = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  return fmt(start) + " - " + fmt(end)
}

export default function WeekRangePagination() {
  const [offset, setOffset] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-sm font-medium">
          <CalendarDaysIcon className="size-4" /> {formatRange(offset)}
        </span>
        {offset === 0 && <Badge variant="secondary">This week</Badge>}
      </div>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Last week"
              onClick={(event) => {
                event.preventDefault()
                setOffset((o) => o - 1)
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              size="sm"
              isActive={offset === 0}
              onClick={(event) => {
                event.preventDefault()
                setOffset(0)
              }}
            >
              Today
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text="Next week"
              onClick={(event) => {
                event.preventDefault()
                setOffset((o) => o + 1)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "LeaderboardPagination",
    description: "Leaderboard with ranked players and a shortcut that jumps to the page with your rank.",
    code: `
const players = Array.from({ length: 30 }, (_, i) => ({
  rank: i + 1,
  name: ["Nova", "Pixel", "Rook", "Echo", "Sable", "Vex"][i % 6] + " " + (100 + i * 7),
  score: 9800 - i * 173,
}))

const PAGE_SIZE = 5
const MY_RANK = 23

export default function LeaderboardPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(players.length / PAGE_SIZE)
  const rows = players.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-sm font-medium">
          <TrophyIcon className="size-4" /> Season leaderboard
        </span>
        <Button variant="outline" size="xs" onClick={() => setPage(Math.ceil(MY_RANK / PAGE_SIZE))}>
          My rank
        </Button>
      </div>
      <ol className="flex flex-col">
        {rows.map((player) => (
          <li
            key={player.rank}
            className={cn("flex items-center gap-2 px-2 py-1 text-xs", player.rank === MY_RANK && "bg-muted font-medium")}
          >
            <span className="w-5 text-muted-foreground tabular-nums">{player.rank}</span>
            <span className="flex-1">{player.rank === MY_RANK ? "You" : player.name}</span>
            <span className="tabular-nums">{player.score.toLocaleString()}</span>
          </li>
        ))}
      </ol>
      <Pagination>
        <PaginationContent>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                size="icon-sm"
                isActive={p === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "FileManagerPagination",
    description: "File browser with a folder breadcrumb, file rows, and pagination with item totals.",
    code: `
const files = [
  { name: "brand-guidelines.pdf", size: "4.2 MB", icon: FileTextIcon },
  { name: "q4-forecast.xlsx", size: "860 KB", icon: FileSpreadsheetIcon },
  { name: "launch-teaser.mp4", size: "38 MB", icon: FileVideoIcon },
  { name: "logo-pack.zip", size: "12 MB", icon: FileArchiveIcon },
  { name: "meeting-notes.md", size: "14 KB", icon: FileTextIcon },
  { name: "survey-results.csv", size: "220 KB", icon: FileSpreadsheetIcon },
  { name: "intro-voiceover.wav", size: "9.1 MB", icon: FileAudioIcon },
  { name: "press-kit.zip", size: "26 MB", icon: FileArchiveIcon },
]

const PAGE_SIZE = 4

export default function FileManagerPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(files.length / PAGE_SIZE)
  const rows = files.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center gap-1.5 border-b px-3 py-2 text-xs text-muted-foreground">
        <FolderIcon className="size-3.5" /> Marketing <ChevronRightIcon className="size-3" />
        <span className="text-foreground">Launch</span>
      </div>
      <ul className="flex flex-col divide-y">
        {rows.map((file) => (
          <li key={file.name} className="flex items-center gap-2 px-3 py-2 text-xs">
            <file.icon className="size-4 text-muted-foreground" />
            <span className="flex-1 truncate">{file.name}</span>
            <span className="text-muted-foreground">{file.size}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t px-3 py-1.5">
        <span className="text-xs text-muted-foreground">{files.length} items</span>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon-sm"
                aria-label="Previous page"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.max(1, p - 1))
                }}
              >
                <ChevronLeftIcon />
              </PaginationLink>
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  size="icon-sm"
                  isActive={p === page}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(p)
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon-sm"
                aria-label="Next page"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.min(pageCount, p + 1))
                }}
              >
                <ChevronRightIcon />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ReleaseHistoryPagination",
    description: "Version history timeline that pages through releases with version-labelled links.",
    code: `
const versions = ["2.0", "2.1", "2.2", "2.3", "2.4", "2.5"]
const notes: Record<string, string> = {
  "2.0": "New sync engine and offline mode.",
  "2.1": "Shared folders and granular permissions.",
  "2.2": "Faster search with typo tolerance.",
  "2.3": "Two-factor recovery codes.",
  "2.4": "Bulk edit for tags and owners.",
  "2.5": "Workspace analytics dashboard.",
}

export default function ReleaseHistoryPagination() {
  const [version, setVersion] = React.useState("2.5")

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <HistoryIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Release {version}</span>
      </div>
      <p className="text-xs text-muted-foreground">{notes[version]}</p>
      <Pagination>
        <PaginationContent className="flex-wrap">
          {versions.map((v) => (
            <PaginationItem key={v}>
              <PaginationLink
                href="#"
                size="sm"
                isActive={v === version}
                className="font-mono"
                onClick={(event) => {
                  event.preventDefault()
                  setVersion(v)
                }}
              >
                v{v}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "SliderScrubberPagination",
    description: "Pagination for a 200-page document paired with a slider to scrub quickly across pages.",
    code: `
${RANGE}

const TOTAL = 200

export default function SliderScrubberPagination() {
  const [page, setPage] = React.useState(86)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground tabular-nums">1</span>
        <Slider
          min={1}
          max={TOTAL}
          value={[page]}
          onValueChange={(value) => setPage(Array.isArray(value) ? value[0]! : value)}
          aria-label="Scrub pages"
        />
        <span className="text-xs text-muted-foreground tabular-nums">{TOTAL}</span>
      </div>
      <Pagination>
        <PaginationContent>
          {getPages(page, TOTAL).map((p, index) =>
            p === "ellipsis" ? (
              <PaginationItem key={"e" + index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === page}
                  className="min-w-8 px-1 tabular-nums"
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(p)
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "InlinePageInputPagination",
    description: "Spreadsheet-style pager with an editable page number field between the arrows.",
    code: `
const TOTAL = 37

export default function InlinePageInputPagination() {
  const [page, setPage] = React.useState(5)
  const [draft, setDraft] = React.useState("5")

  const commit = (value: number) => {
    const next = Math.min(TOTAL, Math.max(1, Number.isNaN(value) ? page : value))
    setPage(next)
    setDraft(String(next))
  }

  return (
    <Pagination>
      <PaginationContent className="gap-1">
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Previous page"
            onClick={(event) => {
              event.preventDefault()
              commit(page - 1)
            }}
          >
            <ChevronLeftIcon />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="flex items-center gap-1.5 text-xs text-muted-foreground">
          Page
          <Input
            aria-label="Current page"
            inputMode="numeric"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={() => commit(Number(draft))}
            onKeyDown={(event) => {
              if (event.key === "Enter") commit(Number(draft))
            }}
            className="h-7 w-12 text-center tabular-nums"
          />
          of {TOTAL}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Next page"
            onClick={(event) => {
              event.preventDefault()
              commit(page + 1)
            }}
          >
            <ChevronRightIcon />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
  },
  {
    name: "LightboxOverlayPagination",
    description: "Photo lightbox with pagination overlaid on the media and an image counter.",
    code: `
const shots = [
  { title: "Dune ridge at dawn", tone: "from-orange-300 via-rose-300 to-purple-400" },
  { title: "Glacier lagoon", tone: "from-cyan-200 via-sky-300 to-blue-500" },
  { title: "Pine valley", tone: "from-emerald-300 via-green-400 to-teal-600" },
  { title: "Desert bloom", tone: "from-yellow-200 via-amber-300 to-orange-400" },
]

export default function LightboxOverlayPagination() {
  const [index, setIndex] = React.useState(0)
  const shot = shots[index]!

  return (
    <div className={cn("relative flex aspect-[4/3] w-full max-w-sm flex-col justify-end bg-gradient-to-br p-3", shot.tone)}>
      <div className="flex items-center justify-between gap-2 bg-background/85 p-1.5 backdrop-blur">
        <div className="flex min-w-0 flex-col ps-1">
          <span className="truncate text-xs font-medium">{shot.title}</span>
          <span className="text-[11px] text-muted-foreground">
            {index + 1} of {shots.length}
          </span>
        </div>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon-sm"
                aria-label="Previous photo"
                onClick={(event) => {
                  event.preventDefault()
                  setIndex((i) => (i - 1 + shots.length) % shots.length)
                }}
              >
                <ChevronLeftIcon />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon-sm"
                aria-label="Next photo"
                onClick={(event) => {
                  event.preventDefault()
                  setIndex((i) => (i + 1) % shots.length)
                }}
              >
                <ChevronRightIcon />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SlideDeckPagination",
    description: "Presentation editor slide strip where numbered mini slides are the pagination links.",
    code: `
const slides = ["Title", "Problem", "Solution", "Market", "Roadmap", "Team"]

export default function SlideDeckPagination() {
  const [active, setActive] = React.useState(2)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex aspect-video items-center justify-center border bg-muted/40">
        <span className="text-lg font-semibold">{slides[active]}</span>
      </div>
      <Pagination>
        <PaginationContent className="w-full gap-1.5 overflow-x-auto pb-1">
          {slides.map((slide, i) => (
            <PaginationItem key={slide} className="shrink-0">
              <PaginationLink
                href="#"
                isActive={i === active}
                className="h-auto w-16 flex-col items-start gap-0.5 border p-1.5 data-[active=true]:border-primary"
                onClick={(event) => {
                  event.preventDefault()
                  setActive(i)
                }}
              >
                <span className="text-[10px] text-muted-foreground">{i + 1}</span>
                <span className="w-full truncate text-start text-[10px]">{slide}</span>
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
  {
    name: "TicketQueuePagination",
    description: "Support queue with priority badges and Previous/Next links labelled with the page range.",
    code: `
const tickets = [
  { id: 4821, subject: "Cannot reset password", priority: "High" },
  { id: 4819, subject: "Invoice shows wrong VAT", priority: "Medium" },
  { id: 4815, subject: "SSO login loop", priority: "High" },
  { id: 4810, subject: "Export stuck at 90%", priority: "Low" },
  { id: 4804, subject: "Add teammate limit", priority: "Low" },
  { id: 4799, subject: "Webhook retries failing", priority: "Medium" },
]

const PAGE_SIZE = 3

export default function TicketQueuePagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(tickets.length / PAGE_SIZE)
  const rows = tickets.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <span className="text-sm font-medium">Unassigned tickets</span>
      <ul className="flex flex-col divide-y">
        {rows.map((ticket) => (
          <li key={ticket.id} className="flex items-center gap-2 py-2 text-xs">
            <span className="font-mono text-muted-foreground">#{ticket.id}</span>
            <span className="flex-1 truncate">{ticket.subject}</span>
            <Badge variant={ticket.priority === "High" ? "destructive" : "outline"}>{ticket.priority}</Badge>
          </li>
        ))}
      </ul>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem className="text-xs text-muted-foreground">
            Page {page} of {pageCount}
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              aria-disabled={page === pageCount}
              className={cn(page === pageCount && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(pageCount, p + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`,
  },
]

export default examples
