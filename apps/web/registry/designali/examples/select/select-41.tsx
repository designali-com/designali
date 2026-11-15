"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const projects = [
  { label: "Website refresh", value: "website" },
  { label: "Mobile app v3", value: "mobile" },
  { label: "Internal tools", value: "internal" },
]

export default function ClearableSelect() {
  const [project, setProject] = React.useState<string | null>("mobile")

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="project">Project</FieldLabel>
      <div className="flex gap-1">
        <Select items={projects} value={project} onValueChange={setProject}>
          <SelectTrigger id="project" className="flex-1">
            <SelectValue placeholder="No project" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Clear project"
          disabled={!project}
          onClick={() => setProject(null)}
        >
          <XIcon />
        </Button>
      </div>
      <FieldDescription>
        Leave empty to file this task in your inbox.
      </FieldDescription>
    </Field>
  )
}
