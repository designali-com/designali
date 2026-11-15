import { Button } from "@workspace/ui/components/button"

const variants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const

export default function ButtonVariantShowcase() {
  return (
    <div className="flex max-w-md flex-wrap items-center justify-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} variant={variant} className="capitalize">
          {variant}
        </Button>
      ))}
    </div>
  )
}
