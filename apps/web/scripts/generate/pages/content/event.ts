import type { CategoryContent } from "../types"

export const event: CategoryContent = {
  slug: "event",
  name: "Event",
  description:
    "Landing pages for conferences, festivals and meetups, with speaker line-ups, schedules and ticket tiers.",
  iconName: "CalendarDays",
  visual: "visual",
  navSecondary: "Log in",
  navLinks: ["Speakers", "Schedule", "Venue", "Tickets", "Sponsors"],
  copy: {
    featuresEyebrow: "The experience",
    featuresTitle: "Two days designed to be worth the trip",
    featuresBody:
      "Talks, workshops and conversations you cannot get from a livestream, in a venue built for meeting the right people.",
    showcaseTitle: "Speakers and sessions",
    showcaseBody:
      "Practitioners, founders and researchers sharing what they have actually built, not what they plan to build.",
    stepsTitle: "How the days unfold",
    testimonialsTitle: "What past attendees say",
    pricingTitle: "Get your ticket",
    pricingBody:
      "Prices rise as each release sells out. Group discounts apply automatically for five or more tickets.",
    faqTitle: "Event FAQ",
    logosLabel: "Supported by our partners",
  },
  features: [
    {
      icon: "Mic",
      title: "40+ curated talks",
      description:
        "Every session is reviewed by a programme committee and rehearsed with a coach before the event.",
    },
    {
      icon: "Users",
      title: "Hallway-track networking",
      description:
        "Matchmaking in the event app pairs you with attendees who share your goals before you arrive.",
    },
    {
      icon: "Presentation",
      title: "Hands-on workshops",
      description:
        "Small-room sessions capped at 30 people, with materials and laptops-open exercises.",
    },
    {
      icon: "Video",
      title: "Every talk recorded",
      description:
        "Ticket holders get lifetime access to recordings, slides and transcripts within 48 hours.",
    },
    {
      icon: "UtensilsCrossed",
      title: "Food that is good",
      description:
        "Local caterers, vegan and allergy-friendly options, and coffee that does not taste like a conference.",
    },
    {
      icon: "Accessibility",
      title: "Accessible by design",
      description:
        "Step-free venue, live captions on every stage, quiet rooms and a dedicated accessibility team.",
    },
    {
      icon: "PartyPopper",
      title: "Evening social",
      description:
        "An after-party with live music on day one, included in every ticket.",
    },
    {
      icon: "Ticket",
      title: "Fully transferable tickets",
      description:
        "Cannot make it? Transfer your ticket to a colleague for free until the day before doors open.",
    },
  ],
  stats: [
    { value: "2,400", label: "Attendees expected" },
    { value: "60+", label: "Speakers" },
    { value: "3", label: "Stages" },
    { value: "28", label: "Countries represented" },
    { value: "9th", label: "Annual edition" },
    { value: "94%", label: "Would attend again" },
  ],
  logos: ["Northwind", "Parallel", "Stackhouse", "Cobalt", "Fieldnote", "Harbor", "Lumen", "Quartz"],
  testimonials: [
    {
      quote:
        "I came for the talks and left with two new hires and a partnership. The networking app actually worked.",
      name: "Aisha Bello",
      role: "Founder, attended 2025",
    },
    {
      quote:
        "The most well-run event I have been to. Sessions started on time and every speaker had something real to say.",
      name: "Chris Navarro",
      role: "Engineering Manager",
    },
    {
      quote:
        "The workshops alone were worth the ticket. I used what I learned on Monday morning.",
      name: "Mei Tanaka",
      role: "Product Designer",
    },
    {
      quote:
        "As a first-time speaker I felt completely supported. The rehearsal coaching made a huge difference.",
      name: "Oliver Grant",
      role: "Speaker, 2025",
    },
    {
      quote:
        "Captions on every stage and a real quiet room. It is rare to see accessibility taken this seriously.",
      name: "Fatima Rahman",
      role: "Accessibility Lead",
    },
    {
      quote:
        "We have sponsored for four years because the audience is exactly who we want to meet.",
      name: "Ben Hollis",
      role: "Head of Marketing, sponsor",
    },
  ],
  steps: [
    {
      title: "Morning keynotes",
      description:
        "Doors open at 8:30 with breakfast. Keynotes run on the main stage from 9:30 until 11:00.",
    },
    {
      title: "Parallel tracks",
      description:
        "Choose between three stages covering strategy, engineering and design through the afternoon.",
    },
    {
      title: "Workshops",
      description:
        "Pre-booked small-group workshops run in the studios from 14:00, with limited seats.",
    },
    {
      title: "Evening social",
      description:
        "Wind down with live music, food trucks and the people you met in the hallway.",
    },
  ],
  showcase: [
    { name: "Amara Okoye", meta: "Designing for the next billion users", tag: "Keynote", price: "Day 1 · 09:30" },
    { name: "Lucas Bernard", meta: "Scaling teams without losing culture", tag: "Leadership", price: "Day 1 · 11:15" },
    { name: "Ingrid Solberg", meta: "What we learned shipping weekly for 5 years", tag: "Engineering", price: "Day 1 · 14:00" },
    { name: "Diego Herrera", meta: "Hands-on: prototyping with real data", tag: "Workshop", price: "Day 2 · 10:00" },
    { name: "Yuna Park", meta: "The quiet power of good defaults", tag: "Design", price: "Day 2 · 13:30" },
    { name: "Samuel Adeyemi", meta: "Closing keynote: building for decades", tag: "Keynote", price: "Day 2 · 16:45" },
  ],
  tiers: [
    {
      name: "Early bird",
      price: "$349",
      period: "/ticket",
      description: "Limited release for the first 300 attendees.",
      features: ["Both conference days", "All talks and stages", "Lunch and coffee", "Evening social", "Session recordings"],
      cta: "Buy early bird",
    },
    {
      name: "Full pass",
      price: "$549",
      period: "/ticket",
      description: "Everything, including workshops.",
      features: [
        "Both conference days",
        "Two workshop seats",
        "Priority seating",
        "Speaker dinner draw",
        "Recordings and slides",
      ],
      cta: "Get the full pass",
    },
    {
      name: "Team",
      price: "$449",
      period: "/person",
      description: "For groups of five or more.",
      features: [
        "Full pass benefits",
        "Single invoice",
        "Reserved team table",
        "Flexible name changes",
        "Dedicated contact",
      ],
      cta: "Book for your team",
    },
  ],
  faqs: [
    {
      q: "Where is the event held?",
      a: "At a converted riverside warehouse ten minutes from the central station, with step-free access throughout.",
    },
    {
      q: "Can I get a refund?",
      a: "Tickets are refundable up to 30 days before the event. After that you can transfer your ticket to someone else for free.",
    },
    {
      q: "Is there a code of conduct?",
      a: "Yes. Every attendee, speaker and sponsor agrees to our code of conduct, and a safety team is on site at all times.",
    },
    {
      q: "Will the talks be streamed?",
      a: "Talks are recorded and shared with ticket holders within 48 hours. There is no public livestream.",
    },
    {
      q: "Do you offer diversity tickets?",
      a: "We fund over 100 free tickets each year for people from under-represented groups. Applications open in spring.",
    },
    {
      q: "Can my company sponsor?",
      a: "Yes. Download the sponsorship deck or email our partnerships team for available packages.",
    },
  ],
  footer: [
    { title: "Event", links: ["Speakers", "Schedule", "Workshops", "Tickets"] },
    { title: "Attend", links: ["Venue", "Travel and hotels", "Accessibility", "Code of conduct"] },
    { title: "Get involved", links: ["Call for speakers", "Sponsorship", "Volunteer", "Contact"] },
  ],
  pages: [
    {
      brand: "Shipyard Conf",
      description: "An event landing page for a product and engineering conference with speakers and ticket tiers.",
      eyebrow: "June 11 to 12 · Amsterdam",
      headline: "Two days with the people who ship great software",
      highlight: "ship great software",
      subheadline:
        "Shipyard brings 2,400 engineers, designers and product leaders together for talks, workshops and conversations that change how you work.",
      primaryCta: "Get tickets",
      secondaryCta: "View schedule",
      announcement: "Early bird tickets end Friday",
      tagline: "The conference for builders.",
      ctaHeadline: "See you in Amsterdam",
      ctaBody: "Early bird tickets are limited. Lock in the lowest price today.",
    },
    {
      brand: "Solstice Fest",
      description: "An event landing page for a summer music and arts festival with bold editorial typography.",
      eyebrow: "Three days · Four stages",
      headline: "Music, art and long summer evenings",
      highlight: "long summer evenings",
      subheadline:
        "Solstice Fest returns to the lakeside for three days of live music, open-air cinema, food from 40 local kitchens and camping under the stars.",
      primaryCta: "Buy weekend pass",
      secondaryCta: "See the line-up",
      announcement: "Line-up wave two announced",
      tagline: "Summer, turned up.",
      ctaHeadline: "Weekend passes are going fast",
      ctaBody: "Camping and car parking are limited. Book together to keep your crew close.",
    },
    {
      brand: "Founders Table",
      description: "An event landing page for an intimate founder meetup series with email capture hero.",
      eyebrow: "Monthly · Invite only",
      headline: "Dinners for founders who want honest advice",
      highlight: "honest advice",
      subheadline:
        "Founders Table hosts 20 early-stage founders each month for an off-the-record dinner with an operator who has done it before.",
      primaryCta: "Request an invite",
      secondaryCta: "Past hosts",
      announcement: "Applications for the March dinner close soon",
      tagline: "Small rooms, real conversations.",
      ctaHeadline: "Pull up a chair",
      ctaBody: "Tell us what you are building. We review every application personally.",
    },
    {
      brand: "Datacraft Summit",
      description: "An event landing page for a data and AI summit with bento hero and session listings.",
      eyebrow: "Oct 2 to 3 · Hybrid",
      headline: "Where data teams learn what actually works",
      highlight: "actually works",
      subheadline:
        "Datacraft Summit features 60 sessions on analytics engineering, ML in production and data leadership, in person in Berlin and online.",
      primaryCta: "Register now",
      secondaryCta: "Submit a talk",
      announcement: "Call for speakers closes July 15",
      tagline: "Data, crafted.",
      ctaHeadline: "Join 3,000 data practitioners",
      ctaBody: "Attend in Berlin or online. Every session is recorded for registered attendees.",
    },
    {
      brand: "Greenline Expo",
      description: "An event landing page for a sustainability trade expo with exhibitors and pass pricing.",
      eyebrow: "The climate tech expo",
      headline: "300 exhibitors building a cleaner economy",
      highlight: "cleaner economy",
      subheadline:
        "Greenline Expo connects buyers, investors and innovators across energy, mobility, materials and food for three days of demos and deals.",
      primaryCta: "Get your pass",
      secondaryCta: "Exhibit with us",
      announcement: "Exhibitor floor plan now available",
      tagline: "Where climate tech does business.",
      ctaHeadline: "Meet the companies changing industry",
      ctaBody: "Buyer and investor passes include pre-booked meetings with exhibitors.",
    },
    {
      brand: "Harbor Run",
      description: "An event landing page for a city marathon and half marathon with framed hero and race registration.",
      eyebrow: "April 19 \u00b7 Waterfront start",
      headline: "Run 26.2 miles along the harbour",
      highlight: "along the harbour",
      subheadline:
        "Harbor Run takes 18,000 runners on a flat, fast course past the docks, bridges and old town, with live music every mile.",
      primaryCta: "Register to run",
      secondaryCta: "Course map",
      announcement: "Half marathon places are 80% sold",
      tagline: "The city's favourite race day.",
      ctaHeadline: "Your race day starts here",
      ctaBody: "Register now and train with our free 16-week plan.",
    },
    {
      brand: "Lumen Gala",
      description: "An event landing page for a charity gala dinner with spotlight hero and table packages.",
      eyebrow: "Black tie \u00b7 November 21",
      headline: "An evening that lights up young lives",
      highlight: "lights up young lives",
      subheadline:
        "Lumen Gala raises funds for children's hospital care with a three-course dinner, live auction and performances from guest artists.",
      primaryCta: "Reserve a table",
      secondaryCta: "Become a sponsor",
      announcement: "Auction lots now previewing online",
      tagline: "An evening for a good cause.",
      ctaHeadline: "Take your seat for a good cause",
      ctaBody: "Individual seats and tables of ten are available while they last.",
    },
    {
      brand: "Buildnight",
      description: "An event landing page for a weekend hackathon with split hero and email capture for updates.",
      eyebrow: "48 hours \u00b7 $50k in prizes",
      headline: "Build something wild in one weekend",
      highlight: "one weekend",
      subheadline:
        "Buildnight gathers 600 developers, designers and founders to ship projects with mentors, free food and prizes for the best teams.",
      primaryCta: "Apply to hack",
      secondaryCta: "Get updates",
      announcement: "Applications open next month",
      tagline: "Ship it by Sunday.",
      ctaHeadline: "Get notified when applications open",
      ctaBody: "Join the list for early application access, sponsor perks and the theme reveal.",
    },
    {
      brand: "Makers Fair",
      description: "An event landing page for an independent design and craft market with bento hero and vendor listings.",
      eyebrow: "Two days \u00b7 200 makers",
      headline: "Meet the makers behind the things you love",
      highlight: "the makers",
      subheadline:
        "Makers Fair brings ceramicists, jewellers, printmakers and furniture makers together in a restored railway hall for a weekend of shopping and workshops.",
      primaryCta: "Get free tickets",
      secondaryCta: "Apply as a vendor",
      announcement: "Workshop bookings are now open",
      tagline: "Handmade, in person.",
      ctaHeadline: "Shop independent this season",
      ctaBody: "Free entry with a timed ticket. Workshops book up fast.",
    },
    {
      brand: "Wordfest",
      description: "An event landing page for a literary festival with minimal editorial layout and author programme.",
      eyebrow: "Ten days of books and ideas",
      headline: "Conversations with the writers shaping our world",
      highlight: "shaping our world",
      subheadline:
        "Wordfest hosts over 120 authors, poets and journalists for talks, readings and workshops across the city's libraries and theatres.",
      primaryCta: "Browse the programme",
      secondaryCta: "Become a Friend",
      announcement: "Friends priority booking opens Monday",
      tagline: "Stories worth gathering for.",
      ctaHeadline: "Find your next favourite writer",
      ctaBody: "Book individual events or a festival pass with Friends priority access.",
    },
  ],
}
