import { ArrowUpRight } from "lucide-react"

const links = ["Index", "Work", "Studio", "Journal", "Contact"]
const social = ["Newsletter", "Reading list", "Showreel", "Press kit"]

export default function Footer13() {
  return (
    <footer className="w-full overflow-hidden border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-14">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="max-w-sm text-2xl leading-tight font-medium tracking-tight">
              Have a building, a brand or a book that needs a point of view?
            </p>
            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm"
            >
              studio@morrow.works
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm">
            {social.map((link) => (
              <li key={link}>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 flex justify-between text-xs text-muted-foreground">
          <span>© 2026 Morrow Works</span>
          <span>Rotterdam / Lisbon</span>
        </div>
      </div>
      <p
        aria-hidden
        className="mx-auto mt-4 max-w-7xl translate-y-[18%] px-4 text-center text-[24vw] leading-[0.8] font-semibold tracking-tighter text-foreground select-none xl:text-[300px]"
      >
        morrow
      </p>
    </footer>
  )
}
