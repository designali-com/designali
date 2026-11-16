const notes = [
  { kind: "quote", text: "Where thoughtful design meets production-ready code.", meta: "Designali principle 01" },
  { kind: "swatch", text: "Designali Blue", meta: "--primary", tone: "from-primary to-primary/60", h: "h-56" },
  { kind: "note", text: "Header type should feel confident at 64px and still behave at 32px. Test both before signing off.", meta: "Type review, Nov 12" },
  { kind: "swatch", text: "Deep sea", meta: "--chart-5", tone: "from-chart-5 to-chart-3", h: "h-72" },
  { kind: "quote", text: "Design se code tak.", meta: "Designali principle 04" },
  { kind: "note", text: "Motion budget: 160ms for UI feedback, 320ms for page transitions, nothing longer unless it tells a story.", meta: "Motion spec v2" },
  { kind: "swatch", text: "Sage", meta: "--chart-4", tone: "from-chart-4 to-chart-2", h: "h-40" },
  { kind: "note", text: "Icons are 1.5px stroke, square caps, drawn on a 24px canvas with a 2px safe area.", meta: "Iconography" },
  { kind: "swatch", text: "Dusk", meta: "--chart-2", tone: "from-chart-4 to-chart-2", h: "h-64" },
  { kind: "quote", text: "Make the default state beautiful. Most people never change it.", meta: "Designali principle 07" },
  { kind: "swatch", text: "Sand", meta: "--border", tone: "from-primary/20 to-border", h: "h-48" },
  { kind: "note", text: "Visuals: CGI, 3D and motion over stock photos. Crop tight, leave room for type.", meta: "Art direction" },
]

export default function Grid07() {
  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Moodboard</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            The references, rules and colours behind the Designali brand,
            pinned in one place.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-4">
          {notes.map((note) => (
            <figure
              key={note.text}
              className="mb-4 break-inside-avoid border border-border bg-background"
            >
              {note.kind === "swatch" ? (
                <>
                  <div className={`bg-gradient-to-br ${note.tone} ${note.h}`} />
                  <figcaption className="flex items-baseline justify-between p-4">
                    <span className="text-sm font-medium">{note.text}</span>
                    <span className="font-sans text-xs text-muted-foreground">{note.meta}</span>
                  </figcaption>
                </>
              ) : note.kind === "quote" ? (
                <blockquote className="p-6">
                  <p className="text-xl leading-snug font-medium tracking-tight">
                    &ldquo;{note.text}&rdquo;
                  </p>
                  <footer className="mt-4 text-xs text-muted-foreground">{note.meta}</footer>
                </blockquote>
              ) : (
                <div className="border-l-2 border-foreground p-5">
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                    {note.meta}
                  </p>
                  <p className="mt-2 text-sm leading-6">{note.text}</p>
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
