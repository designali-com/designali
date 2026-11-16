const tiles = [
  {
    title: "Designali Agency",
    meta: "Brand identity",
    span: "md:col-span-2 md:row-span-2",
    gradient: 'url("/images/templates/design-agency.jpg") center / cover',
  },
  {
    title: "Dalim UI",
    meta: "UI design",
    span: "",
    gradient: 'url("/images/templates/dalim-ui-old.jpg") center / cover',
  },
  {
    title: "Dalim Icons",
    meta: "Icon system",
    span: "",
    gradient: 'url("/images/templates/dalim-icons-old.jpg") center / cover',
  },
  {
    title: "Portfolio Simple",
    meta: "Template",
    span: "md:row-span-2",
    gradient: 'url("/images/templates/portfolio-simple.jpg") center / cover',
  },
  {
    title: "Dalim Works",
    meta: "Case study",
    span: "md:col-span-2",
    gradient: 'url("/images/templates/dalim-works-old.jpg") center / cover',
  },
  {
    title: "Dalim Fonts",
    meta: "Typography",
    span: "",
    gradient: 'url("/images/templates/dalim-fonts-old.jpg") center / cover',
  },
]

export default function Gallery03() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Selected Designali work
          </h2>
          <p className="text-sm text-muted-foreground">
            Six projects by Ali Imam, design se code tak
          </p>
        </div>
        <div className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {tiles.map((tile) => (
            <figure
              key={tile.title}
              className={`group relative overflow-hidden border border-border ${tile.span}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: tile.gradient }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/80 px-4 py-2 text-xs backdrop-blur">
                <span className="font-medium">{tile.title}</span>
                <span className="text-muted-foreground">{tile.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
