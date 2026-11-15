/**
 * Content schema for the landing-page generator (scripts/generate/pages.mts).
 *
 * Each category file exports one `CategoryContent`. Pools (features,
 * testimonials, faqs, ...) are intentionally larger than what a single page
 * renders: every page picks a rotated subset so the five pages in a category
 * do not repeat the exact same copy.
 *
 * Rules for copy:
 * - Realistic, industry-specific, no lorem ipsum.
 * - Never mention a page brand inside the shared pools (pools are reused by
 *   all five brands of the category). Use "we", "our team", etc.
 * - `icon` values must be valid lucide-react export names (PascalCase), e.g.
 *   "Zap", "ShieldCheck", "ChartLine". The generator validates them.
 */

export type VisualKind =
  /** Product UI mockups: dashboards, charts, panels. */
  | "product"
  /** Gradient "photo" tiles with overlaid labels (food, travel, homes...). */
  | "visual"
  /** Terminal / code window. Requires `code`. */
  | "code"

export type Feature = { icon: string; title: string; description: string }
export type Stat = { value: string; label: string }
export type Testimonial = { quote: string; name: string; role: string }
export type Step = { title: string; description: string }
export type ShowcaseItem = {
  name: string
  /** Short secondary line, e.g. "3 bed · 2 bath · 140 m²" */
  meta: string
  /** Short chip text, e.g. "New", "Chef's pick", "Open source" */
  tag: string
  /** Price or a short right-aligned value, e.g. "$1.2M", "From $49", "12 min" */
  price: string
}
export type Tier = {
  name: string
  /** e.g. "$29", "Free", "Custom" */
  price: string
  /** e.g. "/month", "/person", "one-time", "" */
  period: string
  description: string
  /** 4-6 bullet features */
  features: string[]
  cta: string
}
export type Faq = { q: string; a: string }

export type PageBrand = {
  /** Fictional brand name, 1-2 words. */
  brand: string
  /** One-line registry description of this page (what it is). */
  description: string
  /** Short badge text above the headline. */
  eyebrow: string
  /** Hero headline, 4-10 words. */
  headline: string
  /** Exact substring of `headline` to accent (optional). */
  highlight?: string
  /** Hero paragraph, 1-2 sentences. */
  subheadline: string
  primaryCta: string
  secondaryCta: string
  /** Text for a slim announcement bar. */
  announcement: string
  /** Short brand tagline used in the footer. */
  tagline: string
  ctaHeadline: string
  ctaBody: string
}

export type CategoryContent = {
  slug: string
  name: string
  /** Sidebar/category description, one sentence. */
  description: string
  /** lucide-react icon name for the sidebar. */
  iconName: string
  visual: VisualKind
  /** Lines for the terminal visual (required when visual === "code"). Lines starting with "$" are commands, "#" comments. */
  code?: string[]
  /** Label for the small secondary nav action, e.g. "Sign in", "Book a table". */
  navSecondary: string
  /** 4-5 nav links. */
  navLinks: string[]
  copy: {
    featuresEyebrow: string
    featuresTitle: string
    featuresBody: string
    showcaseTitle: string
    showcaseBody: string
    stepsTitle: string
    testimonialsTitle: string
    pricingTitle: string
    pricingBody: string
    faqTitle: string
    logosLabel: string
  }
  /** 8 features. */
  features: Feature[]
  /** 6 stats. */
  stats: Stat[]
  /** 8 client / partner / press names. */
  logos: string[]
  /** 6 testimonials. */
  testimonials: Testimonial[]
  /** 4 steps. */
  steps: Step[]
  /** 6 showcase items (products, listings, dishes, projects, courses...). */
  showcase: ShowcaseItem[]
  /** Exactly 3 tiers; the middle one is highlighted. */
  tiers: Tier[]
  /** 6 FAQs. */
  faqs: Faq[]
  /** 3 footer columns. */
  footer: { title: string; links: string[] }[]
  /** Exactly 5 pages (brands). */
  pages: PageBrand[]
}
