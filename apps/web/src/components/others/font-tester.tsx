"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"
import { DESIGNALI_MONO_WEIGHTS } from "@/src/lib/fonts/designali-mono"

export function FontTester() {
  const [text, setText] = useState("design se code tak — 0O 1lI {} => !=")
  const [size, setSize] = useState(48)
  const [weight, setWeight] = useState(400)

  const weightName =
    DESIGNALI_MONO_WEIGHTS.find((w) => w.value === weight)?.name ?? weight

  return (
    <div className="border-b">
      <div className="flex flex-col gap-4 border-b p-3 md:flex-row md:items-center">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="h-9 flex-1 border bg-transparent px-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <div className="flex items-center gap-3 md:w-56">
          <span className="w-16 shrink-0 text-xs text-muted-foreground">
            {size}px
          </span>
          <Slider
            value={[size]}
            min={12}
            max={140}
            step={1}
            onValueChange={(v) => setSize(Array.isArray(v) ? v[0]! : v)}
          />
        </div>
        <div className="flex items-center gap-3 md:w-64">
          <span className="w-20 shrink-0 text-xs text-muted-foreground">
            {weightName}
          </span>
          <Slider
            value={[weight]}
            min={100}
            max={800}
            step={1}
            onValueChange={(v) => setWeight(Array.isArray(v) ? v[0]! : v)}
          />
        </div>
      </div>
      <div className="min-h-64 overflow-hidden p-6 md:p-10">
        <p
          className="font-(family-name:--font-designali-mono) leading-tight break-words"
          style={{ fontSize: size, fontWeight: weight }}
        >
          {text || "Type something..."}
        </p>
      </div>
    </div>
  )
}

export function CopyBlock({
  code,
  className,
}: {
  code: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  return (
    <div className={cn("relative border bg-muted/30", className)}>
      <Button
        variant="ghost"
        size="icon-sm"
        className="absolute top-2 right-2"
        aria-label="Copy code"
        onClick={async () => {
          await navigator.clipboard.writeText(code)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        }}
      >
        {copied ? <Check /> : <Copy />}
      </Button>
      <pre className="overflow-x-auto p-4 font-(family-name:--font-designali-mono) text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}
