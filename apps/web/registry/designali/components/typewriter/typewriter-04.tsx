import { Typewriter } from "@/registry/designali/ui/typewriter"

export default function DemoOne() {
  return (
    <main className="flex h-80 items-center justify-center">
      <Typewriter
        words={["Custom Cursor", "Looks cool!"]}
        cursorChar="_"
        className="text-4xl"
      />
    </main>
  )
}
