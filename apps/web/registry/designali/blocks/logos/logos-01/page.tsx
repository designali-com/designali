import {
  ClaudeAI,
  Cursor,
  Github,
  GoogleGemini,
  Grok,
  OpenAI,
  Replicate,
  Vercel,
} from "@designali/logos"

import { GridPattern } from "@/registry/designali/ui/grid-pattern"

export default function Logos01() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, var(--background) 45%, transparent 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 75%)",
            opacity: 0.7,
          }}
        />

        {/* Grid */}
        <div
          className="pointer-events-none absolute bottom-[-10%] left-[50%] h-[55%] w-full -translate-x-1/2 [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5))]"
          style={{ transform: "translateX(0%) perspective(300px) rotateX(45deg)" }}
        >
          <GridPattern width={50} height={30} className="stroke-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl px-6">
        <h1 className="mb-10 text-center text-sm font-medium text-muted-foreground">
          The tools behind every Designali project.
        </h1>

        <div className="mx-auto max-w-md">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            <OpenAI size={40} />
            <ClaudeAI size={40} />
            <Replicate size={40} />
            <Cursor size={40} />
            <GoogleGemini size={40} />
            <Github size={40} />
            <Grok size={40} />
            <Vercel size={40} />
          </div>
        </div>
      </div>
    </section>
  )
}