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
    <div className="flex flex-col gap-3 border p-1">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs">Color</span>
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
        <Button 
        variant="destructive"
        size="icon" 
        onClick={() => onRemovePoint(active.id)}
        disabled={pointsCount <= 1}
      >
        <Trash2 className="h-4 w-4" />
         
      </Button>
      </div>

      
    </div>
  )
}
