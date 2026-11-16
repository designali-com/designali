import {
  CircleCheck as CircleCheckIcon,
  CirclePlay as PlayCircleIcon,
} from "@designali/icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const lessons = [
  { title: "Intro to layout grids", minutes: 12, resources: 2, progress: 100 },
  { title: "Responsive breakpoints", minutes: 18, resources: 3, progress: 45 },
  { title: "Fluid typography", minutes: 22, resources: 1, progress: 0 },
]

export default function CourseLessonHoverCard() {
  return (
    <ol className="flex w-full max-w-xs flex-col gap-1 text-sm">
      {lessons.map((lesson, i) => (
        <li key={lesson.title}>
          <HoverCard>
            <HoverCardTrigger
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted"
            >
              {lesson.progress === 100 ? (
                <CircleCheckIcon className="size-4 text-primary" />
              ) : (
                <PlayCircleIcon className="size-4 text-muted-foreground" />
              )}
              {i + 1}. {lesson.title}
            </HoverCardTrigger>
            <HoverCardContent side="right" className="flex w-52 flex-col gap-2">
              <p className="font-medium">{lesson.title}</p>
              <div className="flex gap-3 text-muted-foreground">
                <span>{lesson.minutes} min</span>
                <span>{lesson.resources} resources</span>
              </div>
              <div className="h-1.5 bg-muted">
                <div
                  className="h-full bg-primary"
                  style={{ width: lesson.progress + "%" }}
                />
              </div>
              <p className="text-muted-foreground">
                {lesson.progress}% complete
              </p>
            </HoverCardContent>
          </HoverCard>
        </li>
      ))}
    </ol>
  )
}
