import { ArrowUpRight } from "lucide-react"

const studios = [
  { city: "Amsterdam", lines: ["Keizersgracht 312", "1016 EZ Amsterdam"], phone: "+31 20 555 0137" },
  { city: "Montreal", lines: ["5445 Av. de Gaspé, 9th floor", "Montreal QC H2T 3B2"], phone: "+1 514 555 0162" },
  { city: "Seoul", lines: ["24 Dosan-daero 45-gil", "Gangnam-gu, Seoul"], phone: "+82 2 555 0184" },
]

const links = ["Instagram", "LinkedIn", "Vimeo", "Are.na"]

export default function Contact20() {
  return (
    <section className="w-full border-t bg-background pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm text-muted-foreground">
          New projects, collaborations or just a coffee &mdash;
        </p>
        <a
          href="mailto:hi@wildeform.com"
          className="group mt-4 flex items-center gap-4 text-[13vw] leading-none font-semibold tracking-tighter break-all md:text-[9rem]"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_4px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-500 group-hover:bg-[length:100%_4px]">
            hi@wildeform
          </span>
          <ArrowUpRight className="hidden size-20 shrink-0 transition-transform group-hover:rotate-45 md:block" />
        </a>

        <div className="mt-20 grid gap-10 border-t py-12 sm:grid-cols-2 lg:grid-cols-4">
          {studios.map((studio) => (
            <div key={studio.city} className="space-y-3 text-sm">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                {studio.city}
              </p>
              <address className="not-italic">
                {studio.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a href="#" className="block text-muted-foreground hover:text-foreground">
                {studio.phone}
              </a>
            </div>
          ))}
          <div className="space-y-3 text-sm">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Follow
            </p>
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="group inline-flex items-center gap-1 hover:underline">
                    {link}
                    <ArrowUpRight className="size-3.5 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>Wilde Form Studio B.V. &middot; KvK 81234567</span>
          <span>Replies within two working days</span>
        </div>
      </div>
    </section>
  )
}
