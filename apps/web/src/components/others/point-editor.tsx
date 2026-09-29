"use client"

import { Trash2 } from "lucide-react"

import { Point } from "@/src/types/gradient"
import { GradientColorField } from "@/src/components/others/gradient-color-field"

import { Button } from "@workspace/ui/components/button"

interface PointEditorProps {
  active: Point
  pointsCount: number
  onUpdatePoint: (id: number, patch: Partial<Point>) => void
  onRemovePoint: (id: number) => void
}

export function PointEditor({
  active,
  pointsCount,
  onUpdatePoint,
  onRemovePoint,
}: PointEditorProps) {
  return (
    <div className="flex flex-col gap-3 border p-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium">Color</span>
        <div className="flex items-center gap-2">
          <GradientColorField
            label="Point color"
            value={active.color}
            onChange={(color) => onUpdatePoint(active.id, { color })}
          />
          <code className="font-mono text-xs text-muted-foreground">
            {active.color}
          </code>
        </div>
      </div>

      <Button
        type="button"
        variant="destructive"
        size="sm"
        className="w-full"
        onClick={() => onRemovePoint(active.id)}
        disabled={pointsCount <= 1}
      >
        <Trash2 className="mr-2 h-4 w-4" />
        Remove Point
      </Button>
    </div>
  )
}
