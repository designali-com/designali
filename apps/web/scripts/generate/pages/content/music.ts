import type { CategoryContent } from "../types"

export const music: CategoryContent = {
  slug: "music",
  name: "Music",
  description:
    "Landing pages for artists, labels, music apps and festivals, with releases, tour dates and ticket tiers.",
  iconName: "Music",
  visual: "visual",
  navSecondary: "Listen now",
  navLinks: ["Music", "Tour", "Videos", "Store", "About"],
  copy: {
    featuresEyebrow: "Inside",
    featuresTitle: "Everything around the music",
    featuresBody:
      "Releases, live shows, behind-the-scenes sessions and a community that turns up, all in one place.",
    showcaseTitle: "Latest releases",
    showcaseBody:
      "New records, singles and live sessions. Stream on every platform or buy direct to support the artists.",
    stepsTitle: "From the studio to your speakers",
    testimonialsTitle: "Heard on the radio and in the press",
    pricingTitle: "Get your tickets",
    pricingBody:
      "Limited capacity at every show. Tickets are personal and transferable through the official app only.",
    faqTitle: "Good to know",
    logosLabel: "As heard on",
  },
  features: [
    {
      icon: "Disc3",
      title: "Vinyl and lossless",
      description:
        "Every release is pressed on 180g vinyl and available in 24-bit lossless, mastered for both formats.",
    },
    {
      icon: "Ticket",
      title: "Fair ticketing",
      description:
        "Face-value tickets with no dynamic pricing and a resale cap, so real fans get through the door.",
    },
    {
      icon: "Radio",
      title: "Live sessions",
      description:
        "Monthly stripped-back sessions recorded live in the studio, free to stream for members.",
    },
    {
      icon: "Mic",
      title: "Behind the songs",
      description:
        "Voice notes, demos and lyric sheets from the writing process, shared as each record takes shape.",
    },
    {
      icon: "Users",
      title: "Fan community",
      description:
        "A members-only space for listening parties, setlist votes and early access to new music.",
    },
    {
      icon: "ShoppingBag",
      title: "Official store",
      description:
        "Limited merch runs printed on organic cotton, signed records and bundles shipped worldwide.",
    },
    {
      icon: "Headphones",
      title: "Spatial audio",
      description:
        "Selected albums remixed in Dolby Atmos for a fully immersive listening experience on headphones.",
    },
    {
      icon: "CalendarDays",
      title: "Tour alerts",
      description:
        "Get notified the moment a show is announced near you, before tickets go on general sale.",
    },
  ],
  stats: [
    { value: "420M", label: "Streams across platforms" },
    { value: "86", label: "Shows on the last tour" },
    { value: "3", label: "Gold-certified records" },
    { value: "1.4M", label: "Monthly listeners" },
    { value: "24", label: "Countries visited" },
    { value: "52K", label: "Community members" },
  ],
  logos: ["Radio Meridian", "Soundwave FM", "The Listening Post", "Groove Weekly", "Night Shift Radio", "Vinyl Digest", "Echo Magazine", "Stage Left"],
  testimonials: [
    {
      quote:
        "A record that sounds as good at 2am in headphones as it does in a packed hall. The best release of the year so far.",
      name: "Claire Dubois",
      role: "Music Editor, Echo Magazine",
    },
    {
      quote:
        "The live show is an event. Two hours, no filler, and a crowd singing every word back to the stage.",
      name: "Owen Price",
      role: "Live Reviewer, Stage Left",
    },
    {
      quote:
        "We played the lead single on rotation for six weeks straight. Listeners kept calling in to ask for it.",
      name: "Nadia Haddad",
      role: "Host, Night Shift Radio",
    },
    {
      quote:
        "Buying direct means the artists actually get paid. The vinyl pressing quality is outstanding.",
      name: "Ben Carter",
      role: "Collector, Vinyl Digest reader",
    },
    {
      quote:
        "The listening parties make it feel like a club rather than a fanbase. I have met lifelong friends there.",
      name: "Yuki Sato",
      role: "Community member since 2021",
    },
    {
      quote:
        "Fair ticketing works. I got face-value tickets for the arena show without fighting a single bot.",
      name: "Grace Mensah",
      role: "Ticket holder, London",
    },
  ],
  steps: [
    { title: "Written in the cabin", description: "Every record begins as voice memos and late-night demos in a small rented cabin." },
    { title: "Recorded live to tape", description: "The band tracks together in one room to keep the energy of a live performance." },
    { title: "Mixed and mastered", description: "Mixed in analogue, mastered separately for vinyl, streaming and spatial audio." },
    { title: "Played on the road", description: "New songs are road-tested on tour before they ever reach a final release." },
  ],
  showcase: [
    { name: "Northern Lights", meta: "Album · 12 tracks", tag: "New", price: "48 min" },
    { name: "Glass Houses", meta: "Single · Radio edit", tag: "Single", price: "3:42" },
    { name: "Live at the Roundhouse", meta: "Live album · 18 tracks", tag: "Live", price: "92 min" },
    { name: "Slow Motion", meta: "EP · 5 tracks", tag: "EP", price: "21 min" },
    { name: "Static Bloom", meta: "Album · 10 tracks", tag: "Gold", price: "41 min" },
    { name: "Cabin Sessions", meta: "Acoustic · 7 tracks", tag: "Members", price: "29 min" },
  ],
  tiers: [
    {
      name: "General",
      price: "$45",
      period: "/ticket",
      description: "Standing access to the main floor.",
      features: ["Main floor standing", "Doors from 7pm", "Mobile ticket", "Cloakroom access"],
      cta: "Buy tickets",
    },
    {
      name: "Early Entry",
      price: "$85",
      period: "/ticket",
      description: "Get in first and get close to the stage.",
      features: [
        "Entry 60 minutes early",
        "Exclusive tour poster",
        "Dedicated bar",
        "Merch pre-order pickup",
        "Commemorative laminate",
      ],
      cta: "Buy early entry",
    },
    {
      name: "Soundcheck",
      price: "$190",
      period: "/ticket",
      description: "Watch the band prepare before the show.",
      features: [
        "Live soundcheck access",
        "Q and A with the band",
        "Signed vinyl",
        "Early entry included",
        "Limited to 50 per show",
      ],
      cta: "Get soundcheck",
    },
  ],
  faqs: [
    { q: "Can I transfer my ticket?", a: "Yes, tickets can be transferred to a friend for free through the official app up to 24 hours before doors." },
    { q: "Are shows all ages?", a: "Most shows are all ages with under-16s accompanied by an adult. Check the individual venue listing." },
    { q: "When does vinyl ship?", a: "Pre-orders ship one week before release day so they arrive on time in most countries." },
    { q: "Is the music on streaming services?", a: "Every release is available on all major streaming platforms. Members get early access to selected tracks." },
    { q: "Do you offer accessible tickets?", a: "Yes. Accessible platforms and companion tickets are available at every venue. Contact our access team to book." },
    { q: "What happens if a show is cancelled?", a: "You will be refunded automatically to your original payment method within seven working days." },
  ],
  footer: [
    { title: "Music", links: ["Releases", "Videos", "Lyrics", "Playlists"] },
    { title: "Live", links: ["Tour dates", "VIP", "Accessibility", "Venue info"] },
    { title: "More", links: ["Store", "Newsletter", "Press", "Contact"] },
  ],
  pages: [
    {
      brand: "Halfmoon",
      description: "An indie band landing page with new album release, tour tickets and press quotes.",
      eyebrow: "New album out Friday",
      headline: "Northern Lights, the new record",
      highlight: "Northern Lights",
      subheadline:
        "Twelve songs written in a winter cabin and recorded live to tape. Stream it, press play on the vinyl, or hear it live on tour.",
      primaryCta: "Listen now",
      secondaryCta: "Tour dates",
      announcement: "Northern Lights world tour: 40 new dates announced",
      tagline: "Indie rock from the north.",
      ctaHeadline: "See it live this autumn",
      ctaBody: "Forty dates across Europe and North America. Tickets go fast.",
    },
    {
      brand: "Low Tide Records",
      description: "An independent record label landing page with roster, releases and a demo submission call.",
      eyebrow: "Independent since 2012",
      headline: "A small label for patient music",
      highlight: "patient music",
      subheadline:
        "We release ambient, jazz and left-field electronic records on vinyl and lossless, and we pay artists 60% of every sale.",
      primaryCta: "Browse the catalogue",
      secondaryCta: "Submit a demo",
      announcement: "Spring catalogue: six new records pressing now",
      tagline: "Records that reward repeat listening.",
      ctaHeadline: "Making something slow and beautiful?",
      ctaBody: "We listen to every demo. Send us a private link and a few words about the record.",
    },
    {
      brand: "Tempo",
      description: "A music practice app landing page with features, testimonials and subscription pricing.",
      eyebrow: "The practice app for musicians",
      headline: "Practise smarter, play better",
      highlight: "play better",
      subheadline:
        "Tempo listens as you play, tracks your timing and pitch, and builds a daily routine that adapts to the way you improve.",
      primaryCta: "Download free",
      secondaryCta: "See the features",
      announcement: "Now with real-time feedback for bass and drums",
      tagline: "A practice partner in your pocket.",
      ctaHeadline: "Ten focused minutes a day is enough",
      ctaBody: "Download Tempo free for iOS and Android. Premium includes a 30-day trial.",
    },
    {
      brand: "Saltmarsh Festival",
      description: "A music festival landing page with line-up, ticket tiers and practical FAQs.",
      eyebrow: "12-14 June · On the coast",
      headline: "Three days of music by the sea",
      highlight: "by the sea",
      subheadline:
        "Sixty artists across four stages, camping on the dunes and food from local kitchens. Capacity is capped at 8,000 people.",
      primaryCta: "Buy tickets",
      secondaryCta: "See the line-up",
      announcement: "Final release tickets on sale now, weekend camping almost gone",
      tagline: "A small festival with a big heart.",
      ctaHeadline: "See you on the dunes this June",
      ctaBody: "Weekend tickets include camping. Payment plans available until May.",
    },
    {
      brand: "Ivy Lane",
      description: "A solo artist landing page with dark editorial styling, singles and fan club membership.",
      eyebrow: "Glass Houses, the new single",
      headline: "Songs for the quiet hours",
      highlight: "quiet hours",
      subheadline:
        "Singer-songwriter Ivy Lane returns with an intimate collection of piano ballads, recorded in a single take each.",
      primaryCta: "Stream the single",
      secondaryCta: "Join the fan club",
      announcement: "Intimate listening shows in six cities this winter",
      tagline: "Piano, voice and nothing else.",
      ctaHeadline: "Be in the room for the next song",
      ctaBody: "Fan club members hear new songs first and get presale access to every show.",
    },
    {
      brand: "Velvet Static",
      description: "A synthwave duo landing page with framed hero, new single and tour dates.",
      eyebrow: "New single out now",
      headline: "Neon nights and analog hearts",
      highlight: "analog hearts",
      subheadline:
        "Velvet Static return with Afterglow Drive, a synth-soaked single recorded entirely on vintage hardware in a converted garage.",
      primaryCta: "Listen now",
      secondaryCta: "Get tour tickets",
      announcement: "Afterglow Drive tour adds second nights in four cities",
      tagline: "Synths, sweat and city lights.",
      ctaHeadline: "Catch the show this spring",
      ctaBody: "Tickets include a digital copy of the new record on release day.",
    },
    {
      brand: "Chorus Lab",
      description: "A vocal training app landing page with spotlight hero and subscription pricing.",
      eyebrow: "Your pocket vocal coach",
      headline: "Find your voice and hit every note",
      highlight: "hit every note",
      subheadline:
        "Chorus Lab listens as you sing and gives real-time pitch feedback, warm-ups and lessons built by working vocal coaches.",
      primaryCta: "Start singing free",
      secondaryCta: "See the lessons",
      announcement: "New harmony mode lets you practise duets with friends",
      tagline: "Sing with confidence.",
      ctaHeadline: "Warm up in five minutes a day",
      ctaBody: "Try every lesson free for seven days, then pick a plan that fits.",
    },
    {
      brand: "Loopwell",
      description: "A music production sample marketplace landing page with split hero and email capture for free packs.",
      eyebrow: "Royalty-free sounds",
      headline: "Fresh loops for producers who finish tracks",
      highlight: "producers who finish tracks",
      subheadline:
        "Loopwell releases new drum kits, melodic loops and one-shots every week, all cleared for commercial release.",
      primaryCta: "Browse the library",
      secondaryCta: "Get free packs",
      announcement: "Five new sample packs drop every Thursday",
      tagline: "Sounds that start songs.",
      ctaHeadline: "Get a free pack every week",
      ctaBody: "Sign up with your email and we'll send a cleared sample pack each Thursday.",
    },
    {
      brand: "Basement Sessions",
      description: "A live music venue landing page with bento hero, gig listings and memberships.",
      eyebrow: "Live music, every night",
      headline: "The best small room in the city",
      highlight: "best small room",
      subheadline:
        "Basement Sessions hosts 300 shows a year in a 200-capacity room, from first gigs to surprise sets by touring headliners.",
      primaryCta: "See what's on",
      secondaryCta: "Become a member",
      announcement: "Members now get priority access to all sold-out shows",
      tagline: "Small room, big nights.",
      ctaHeadline: "Your next favourite band plays here",
      ctaBody: "Members save on every ticket and never pay booking fees.",
    },
    {
      brand: "Marlow Strings",
      description: "A classical string quartet landing page with minimal editorial layout and concert season.",
      eyebrow: "2026 concert season",
      headline: "Four instruments, one shared breath",
      highlight: "one shared breath",
      subheadline:
        "Marlow Strings perform Haydn, Bartok and new commissions in intimate halls, with pre-concert talks for curious listeners.",
      primaryCta: "Book concert seats",
      secondaryCta: "Listen to recordings",
      announcement: "New season announced, with three world premieres",
      tagline: "Chamber music, up close.",
      ctaHeadline: "Hear the quartet live this season",
      ctaBody: "Subscribe to the full season and save a quarter on every seat.",
    },
  ],
}
