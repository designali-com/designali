"use client"

import React, { useMemo, useState } from "react"

import { generateLayers } from "@/src/types/gradient"
import {
  GRADIENT_TEMPLATES,
  GradientTemplate,
} from "@/src/config/gradient/templates"

import { Label } from "@workspace/ui/components/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

interface TemplatePickerProps {
  onApply: (template: GradientTemplate) => void
}

function TemplateSwatch({ template }: { template: GradientTemplate }) {
  const layers = useMemo(
    () =>
      generateLayers(
        template.points.map((point, index) => ({ ...point, id: index + 1 }))
      ),
    [template]
  )

  return (
    <span
      className="relative inline-block h-4 w-6 shrink-0 overflow-hidden rounded-sm border align-middle"
      style={{ backgroundColor: template.base }}
    >
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: layers.join(", "),
          filter: `blur(${Math.max(1, Math.round(template.blur / 20))}px)`,
        }}
      />
    </span>
  )
}

export function TemplatePicker({ onApply }: TemplatePickerProps) {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-semibold">Template</Label>

      <Select
        value={value}
        onValueChange={(name) => {
          if (!name) return

          const template = GRADIENT_TEMPLATES.find((t) => t.name === name)
          if (!template) return

          setValue(name)
          onApply(template)
        }}
      >
        <SelectTrigger className="h-8 w-full text-xs">
          <SelectValue placeholder="Choose a template" />
        </SelectTrigger>

        <SelectContent>
          {GRADIENT_TEMPLATES.map((template) => (
            <SelectItem
              key={template.id}
              value={template.name}
              className="text-xs"
            >
              <span className="flex items-center gap-2">
                <TemplateSwatch template={template} />
                {template.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}