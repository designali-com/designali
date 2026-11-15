import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const sources = [
  {
    id: 1,
    title: "Remote Work and Focus Time",
    publisher: "Halden Institute Review",
    year: 2023,
  },
  {
    id: 2,
    title: "Meeting Load in Distributed Teams",
    publisher: "Journal of Work Design",
    year: 2022,
  },
]

export default function CitationFootnoteHoverCard() {
  return (
    <p className="max-w-sm text-sm leading-relaxed">
      Teams with two no-meeting days report 26% more deep work
      {sources.map((s) => (
        <HoverCard key={s.id}>
          <HoverCardTrigger
            href="#"
            className="ml-0.5 align-super text-[10px] font-medium text-blue-600 dark:text-blue-400"
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
      , with no measurable drop in collaboration quality.
    </p>
  )
}
