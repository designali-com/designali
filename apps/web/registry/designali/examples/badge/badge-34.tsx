import { Badge } from "@workspace/ui/components/badge"
import { Switch } from "@workspace/ui/components/switch"

const features = [
  {
    id: "ai",
    label: "AI workflows",
    stage: "Beta",
    description: "Generate Designali blocks from a prompt.",
  },
  {
    id: "canvas",
    label: "3D & motion previews",
    stage: "Alpha",
    description: "Preview CGI assets inside templates.",
  },
  {
    id: "offline",
    label: "Figma sync",
    stage: "Beta",
    description: "Keep designs and code in sync.",
  },
]

export default function BetaFeatureSettings() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex items-start justify-between gap-4"
        >
          <div>
            <label
              htmlFor={feature.id}
              className="flex items-center gap-2 text-sm font-medium"
            >
              {feature.label}
              <Badge
                variant={
                  feature.stage === "Alpha" ? "destructive" : "secondary"
                }
                className="h-4 px-1.5 text-[10px] uppercase"
              >
                {feature.stage}
              </Badge>
            </label>
            <p className="text-xs text-muted-foreground">
              {feature.description}
            </p>
          </div>
          <Switch id={feature.id} defaultChecked={feature.id === "ai"} />
        </div>
      ))}
    </div>
  )
}
