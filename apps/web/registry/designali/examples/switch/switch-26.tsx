import {
  Info as InfoIcon,
} from "@designali/icons"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const settings = [
  {
    id: "smart-compose",
    label: "Smart compose",
    help: "Suggests sentence endings as you type.",
    on: true,
  },
  {
    id: "nudges",
    label: "Follow-up nudges",
    help: "Reminds you about emails without a reply after 3 days.",
    on: false,
  },
]

export default function SwitchWithHelpTooltip() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
        {settings.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-1.5">
              <Label htmlFor={setting.id}>{setting.label}</Label>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <button
                      type="button"
                      className="text-muted-foreground hover:text-foreground"
                      aria-label={"About " + setting.label}
                    />
                  }
                >
                  <InfoIcon className="size-3.5" />
                </TooltipTrigger>
                <TooltipContent className="max-w-56">
                  {setting.help}
                </TooltipContent>
              </Tooltip>
            </div>
            <Switch id={setting.id} defaultChecked={setting.on} />
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
