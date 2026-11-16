import {
  ArrowUp as ArrowUpIcon,
  Copy as CopyIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

export default function AssistantChatWithArtifact() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-80 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="45%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-3 text-xs">
          <div className="self-end bg-primary px-3 py-2 text-primary-foreground">
            Make a pricing table with three tiers.
          </div>
          <div className="flex gap-2">
            <SparklesIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
            <p>
              Here&apos;s a draft with Starter, Pro, and Scale tiers. The Pro
              column is highlighted.
            </p>
          </div>
          <InputGroup className="mt-auto">
            <InputGroupInput
              placeholder="Ask for changes..."
              className="text-xs"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Send">
                <ArrowUpIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="55%" minSize="35%">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-3 py-1.5 text-xs">
            <span className="font-medium">pricing-table.tsx</span>
            <Button size="xs" variant="outline">
              <CopyIcon data-icon="inline-start" />
              Copy
            </Button>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2 p-3">
            {["Starter", "Pro", "Scale"].map((tier) => (
              <div
                key={tier}
                className={cn(
                  "flex flex-col gap-1 border p-2 text-[11px]",
                  tier === "Pro" && "border-primary"
                )}
              >
                <span className="font-medium">{tier}</span>
                <div className="h-1.5 w-2/3 bg-muted" />
                <div className="h-1.5 w-1/2 bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
