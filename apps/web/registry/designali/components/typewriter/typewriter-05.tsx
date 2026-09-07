import { Typewriter } from "@/registry/designali/ui/typewriter"

export default function DemoOne() {
  return (
    <main className="flex h-80 items-center justify-center">
      <h1 className="text-4xl font-semibold">
        I am a{" "}
        <Typewriter words={["Developer", "Designer", "Creator"]} speed={80} />
      </h1>
    </main>
  )
}
