const plates = [
  {
    title: "Spheres in motion",
    body: "A CGI study in reflection and light, rendered for a Designali brand campaign.",
    ratio: "aspect-[4/5]",
    gradient: 'url("/img/ask/ask10.jpg") center / cover',
  },
  {
    title: "Quiet geometry",
    body: "Abstract 3D forms exploring how soft shadows can carry a brand's mood.",
    ratio: "aspect-[16/10]",
    gradient: 'url("/img/ask/ask11.jpg") center / cover',
  },
  {
    title: "Fluid colour",
    body: "A motion frame from a looping animation built for a landing page hero.",
    ratio: "aspect-square",
    gradient: 'url("/img/ask/ask12.jpg") center / cover',
  },
  {
    title: "Design se code tak",
    body: "The final plate: the moment a visual concept becomes a production-ready page.",
    ratio: "aspect-[16/9]",
    gradient: 'url("/img/ask/ask13.jpg") center / cover',
  },
]

export default function Gallery11() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Designali Visuals
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            CGI & Motion
          </h2>
          <p className="mt-5 max-w-sm text-muted-foreground">
            Four CGI and motion studies by Ali Imam, exploring light, form and
            colour for Designali brand work.
          </p>
          <dl className="mt-8 grid max-w-sm grid-cols-2 gap-px border border-border bg-border text-sm">
            {[
              ["Pieces", "04"],
              ["Format", "4K render"],
              ["Medium", "CGI / 3D"],
              ["Studio", "Designali"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-4">
                <dt className="text-xs text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ol className="space-y-16">
          {plates.map((plate, i) => (
            <li key={plate.title}>
              <div
                className={`w-full border border-border ${plate.ratio}`}
                style={{ background: plate.gradient }}
              />
              <div className="mt-5 grid gap-2 sm:grid-cols-[4rem_1fr]">
                <span className="font-mono text-sm text-muted-foreground">
                  Pl. {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{plate.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plate.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
