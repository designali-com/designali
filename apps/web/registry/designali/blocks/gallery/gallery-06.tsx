const heights = [
  "h-64",
  "h-96",
  "h-72",
  "h-80",
  "h-56",
  "h-96",
  "h-64",
  "h-72",
  "h-80",
]

const photos = [
  "CGI study",
  "3D render",
  "Motion frame",
  "Abstract form",
  "Colour study",
  "Light study",
  "Texture study",
  "Shape study",
  "Gradient study",
]

const palette = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

export default function Gallery06() {
  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-xl">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Designali visuals
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            CGI, 3D and motion by Ali Imam
          </h2>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <figure
              key={photo}
              className="mb-4 break-inside-avoid border border-border bg-background p-2"
            >
              <div
                className={heights[i]}
                style={{
                  background: `url("/img/ask/ask${i + 1}.jpg") center / cover, linear-gradient(${i * 40}deg, ${palette[i % 5]}, ${palette[(i + 2) % 5]})`,
                }}
              />
              <figcaption className="flex justify-between px-1 pt-2 text-xs">
                <span>{photo}</span>
                <span className="text-muted-foreground tabular-nums">
                  No. {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
