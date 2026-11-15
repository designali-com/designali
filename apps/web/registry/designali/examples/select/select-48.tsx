"use client"

import * as React from "react"
import { GitBranchIcon, RocketIcon, TriangleAlertIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

const environments = [
  { label: "Development", value: "dev", tone: "bg-sky-500" },
  { label: "Staging", value: "staging", tone: "bg-amber-500" },
  { label: "Production", value: "prod", tone: "bg-red-500" },
]

export default function DeployEnvironmentSelect() {
  const [env, setEnv] = React.useState<string | null>("staging")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-2 text-sm">
        <GitBranchIcon className="size-4 text-muted-foreground" />
        <span className="font-mono">release/2.8.0</span>
      </div>
      <Select items={environments} value={env} onValueChange={setEnv}>
        <SelectTrigger className="w-full" aria-label="Environment">
          <SelectValue>
            {(value: string) => {
              const item = environments.find((option) => option.value === value)
              return (
                <>
                  <span className={cn("size-2", item?.tone)} />
                  {item?.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {environments.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className={cn("size-2", item.tone)} />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {env === "prod" && (
        <p className="flex items-start gap-1.5 text-xs text-destructive">
          <TriangleAlertIcon className="mt-px size-3.5 shrink-0" />
          This deploys to live customers. Make sure staging checks passed.
        </p>
      )}
      <Button variant={env === "prod" ? "destructive" : "default"}>
        <RocketIcon data-icon="inline-start" />
        Deploy
      </Button>
    </div>
  )
}
