import type { CategoryContent } from "../types"

export const gaming: CategoryContent = {
  slug: "gaming",
  name: "Gaming",
  description:
    "High-energy launch pages for game studios, esports teams and gaming platforms, with editions, trailers and community sections.",
  iconName: "Gamepad2",
  visual: "visual",
  navSecondary: "Join Discord",
  navLinks: ["Game", "Editions", "Roadmap", "Community", "Press"],
  copy: {
    featuresEyebrow: "Gameplay",
    featuresTitle: "Built for the long session",
    featuresBody:
      "Deep systems, hand-crafted worlds and a combat loop that rewards practice, whether you play for twenty minutes or all night.",
    showcaseTitle: "Explore the worlds",
    showcaseBody:
      "Every region has its own factions, music and secrets. Here is a first look at where your journey begins.",
    stepsTitle: "Your first night in the game",
    testimonialsTitle: "What players and critics are saying",
    pricingTitle: "Choose your edition",
    pricingBody:
      "Every edition includes the full campaign, free seasonal updates and cross-progression across PC and console.",
    faqTitle: "Frequently asked questions",
    logosLabel: "Featured by",
  },
  features: [
    {
      icon: "Swords",
      title: "Skill-based combat",
      description:
        "Parry, dodge and chain abilities in a fluid system with no auto-aim and no pay-to-win upgrades.",
    },
    {
      icon: "Map",
      title: "Hand-crafted open world",
      description:
        "Six regions built by hand, with dungeons, side stories and secrets you will still be finding a year from now.",
    },
    {
      icon: "Users",
      title: "Four-player co-op",
      description:
        "Drop in and out of a friend's campaign at any time, with shared loot and scaling difficulty.",
    },
    {
      icon: "Trophy",
      title: "Ranked seasons",
      description:
        "Climb from Bronze to Apex in eight-week seasons with skill-based matchmaking and exclusive cosmetic rewards.",
    },
    {
      icon: "Cpu",
      title: "Runs at 120 FPS",
      description:
        "Optimised for current consoles and mid-range PCs, with DLSS, FSR and full ultrawide support.",
    },
    {
      icon: "RefreshCw",
      title: "Cross-progression",
      description:
        "Start on console, continue on PC or Steam Deck. Your saves, unlocks and friends follow you everywhere.",
    },
    {
      icon: "Headphones",
      title: "Original soundtrack",
      description:
        "Over four hours of original music recorded with a live orchestra and a dynamic score that reacts to combat.",
    },
    {
      icon: "Accessibility",
      title: "Accessible by design",
      description:
        "Remappable controls, colour-blind modes, subtitles with speaker names and adjustable combat speed.",
    },
  ],
  stats: [
    { value: "3.2M", label: "Players in the first month" },
    { value: "94%", label: "Positive reviews on Steam" },
    { value: "60+", label: "Hours of campaign content" },
    { value: "18", label: "Languages supported" },
    { value: "$1.5M", label: "Tournament prize pool" },
    { value: "240K", label: "Discord members" },
  ],
  logos: ["PC Arena", "Pixel Press", "GameFront", "Respawn Weekly", "Critical Hit", "Lootbox", "IndieVerse", "The Joystick"],
  testimonials: [
    {
      quote:
        "The most confident combat system I have played in years. Every fight feels earned, and every death teaches you something.",
      name: "Jordan Hale",
      role: "Senior Editor, PC Arena",
    },
    {
      quote:
        "I have put 200 hours in and I am still discovering new areas. The world design is genuinely remarkable.",
      name: "Mika Tanaka",
      role: "Steam reviewer, 214 hours played",
    },
    {
      quote:
        "Co-op is seamless. My friends join mid-dungeon and the difficulty just adjusts. No lobbies, no waiting.",
      name: "Luis Ortega",
      role: "Streamer, 180K followers",
    },
    {
      quote:
        "Finally a ranked mode that feels fair. The matchmaking is tight and the seasons give you a reason to come back.",
      name: "Aisha Bello",
      role: "Pro player, Team Vortex",
    },
    {
      quote:
        "A small team made something that stands next to the biggest releases of the year. Essential.",
      name: "Rhys Morgan",
      role: "Reviewer, IndieVerse",
    },
    {
      quote:
        "The accessibility options are the best I have seen. I could finally finish a game like this with my friends.",
      name: "Hannah Klein",
      role: "Community member",
    },
  ],
  steps: [
    {
      title: "Create your character",
      description: "Pick from five classes and shape your look, voice and backstory in a detailed creator.",
    },
    {
      title: "Survive the prologue",
      description: "A tight two-hour opening teaches every system without a single tutorial pop-up.",
    },
    {
      title: "Find your squad",
      description: "Invite friends or use in-game matchmaking to form a party of up to four players.",
    },
    {
      title: "Enter ranked",
      description: "Unlock ranked after level 20 and start climbing the seasonal ladder.",
    },
  ],
  showcase: [
    { name: "The Ashen Coast", meta: "Starting region · Levels 1-15", tag: "Act I", price: "8 hrs" },
    { name: "Hollow Peaks", meta: "Frozen highlands · Levels 15-30", tag: "Act II", price: "12 hrs" },
    { name: "Verdant Deep", meta: "Overgrown ruins · Levels 30-45", tag: "Act III", price: "14 hrs" },
    { name: "The Iron Citadel", meta: "Raid dungeon · 4 players", tag: "Raid", price: "3 hrs" },
    { name: "Duskmarket", meta: "Social hub · Trading and crafting", tag: "Hub", price: "Free" },
    { name: "The Rift", meta: "Endgame arena · Ranked only", tag: "Season 3", price: "Ranked" },
  ],
  tiers: [
    {
      name: "Standard",
      price: "$39",
      period: "one-time",
      description: "The complete base game.",
      features: ["Full campaign", "Online co-op", "Ranked seasons", "Free seasonal updates"],
      cta: "Buy Standard",
    },
    {
      name: "Deluxe",
      price: "$59",
      period: "one-time",
      description: "The game plus year-one content.",
      features: [
        "Everything in Standard",
        "Year 1 expansion pass",
        "Digital soundtrack",
        "Exclusive armour set",
        "72-hour early access",
      ],
      cta: "Buy Deluxe",
    },
    {
      name: "Collector's",
      price: "$149",
      period: "one-time",
      description: "For the most dedicated players.",
      features: [
        "Everything in Deluxe",
        "30 cm resin statue",
        "Hardcover art book",
        "Steelbook case",
        "Cloth world map",
      ],
      cta: "Pre-order now",
    },
  ],
  faqs: [
    { q: "Which platforms is the game available on?", a: "PC via Steam and Epic, PlayStation 5 and Xbox Series X and S. Steam Deck is fully verified." },
    { q: "Is there cross-play?", a: "Yes. Co-op and ranked matchmaking work across all platforms, and you can opt out at any time." },
    { q: "Are there microtransactions?", a: "Only optional cosmetics. Nothing that affects gameplay, power or progression is ever sold." },
    { q: "Can I play solo?", a: "Absolutely. The full campaign is designed for solo play, with co-op as an optional extra." },
    { q: "What are the minimum PC requirements?", a: "A GTX 1660 or RX 5600, 16 GB of RAM and an SSD with 70 GB of free space." },
    { q: "When does early access start?", a: "Deluxe and Collector's owners can start playing 72 hours before the global launch." },
  ],
  footer: [
    { title: "Game", links: ["Editions", "Roadmap", "Patch notes", "System requirements"] },
    { title: "Community", links: ["Discord", "Forums", "Creator program", "Esports"] },
    { title: "Studio", links: ["About", "Careers", "Press kit", "Support"] },
  ],
  pages: [
    {
      brand: "Emberfall",
      description: "A game launch landing page for an action RPG with editions, regions and critic quotes.",
      eyebrow: "Out now on PC and console",
      headline: "A world worth fighting for",
      highlight: "fighting for",
      subheadline:
        "Emberfall is a hand-crafted action RPG with skill-based combat, four-player co-op and a world that rewards curiosity.",
      primaryCta: "Buy now",
      secondaryCta: "Watch trailer",
      announcement: "Season 3: The Rift is live with a new raid and ranked rewards",
      tagline: "An action RPG by a team of 40.",
      ctaHeadline: "Your story starts on the Ashen Coast",
      ctaBody: "Available now on Steam, PlayStation 5 and Xbox Series X and S.",
    },
    {
      brand: "Pixelhearth",
      description: "An indie studio landing page with a cosy, editorial feel and a wishlist call to action.",
      eyebrow: "Wishlist on Steam",
      headline: "Cosy games made by a tiny studio",
      highlight: "tiny studio",
      subheadline:
        "We are a six-person studio making warm, handmade games about farming, friendship and finding home. Our next one arrives this spring.",
      primaryCta: "Wishlist now",
      secondaryCta: "Play the demo",
      announcement: "Our free demo is live for Steam Next Fest",
      tagline: "Handmade games from a small studio.",
      ctaHeadline: "Help a small studio with one click",
      ctaBody: "Wishlisting on Steam is the single best way to support independent games.",
    },
    {
      brand: "Vortex Esports",
      description: "An esports organisation landing page with rosters, results and membership tiers.",
      eyebrow: "2026 world finalists",
      headline: "Five titles. One team. Zero excuses.",
      highlight: "Zero excuses.",
      subheadline:
        "Vortex competes at the highest level in five titles. Join the club for match-day content, merch drops and meet-and-greets.",
      primaryCta: "Join the club",
      secondaryCta: "View rosters",
      announcement: "Grand finals watch party tickets now on sale",
      tagline: "Competing at the top since 2016.",
      ctaHeadline: "Wear the colours on match day",
      ctaBody: "Club members get early merch access, exclusive streams and finals ticket priority.",
    },
    {
      brand: "Starforge",
      description: "A sci-fi strategy game landing page with a bold bento hero and season roadmap.",
      eyebrow: "Early access, season one",
      headline: "Command a fleet across a living galaxy",
      highlight: "living galaxy",
      subheadline:
        "Starforge is a grand strategy game where every system, trade route and alliance is shaped by thousands of players in real time.",
      primaryCta: "Join early access",
      secondaryCta: "Read the roadmap",
      announcement: "Season one roadmap revealed: diplomacy, trade wars and new factions",
      tagline: "Grand strategy at galactic scale.",
      ctaHeadline: "The galaxy is waiting for its next admiral",
      ctaBody: "Early access includes every future season at no extra cost.",
    },
    {
      brand: "Arcade Cloud",
      description: "A cloud gaming platform landing page with a library showcase and subscription plans.",
      eyebrow: "No downloads, no console",
      headline: "Play 400 games on any screen",
      highlight: "any screen",
      subheadline:
        "Stream new releases in 4K at 60 FPS on your TV, laptop or phone. Your saves follow you, and the library grows every month.",
      primaryCta: "Start playing",
      secondaryCta: "Browse the library",
      announcement: "Twelve new games added this month, including three day-one releases",
      tagline: "Your console, in the cloud.",
      ctaHeadline: "Press start in under a minute",
      ctaBody: "Try any plan free for 14 days. Cancel whenever you like.",
    },
    {
      brand: "Hollowkeep",
      description: "A game launch landing page for a co-op survival horror title with framed hero and edition tiers.",
      eyebrow: "Four-player co-op horror",
      headline: "Survive the night together, or not at all",
      highlight: "together, or not at all",
      subheadline:
        "Hollowkeep drops up to four friends into a procedurally shifting manor where every door, sound and flashlight battery matters.",
      primaryCta: "Wishlist now",
      secondaryCta: "Watch the trailer",
      announcement: "Open playtest weekend starts Friday on PC and console",
      tagline: "Fear is better with friends.",
      ctaHeadline: "The manor opens its doors this October",
      ctaBody: "Pre-order any edition and get early access to the Lantern Night playtest.",
    },
    {
      brand: "Tidewind Racing",
      description: "A racing game landing page for an open-world sailing sim with spotlight hero and season pass.",
      eyebrow: "Open-world sailing sim",
      headline: "Race the wind across a living ocean",
      highlight: "living ocean",
      subheadline:
        "Tidewind Racing simulates real wind, swell and tide so every regatta plays out differently, from harbour sprints to ocean crossings.",
      primaryCta: "Buy the game",
      secondaryCta: "See the boats",
      announcement: "Season 2 adds the Southern Ocean and twelve new hulls",
      tagline: "Every race, a different sea.",
      ctaHeadline: "Hoist the sails this weekend",
      ctaBody: "Play free all weekend on every platform, with progress carried over if you buy.",
    },
    {
      brand: "Questboard",
      description: "A tabletop gaming companion app landing page with split hero and email capture for beta access.",
      eyebrow: "Built for game masters",
      headline: "Run your campaign without the binder of notes",
      highlight: "without the binder of notes",
      subheadline:
        "Questboard keeps maps, initiative, character sheets and session notes in one shared screen your whole party can see.",
      primaryCta: "Join the beta",
      secondaryCta: "See how it works",
      announcement: "Beta invites go out every Monday to new game masters",
      tagline: "Less prep, more play.",
      ctaHeadline: "Get early access before launch",
      ctaBody: "Leave your email and we'll send a beta invite plus a free one-shot adventure.",
    },
    {
      brand: "Gridlock Tactics",
      description: "A turn-based tactics game landing page for a mech squad title with bento hero and DLC roadmap.",
      eyebrow: "Turn-based mech tactics",
      headline: "Command a squad where every move counts",
      highlight: "every move counts",
      subheadline:
        "Gridlock Tactics pairs deep loadout building with destructible maps, so the battlefield changes as fast as your plan does.",
      primaryCta: "Get it on Steam",
      secondaryCta: "Read the roadmap",
      announcement: "Free Ironclad update adds a new faction and ranked ladder",
      tagline: "Think three turns ahead.",
      ctaHeadline: "Your squad is waiting for orders",
      ctaBody: "Available now on PC, with the console release coming next spring.",
    },
    {
      brand: "Paperlight",
      description: "A narrative puzzle game landing page with minimal editorial layout and critic quotes.",
      eyebrow: "A hand-drawn puzzle story",
      headline: "Fold the world to find your way home",
      highlight: "find your way home",
      subheadline:
        "Paperlight is a short, quiet puzzle game about a paper courier who reshapes each hand-drawn page to cross a city made of letters.",
      primaryCta: "Buy on all platforms",
      secondaryCta: "Read the reviews",
      announcement: "Winner of the independent narrative award at this year's showcase",
      tagline: "Small stories, carefully folded.",
      ctaHeadline: "A four-hour story worth slowing down for",
      ctaBody: "Includes the original soundtrack and an illustrated art book.",
    },
  ],
}
