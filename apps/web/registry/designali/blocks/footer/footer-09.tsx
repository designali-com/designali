const links = ["Templates", "Blocks", "Pricing", "Docs", "Blogs"]

export default function Footer09() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="flex size-6 items-center justify-center bg-foreground text-[10px] text-background">
            D
          </span>
          designali
        </a>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-foreground">
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          Booking new projects
        </div>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 Designali. Designed and built by Ali Imam.
      </p>
    </footer>
  )
}
