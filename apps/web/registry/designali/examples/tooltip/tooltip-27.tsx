import {
  CloudCheck as CloudCheckIcon,
  CloudOff as CloudOffIcon,
  CloudUpload as CloudUploadIcon,
} from "@designali/icons"

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
      "bg-chart-2 text-white [&>svg:last-child]:bg-chart-2 [&>svg:last-child]:fill-primary",
  },
  {
    label: "Pending",
    icon: CloudUploadIcon,
    text: "2 changes waiting to sync",
    className:
      "bg-primary text-black [&>svg:last-child]:bg-primary [&>svg:last-child]:fill-primary",
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
