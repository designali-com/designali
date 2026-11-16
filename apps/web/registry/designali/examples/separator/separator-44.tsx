import { Separator } from "@workspace/ui/components/separator"

export default function BlockquoteAccentRule() {
  return (
    <figure className="flex w-full max-w-md gap-4">
      <Separator orientation="vertical" className="w-1 bg-primary" />
      <div className="flex flex-col gap-2 py-1">
        <blockquote className="text-base leading-snug font-medium">
          Designali took us from a rough Figma file to a production-ready
          Next.js site in two weeks.
        </blockquote>
        <figcaption className="text-xs text-muted-foreground">
          Daniel, Founder · Designali client
        </figcaption>
      </div>
    </figure>
  )
}
