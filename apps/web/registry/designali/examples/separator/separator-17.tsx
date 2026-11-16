import { Separator } from "@workspace/ui/components/separator"

export default function GradientFadeSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
      <div className="flex flex-col gap-1">
        <span className="text-xs tracking-widest text-muted-foreground uppercase">
          Case study
        </span>
        <h3 className="text-xl font-semibold">Dalim Agency, rebuilt</h3>
      </div>
      <Separator className="bg-transparent bg-linear-to-r from-transparent via-foreground/40 to-transparent" />
      <p className="text-sm text-muted-foreground">
        The old Dalim Agency site became a fast Next.js build, with a fresh
        brand identity and a reusable design system behind it.
      </p>
    </div>
  )
}
