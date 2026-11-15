import { Lock, Plus } from "lucide-react"

const albums = [
  { name: "Wedding - Ana & Rui", count: 342, updated: "2 days ago", shared: 14, colors: ["var(--chart-1)", "var(--chart-4)", "var(--chart-2)"] },
  { name: "Lisbon studio shoot", count: 86, updated: "1 week ago", shared: 3, colors: ["var(--chart-2)", "var(--chart-3)", "var(--chart-5)"] },
  { name: "Product - Spring line", count: 128, updated: "3 weeks ago", shared: 6, colors: ["var(--chart-5)", "var(--chart-1)", "var(--chart-3)"] },
  { name: "Family archive 1998", count: 512, updated: "1 month ago", shared: 0, colors: ["var(--chart-4)", "var(--chart-2)", "var(--chart-1)"] },
  { name: "Brand portraits", count: 44, updated: "2 months ago", shared: 2, colors: ["var(--chart-3)", "var(--chart-5)", "var(--chart-4)"] },
]

export default function Gallery16() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Albums</h2>
            <p className="mt-1 text-sm text-muted-foreground">5 albums - 1,112 photos - 18.4 GB used</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <a key={album.name} href="#" className="group block">
              <div className="relative mx-3 aspect-[4/3]">
                <div
                  className="absolute inset-0 -translate-x-3 -rotate-6 border border-border opacity-70 transition duration-300 group-hover:-translate-x-6 group-hover:-rotate-[10deg]"
                  style={{ background: album.colors[2] }}
                />
                <div
                  className="absolute inset-0 translate-x-3 rotate-3 border border-border opacity-85 transition duration-300 group-hover:translate-x-6 group-hover:rotate-6"
                  style={{ background: album.colors[1] }}
                />
                <div
                  className="absolute inset-0 border border-border shadow-lg transition duration-300 group-hover:-translate-y-2"
                  style={{ background: `linear-gradient(150deg, ${album.colors[0]}, ${album.colors[1]})` }}
                />
                <span className="absolute top-3 right-3 bg-background/85 px-2 py-0.5 font-mono text-[11px] tabular-nums backdrop-blur">
                  {album.count}
                </span>
              </div>
              <div className="mt-6 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-medium">{album.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Updated {album.updated}</p>
                </div>
                {album.shared > 0 ? (
                  <div className="flex -space-x-1.5">
                    {Array.from({ length: Math.min(album.shared, 3) }).map((_, i) => (
                      <span key={i} className="flex size-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[9px] font-medium">
                        {["AR", "JM", "KT"][i]}
                      </span>
                    ))}
                    {album.shared > 3 && (
                      <span className="flex size-6 items-center justify-center rounded-full border-2 border-background bg-foreground text-[9px] font-medium text-background">
                        +{album.shared - 3}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Lock className="size-3" /> Private
                  </span>
                )}
              </div>
            </a>
          ))}
          <a
            href="#"
            className="flex aspect-[4/3] flex-col items-center justify-center gap-2 border border-dashed border-border text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:mx-3"
          >
            <Plus className="size-5" />
            New album
          </a>
        </div>
      </div>
    </section>
  )
}
