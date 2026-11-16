import {
  ClaudeAI,
  Cursor,
  Figma,
  Github,
  Nextjs,
  Notion,
  OpenAI,
  ReactLib,
  Stripe,
  TailwindCSS,
  TypeScript,
  Vercel,
} from "@designali/logos"

const integrations = [
  { name: "Next.js", category: "Framework", logo: Nextjs },
  { name: "React", category: "UI library", logo: ReactLib },
  { name: "TypeScript", category: "Language", logo: TypeScript },
  { name: "Tailwind CSS", category: "Styling", logo: TailwindCSS },
  { name: "Figma", category: "Design", logo: Figma },
  { name: "Vercel", category: "Hosting", logo: Vercel },
  { name: "GitHub", category: "Code", logo: Github },
  { name: "Notion", category: "Docs", logo: Notion },
  { name: "Cursor", category: "Editor", logo: Cursor },
  { name: "Claude", category: "AI workflows", logo: ClaudeAI },
  { name: "OpenAI", category: "AI workflows", logo: OpenAI },
  { name: "Stripe", category: "Payments", logo: Stripe },
]

export default function Grid05() {
  return (
    <section className="w-full border-y border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          The stack behind Designali
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Every Designali block and template is designed and built with the
          tools modern teams already use.
        </p>

        <ul className="mt-14 grid grid-cols-2 gap-px border border-border bg-border text-left sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((item) => (
            <li
              key={item.name}
              className="group flex flex-col gap-6 bg-background p-5 transition-colors hover:bg-muted"
            >
              <span className="flex size-10 items-center justify-center border border-border bg-muted">
                <item.logo size={20} />
              </span>
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="/docs"
          className="mt-8 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          See the Designali docs
        </a>
      </div>
    </section>
  )
}
