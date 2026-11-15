import { CircleHelpIcon, ExternalLinkIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export default function FieldHelpPopover() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Label htmlFor="webhook-secret">Signing secret</Label>
        <Popover>
          <PopoverTrigger
            render={
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="What is a signing secret?"
              />
            }
          >
            <CircleHelpIcon />
          </PopoverTrigger>
          <PopoverContent className="w-64" side="right" align="start">
            <PopoverHeader>
              <PopoverTitle>Signing secret</PopoverTitle>
              <PopoverDescription>
                We sign every webhook payload with this secret so your server
                can verify the request came from us.
              </PopoverDescription>
            </PopoverHeader>
            <a
              href="#"
              className="flex items-center gap-1 text-xs font-medium hover:underline"
            >
              Read the verification guide{" "}
              <ExternalLinkIcon className="size-3" />
            </a>
          </PopoverContent>
        </Popover>
      </div>
      <Input id="webhook-secret" type="password" defaultValue="whk_demo_2b1c" />
    </div>
  )
}
