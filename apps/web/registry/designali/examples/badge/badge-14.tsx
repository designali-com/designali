import {
  CircleCheckIcon,
  CircleXIcon,
  ClockIcon,
  GitBranchIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Spinner } from "@workspace/ui/components/spinner"

const deployments = [
  { branch: "main", commit: "a1f9c2e", status: "Ready", time: "2m ago" },
  { branch: "feat/search", commit: "77be310", status: "Building", time: "Now" },
  {
    branch: "fix/auth-loop",
    commit: "c03d8aa",
    status: "Failed",
    time: "18m ago",
  },
  { branch: "chore/deps", commit: "5e2b1f4", status: "Queued", time: "Now" },
]

export default function DeploymentStatusList() {
  return (
    <div className="w-full max-w-md divide-y border">
      {deployments.map((deploy) => (
        <div key={deploy.commit} className="flex items-center gap-3 p-3">
          <GitBranchIcon className="size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{deploy.branch}</p>
            <p className="font-mono text-xs text-muted-foreground">
              {deploy.commit} · {deploy.time}
            </p>
          </div>
          {deploy.status === "Ready" && (
            <Badge className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <CircleCheckIcon data-icon="inline-start" />
              Ready
            </Badge>
          )}
          {deploy.status === "Building" && (
            <Badge variant="secondary">
              <Spinner data-icon="inline-start" />
              Building
            </Badge>
          )}
          {deploy.status === "Failed" && (
            <Badge variant="destructive">
              <CircleXIcon data-icon="inline-start" />
              Failed
            </Badge>
          )}
          {deploy.status === "Queued" && (
            <Badge variant="outline">
              <ClockIcon data-icon="inline-start" />
              Queued
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}
