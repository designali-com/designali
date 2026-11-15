import type { CategoryContent } from "../types"

export const ecommerce: CategoryContent = {
  slug: "ecommerce",
  name: "E-commerce",
  description:
    "Storefront landing pages for direct-to-consumer brands, with product grids, reviews and shipping details.",
  iconName: "ShoppingBag",
  visual: "visual",
  navSecondary: "Cart (0)",
  navLinks: ["Shop", "New arrivals", "Bestsellers", "Our story", "Journal"],
  copy: {
    featuresEyebrow: "Why shop with us",
    featuresTitle: "Made better, delivered faster",
    featuresBody:
      "We work directly with the makers, skip the middlemen and pass the savings on, without ever cutting corners on quality.",
    showcaseTitle: "Bestsellers this week",
    showcaseBody:
      "The pieces our customers keep coming back for. Free shipping on every order over $75.",
    stepsTitle: "From our workshop to your door",
    testimonialsTitle: "Thousands of five-star reviews",
    pricingTitle: "Join the members club",
    pricingBody:
      "Members save on every order, get early access to drops and enjoy free returns for life.",
    faqTitle: "Shipping, returns and more",
    logosLabel: "As featured in",
  },
  features: [
    {
      icon: "Truck",
      title: "Free shipping over $75",
      description:
        "Fast, carbon-neutral delivery to your door, usually within two to four working days.",
    },
    {
      icon: "RotateCcw",
      title: "60-day returns",
      description:
        "Not quite right? Send it back within 60 days for a full refund, no questions asked.",
    },
    {
      icon: "Leaf",
      title: "Responsibly sourced",
      description:
        "Organic and recycled materials from certified suppliers we visit in person every year.",
    },
    {
      icon: "Award",
      title: "Lifetime guarantee",
      description:
        "Our core pieces are built to last. If something breaks, we repair or replace it for free.",
    },
    {
      icon: "Recycle",
      title: "Plastic-free packaging",
      description:
        "Every order ships in recycled, compostable packaging that looks great on the doorstep.",
    },
    {
      icon: "Tag",
      title: "Fair, transparent prices",
      description:
        "We show the true cost of every product, from materials to labour to shipping.",
    },
    {
      icon: "Headphones",
      title: "Real human support",
      description:
        "Chat with our customer care team seven days a week. Average reply time is eight minutes.",
    },
    {
      icon: "Gift",
      title: "Gift wrapping",
      description:
        "Add a handwritten note and gift wrap at checkout for any occasion, completely free.",
    },
  ],
  stats: [
    { value: "250k+", label: "Happy customers" },
    { value: "4.9/5", label: "From 18,000 reviews" },
    { value: "48h", label: "Average dispatch time" },
    { value: "100%", label: "Plastic-free packaging" },
    { value: "32", label: "Countries we ship to" },
    { value: "1%", label: "Of revenue to climate projects" },
  ],
  logos: [
    "Vogue",
    "GQ",
    "Wired",
    "The Guardian",
    "Monocle",
    "Kinfolk",
    "Dezeen",
    "Elle Decor",
  ],
  testimonials: [
    {
      quote:
        "The quality is unreal for the price. I bought one and came back a week later for three more in different colours.",
      name: "Emily Watson",
      role: "Verified buyer",
    },
    {
      quote:
        "Arrived in two days in the most beautiful packaging. It has become my go-to gift for friends.",
      name: "Carlos Mendes",
      role: "Verified buyer",
    },
    {
      quote:
        "I returned a size with zero hassle and the replacement arrived before I even posted the original back.",
      name: "Yuki Tanaka",
      role: "Verified buyer",
    },
    {
      quote:
        "Two years in and it still looks brand new. Worth every penny and then some.",
      name: "Rachel Adams",
      role: "Verified buyer",
    },
    {
      quote:
        "Love knowing exactly where my things are made and who made them. More brands should be this honest.",
      name: "Daniel Kim",
      role: "Verified buyer",
    },
    {
      quote:
        "Customer service sorted a delivery issue in minutes over chat. Genuinely the best experience I have had online.",
      name: "Sophie Laurent",
      role: "Verified buyer",
    },
  ],
  steps: [
    {
      title: "Designed in house",
      description:
        "Our small design team develops every product over months of testing and refinement.",
    },
    {
      title: "Made by experts",
      description:
        "Crafted by family-run workshops we have partnered with for years, paid fairly for their skill.",
    },
    {
      title: "Checked by hand",
      description:
        "Every piece is inspected before it leaves our warehouse, so only the best reaches you.",
    },
    {
      title: "Delivered to you",
      description:
        "Packed in plastic-free materials and shipped carbon-neutral, with tracking from door to door.",
    },
  ],
  showcase: [
    { name: "The Everyday Tote", meta: "Waxed canvas, 3 colours", tag: "Bestseller", price: "$98" },
    { name: "Merino Crew Sweater", meta: "Extra-fine merino, 6 colours", tag: "New", price: "$120" },
    { name: "Ceramic Pour-Over Set", meta: "Hand-glazed stoneware", tag: "Limited", price: "$64" },
    { name: "Linen Bedding Bundle", meta: "Stonewashed European flax", tag: "Bestseller", price: "$240" },
    { name: "Leather Card Wallet", meta: "Vegetable-tanned leather", tag: "Gift idea", price: "$45" },
    { name: "Wool Throw Blanket", meta: "Woven in Portugal", tag: "Back in stock", price: "$135" },
  ],
  tiers: [
    {
      name: "Guest",
      price: "Free",
      period: "",
      description: "Shop any time, no account needed.",
      features: ["Free shipping over $75", "60-day returns", "Order tracking", "Email support"],
      cta: "Start shopping",
    },
    {
      name: "Member",
      price: "$49",
      period: "/year",
      description: "For people who shop with us often.",
      features: [
        "10% off every order",
        "Free shipping on everything",
        "Early access to new drops",
        "Free returns for life",
        "Birthday gift",
      ],
      cta: "Become a member",
    },
    {
      name: "Wholesale",
      price: "Custom",
      period: "",
      description: "For retailers, hotels and corporate gifting.",
      features: ["Volume pricing", "Custom branding", "Dedicated account manager", "Net-30 payment terms"],
      cta: "Enquire now",
    },
  ],
  faqs: [
    {
      q: "How long does shipping take?",
      a: "Orders are dispatched within 48 hours. Domestic delivery takes two to four working days and international seven to ten.",
    },
    {
      q: "What is your return policy?",
      a: "You can return any unused item within 60 days for a full refund. Return labels are free for members.",
    },
    {
      q: "Do you ship internationally?",
      a: "We ship to 32 countries. Duties and taxes are calculated at checkout so there are no surprises on delivery.",
    },
    {
      q: "How do I care for my products?",
      a: "Every order includes a care card, and detailed guides for each material are available in our journal.",
    },
    {
      q: "Can I change or cancel my order?",
      a: "Yes, within one hour of placing it. After that it is usually already being packed, but our team will do its best.",
    },
    {
      q: "Do you offer gift cards?",
      a: "Digital gift cards are available from $25 to $500 and never expire.",
    },
  ],
  footer: [
    { title: "Shop", links: ["New arrivals", "Bestsellers", "Gift cards", "Sale"] },
    { title: "Help", links: ["Shipping", "Returns", "Size guide", "Contact us"] },
    { title: "About", links: ["Our story", "Makers", "Sustainability", "Journal"] },
  ],
  pages: [
    {
      brand: "Hearth & Loom",
      description: "An e-commerce landing page for a home textiles brand with product grid and reviews.",
      eyebrow: "New autumn collection",
      headline: "Linen and wool for a slower kind of home",
      highlight: "slower kind of home",
      subheadline:
        "Hearth & Loom makes bedding, throws and table linen from natural fibres, woven by family mills in Portugal and Lithuania.",
      primaryCta: "Shop the collection",
      secondaryCta: "Our makers",
      announcement: "Free shipping on all orders over $75",
      tagline: "Natural textiles for the home.",
      ctaHeadline: "Make your home a little softer",
      ctaBody: "Sign up for 10% off your first order and first look at new collections.",
    },
    {
      brand: "Stride",
      description: "An e-commerce landing page for a sustainable sneaker brand with bold gradient hero.",
      eyebrow: "Made from recycled ocean plastic",
      headline: "Sneakers that tread lightly",
      highlight: "tread lightly",
      subheadline:
        "Stride makes everyday sneakers from recycled materials and natural rubber, with a lighter footprint and all-day comfort.",
      primaryCta: "Shop sneakers",
      secondaryCta: "How they are made",
      announcement: "The Coastal Runner is back in all sizes",
      tagline: "Better sneakers for a better planet.",
      ctaHeadline: "Try them for 30 days, risk free",
      ctaBody: "Walk, run and live in them. If you do not love them, send them back for free.",
    },
    {
      brand: "Brewhaus",
      description: "An e-commerce landing page for a specialty coffee subscription with split hero.",
      eyebrow: "Freshly roasted every Monday",
      headline: "Exceptional coffee, delivered on your schedule",
      highlight: "on your schedule",
      subheadline:
        "Brewhaus sources single-origin beans directly from farmers and roasts to order, so your coffee arrives at its peak.",
      primaryCta: "Build your subscription",
      secondaryCta: "Shop beans",
      announcement: "Get your first bag for half price",
      tagline: "Direct-trade specialty coffee.",
      ctaHeadline: "Your best cup of coffee is a click away",
      ctaBody: "Pause, skip or cancel your subscription any time from your account.",
    },
    {
      brand: "Lumi Skin",
      description: "An e-commerce landing page for a clean skincare brand with bento hero and memberships.",
      eyebrow: "Dermatologist developed",
      headline: "Skincare that keeps it simple",
      highlight: "simple",
      subheadline:
        "Lumi Skin makes a short routine of fragrance-free essentials, clinically tested on sensitive skin and priced honestly.",
      primaryCta: "Find your routine",
      secondaryCta: "Take the skin quiz",
      announcement: "New: SPF 50 daily moisturiser",
      tagline: "Clean, simple skincare.",
      ctaHeadline: "Healthier skin in three simple steps",
      ctaBody: "Take our two-minute quiz and get a routine matched to your skin.",
    },
    {
      brand: "Fieldkit",
      description: "An e-commerce landing page for an outdoor gear brand with dark inverted hero.",
      eyebrow: "Built for the backcountry",
      headline: "Gear that goes the distance",
      highlight: "the distance",
      subheadline:
        "Fieldkit designs lightweight packs, shells and camp essentials tested by guides in the Alps, Patagonia and the Rockies.",
      primaryCta: "Shop gear",
      secondaryCta: "Field tested",
      announcement: "Lifetime repairs on every pack we make",
      tagline: "Outdoor gear, built to last.",
      ctaHeadline: "Your next adventure starts here",
      ctaBody: "Join the Fieldkit club for trail guides, early drops and members-only pricing.",
    },
  ],
}
