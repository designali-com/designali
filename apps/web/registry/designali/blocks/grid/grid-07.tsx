const notes = [
  { kind: "quote", text: "Good design is as little design as possible, but never less than the problem needs.", meta: "Studio principle 01" },
  { kind: "swatch", text: "Terracotta", meta: "#C2703D", tone: "from-orange-600 to-amber-500", h: "h-56" },
  { kind: "note", text: "Header type should feel confident at 64px and still behave at 32px. Test both before signing off.", meta: "Type review, Nov 12" },
  { kind: "swatch", text: "Deep sea", meta: "#1F4E6B", tone: "from-sky-900 to-cyan-700", h: "h-72" },
  { kind: "quote", text: "If the grid is invisible, it is working.", meta: "Studio principle 04" },
  { kind: "note", text: "Motion budget: 160ms for UI feedback, 320ms for page transitions, nothing longer unless it tells a story.", meta: "Motion spec v2" },
  { kind: "swatch", text: "Sage", meta: "#7D9471", tone: "from-lime-800 to-emerald-600", h: "h-40" },
  { kind: "note", text: "Icons are 1.5px stroke, square caps, drawn on a 24px canvas with a 2px safe area.", meta: "Iconography" },
  { kind: "swatch", text: "Dusk", meta: "#6B4E8C", tone: "from-violet-800 to-fuchsia-600", h: "h-64" },
  { kind: "quote", text: "Make the default state beautiful. Most people never change it.", meta: "Studio principle 07" },
  { kind: "swatch", text: "Sand", meta: "#D8C3A5", tone: "from-amber-200 to-stone-300", h: "h-48" },
  { kind: "note", text: "Photography: natural light, real workspaces, no stock handshakes. Crop tight, leave room for type.", meta: "Art direction" },
]

export default function Grid07() {
  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Moodboard</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            The references, rules and colours behind the Fieldnote rebrand,
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
                    <span className="font-mono text-xs text-muted-foreground">{note.meta}</span>
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
