import { Input } from "@workspace/ui/components/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const strings = [
  { key: "checkout.title", en: "Review your order", es: "Revisa tu pedido" },
  { key: "checkout.pay", en: "Pay now", es: "Pagar ahora" },
  { key: "checkout.coupon", en: "Have a promo code?", es: "" },
]

export default function TranslationEditor() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-60 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col divide-y">
          <span className="px-3 py-2 text-xs font-medium">
            English (source)
          </span>
          {strings.map((s) => (
            <div key={s.key} className="flex flex-col gap-0.5 px-3 py-2">
              <span className="font-mono text-[10px] text-muted-foreground">
                {s.key}
              </span>
              <span className="text-xs">{s.en}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col divide-y">
          <span className="px-3 py-2 text-xs font-medium">Spanish</span>
          {strings.map((s) => (
            <div key={s.key} className="px-3 py-1.5">
              <Input
                aria-label={s.key}
                defaultValue={s.es}
                placeholder="Needs translation"
                aria-invalid={!s.es || undefined}
                className="h-7 text-xs"
              />
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
