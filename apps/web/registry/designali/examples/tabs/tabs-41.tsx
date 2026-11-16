import {
  CircleCheck as CircleCheckIcon,
} from "@designali/icons"

import { Progress } from "@workspace/ui/components/progress"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const courses = [
  { title: "Designali: Next.js basics", done: 72 },
  { title: "Designali: Design systems 101", done: 35 },
  { title: "Designali: Figma to code", done: 100 },
  { title: "Designali: Tailwind CSS", done: 100 },
]

export default function CourseProgressTabs() {
  return (
    <Tabs defaultValue="progress" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="progress">In progress</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="progress" className="flex flex-col gap-3">
        {courses
          .filter((c) => c.done < 100)
          .map((c) => (
            <div key={c.title} className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span className="font-medium">{c.title}</span>
                <span className="text-muted-foreground tabular-nums">
                  {c.done}%
                </span>
              </div>
              <Progress value={c.done} />
            </div>
          ))}
      </TabsContent>
      <TabsContent value="completed" className="flex flex-col gap-2">
        {courses
          .filter((c) => c.done === 100)
          .map((c) => (
            <div key={c.title} className="flex items-center gap-2">
              <CircleCheckIcon className="size-4 text-emerald-600" />
              {c.title}
            </div>
          ))}
      </TabsContent>
    </Tabs>
  )
}
