import {
  FlaskConical as FlaskConicalIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const labs = [
  {
    id: "canvas",
    title: "AI block generator",
    description: "Generate Designali blocks from a prompt.",
    stage: "Beta",
  },
  {
    id: "voice",
    title: "Figma to code",
    description: "Turn Figma frames into Next.js components.",
    stage: "Alpha",
  },
]

export default function ExperimentalLabs() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {labs.map((lab) => (
        <div
          key={lab.id}
          className="flex flex-col gap-2 border border-dashed p-4"
        >
          <div className="flex items-center gap-2">
            <FlaskConicalIcon className="size-4" />
            <Label htmlFor={"labs-" + lab.id} className="flex-1">
              {lab.title}
              <Badge
                variant={lab.stage === "Alpha" ? "destructive" : "secondary"}
              >
                {lab.stage}
              </Badge>
            </Label>
            <Switch id={"labs-" + lab.id} />
          </div>
          <p className="text-xs text-muted-foreground">{lab.description}</p>
          <a href="#" className="text-xs underline underline-offset-2">
            Send feedback
          </a>
        </div>
      ))}
    </div>
  )
}
