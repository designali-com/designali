import { json, type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "SocialLoginButtons",
    description: "Stacked social sign-in buttons with brand-neutral glyphs and an email fallback.",
    code: `
const providers = [
  { label: "Continue with Google", glyph: "G" },
  { label: "Continue with GitHub", glyph: "GH" },
  { label: "Continue with Apple", glyph: "A" },
]

export default function SocialLoginButtons() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {providers.map((provider) => (
        <Button key={provider.label} variant="outline" className="w-full justify-start">
          <span className="flex size-5 items-center justify-center bg-foreground text-[10px] font-semibold text-background">
            {provider.glyph}
          </span>
          <span className="flex-1 text-center">{provider.label}</span>
        </Button>
      ))}
      <Button className="w-full">
        <MailIcon data-icon="inline-start" />
        Continue with email
      </Button>
    </div>
  )
}`,
  },
  {
    name: "LoadingButtonStates",
    description: "Buttons showing idle, loading, and success states for an async save action.",
    code: `
export default function LoadingButtonStates() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <SaveIcon data-icon="inline-start" />
        Save changes
      </Button>
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Saving...
      </Button>
      <Button variant="secondary">
        <CheckIcon data-icon="inline-start" />
        Saved
      </Button>
    </div>
  )
}`,
  },
  {
    name: "EditorToolbarIconButtons",
    description: "Icon-only formatting toolbar for a rich text editor.",
    code: `
const tools = [
  { label: "Bold", icon: BoldIcon },
  { label: "Italic", icon: ItalicIcon },
  { label: "Underline", icon: UnderlineIcon },
  { label: "Link", icon: LinkIcon },
  { label: "Bulleted list", icon: ListIcon },
  { label: "Quote", icon: QuoteIcon },
]

export default function EditorToolbarIconButtons() {
  return (
    <div className="flex items-center gap-1 border p-1">
      {tools.map((tool) => (
        <Button key={tool.label} variant="ghost" size="icon-sm" aria-label={tool.label} title={tool.label}>
          <tool.icon />
        </Button>
      ))}
    </div>
  )
}`,
  },
  {
    name: "NotificationBadgeButton",
    description: "Icon and labelled buttons with unread count badges for inbox and notifications.",
    code: `
export default function NotificationBadgeButton() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" size="icon" aria-label="Notifications" className="relative">
        <BellIcon />
        <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center bg-destructive px-1 text-[10px] font-medium text-white">
          3
        </span>
      </Button>
      <Button variant="outline">
        <InboxIcon data-icon="inline-start" />
        Inbox
        <Badge variant="secondary" className="ml-1">
          12
        </Badge>
      </Button>
    </div>
  )
}`,
  },
]

// Pricing-plan CTA buttons share one layout with different copy.
const pricing = [
  { name: "PricingStarterCta", plan: "Starter", price: "$0", note: "Free forever for personal projects", cta: "Get started", variant: "outline" },
  { name: "PricingProCta", plan: "Pro", price: "$24", note: "Per seat, billed annually", cta: "Start 14-day trial", variant: "default" },
] as const

for (const p of pricing) {
  examples.push({
    name: p.name,
    description: `Pricing call-to-action for the ${p.plan} plan with price and supporting note.`,
    code: `
const plan = ${json({ plan: p.plan, price: p.price, note: p.note, cta: p.cta })}

export default function ${p.name}() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">{plan.plan}</span>
        <span className="text-2xl font-semibold">
          {plan.price}
          <span className="text-xs font-normal text-muted-foreground">/mo</span>
        </span>
      </div>
      <Button variant="${p.variant}" className="w-full">
        {plan.cta}
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <p className="text-center text-xs text-muted-foreground">{plan.note}</p>
    </div>
  )
}`,
  })
}

export default examples
