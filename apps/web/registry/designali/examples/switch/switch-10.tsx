import {
  Flag as FlagIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Switch } from "@workspace/ui/components/switch"

const flags = [
  { key: "templates-checkout", env: "Production", note: "100% rollout", on: true },
  { key: "ai-block-generator", env: "Staging", note: "Internal testers", on: true },
  {
    key: "icons-dark-preview",
    env: "Production",
    note: "Paused after bug report",
    on: false,
  },
  {
    key: "logos-bulk-export",
    env: "Development",
    note: "Behind QA review",
    on: false,
  },
]

export default function FeatureFlagList() {
  return (
    <div className="w-full max-w-md divide-y border">
      {flags.map((flag) => (
        <div key={flag.key} className="flex items-center gap-3 px-4 py-3">
          <FlagIcon className="size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <code className="font-mono text-xs font-medium">{flag.key}</code>
              <Badge
                variant={flag.env === "Production" ? "default" : "secondary"}
              >
                {flag.env}
              </Badge>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">{flag.note}</p>
          </div>
          <Switch defaultChecked={flag.on} aria-label={"Toggle " + flag.key} />
        </div>
      ))}
    </div>
  )
}
