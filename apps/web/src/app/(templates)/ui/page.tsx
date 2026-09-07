import { ComponentPreview } from "@/src/components/docs/component-preview"
import { LayoutGrid } from "lucide-react"

const UI_COMPONENTS = ["button-variants", "accordion-01", "accordion-02"]

export default function Page() {
  return (
    <div className="my-20 px-3">
      <div className="relative flex flex-col items-center pt-10 pb-20 text-center">
        <LayoutGrid className="mb-4 size-8 text-primary" />

        <h1 className="text-2xl font-medium md:text-4xl">Featured</h1>

        <p className="mx-auto mt-2 max-w-80 text-sm text-muted-foreground md:max-w-xl">
          A curated collection of our best blocks, crafted to help you build
          beautiful interfaces faster.
        </p>
      </div>

      <div className="grid w-full gap-3">
        {UI_COMPONENTS.map((name) => (
          <ComponentPreview key={name} name={name} align="center" />
        ))}
      </div>
    </div>
  )
}
