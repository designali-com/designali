import { Typewriter } from "@/registry/designali/ui/typewriter"

export default function DemoOne() {
  return (
    <main className="flex h-80 items-center justify-center">
      <Typewriter
        className="text-5xl"
        words={["Developer", "Designer", "Freelancer"]}
      />
    </main>
  )
}
