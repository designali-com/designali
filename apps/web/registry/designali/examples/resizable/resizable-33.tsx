import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const products = [
  {
    name: "Portfolio Simple template",
    sku: "LS-001",
    stock: 42,
    tone: "from-border to-muted-foreground",
  },
  {
    name: "Design Agency template",
    sku: "CT-014",
    stock: 8,
    tone: "from-primary/20 to-primary",
  },
  {
    name: "Resort template",
    sku: "WB-220",
    stock: 0,
    tone: "from-muted-foreground to-foreground",
  },
]

export default function ProductEditorSplit() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-80 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="40%" minSize="30%">
        <div className="flex h-full flex-col divide-y">
          {products.map((p, i) => (
            <div
              key={p.sku}
              className={cn(
                "flex items-center gap-2 p-2",
                i === 0 && "bg-muted/60"
              )}
            >
              <div
                className={cn("size-9 shrink-0 bg-gradient-to-br", p.tone)}
              />
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-xs font-medium">{p.name}</span>
                <span className="font-sans text-[10px] text-muted-foreground">
                  {p.sku}
                </span>
              </div>
              <Badge variant={p.stock === 0 ? "destructive" : "outline"}>
                {p.stock === 0 ? "Sold out" : p.stock}
              </Badge>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%" minSize="40%">
        <form className="flex h-full flex-col gap-3 p-4">
          <Field>
            <FieldLabel htmlFor="product-name">Name</FieldLabel>
            <Input id="product-name" defaultValue="Portfolio Simple template" />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="product-price">Price</FieldLabel>
              <Input id="product-price" defaultValue="68.00" />
            </Field>
            <Field>
              <FieldLabel htmlFor="product-stock">Stock</FieldLabel>
              <Input id="product-stock" defaultValue="42" />
            </Field>
          </div>
          <Button size="sm" className="mt-auto self-end">
            Save product
          </Button>
        </form>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
