"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"

const bill = 86.4

export default function TipCalculatorSlider() {
  const [tip, setTip] = React.useState([18])
  const [people, setPeople] = React.useState([3])
  const total = bill * (1 + tip[0]! / 100)

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Bill</span>
        <span className="tabular-nums">${bill.toFixed(2)}</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>Tip</span>
          <span className="tabular-nums">{tip[0]}%</span>
        </div>
        <Slider
          aria-label="Tip"
          value={tip}
          onValueChange={(value) => setTip(value as number[])}
          max={30}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>Split</span>
          <span className="tabular-nums">{people[0]} people</span>
        </div>
        <Slider
          aria-label="People"
          value={people}
          onValueChange={(value) => setPeople(value as number[])}
          min={1}
          max={10}
        />
      </div>
      <div className="flex items-baseline justify-between border-t pt-3">
        <span className="text-sm">Each pays</span>
        <span className="text-xl font-semibold tabular-nums">
          ${(total / people[0]!).toFixed(2)}
        </span>
      </div>
    </div>
  )
}
