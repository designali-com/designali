"use client"

import * as React from "react"
import {
  Send as SendIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import { Input } from "@workspace/ui/components/input"

const prompts = [
  "Find a pricing block",
  "Suggest a landing page",
  "Show icons for analytics",
  "Generate a hero section",
  "Convert Figma to Next.js",
  "Book a call with Ali",
]

export default function ChatSuggestedPrompts() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-2 border p-3">
      <Carousel opts={{ dragFree: true, align: "start" }}>
        <CarouselContent className="-ms-2">
          {prompts.map((prompt) => (
            <CarouselItem key={prompt} className="basis-auto ps-2">
              <Button
                variant="outline"
                size="xs"
                onClick={() => setValue(prompt)}
              >
                <SparklesIcon data-icon="inline-start" />
                {prompt}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask Designali AI..."
        />
        <Button size="icon" aria-label="Send" disabled={!value}>
          <SendIcon />
        </Button>
      </div>
    </div>
  )
}
