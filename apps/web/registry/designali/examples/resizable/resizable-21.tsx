import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const nav = [
  "Introduction",
  "Installation",
  "Authentication",
  "Webhooks",
  "Rate limits",
]
const outline = ["Overview", "Signing secrets", "Retries", "Testing locally"]

export default function DocsWithTableOfContents() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-80 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="22%" minSize="15%" maxSize="30%">
        <nav className="flex h-full flex-col gap-0.5 p-2 text-xs">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className={cn(
                "truncate px-2 py-1 hover:bg-muted",
                item === "Webhooks" && "bg-muted font-medium"
              )}
            >
              {item}
            </a>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="56%" minSize="40%">
        <article className="flex h-full flex-col gap-2 p-4">
          <span className="text-[11px] text-muted-foreground">
            Guides / Webhooks
          </span>
          <h3 className="text-base font-semibold">Receiving webhooks</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Webhooks notify your server when events happen in your designali.com
            account. Each request is signed so you can verify it came from us before
            processing the payload.
          </p>
          <pre className="bg-muted p-2 font-mono text-[11px]">
            POST /hooks/events
          </pre>
        </article>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="22%" minSize="15%" maxSize="30%">
        <div className="flex h-full flex-col gap-1 p-3 text-xs">
          <span className="font-medium">On this page</span>
          {outline.map((item) => (
            <a
              key={item}
              href="#"
              className="truncate text-muted-foreground hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
