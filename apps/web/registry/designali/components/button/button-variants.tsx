import { Button } from "@workspace/ui/components/button"

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap max-w-md mx-auto justify-center items-center gap-2">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button> 
    </div>
  )
}