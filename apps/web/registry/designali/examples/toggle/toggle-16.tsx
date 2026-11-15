"use client"

import * as React from "react"
import { AwardIcon, BriefcaseIcon, GlobeIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

const jobs = [
  {
    title: "Senior Product Designer",
    remote: true,
    fullTime: true,
    senior: true,
  },
  { title: "Frontend Engineer", remote: true, fullTime: true, senior: false },
  { title: "Brand Illustrator", remote: false, fullTime: false, senior: false },
  { title: "Staff Data Engineer", remote: false, fullTime: true, senior: true },
]

export default function FilterChipToggles() {
  const [remote, setRemote] = React.useState(false)
  const [fullTime, setFullTime] = React.useState(false)
  const [senior, setSenior] = React.useState(false)
  const results = jobs.filter(
    (j) =>
      (!remote || j.remote) &&
      (!fullTime || j.fullTime) &&
      (!senior || j.senior)
  )

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Toggle
          variant="outline"
          size="sm"
          pressed={remote}
          onPressedChange={setRemote}
        >
          <GlobeIcon />
          Remote
        </Toggle>
        <Toggle
          variant="outline"
          size="sm"
          pressed={fullTime}
          onPressedChange={setFullTime}
        >
          <BriefcaseIcon />
          Full-time
        </Toggle>
        <Toggle
          variant="outline"
          size="sm"
          pressed={senior}
          onPressedChange={setSenior}
        >
          <AwardIcon />
          Senior
        </Toggle>
      </div>
      <div className="border">
        {results.length ? (
          results.map((j) => (
            <p
              key={j.title}
              className="border-b px-3 py-2 text-sm last:border-b-0"
            >
              {j.title}
            </p>
          ))
        ) : (
          <p className="px-3 py-4 text-center text-sm text-muted-foreground">
            No roles match these filters.
          </p>
        )}
      </div>
    </div>
  )
}
