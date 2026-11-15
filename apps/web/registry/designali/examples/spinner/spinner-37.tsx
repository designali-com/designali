import { CheckIcon } from "lucide-react"

import { Spinner } from "@workspace/ui/components/spinner"

const jobs = [
  { name: "Nightly backup", detail: "Started 2m ago", running: true },
  { name: "Thumbnail generation", detail: "418 of 1,200", running: true },
  { name: "Search reindex", detail: "Finished in 3m 12s", running: false },
  { name: "Email digest", detail: "Finished in 48s", running: false },
]

export default function BackgroundJobsList() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-4 py-2.5">
        <span className="text-sm font-medium">Jobs</span>
        <span className="text-xs text-muted-foreground">2 running</span>
      </div>
      <ul className="divide-y">
        {jobs.map((job) => (
          <li key={job.name} className="flex items-center gap-3 px-4 py-2.5">
            {job.running ? (
              <Spinner className="text-primary" />
            ) : (
              <CheckIcon className="size-4 text-muted-foreground" />
            )}
            <span className="flex-1 text-sm">{job.name}</span>
            <span className="text-xs text-muted-foreground tabular-nums">
              {job.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
