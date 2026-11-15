// Generates registry/registry-blocks-new.ts from the block files on disk.
// Usage: npx tsx scripts/generate/blocks-registry.mts
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs"
import path from "node:path"

const root = path.resolve(import.meta.dirname, "../..")
const blocksDir = path.join(root, "registry/designali")

type Entry = [name: string, category: string, height: string, description: string]

const entries: Entry[] = [
  ["hero-06", "hero", "800px", "An editorial framed hero with oversized type, actions and a metrics row."],
  ["hero-07", "hero", "750px", "A split product hero with an announcement link and an MRR chart card."],
  ["hero-08", "hero", "700px", "A centred waitlist hero with a gradient glow and inline email form."],
  ["hero-09", "hero", "900px", "A studio hero with a large wordmark, service tags and staggered gradient tiles."],
  ["header-07", "header", "400px", "A centred-logo storefront header with split navigation and a mobile menu."],
  ["header-08", "header", "450px", "A dismissible announcement bar above a header with mega-menu style links."],
  ["header-09", "header", "400px", "An app header with a search field, notifications and an account avatar."],
  ["header-10", "header", "450px", "A newspaper-style masthead with a dateline, large title and section links."],
  ["footer-07", "footer", "600px", "A footer with a newsletter signup and three columns of links."],
  ["footer-08", "footer", "700px", "An inverted studio footer with an oversized email link, address and socials."],
  ["footer-09", "footer", "300px", "A minimal single-row footer with links and a system status indicator."],
  ["footer-10", "footer", "600px", "A five-column SaaS footer with product, resources and compliance badges."],
  ["pricing-05", "pricing", "900px", "Three pricing tiers with a monthly and yearly billing switch."],
  ["pricing-06", "pricing", "1000px", "A detailed plan comparison table with grouped feature rows."],
  ["pricing-07", "pricing", "700px", "A usage-based pricing calculator with a seat slider and live total."],
  ["pricing-08", "pricing", "700px", "Fixed-scope service packages presented as two editorial price cards."],
  ["faqs-04", "faqs", "800px", "A numbered two-column FAQ grid with bordered cells."],
  ["faqs-05", "faqs", "900px", "A searchable help center with topic filters and grouped answers."],
  ["faqs-06", "faqs", "700px", "A master-detail FAQ with a question list and a large answer panel."],
  ["faqs-07", "faqs", "800px", "A sticky intro beside a numbered accordion of licensing questions."],
  ["call-to-action-02", "call-to-action", "500px", "A split call-to-action with an oversized headline, supporting copy and two actions."],
  ["call-to-action-03", "call-to-action", "600px", "A centred call-to-action over a masked grid background with a status pill."],
  ["call-to-action-04", "call-to-action", "600px", "A newsletter signup card with perks list and an email form."],
  ["call-to-action-05", "call-to-action", "600px", "A three-path call-to-action grid with inverting hover cards."],
  ["call-to-action-06", "call-to-action", "450px", "An inverted call-to-action band with an install command and paired buttons."],
  ["call-to-action-07", "call-to-action", "650px", "A call-to-action card with a stats strip, avatar stack and primary action."],
  ["features-05", "features", "800px", "A six-item bordered feature grid with icons."],
  ["features-06", "features", "1400px", "Alternating feature rows with numbered eyebrows, tags and mock UI visuals."],
  ["features-07", "features", "800px", "A bento feature layout with an assistant preview, small tiles and a wide export row."],
  ["features-08", "features", "600px", "A tabbed feature showcase with a highlighted metric panel."],
  ["features-09", "features", "800px", "A sticky intro with a numbered vertical timeline of steps."],
  ["features-10", "features", "700px", "A feature comparison table against a typical competitor."],
  ["clients-06", "clients", "500px", "A bordered grid of client wordmarks with hover highlight."],
  ["clients-07", "clients", "600px", "A client section with a headline stat and a grid of logo marks."],
  ["clients-08", "clients", "350px", "An infinite marquee of client wordmarks with faded edges."],
  ["clients-09", "clients", "600px", "Client logos paired with short results and case study links."],
  ["clients-10", "clients", "500px", "A statement headline above client names grouped by company size."],
  ["testimonials-02", "testimonials", "500px", "A single centred pull-quote testimonial with an initials avatar."],
  ["testimonials-03", "testimonials", "900px", "A masonry-style grid of customer testimonials."],
  ["testimonials-04", "testimonials", "600px", "A testimonial carousel with previous and next controls."],
  ["testimonials-05", "testimonials", "900px", "Social-post style testimonials arranged in three columns."],
  ["testimonials-06", "testimonials", "600px", "A featured testimonial beside headline rating and adoption stats."],
  ["gallery-03", "gallery", "900px", "A mixed-span editorial image grid with captions."],
  ["gallery-04", "gallery", "900px", "A filterable archive gallery with category tabs."],
  ["gallery-05", "gallery", "900px", "A photo carousel with previous and next controls, captions and thumbnails."],
  ["gallery-06", "gallery", "700px", "A masonry gallery of gradient frames laid out in responsive columns."],
  ["gallery-07", "gallery", "900px", "A generative artwork gallery built from inline SVG compositions."],
  ["media-02", "media", "800px", "A featured video section with a large player frame and title."],
  ["media-03", "media", "800px", "A podcast episode player with cover art, play controls and show notes."],
  ["media-04", "media", "900px", "A video tutorial library with a featured lesson and a thumbnail grid."],
  ["media-05", "media", "700px", "A product demo video section with copy and highlight points."],
  ["media-06", "media", "800px", "A podcast episode list with guests, numbers and durations."],
  ["contact-01", "contact", "800px", "A two-column contact section with details and a message form."],
  ["contact-02", "contact", "600px", "Three contact channel cards for sales, support and press."],
  ["contact-03", "contact", "1000px", "A project inquiry form with selectable services and budget ranges."],
  ["contact-04", "contact", "500px", "A compact contact band with an inline email capture."],
  ["contact-05", "contact", "700px", "A list of studio offices with time zones, phone numbers and copyable emails."],
  ["location-01", "location", "700px", "A single-venue location card with an illustrated map, hours and directions."],
  ["location-02", "location", "700px", "A grid of office locations with addresses and local times."],
  ["location-03", "location", "800px", "A store finder with a searchable list of locations and a map panel."],
  ["location-04", "location", "700px", "An event venue section with address, transport and access details."],
  ["location-05", "location", "800px", "A dotted world map with pinned offices and a regional list."],
  ["navigation-01", "navigation", "600px", "A mega menu navigation with product and resource columns."],
  ["navigation-02", "navigation", "800px", "An application sidebar with pinned projects and a user profile."],
  ["navigation-03", "navigation", "600px", "A breadcrumb and tab navigation bar for nested pages."],
  ["navigation-04", "navigation", "700px", "A command palette style navigation with search and grouped actions."],
  ["navigation-05", "navigation", "600px", "A floating dock navigation beside a mobile bottom tab bar."],
  ["authentication-01", "authentication", "800px", "A split sign-in screen with email, password and remember me."],
  ["authentication-02", "authentication", "800px", "A sign-up form with social providers and a brand panel."],
  ["authentication-03", "authentication", "600px", "A one-time code verification screen with six digit inputs."],
  ["authentication-04", "authentication", "700px", "A passwordless magic-link sign-in with a split layout."],
  ["authentication-05", "authentication", "700px", "A reset password form with a live strength meter and requirements."],
  ["forms-01", "forms", "900px", "A project brief form with grouped fields and budget options."],
  ["forms-02", "forms", "800px", "A multi-step account creation form with progress indicator."],
  ["forms-03", "forms", "1000px", "A profile settings form with selects, toggles and a bio field."],
  ["forms-04", "forms", "600px", "An NPS survey form with a 0 to 10 scale and follow-up comment."],
  ["forms-05", "forms", "800px", "An event registration form with ticket type and agreement checkbox."],
  ["sections-01", "sections", "600px", "An about section with a large statement and key company figures."],
  ["sections-02", "sections", "800px", "A numbered process section describing how a project runs."],
  ["sections-03", "sections", "800px", "A split product section with copy, actions and a mock canvas."],
  ["sections-04", "sections", "700px", "A comparison table section showing why teams are switching."],
  ["sections-05", "sections", "800px", "A team section with initials portraits and roles."],
  ["grid-01", "grid", "800px", "A four-column bordered feature grid with icon cells."],
  ["grid-02", "grid", "700px", "A colour palette grid of swatches with token names and values."],
  ["grid-03", "grid", "800px", "A filterable resource library grid of cards."],
  ["grid-04", "grid", "700px", "A sticky heading beside a grid of design system statistics."],
  ["grid-05", "grid", "600px", "An integrations grid of tool tiles in six columns."],
  ["lists-01", "lists", "700px", "A list of open roles with team, location and type."],
  ["lists-02", "lists", "800px", "A dated changelog list with version tags."],
  ["lists-03", "lists", "600px", "An interactive launch checklist with progress count."],
  ["lists-04", "lists", "800px", "An alphabetical design glossary with term definitions."],
  ["lists-05", "lists", "600px", "A shared file list table with types, sizes and owners."],
  ["analytics-01", "analytics", "800px", "A revenue performance overview with KPI tiles and a line chart."],
  ["analytics-02", "analytics", "700px", "A traffic sources breakdown with switchable ranges and bar meters."],
  ["analytics-03", "analytics", "600px", "A large-number stats section for infrastructure and growth metrics."],
  ["analytics-04", "analytics", "800px", "A content report with top pages table and visit patterns."],
  ["analytics-05", "analytics", "700px", "A conversion funnel chart from first visit to paid plan."],
  ["blog-01", "blog", "800px", "A three-column grid of latest articles with cover gradients."],
  ["blog-02", "blog", "800px", "A featured article with a large cover and a list of recent posts."],
  ["blog-03", "blog", "800px", "A filterable article index with categories and read times."],
  ["blog-04", "blog", "800px", "A blog section of guides with tag badges in four columns."],
  ["blog-05", "blog", "700px", "A newsletter archive with a sticky subscribe form."],
  ["portfolio-01", "portfolio", "1000px", "A selected work grid with project covers, roles and years."],
  ["portfolio-02", "portfolio", "800px", "A project index list with a sticky hover preview."],
  ["portfolio-03", "portfolio", "800px", "A case study summary with challenge, approach and results."],
  ["portfolio-04", "portfolio", "1000px", "A filterable project archive grid."],
  ["portfolio-05", "portfolio", "1000px", "A personal portfolio intro with experience and featured work."],
  ["ecommerce-01", "ecommerce", "900px", "A product collection grid with prices and quick add."],
  ["ecommerce-02", "ecommerce", "1000px", "A product detail section with gallery, colour and size selection."],
  ["ecommerce-03", "ecommerce", "800px", "A shopping cart with quantity controls, promo code and summary."],
  ["ecommerce-04", "ecommerce", "700px", "A split promotional banner for a featured collection."],
  ["ecommerce-05", "ecommerce", "800px", "A product bundle section with included items and pricing."],
]

// Additional entries live in scripts/generate/blocks-entries/<category>.json
// as [name, category, iframeHeight, description] tuples.
const entriesDir = path.join(import.meta.dirname, "blocks-entries")
if (existsSync(entriesDir)) {
  for (const file of readdirSync(entriesDir).filter((f) => f.endsWith(".json")).sort()) {
    const extra = JSON.parse(readFileSync(path.join(entriesDir, file), "utf8")) as Entry[]
    entries.push(...extra)
  }
}
const seen = new Set<string>()
for (const [name] of entries) {
  if (seen.has(name)) throw new Error(`Duplicate block entry ${name}`)
  seen.add(name)
}

const lines: string[] = []
for (const [name, category, height, description] of entries) {
  const filePath = `blocks/${category}/${name}.tsx`
  const abs = path.join(blocksDir, filePath)
  if (!existsSync(abs)) throw new Error(`Missing ${abs}`)
  const source = readFileSync(abs, "utf8")
  const ui = [...source.matchAll(/@workspace\/ui\/components\/([a-z-]+)/g)].map((m) => m[1]!)
  const registryDependencies = [...new Set(ui)].sort()
  const dependencies = source.includes('"lucide-react"') ? ["lucide-react"] : []
  lines.push(`  {
    name: ${JSON.stringify(name)},
    description: ${JSON.stringify(description)},
    type: "registry:block",
    dependencies: ${JSON.stringify(dependencies)},
    registryDependencies: ${JSON.stringify(registryDependencies)},
    files: [
      {
        path: ${JSON.stringify(filePath)},
        type: "registry:component",
      },
    ],
    categories: [${JSON.stringify(category)}],
    meta: {
      iframeHeight: ${JSON.stringify(height)},
    },
  },`)
}

const out = `import { type Registry } from "shadcn/schema"

// Generated by scripts/generate/blocks-registry.mts
export const blocksNew: Registry["items"] = [
${lines.join("\n")}
]
`
writeFileSync(path.join(root, "registry/registry-blocks-new.ts"), out)
console.log(`Wrote ${entries.length} entries`)
