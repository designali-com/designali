import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const lines = [
  "export async function getInvoice(id: string) {",
  "  const invoice = await db.invoice.find(id)",
  "  if (!invoice) throw new NotFoundError()",
  "  return serialize(invoice)",
  "}",
]

export default function CodeEditorMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full max-w-md overflow-hidden border bg-muted/30 py-2 font-mono text-[11px]">
        {lines.map((line, index) => (
          <div
            key={index}
            className="flex gap-3 px-2 whitespace-pre hover:bg-muted"
          >
            <span className="w-4 text-end text-muted-foreground select-none">
              {index + 1}
            </span>
            <span className="truncate">{line}</span>
          </div>
        ))}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuItem>
            Go to definition
            <ContextMenuShortcut>F12</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Find all references
            <ContextMenuShortcut>⇧F12</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Peek
            <ContextMenuShortcut>⌥F12</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Rename symbol
            <ContextMenuShortcut>F2</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Refactor</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuGroup>
                <ContextMenuItem>Extract function</ContextMenuItem>
                <ContextMenuItem>Extract constant</ContextMenuItem>
                <ContextMenuItem>Inline variable</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            Format document
            <ContextMenuShortcut>⇧⌥F</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
