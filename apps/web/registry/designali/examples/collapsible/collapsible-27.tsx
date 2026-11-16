import {
  ChevronDown as ChevronDownIcon,
  Terminal as TerminalIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const logs = [
  { time: "12:04:01", text: "Cloning designali/web (main @ 4f2a9c1)" },
  { time: "12:04:07", text: "Installing dependencies" },
  { time: "12:04:39", text: "Running build" },
  { time: "12:05:12", text: "Generated 460 block pages" },
  { time: "12:05:18", text: "Deployed to designali.com" },
]

export default function DeploymentBuildLogs() {
  return (
    <Card className="w-full max-w-md" size="sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          Production
        </CardTitle>
        <CardDescription>
          marketing-site · deployed 2 minutes ago
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">Ready</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Collapsible>
          <CollapsibleTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              />
            }
          >
            <TerminalIcon />
            Build logs
            <span className="text-muted-foreground">· 1m 17s</span>
            <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <div className="mt-2 bg-muted p-3 font-mono text-[11px] leading-5">
              {logs.map((log) => (
                <div key={log.time} className="flex gap-3">
                  <span className="text-muted-foreground">{log.time}</span>
                  <span>{log.text}</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
