import {
  ArrowUpRight,
} from "@designali/icons"

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/designali.code/" },
  { label: "X", href: "https://x.com/designali_com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/designali-com/" },
  { label: "21st.dev", href: "https://21st.dev/@designali-in" },
]

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
              href="mailto:hello@designali.com"
              className="group mt-4 inline-flex items-center gap-3 text-3xl font-medium tracking-tight md:text-5xl"
            >
              hello@designali.com
              <ArrowUpRight className="size-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:justify-self-end">
            <div>
              <p className="opacity-60">Studio</p>
              <address className="mt-3 leading-6 not-italic">
                Designali
                <br />
                Founded by Ali Imam
                <br />
                Design se code tak
              </address>
            </div>
            <div>
              <p className="opacity-60">Follow</p>
              <ul className="mt-3 space-y-1.5">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} className="hover:underline underline-offset-4">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-background/20 py-6 text-xs opacity-60 sm:flex-row sm:justify-between">
          <p>© 2026 Designali</p>
          <p>www.designali.com</p>
        </div>
      </div>

      <p
        aria-hidden
        className="-mb-[0.18em] text-center text-[22vw] leading-none font-semibold tracking-tighter opacity-90 select-none"
      >
        DESIGNALI
      </p>
    </footer>
  )
}
