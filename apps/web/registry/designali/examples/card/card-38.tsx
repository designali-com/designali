import { CircleCheckIcon, GraduationCapIcon, PlayIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const modules = [
  { title: "Foundations of color", lessons: 6, done: 6 },
  { title: "Typography systems", lessons: 8, done: 5 },
  { title: "Layout and grids", lessons: 7, done: 0 },
]

export default function CourseProgressCard() {
  const total = modules.reduce((s, m) => s + m.lessons, 0)
  const done = modules.reduce((s, m) => s + m.done, 0)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardDescription className="flex items-center gap-1.5">
          <GraduationCapIcon className="size-3.5" />
          Visual Design Essentials
        </CardDescription>
        <CardTitle className="text-base">
          {Math.round((done / total) * 100)}% complete
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            {done}/{total} lessons
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        {modules.map((m) => (
          <div key={m.title} className="grid gap-1">
            <div className="flex justify-between">
              <span
                className={cn(m.done === m.lessons && "text-muted-foreground")}
              >
                {m.title}
              </span>
              {m.done === m.lessons ? (
                <CircleCheckIcon className="size-3.5 text-emerald-500" />
              ) : (
                <span className="text-muted-foreground">
                  {m.done}/{m.lessons}
                </span>
              )}
            </div>
            <Progress value={(m.done / m.lessons) * 100} aria-label={m.title} />
          </div>
        ))}
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <div className="grid min-w-0">
          <span className="text-muted-foreground">Up next</span>
          <span className="truncate font-medium">
            2.6 Pairing serif and sans
          </span>
        </div>
        <Button size="sm">
          <PlayIcon data-icon="inline-start" />
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}
