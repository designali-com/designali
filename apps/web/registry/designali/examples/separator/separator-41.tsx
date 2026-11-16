import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"

const releases = [
  {
    version: "2.8.0",
    date: "Mar 12",
    notes: ["460+ new blocks", "Faster icon search"],
  },
  { version: "2.7.2", date: "Feb 27", notes: ["Fixed dark mode in pricing blocks"] },
  {
    version: "2.7.0",
    date: "Feb 18",
    notes: ["Apple device mockups", "New @designali/logos package"],
  },
]

export default function ChangelogEntries() {
  return (
    <div className="flex w-full max-w-sm flex-col">
      {releases.map((release, index) => (
        <React.Fragment key={release.version}>
          {index > 0 && <Separator />}
          <div className="flex gap-4 py-3">
            <div className="flex w-14 shrink-0 flex-col text-xs">
              <Badge variant={index === 0 ? "default" : "secondary"}>
                {release.version}
              </Badge>
              <span className="mt-1 text-muted-foreground">{release.date}</span>
            </div>
            <ul className="flex flex-col gap-1 text-sm">
              {release.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
