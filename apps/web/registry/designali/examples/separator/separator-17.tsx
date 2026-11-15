import { Separator } from "@workspace/ui/components/separator"

export default function GradientFadeSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
      <div className="flex flex-col gap-1">
        <span className="text-xs tracking-widest text-muted-foreground uppercase">
          Chapter two
        </span>
        <h3 className="text-xl font-semibold">The long way home</h3>
      </div>
      <Separator className="bg-transparent bg-linear-to-r from-transparent via-foreground/40 to-transparent" />
      <p className="text-sm text-muted-foreground">
        By the time the train reached the coast, the storm had already passed
        and the harbour lights were coming on one by one.
      </p>
    </div>
  )
}
