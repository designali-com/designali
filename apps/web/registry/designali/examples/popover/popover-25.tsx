"use client"

import * as React from "react"
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Link as LinkIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { cn } from "@workspace/ui/lib/utils"

export default function LinkEditorPopover() {
  const [open, setOpen] = React.useState(false)
  const [href, setHref] = React.useState("")
  const [link, setLink] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border">
      <div className="flex items-center gap-1 border-b p-1">
        <Button variant="ghost" size="icon-sm" aria-label="Bold">
          <BoldIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Italic">
          <ItalicIcon />
        </Button>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant={link ? "secondary" : "ghost"}
                size="icon-sm"
                aria-label="Insert link"
              />
            }
          >
            <LinkIcon />
          </PopoverTrigger>
          <PopoverContent className="w-72" align="start">
            <form
              className="flex flex-col gap-2.5"
              onSubmit={(event) => {
                event.preventDefault()
                setLink(href)
                setOpen(false)
              }}
            >
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="link-url">URL</Label>
                <Input
                  id="link-url"
                  type="url"
                  placeholder="https://"
                  value={href}
                  onChange={(e) => setHref(e.target.value)}
                  className="h-8"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="link-text">Text</Label>
                <Input
                  id="link-text"
                  defaultValue="release notes"
                  className="h-8"
                />
              </div>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox defaultChecked /> Open in new tab
              </Label>
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={!link}
                  onClick={() => (setLink(null), setHref(""), setOpen(false))}
                >
                  Remove
                </Button>
                <Button type="submit" size="sm" disabled={!href}>
                  Apply
                </Button>
              </div>
            </form>
          </PopoverContent>
        </Popover>
      </div>
      <p className="px-3 pb-3 text-xs">
        Read the{" "}
        <span className={cn(link && "text-primary underline")}>
          release notes
        </span>{" "}
        before upgrading.
      </p>
    </div>
  )
}
