import { Typewriter } from "@/registry/designali/ui/typewriter"

export default function DemoOne() {
  return (
    <main className="flex h-80 items-center justify-center">
      <Typewriter
        words={["designali", "design se code tak"]}
        cursorChar="_"
        className="text-4xl"
      />
    </main>
  )
}
