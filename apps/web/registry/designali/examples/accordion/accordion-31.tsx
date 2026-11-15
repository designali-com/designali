import { ChevronDownIcon, CircleCheckIcon, CirclePlayIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const modules = [
  {
    value: "m1",
    title: "Foundations of typography",
    lessons: [
      { title: "Anatomy of a typeface", minutes: 8, done: true },
      { title: "Pairing fonts", minutes: 12, done: true },
      { title: "Measure and rhythm", minutes: 10, done: false },
    ],
  },
  {
    value: "m2",
    title: "Layout and grids",
    lessons: [
      { title: "Column grids", minutes: 14, done: false },
      { title: "Baseline grids", minutes: 9, done: false },
    ],
  },
]

export default function AccordionCourseCurriculum() {
  return (
    <Accordion
      multiple
      defaultValue={["m1"]}
      className="w-full max-w-md border"
    >
      {modules.map((module, index) => {
        const done = module.lessons.filter((lesson) => lesson.done).length
        const minutes = module.lessons.reduce(
          (sum, lesson) => sum + lesson.minutes,
          0
        )
        return (
          <AccordionItem key={module.value} value={module.value}>
            <AccordionTrigger className="items-center bg-muted/50 px-3 hover:no-underline">
              <span className="flex flex-col">
                <span className="text-muted-foreground">
                  Module {index + 1}
                </span>
                <span className="text-sm">{module.title}</span>
              </span>
              <span className="ms-auto me-2 font-normal text-muted-foreground">
                {done}/{module.lessons.length} &middot; {minutes} min
              </span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              {module.lessons.map((lesson) => (
                <div
                  key={lesson.title}
                  className="flex items-center gap-2 border-t px-3 py-2"
                >
                  {lesson.done ? (
                    <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <CirclePlayIcon className="size-4 text-muted-foreground" />
                  )}
                  <span className="flex-1">{lesson.title}</span>
                  <span className="text-muted-foreground">
                    {lesson.minutes}:00
                  </span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
