import {
  Link2Icon,
  MailIcon,
  MessageCircleIcon,
  QrCodeIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const actions = [
  { label: "Send by email", icon: MailIcon },
  { label: "Copy link", icon: Link2Icon },
  { label: "Send as message", icon: MessageCircleIcon },
  { label: "Show QR code", icon: QrCodeIcon },
]

export default function ShareActionTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <span className="text-sm font-medium">
          Share &quot;Trip to Lisbon&quot;
        </span>
        <div className="flex gap-2">
          {actions.map((a) => (
            <Tooltip key={a.label}>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon-lg"
                    className="rounded-full"
                    aria-label={a.label}
                  />
                }
              >
                <a.icon />
              </TooltipTrigger>
              <TooltipContent side="bottom">{a.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
