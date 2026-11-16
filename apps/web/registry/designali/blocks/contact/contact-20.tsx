import {
  ArrowUpRight,
} from "@designali/icons"

const studios = [
  { city: "Projects", lines: ["Brand identity, UI/UX design", "Web design and development"], phone: "hello@designali.com" },
  { city: "Support", lines: ["Templates, blocks and", "@designali/icons"], phone: "support@designali.com" },
  { city: "Billing", lines: ["Orders, invoices and", "Designali Pro licenses"], phone: "billing@designali.com" },
]

const links = [
  { label: "Instagram", href: "https://www.instagram.com/designali.code/" },
  { label: "X", href: "https://x.com/designali_com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/designali-com/" },
  { label: "21st.dev", href: "https://21st.dev/@designali-in" },
]

export default function Contact20() {
  return (
    <section className="w-full border-t bg-background pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm text-muted-foreground">
          New projects, collaborations or just a coffee &mdash;
        </p>
        <a
          href="mailto:hello@designali.com"
          className="group mt-4 flex items-center gap-4 text-[13vw] leading-none font-semibold tracking-tighter break-all md:text-[9rem]"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_4px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-500 group-hover:bg-[length:100%_4px]">
            hello@designali
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
              <a href={`mailto:${studio.phone}`} className="block text-muted-foreground hover:text-foreground">
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
                <li key={link.label}>
                  <a href={link.href} className="group inline-flex items-center gap-1 hover:underline">
                    {link.label}
                    <ArrowUpRight className="size-3.5 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>Designali &middot; design se code tak</span>
          <span>Replies within one working day</span>
        </div>
      </div>
    </section>
  )
}
