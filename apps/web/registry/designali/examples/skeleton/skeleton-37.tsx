import { Skeleton } from "@workspace/ui/components/skeleton"

const sections = [
  { letter: "A", count: 2 },
  { letter: "B", count: 3 },
  { letter: "C", count: 1 },
]

export default function ContactsDirectorySkeleton() {
  return (
    <div className="flex w-full max-w-xs flex-col border">
      {sections.map((s) => (
        <div key={s.letter}>
          <div className="sticky top-0 bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {s.letter}
          </div>
          {Array.from({ length: s.count }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2">
              <Skeleton className="size-8 rounded-full" />
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-2.5 w-16" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
