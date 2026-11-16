import {
  Search,
} from "@designali/icons"

const sections = [
  "Design",
  "Development",
  "Branding",
  "UI/UX",
  "Icons",
  "Templates",
  "AI Workflows",
  "Case Studies",
]

export default function Header10() {
  const today = "Sunday, November 15, 2026"

  return (
    <section className="w-full bg-background">
      <header className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b py-3 text-xs text-muted-foreground">
          <span>{today}</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">
              Newsletter
            </a>
            <a href="#" className="hover:text-foreground">
              Sign in
            </a>
            <a href="#" className="bg-foreground px-3 py-1.5 text-background">
              Subscribe
            </a>
          </div>
        </div>

        <div className="border-b py-8 text-center md:py-10">
          <a
            href="#"
            className="font-serif text-5xl font-bold tracking-tight md:text-7xl"
          >
            designali
          </a>
          <p className="mt-2 text-xs tracking-[0.25em] text-muted-foreground uppercase">
            Design se code tak — the Designali blog
          </p>
        </div>

        <nav className="flex items-center border-b-4 border-double border-foreground/40">
          <ul className="flex flex-1 gap-6 overflow-x-auto py-3 text-sm md:justify-center">
            {sections.map((section) => (
              <li key={section} className="shrink-0">
                <a
                  href="#"
                  className="font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Search"
            className="ms-4 shrink-0 text-muted-foreground hover:text-foreground"
          >
            <Search className="size-4" />
          </button>
        </nav>
      </header>
    </section>
  )
}
