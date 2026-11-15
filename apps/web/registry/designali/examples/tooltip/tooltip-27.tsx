import { CloudCheckIcon, CloudOffIcon, CloudUploadIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const styles = [
  {
    label: "Synced",
    icon: CloudCheckIcon,
    text: "All changes saved",
    className:
      "bg-emerald-600 text-white [&>svg:last-child]:bg-emerald-600 [&>svg:last-child]:fill-emerald-600",
  },
  {
    label: "Pending",
    icon: CloudUploadIcon,
    text: "2 changes waiting to sync",
    className:
      "bg-amber-500 text-black [&>svg:last-child]:bg-amber-500 [&>svg:last-child]:fill-amber-500",
  },
  {
    label: "Offline",
    icon: CloudOffIcon,
    text: "Connection lost, retrying",
    className:
      "bg-destructive text-white [&>svg:last-child]:bg-destructive [&>svg:last-child]:fill-destructive",
  },
]

export default function SemanticColorTooltips() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {styles.map((s) => (
          <Tooltip key={s.label}>
            <TooltipTrigger render={<Button variant="outline" size="sm" />}>
              <s.icon data-icon="inline-start" />
              {s.label}
            </TooltipTrigger>
            <TooltipContent className={s.className}>{s.text}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
