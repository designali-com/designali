const notes = [
  { label: "Founder", value: "Ali Imam, design engineer" },
  { label: "First brand", value: "Dalim — graphics, fonts and icons" },
  { label: "Today", value: "Designali studio and designali.com" },
]

export default function Sections19() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="border-b border-border pb-10">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Chapter one · How designali began
          </p>
          <h2 className="mt-6 max-w-4xl text-4xl leading-tight tracking-tight md:text-6xl">
            It started with a design that looked right in Figma and broke in the browser.
          </h2>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[200px_1fr_220px]">
          <aside className="order-last lg:order-first">
            <dl className="space-y-6">
              {notes.map((note) => (
                <div key={note.label} className="border-t border-border pt-3">
                  <dt className="text-xs text-muted-foreground">{note.label}</dt>
                  <dd className="mt-1 text-sm">{note.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="max-w-2xl space-y-6 text-base leading-8 text-muted-foreground">
            <p className="text-foreground first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:text-7xl first-letter:leading-[0.8] first-letter:font-medium">
              Ali Imam started as a designer, making graphics, fonts and icons
              under the Dalim name. Again and again, the work he handed off
              came back different: spacing drifted, type changed, and the
              details that made it feel right were lost.
            </p>
            <p>
              So he learned to build it himself. Next.js, React, TypeScript and
              Tailwind CSS became part of the design process, not a step after
              it. The gap between design and code was not a people problem; it
              was a handoff problem.
            </p>
            <figure className="my-10 border-y border-border py-8">
              <blockquote className="text-2xl leading-snug text-foreground md:text-3xl">
                &ldquo;I design and build digital experiences that look great,
                feel intuitive and work beautifully.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">Ali Imam, founder of Designali</figcaption>
            </figure>
            <p>
              Dalim Agency, Dalim UI and Dalim Tools followed. Today it is all
              Designali: a design and development studio, and a library of
              templates, blocks, icons and logos on designali.com. Design se
              code tak.
            </p>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-12 border border-border bg-muted/50 p-5">
              <svg viewBox="0 0 180 80" className="w-full text-foreground" aria-hidden>
                <path
                  d="M0 40 C 22 10, 45 10, 67 40 S 112 70, 135 40 S 168 15, 180 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 48 C 22 22, 45 22, 67 48 S 112 72, 135 48 S 168 26, 180 40"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeDasharray="3 3"
                />
              </svg>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Design (dashed) vs shipped (solid): the gap Designali closes.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
