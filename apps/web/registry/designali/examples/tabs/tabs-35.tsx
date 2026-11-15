"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { Textarea } from "@workspace/ui/components/textarea"

export default function WritePreviewTabs() {
  const [text, setText] = React.useState(
    "Looks great! Two notes:\n- rename the env var\n- add a test for empty carts"
  )

  return (
    <Tabs defaultValue="write" className="w-full max-w-md gap-0 border">
      <TabsList variant="line" className="h-9 border-b px-2">
        <TabsTrigger value="write">Write</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="write" className="p-2">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-24"
          aria-label="Comment"
        />
      </TabsContent>
      <TabsContent value="preview" className="min-h-28 p-3">
        {text.split("\n").map((line, i) =>
          line.startsWith("- ") ? (
            <li key={i} className="ms-4 list-disc">
              {line.slice(2)}
            </li>
          ) : (
            <p key={i}>{line}</p>
          )
        )}
      </TabsContent>
      <div className="flex justify-end border-t p-2">
        <Button size="sm">Comment</Button>
      </div>
    </Tabs>
  )
}
