"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"

const skills = [
  "Figma",
  "TypeScript",
  "Design systems",
  "Next.js",
  "Prototyping",
  "Tailwind CSS",
  "Motion",
  "CGI / 3D",
]

export default function SkillTagsOverflow() {
  const [expanded, setExpanded] = React.useState(false)
  const shown = expanded ? skills : skills.slice(0, 4)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-sm font-medium">Skills</p>
      <div className="flex flex-wrap gap-1.5">
        {shown.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
        <Badge
          variant="outline"
          className="cursor-pointer"
          render={
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
            />
          }
        >
          {expanded ? "Show less" : "+" + (skills.length - 4) + " more"}
        </Badge>
      </div>
    </div>
  )
}
