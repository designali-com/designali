import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

const variants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
] as const

export default function ButtonVariantsLoading() {
  return (
    <div className="flex max-w-md flex-wrap items-center justify-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} variant={variant} disabled>
          <Spinner data-icon="inline-start" />
          <span className="capitalize">{variant}</span>
        </Button>
      ))}
    </div>
  )
}
