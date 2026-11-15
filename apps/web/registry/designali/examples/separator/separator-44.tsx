import { Separator } from "@workspace/ui/components/separator"

export default function BlockquoteAccentRule() {
  return (
    <figure className="flex w-full max-w-md gap-4">
      <Separator orientation="vertical" className="w-1 bg-primary" />
      <div className="flex flex-col gap-2 py-1">
        <blockquote className="text-base leading-snug font-medium">
          We cut our weekly reporting from four hours to fifteen minutes, and
          nobody misses the spreadsheets.
        </blockquote>
        <figcaption className="text-xs text-muted-foreground">
          Daniel Osei, Finance Lead at Kestrel Freight
        </figcaption>
      </div>
    </figure>
  )
}
