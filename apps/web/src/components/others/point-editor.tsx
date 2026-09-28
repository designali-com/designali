"use client"

import React from "react"
import { Trash2 } from "lucide-react"

import { Point } from "@/src/types/gradient"

import { Label } from "@workspace/ui/components/label"
import { Input } from "@workspace/ui/components/input"
import { Slider } from "@workspace/ui/components/slider"
import { Button } from "@workspace/ui/components/button"

interface PointEditorProps {
    active: Point
    pointsCount: number
    onUpdatePoint: (
        id: number,
        patch: Partial<Point>
    ) => void
    onRemovePoint: (id: number) => void
}

function sliderValue(
    value: number | readonly number[],
    fallback: number
) {
    if (typeof value === "number") return value
    return value[0] ?? fallback
}

export function PointEditor({
    active,
    pointsCount,
    onUpdatePoint,
    onRemovePoint,
}: PointEditorProps) {
    if (!active) return null

    return (
        <div className="flex flex-col gap-4 rounded-lg border bg-muted/40 p-3.5">
            <div className="flex items-center gap-3">
                <Label className="flex-1">
                    Color
                </Label>

                <div className="flex items-center gap-2">
                    <Input
                        type="color"
                        value={active.color}
                        onChange={(event) =>
                            onUpdatePoint(active.id, {
                                color: event.target.value,
                            })
                        }
                        className="h-7 w-9 cursor-pointer rounded-md border p-0"
                    />

                    <code className="text-xs font-mono text-muted-foreground">
                        {active.color}
                    </code>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label className="text-xs">
                        X Position
                    </Label>

                    <span className="font-mono text-xs text-muted-foreground">
                        {active.x}%
                    </span>
                </div>

                <Slider
                    min={0}
                    max={100}
                    step={0.5}
                    value={[active.x]}
                    onValueChange={(value) => {
                        onUpdatePoint(active.id, {
                            x: sliderValue(value, active.x),
                        })
                    }}
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label className="text-xs">
                        Y Position
                    </Label>

                    <span className="font-mono text-xs text-muted-foreground">
                        {active.y}%
                    </span>
                </div>

                <Slider
                    min={0}
                    max={100}
                    step={0.5}
                    value={[active.y]}
                    onValueChange={(value) => {
                        onUpdatePoint(active.id, {
                            y: sliderValue(value, active.y),
                        })
                    }}
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label className="text-xs">
                        Spread
                    </Label>

                    <span className="font-mono text-xs text-muted-foreground">
                        {active.spread}%
                    </span>
                </div>

                <Slider
                    min={10}
                    max={100}
                    step={1}
                    value={[active.spread]}
                    onValueChange={(value) => {
                        onUpdatePoint(active.id, {
                            spread: sliderValue(value, active.spread),
                        })
                    }}
                />
            </div>

            <Button
                type="button"
                variant="destructive"
                size="sm"
                className="mt-1 w-full"
                onClick={() =>
                    onRemovePoint(active.id)
                }
                disabled={pointsCount <= 1}
            >
                <Trash2 className="mr-2 h-4 w-4" />
                Remove Point
            </Button>
        </div>
    )
}