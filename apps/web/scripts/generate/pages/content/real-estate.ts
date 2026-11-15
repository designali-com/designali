import type { CategoryContent } from "../types"

export const realEstate: CategoryContent = {
  slug: "real-estate",
  name: "Real Estate",
  description:
    "Landing pages for agencies, developers, rentals and proptech platforms, with listings and valuation calls to action.",
  iconName: "House",
  visual: "visual",
  navSecondary: "Saved homes",
  navLinks: ["Buy", "Rent", "Sell", "Agents", "Insights"],
  copy: {
    featuresEyebrow: "Why choose us",
    featuresTitle: "A smarter way to buy, sell and rent",
    featuresBody:
      "Local experts, accurate data and a process that keeps you informed from the first viewing to the final signature.",
    showcaseTitle: "Featured listings",
    showcaseBody:
      "Hand-picked homes, updated daily. Book a viewing in person or take a 3D tour from your sofa.",
    stepsTitle: "From first viewing to keys in hand",
    testimonialsTitle: "Homeowners who trusted us",
    pricingTitle: "Fair fees, clearly explained",
    pricingBody:
      "Choose the level of service that suits your sale. No hidden charges and no long tie-in contracts.",
    faqTitle: "Buying and selling questions",
    logosLabel: "Partnered with",
  },
  features: [
    { icon: "MapPin", title: "Local market experts", description: "Agents who live in the neighbourhoods they sell, with an average of 12 years experience." },
    { icon: "ChartLine", title: "Accurate valuations", description: "Pricing backed by recent sales data, so your home sells fast without leaving money on the table." },
    { icon: "Camera", title: "Professional media", description: "Photography, floor plans and 3D tours included with every listing at no extra cost." },
    { icon: "Bell", title: "Instant alerts", description: "Get notified the moment a home matching your criteria comes on the market." },
    { icon: "FileText", title: "Paperless offers", description: "Make, track and sign offers online with legally binding e-signatures." },
    { icon: "Landmark", title: "Mortgage support", description: "Compare rates from 40+ lenders and get pre-approved in as little as 24 hours." },
    { icon: "Calendar", title: "Flexible viewings", description: "Book viewings in the evenings and at weekends, in person or by live video." },
    { icon: "ShieldCheck", title: "Verified listings", description: "Every property is checked by an agent, so what you see is exactly what you get." },
  ],
  stats: [
    { value: "$2.8B", label: "Property sold last year" },
    { value: "21 days", label: "Average time to sale" },
    { value: "102%", label: "Of asking price achieved" },
    { value: "4,600", label: "Homes sold" },
    { value: "180", label: "Local agents" },
    { value: "4.9/5", label: "Client rating" },
  ],
  logos: ["Zillow", "Realtor.com", "Compass", "Redfin", "Rocket Mortgage", "Chase", "Wells Fargo", "Matterport"],
  testimonials: [
    { quote: "We had four offers in the first weekend and sold above asking. The valuation was spot on and the photos were stunning.", name: "Emily and Josh Turner", role: "Sold in Brooklyn" },
    { quote: "As first-time buyers we were terrified. Our agent explained every step and got us the house we had almost given up on.", name: "Priya Shah", role: "First-time buyer" },
    { quote: "I relocated from London without ever visiting in person. The video viewings and 3D tours made it feel easy.", name: "Oliver Grant", role: "Bought remotely" },
    { quote: "They managed our rental from tenant search to repairs. We have had zero void months in three years.", name: "Marta Kowalski", role: "Landlord, 4 properties" },
    { quote: "The market report they sent before listing helped us time the sale perfectly. Clear advice, no pressure.", name: "David Chen", role: "Sold in Austin" },
    { quote: "Mortgage pre-approval in one day, offer accepted in a week. I still cannot believe how smooth it was.", name: "Sasha Ivanova", role: "Bought a condo" },
  ],
  steps: [
    { title: "Book a consultation", description: "Meet a local agent to talk budget, timeline and the neighbourhoods you love." },
    { title: "Tour your shortlist", description: "View homes in person or by video, with honest notes on every property." },
    { title: "Make a strong offer", description: "We use recent sales data to help you offer confidently and negotiate the best terms." },
    { title: "Close and move in", description: "We coordinate inspections, lenders and lawyers right up to handing over the keys." },
  ],
  showcase: [
    { name: "Hillside Modern Residence", meta: "4 bed · 3 bath · 280 m²", tag: "New listing", price: "$1,450,000" },
    { name: "Riverside Loft", meta: "2 bed · 2 bath · 118 m²", tag: "Open house", price: "$725,000" },
    { name: "Garden Townhouse", meta: "3 bed · 2.5 bath · 190 m²", tag: "Price reduced", price: "$899,000" },
    { name: "Penthouse at The Arbor", meta: "3 bed · 3 bath · 210 m²", tag: "Exclusive", price: "$2,300,000" },
    { name: "Coastal Cottage", meta: "2 bed · 1 bath · 92 m²", tag: "Sea view", price: "$640,000" },
    { name: "Downtown Studio", meta: "1 bed · 1 bath · 48 m²", tag: "For rent", price: "$2,100/mo" },
  ],
  tiers: [
    { name: "Essentials", price: "1.5%", period: "of sale price", description: "For confident sellers who want expert marketing.", features: ["Professional photography", "Listing on all major portals", "Online offer management", "Sale progression support"], cta: "Get a valuation" },
    { name: "Full service", price: "2.5%", period: "of sale price", description: "Our most popular, fully managed sale.", features: ["Everything in Essentials", "Accompanied viewings", "3D tour and floor plan", "Dedicated negotiator", "Weekly progress reports"], cta: "Book an agent" },
    { name: "Premier", price: "Custom", period: "", description: "For luxury and architect-designed homes.", features: ["Bespoke marketing campaign", "Print and film production", "Private buyer network", "International exposure", "Senior partner as lead agent"], cta: "Speak to a partner" },
  ],
  faqs: [
    { q: "How much is my home worth?", a: "Book a free valuation and a local agent will visit, review recent comparable sales and give you a written estimate within 48 hours." },
    { q: "How long does it take to sell?", a: "Our homes sell in an average of 21 days, though timing depends on price, location and the season." },
    { q: "Do I have to sign a long contract?", a: "No. Our agreements run for 12 weeks and you can cancel with 14 days notice." },
    { q: "Can you help me get a mortgage?", a: "Yes. Our in-house advisers compare rates from more than 40 lenders and can arrange pre-approval quickly." },
    { q: "Do you manage rental properties?", a: "We offer tenant finding and fully managed lettings, including rent collection, maintenance and compliance." },
    { q: "Can I view homes outside office hours?", a: "Yes. We run viewings on weekday evenings and weekends, as well as live video tours." },
  ],
  footer: [
    { title: "Property", links: ["Buy", "Rent", "Sell", "New developments"] },
    { title: "Services", links: ["Valuations", "Mortgages", "Property management", "Commercial"] },
    { title: "Company", links: ["Our agents", "Market insights", "Careers", "Contact"] },
  ],
  pages: [
    { brand: "Keyhaven", description: "A real estate agency landing page with listings grid and fee tiers.", eyebrow: "Free home valuation", headline: "Find the home that fits your next chapter", highlight: "your next chapter", subheadline: "Keyhaven helps families buy and sell homes with local agents, accurate pricing and a process that keeps you informed every step.", primaryCta: "Search homes", secondaryCta: "Get a valuation", announcement: "Spring market report: prices up 4.2% year on year", tagline: "Local experts, better moves.", ctaHeadline: "Thinking about selling?", ctaBody: "Get a free, no-obligation valuation from a local agent this week." },
    { brand: "Atelier Estates", description: "A luxury property landing page with editorial serif typography and exclusive listings.", eyebrow: "Exceptional homes", headline: "Architecture worth living in", highlight: "worth living in", subheadline: "Atelier Estates represents a curated portfolio of architect-designed homes, with discreet service for buyers and sellers alike.", primaryCta: "View portfolio", secondaryCta: "Private consultation", announcement: "Now representing homes on the Amalfi Coast", tagline: "Homes of distinction.", ctaHeadline: "Selling a remarkable home?", ctaBody: "Arrange a private consultation with one of our senior partners." },
    { brand: "Rentnest", description: "A rental marketplace landing page with search hero and verified apartments.", eyebrow: "No broker fees", headline: "Rent your next apartment without the runaround", highlight: "without the runaround", subheadline: "Rentnest lists verified apartments with real photos, transparent pricing and online applications approved in 24 hours.", primaryCta: "Find a rental", secondaryCta: "List your property", announcement: "Pay your deposit in instalments, interest free", tagline: "Renting, made honest.", ctaHeadline: "Your next place is waiting", ctaBody: "Create a renter profile once and apply to any listing in one click." },
    { brand: "Northline Developments", description: "A new-build development landing page with bento hero and floor plan availability.", eyebrow: "Phase two now selling", headline: "New homes by the river, ready next spring", highlight: "by the river", subheadline: "Northline is a collection of 140 energy-efficient apartments and townhouses with a private park, gym and riverside walkways.", primaryCta: "Register interest", secondaryCta: "Download brochure", announcement: "Show apartment open every weekend, 10am to 4pm", tagline: "Built for the way you live now.", ctaHeadline: "Reserve your home with a $5,000 deposit", ctaBody: "Book a visit to the show apartment and meet the sales team." },
    { brand: "Propel", description: "A proptech investment platform landing page with dark inverted hero and returns stats.", eyebrow: "Fractional property investing", headline: "Own a share of rental property from $100", highlight: "from $100", subheadline: "Propel lets you invest in vetted rental homes across the US, earning monthly rental income without the hassle of being a landlord.", primaryCta: "Start investing", secondaryCta: "How it works", announcement: "New properties added every Thursday", tagline: "Real estate for everyone.", ctaHeadline: "Build wealth with real assets", ctaBody: "Open an account in five minutes. Invest from just $100." },
  ],
}
