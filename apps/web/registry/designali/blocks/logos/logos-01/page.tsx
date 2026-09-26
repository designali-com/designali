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

export default function Logos01() {
  return (
    <div className="flex h-screen flex-col items-center justify-center py-20">
      <div className="z-10">
        <h1 className="mb-10 px-20 text-center text-sm font-medium text-muted-foreground">
          Trusted by the world’s most creative companies.
        </h1>
        <div className="mx-auto max-w-md">
          <div className="flex flex-wrap items-center justify-center gap-12 px-10">
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
      <div
        className="absolute h-full w-full inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, var(--background) 0%, var(--background) 45%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 75%)',
          opacity: 0.7
        }}
      >
        <div
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
            backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
            backgroundSize: '50px 30px',
            bottom: '-10%',
            height: "55%",
            left: "50%",
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
            pointerEvents: 'none',
            position: "absolute",
            width: "100%",
            transform: 'translateX(-50%) perspective(300px) rotateX(45deg)',
          }}
        />
      </div>
    </div>
  )
}
