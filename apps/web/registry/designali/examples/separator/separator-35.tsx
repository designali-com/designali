import { Separator } from "@workspace/ui/components/separator"

export default function InvoiceHeaderParties() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 border p-4 text-xs">
      <div className="flex items-baseline justify-between">
        <span className="text-base font-semibold">Invoice</span>
        <span className="font-mono text-muted-foreground">INV-2026-0318</span>
      </div>
      <Separator />
      <div className="flex">
        <div className="flex flex-1 flex-col gap-0.5">
          <span className="mb-1 text-muted-foreground">From</span>
          <span className="font-medium">Designali</span>
          <span className="text-muted-foreground">hello@designali.com</span>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="flex flex-1 flex-col gap-0.5">
          <span className="mb-1 text-muted-foreground">Billed to</span>
          <span className="font-medium">Designali client</span>
          <span className="text-muted-foreground">client@example.com</span>
        </div>
      </div>
    </div>
  )
}
