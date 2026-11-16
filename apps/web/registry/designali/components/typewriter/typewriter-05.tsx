import { Typewriter } from "@/registry/designali/ui/typewriter"

export default function DemoOne() {
  return (
    <main className="flex h-80 items-center justify-center">
      <h1 className="text-4xl font-semibold">
        Ali Imam is a{" "}
        <Typewriter words={["Designer", "Developer", "Design Engineer"]} speed={80} />
      </h1>
    </main>
  )
}
