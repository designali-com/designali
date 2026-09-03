import { DotPattern } from "@/registry/designali/ui/dot-pattern"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <DotPattern dotSize={0.5} width={5} height={5} />
    </div>
  )
}
