import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const sources = [
  {
    id: 1,
    title: "From Figma to Next.js",
    publisher: "Designali Blog",
    year: 2023,
  },
  {
    id: 2,
    title: "Design se code tak",
    publisher: "Designali Blog",
    year: 2022,
  },
]

export default function CitationFootnoteHoverCard() {
  return (
    <p className="max-w-sm text-sm leading-relaxed">
      Teams using Designali blocks ship landing pages faster
      {sources.map((s) => (
        <HoverCard key={s.id}>
          <HoverCardTrigger
            href="#"
            className="ml-0.5 align-super text-[10px] font-medium text-primary dark:text-primary"
          >
            [{s.id}]
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-64">
            <p className="font-medium">{s.title}</p>
            <p className="text-muted-foreground">
              {s.publisher}, {s.year}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
      , with no drop in design quality.
    </p>
  )
}
