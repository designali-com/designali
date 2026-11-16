import { Typewriter } from "@/registry/designali/ui/typewriter"

export default function DemoOne() {
  const words = [
    "Welcome to designali",
    "Thoughtful digital experiences",
    "Built with Next.js & Tailwind",
    "design se code tak",
  ]

  return (
    <main className="flex h-80 items-center justify-center">
      <Typewriter
        words={words}
        speed={80}
        delayBetweenWords={2000}
        cursor={true}
        cursorChar="|"
      />
    </main>
  )
}
