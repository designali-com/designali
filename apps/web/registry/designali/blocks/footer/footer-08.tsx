import { ArrowUpRight } from "lucide-react"

const socials = ["Instagram", "LinkedIn", "Behance", "Dribbble"]

export default function Footer08() {
  return (
    <footer className="w-full overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest uppercase opacity-60">
              Have a project in mind?
            </p>
            <a
              href="mailto:hello@northstudio.co"
              className="group mt-4 inline-flex items-center gap-3 text-3xl font-medium tracking-tight md:text-5xl"
            >
              hello@northstudio.co
              <ArrowUpRight className="size-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:justify-self-end">
            <div>
              <p className="opacity-60">Studio</p>
              <address className="mt-3 leading-6 not-italic">
                Vesterbrogade 41
                <br />
                1620 Copenhagen
                <br />
                Denmark
              </address>
            </div>
            <div>
              <p className="opacity-60">Follow</p>
              <ul className="mt-3 space-y-1.5">
                {socials.map((social) => (
                  <li key={social}>
                    <a href="#" className="hover:underline underline-offset-4">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-background/20 py-6 text-xs opacity-60 sm:flex-row sm:justify-between">
          <p>© 2026 North Studio ApS</p>
          <p>Local time 14:32 CET</p>
        </div>
      </div>

      <p
        aria-hidden
        className="-mb-[0.18em] text-center text-[22vw] leading-none font-semibold tracking-tighter opacity-90 select-none"
      >
        NORTH
      </p>
    </footer>
  )
}
