import {
  CalendarDays as CalendarDaysIcon,
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const days = [
  {
    value: "day1",
    label: "Day 1",
    date: "Thu, Mar 12",
    sessions: [
      { time: "09:30", title: "Design se code tak", speaker: "Ali Imam" },
      { time: "11:00", title: "Brand identity for studios", speaker: "Designali studio" },
      {
        time: "14:00",
        title: "Workshop: CGI & motion",
        speaker: "Designali studio",
      },
    ],
  },
  {
    value: "day2",
    label: "Day 2",
    date: "Fri, Mar 13",
    sessions: [
      {
        time: "10:00",
        title: "Building 460+ blocks",
        speaker: "Ali Imam",
      },
      { time: "15:30", title: "Closing panel", speaker: "Various speakers" },
    ],
  },
]

export default function AccordionEventAgenda() {
  return (
    <Accordion defaultValue={["day1"]} className="w-full max-w-md border px-3">
      {days.map((day) => (
        <AccordionItem key={day.value} value={day.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <CalendarDaysIcon className="size-4 text-muted-foreground" />
              <span className="text-sm">{day.label}</span>
              <span className="font-normal text-muted-foreground">
                {day.date}
              </span>
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            <ol className="relative space-y-3 border-s ps-4">
              {day.sessions.map((session) => (
                <li key={session.title} className="relative">
                  <span className="absolute -start-[1.3rem] top-1 size-2 bg-foreground" />
                  <p className="font-sans text-muted-foreground">
                    {session.time}
                  </p>
                  <p className="font-medium">{session.title}</p>
                  <p className="text-muted-foreground">{session.speaker}</p>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
