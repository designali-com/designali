import { Separator } from "@workspace/ui/components/separator"

export function SeparatorList() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      <dl className="flex items-center justify-between">
        <dt>Blocks</dt>
        <dd className="text-muted-foreground">460+</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt>Landing pages</dt>
        <dd className="text-muted-foreground">240+</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt>UI examples</dt>
        <dd className="text-muted-foreground">2300+</dd>
      </dl>
    </div>
  )
}