import {
  Globe,
} from "@designali/icons"

const sitemap = [
  { title: "Products", links: ["Templates", "Blocks", "UI Designs", "Landing Pages", "Pricing"] },
  { title: "Assets", links: ["Icons", "Logos", "Illustration", "Device Mockups"] },
  { title: "Developers", links: ["Docs", "Components", "@designali/icons", "@designali/logos"] },
  { title: "Studio", links: ["Work", "Blogs", "Services", "Ali Imam", "Contact"] },
  { title: "Legal", links: ["Terms", "License", "Privacy"] },
]

export default function Footer10() {
  return (
    <footer className="w-full bg-muted/40">
      <div className="mx-auto max-w-7xl border-x border-border">
        <div className="grid grid-cols-2 gap-px border-b border-border bg-border md:grid-cols-5">
          {sitemap.map((group) => (
            <div key={group.title} className="bg-background p-6">
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 p-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-foreground">designali</span>
            <span>© 2026 Designali</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="border border-border px-2 py-1 font-sans">Next.js</span>
            <span className="border border-border px-2 py-1 font-sans">Tailwind CSS</span>
            <a href="#" className="flex items-center gap-1.5 hover:text-foreground">
              <Globe className="size-3.5" />
              English (US)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
