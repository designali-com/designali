import type { CategoryContent } from "../types"

export const travel: CategoryContent = {
  slug: "travel",
  name: "Travel",
  description:
    "Landing pages for tour operators, travel agencies and booking platforms, with destinations, itineraries and trip packages.",
  iconName: "Plane",
  visual: "visual",
  navSecondary: "My trips",
  navLinks: ["Destinations", "Journeys", "Experiences", "Reviews", "About"],
  copy: {
    featuresEyebrow: "Why travel with us",
    featuresTitle: "Trips planned by people who have been there",
    featuresBody:
      "Every itinerary is designed by a local specialist, priced transparently and supported around the clock from departure to return.",
    showcaseTitle: "Journeys departing this season",
    showcaseBody:
      "Small-group and private trips with limited places. Prices include stays, guides and most meals.",
    stepsTitle: "From first idea to boarding pass",
    testimonialsTitle: "Stories from recent travellers",
    pricingTitle: "Choose how you want to travel",
    pricingBody:
      "Join a scheduled small group, go private on your own dates, or let a specialist design everything from scratch.",
    faqTitle: "Before you book",
    logosLabel: "As featured in",
  },
  features: [
    {
      icon: "MapPinned",
      title: "Local specialists",
      description:
        "Our guides live in the places they show you, so you eat where locals eat and skip the tourist traps.",
    },
    {
      icon: "Users",
      title: "Small groups only",
      description:
        "Never more than 12 travellers per departure, which means more time with guides and less time in queues.",
    },
    {
      icon: "ShieldCheck",
      title: "Fully protected bookings",
      description:
        "Every trip is bonded and covered by financial protection, so your money is safe whatever happens.",
    },
    {
      icon: "Headset",
      title: "24/7 on-trip support",
      description:
        "A real person answers within minutes, day or night, whether it is a missed connection or a lost bag.",
    },
    {
      icon: "Leaf",
      title: "Lower-impact travel",
      description:
        "We favour rail over short flights, family-run stays and carbon-balanced itineraries by default.",
    },
    {
      icon: "CalendarCheck",
      title: "Flexible dates",
      description:
        "Change your departure up to 30 days before travel at no cost, as many times as you need.",
    },
    {
      icon: "BedDouble",
      title: "Handpicked stays",
      description:
        "Boutique hotels, guesthouses and lodges we have personally inspected for comfort and character.",
    },
    {
      icon: "Wallet",
      title: "Transparent pricing",
      description:
        "One price covers stays, transfers, guides and activities. No surprise supplements at the hotel desk.",
    },
  ],
  stats: [
    { value: "48,000+", label: "Travellers hosted" },
    { value: "92", label: "Countries covered" },
    { value: "4.9/5", label: "Average trip rating" },
    { value: "12", label: "Max group size" },
    { value: "18 yrs", label: "Designing journeys" },
    { value: "96%", label: "Would travel with us again" },
  ],
  logos: [
    "Condé Traveller",
    "The Wanderer",
    "Atlas Weekly",
    "Outbound",
    "Lonely Coast",
    "Meridian",
    "Passport Daily",
    "Far Horizons",
  ],
  testimonials: [
    {
      quote:
        "Our guide in Kyoto took us to a tiny tofu restaurant we would never have found. Every single day felt considered.",
      name: "Hannah Clarke",
      role: "Travelled to Japan, April",
    },
    {
      quote:
        "When our ferry was cancelled, support had us rebooked and a hotel sorted before we had even finished complaining.",
      name: "Rafael Gomez",
      role: "Greek Islands hopping, July",
    },
    {
      quote:
        "I was nervous about travelling solo at 64. The small group became friends and the pace was perfect.",
      name: "Margaret Hughes",
      role: "Peru and the Sacred Valley",
    },
    {
      quote:
        "The safari lodges were extraordinary, but it was the guide's knowledge of the animals that made it unforgettable.",
      name: "Kwame Asante",
      role: "Tanzania family safari",
    },
    {
      quote:
        "We planned our honeymoon in two calls. Every transfer was on time and every room had a view.",
      name: "Leah and Sam Porter",
      role: "Amalfi Coast, September",
    },
    {
      quote:
        "Taking the train across Europe instead of flying was the best decision. The itinerary flowed beautifully.",
      name: "Jonas Weber",
      role: "Rail journey, Paris to Vienna",
    },
  ],
  steps: [
    {
      title: "Tell us your idea",
      description:
        "Share where you want to go, when, and how you like to travel. A specialist replies within one working day.",
    },
    {
      title: "Get a tailored itinerary",
      description:
        "Receive a day-by-day plan with stays, guides and prices. Adjust anything until it feels right.",
    },
    {
      title: "Book with a small deposit",
      description:
        "Secure your trip with 15% down. The balance is due eight weeks before you leave.",
    },
    {
      title: "Travel with support",
      description:
        "Your app holds every ticket and contact, and our team is on call throughout the journey.",
    },
  ],
  showcase: [
    { name: "Kyoto and the Japanese Alps", meta: "11 days · Small group · Rail", tag: "Bestseller", price: "From $4,290" },
    { name: "Patagonia Wilderness Trek", meta: "14 days · Active · Lodges", tag: "Adventure", price: "From $5,850" },
    { name: "Amalfi Coast Slow Travel", meta: "8 days · Private · Boutique", tag: "Couples", price: "From $3,140" },
    { name: "Serengeti Migration Safari", meta: "9 days · Family · Tented camps", tag: "Limited", price: "From $6,720" },
    { name: "Iceland Ring Road", meta: "10 days · Self-drive · Guesthouses", tag: "Self-guided", price: "From $2,980" },
    { name: "Morocco Atlas and Desert", meta: "12 days · Small group · Riads", tag: "New", price: "From $2,460" },
  ],
  tiers: [
    {
      name: "Small group",
      price: "$2,460",
      period: "/person",
      description: "Scheduled departures with up to 12 travellers.",
      features: ["Expert local guide", "Handpicked stays", "Most meals included", "All transfers", "Shared experiences"],
      cta: "Browse departures",
    },
    {
      name: "Private",
      price: "$3,900",
      period: "/person",
      description: "Your own guide and driver on dates you choose.",
      features: [
        "Any start date",
        "Private guide and vehicle",
        "Flexible daily pace",
        "Upgraded rooms",
        "Dedicated trip manager",
      ],
      cta: "Plan a private trip",
    },
    {
      name: "Bespoke",
      price: "Custom",
      period: "",
      description: "A journey designed from scratch by a specialist.",
      features: [
        "Unlimited itinerary changes",
        "Multi-country routing",
        "Luxury and remote stays",
        "Special occasion planning",
        "Concierge on call",
      ],
      cta: "Speak to a specialist",
    },
  ],
  faqs: [
    {
      q: "Are flights included?",
      a: "International flights are not included by default, but our team can book them for you and connect them to your itinerary.",
    },
    {
      q: "What happens if I need to cancel?",
      a: "Cancel more than 60 days before departure and you only lose your deposit. We strongly recommend travel insurance for later changes.",
    },
    {
      q: "How fit do I need to be?",
      a: "Every trip has an activity rating from one to five. Most journeys are rated two, which means a few hours of easy walking each day.",
    },
    {
      q: "Can solo travellers join?",
      a: "Absolutely. Around a third of our travellers come alone, and we offer room-share matching to avoid single supplements.",
    },
    {
      q: "Do you cater for dietary requirements?",
      a: "Yes. Tell us when you book and we will brief every guide, hotel and restaurant on your itinerary in advance.",
    },
    {
      q: "Is my booking financially protected?",
      a: "Yes. All payments are held in a trust account and every trip is covered by full financial failure protection.",
    },
  ],
  footer: [
    { title: "Travel", links: ["Destinations", "Small groups", "Private trips", "Last-minute deals"] },
    { title: "Company", links: ["About us", "Our guides", "Responsible travel", "Careers"] },
    { title: "Support", links: ["Contact", "Booking terms", "Travel insurance", "FAQs"] },
  ],
  pages: [
    {
      brand: "Wayfarer",
      description: "A travel landing page for a small-group tour operator with destination cards and trip packages.",
      eyebrow: "2026 departures now open",
      headline: "Small-group journeys to the places you dream about",
      highlight: "the places you dream about",
      subheadline:
        "Wayfarer leads groups of no more than 12 through Japan, Peru, Morocco and beyond, with local guides who make every day personal.",
      primaryCta: "Find your trip",
      secondaryCta: "Request a brochure",
      announcement: "Save 10% on all 2026 departures booked before March",
      tagline: "Small groups, big journeys.",
      ctaHeadline: "Your next great journey starts here",
      ctaBody: "Browse 140 departures or tell us where you want to go and we will do the rest.",
    },
    {
      brand: "Tidewater",
      description: "A travel landing page for a luxury sailing and island-hopping company with editorial layout.",
      eyebrow: "Crewed yacht charters",
      headline: "The Mediterranean, one quiet harbour at a time",
      highlight: "one quiet harbour",
      subheadline:
        "Tidewater charters crewed yachts through the Greek, Croatian and Italian islands, with a skipper, a chef and no fixed schedule.",
      primaryCta: "Plan a charter",
      secondaryCta: "View the fleet",
      announcement: "Summer 2026 weeks are 70% booked",
      tagline: "Sail slower, see more.",
      ctaHeadline: "Reserve your week on the water",
      ctaBody: "Choose your islands, your boat and your dates. Our charter team handles everything else.",
    },
    {
      brand: "Basecamp Co",
      description: "A travel landing page for an adventure trekking company with bento hero and trip ratings.",
      eyebrow: "Guided treks worldwide",
      headline: "Adventures that push you further",
      highlight: "further",
      subheadline:
        "From Everest Base Camp to the Torres del Paine W Trek, Basecamp Co runs certified guided expeditions with full logistics and safety cover.",
      primaryCta: "Explore treks",
      secondaryCta: "Check your fitness level",
      announcement: "New: Kilimanjaro Lemosho route with summit guarantee",
      tagline: "Go further, safely.",
      ctaHeadline: "The summit is closer than you think",
      ctaBody: "Talk to a trek leader about training plans, kit lists and the right route for you.",
    },
    {
      brand: "Railway Atlas",
      description: "A travel landing page for a scenic rail journey operator with timeline steps and pricing.",
      eyebrow: "Scenic rail holidays",
      headline: "See the world from the window seat",
      highlight: "window seat",
      subheadline:
        "Railway Atlas books the great train journeys of Europe and Asia, with first-class seats, sleeper cabins and hotels in every stop.",
      primaryCta: "Browse journeys",
      secondaryCta: "How rail travel works",
      announcement: "Glacier Express winter departures now on sale",
      tagline: "Slow travel, fast memories.",
      ctaHeadline: "All aboard for your next journey",
      ctaBody: "Every ticket, reservation and transfer is handled by our rail specialists.",
    },
    {
      brand: "Nomad Nest",
      description: "A travel landing page for a remote-work retreat and coliving platform with email capture hero.",
      eyebrow: "Work from anywhere",
      headline: "Month-long stays for remote workers",
      highlight: "remote workers",
      subheadline:
        "Nomad Nest curates furnished homes with fast Wi-Fi, coworking access and a community of professionals in Lisbon, Bali, Medellín and Tbilisi.",
      primaryCta: "Join the waitlist",
      secondaryCta: "See locations",
      announcement: "New location: Cape Town opens in February",
      tagline: "Live well, work anywhere.",
      ctaHeadline: "Your desk with a view is waiting",
      ctaBody: "Get first access to new locations and member-only rates.",
    },
  ],
}
