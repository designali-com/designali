import {
  Bell,
  Heart,
  MessageCircle,
  Repeat2,
  Search,
  Smartphone,
} from "@designali/icons"

import { IPhone } from "@/registry/designali/ui/apple/iphone"

const left = [
  { icon: Search, title: "Instant search", body: "Find any Designali block, template or icon in seconds." },
  { icon: Bell, title: "Release updates", body: "Get notified when new blocks and templates drop." },
  { icon: Smartphone, title: "Mobile first", body: "Every layout is responsive from phone to Studio Display." },
]
const right = [
  { icon: Repeat2, title: "Copy and remix", body: "Copy any block and remix it into your own design." },
  { icon: MessageCircle, title: "Direct support", body: "Questions go straight to Ali Imam and the studio." },
  { icon: Heart, title: "Crafted with care", body: "Thoughtful details in every pixel and every line of code." },
]

function Column({ items, align }: { items: typeof left; align: "left" | "right" }) {
  return (
    <ul className="space-y-10">
      {items.map(({ icon: Icon, title, body }) => (
        <li
          key={title}
          className={`flex gap-4 ${align === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}
        >
          <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-muted/60">
            <Icon className="size-4" />
          </span>
          <div>
            <h3 className="text-base font-medium">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Features17() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-medium tracking-tight md:text-5xl">
          Designali fits the way you design and build.
        </h2>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
          <Column items={left} align="left" />
          <IPhone size="md" color="black" className="mx-auto">
            <div className="space-y-2 px-4 pt-12 pb-4">
              <div className="text-sm font-medium">Launch list</div>
              {["Brand identity", "UI/UX in Figma", "Build in Next.js", "Deploy on Vercel"].map(
                (t, i) => (
                  <div key={t} className="flex items-center gap-2 border border-border px-2 py-2 text-xs">
                    <span
                      className={`size-3 shrink-0 rounded-full border ${i < 2 ? "border-primary bg-primary" : "border-border"}`}
                    />
                    <span className={i < 2 ? "text-muted-foreground line-through" : ""}>{t}</span>
                  </div>
                )
              )}
              <img
                src="/images/templates/portfolio-simple.jpg"
                alt="Designali portfolio template"
                className="mt-3 aspect-[4/3] w-full border border-border object-cover"
              />
            </div>
          </IPhone>
          <Column items={right} align="right" />
        </div>
      </div>
    </section>
  )
}
