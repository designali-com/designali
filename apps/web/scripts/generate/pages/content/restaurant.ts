import type { CategoryContent } from "../types"

export const restaurant: CategoryContent = {
  slug: "restaurant",
  name: "Restaurant",
  description:
    "Appetising landing pages for restaurants, cafes, bakeries and food delivery, with menus and reservations.",
  iconName: "UtensilsCrossed",
  visual: "visual",
  navSecondary: "Book a table",
  navLinks: ["Menu", "About", "Private dining", "Gift cards", "Visit"],
  copy: {
    featuresEyebrow: "Our kitchen",
    featuresTitle: "Seasonal cooking, made with care",
    featuresBody:
      "We work with local farms and fishermen, change the menu with the seasons and make almost everything in house.",
    showcaseTitle: "From the menu",
    showcaseBody:
      "A taste of what is cooking this week. Dishes change with the market, so ask your server for today's specials.",
    stepsTitle: "Planning your visit",
    testimonialsTitle: "What our guests are saying",
    pricingTitle: "Tasting menus and events",
    pricingBody:
      "Celebrate with a chef's tasting menu, or let us cater your next gathering. Dietary needs always welcome.",
    faqTitle: "Good to know",
    logosLabel: "As reviewed by",
  },
  features: [
    { icon: "Leaf", title: "Farm to table", description: "Produce from twelve local farms within 80 miles, delivered fresh every morning." },
    { icon: "Flame", title: "Wood-fired kitchen", description: "Our oak-burning hearth gives everything from bread to fish a gentle smoky depth." },
    { icon: "Wine", title: "Natural wine list", description: "Over 200 low-intervention wines, with a sommelier on hand to find your perfect glass." },
    { icon: "Wheat", title: "Bread baked daily", description: "Sourdough made from heritage grains, fermented for 48 hours and baked every morning." },
    { icon: "Users", title: "Private dining", description: "A private room for up to 24 guests, with a dedicated host and a bespoke menu." },
    { icon: "Salad", title: "Every diet welcome", description: "Vegetarian, vegan and gluten-free versions of most dishes, without compromise." },
    { icon: "Truck", title: "Delivery and pickup", description: "Order our favourite dishes for pickup or delivery within three miles." },
    { icon: "Gift", title: "Gift cards", description: "Give the gift of a great meal, with digital gift cards delivered instantly." },
  ],
  stats: [
    { value: "1 Michelin", label: "Star since 2021" },
    { value: "12", label: "Partner farms" },
    { value: "48h", label: "Sourdough fermentation" },
    { value: "200+", label: "Wines by the bottle" },
    { value: "4.8/5", label: "Guest rating" },
    { value: "65", label: "Seats in the dining room" },
  ],
  logos: ["Michelin Guide", "Eater", "Bon Appétit", "The Infatuation", "Time Out", "Food & Wine", "The Guardian", "Condé Nast"],
  testimonials: [
    { quote: "The best meal we have had all year. Every course was a surprise, and the staff made our anniversary feel truly special.", name: "Hannah and Leo", role: "Anniversary dinner" },
    { quote: "That wood-fired bread with cultured butter is worth the trip on its own. I dream about it.", name: "Marcus Bell", role: "Regular guest" },
    { quote: "They hosted our company dinner for 22 people flawlessly, including four different dietary requirements.", name: "Joanna Price", role: "Office manager" },
    { quote: "Relaxed, warm and genuinely delicious. It feels like eating at a friend's house who happens to be a brilliant chef.", name: "Sam Okoro", role: "Food writer" },
    { quote: "The vegan tasting menu was so good my meat-loving husband ordered it too on our second visit.", name: "Elena Rossi", role: "Guest" },
    { quote: "The sommelier found us a bottle under $60 that beat anything we have ever ordered. Great value, zero snobbery.", name: "Patrick Walsh", role: "Wine lover" },
  ],
  steps: [
    { title: "Reserve a table", description: "Book online up to 60 days ahead. We hold a few tables for walk-ins every evening." },
    { title: "Tell us your needs", description: "Add allergies, dietary requirements or a special occasion to your booking." },
    { title: "Join us for dinner", description: "Arrive a little early for a drink at the bar while we prepare your table." },
    { title: "Take a taste home", description: "Pick up sourdough, preserves and gift cards from our counter on your way out." },
  ],
  showcase: [
    { name: "Wood-roasted Hake", meta: "Brown butter, sea herbs, smoked mussels", tag: "Chef's pick", price: "$34" },
    { name: "Heritage Beetroot", meta: "Whipped goat curd, hazelnut, honey", tag: "Vegetarian", price: "$16" },
    { name: "Dry-aged Ribeye", meta: "Bone marrow, charred onion, chips", tag: "For two", price: "$78" },
    { name: "Hand-cut Tagliatelle", meta: "Wild mushrooms, aged parmesan, truffle", tag: "Signature", price: "$26" },
    { name: "Sourdough and Butter", meta: "48-hour heritage grain loaf", tag: "Baked daily", price: "$8" },
    { name: "Burnt Honey Tart", meta: "Crème fraîche, poached rhubarb", tag: "Dessert", price: "$13" },
  ],
  tiers: [
    { name: "Lunch set", price: "$45", period: "/person", description: "Three courses, served Wednesday to Saturday.", features: ["Choice of three starters", "Seasonal main course", "Dessert or cheese", "Optional wine pairing"], cta: "Book lunch" },
    { name: "Chef's tasting", price: "$125", period: "/person", description: "Seven courses that change with the seasons.", features: ["Seven seasonal courses", "Snacks and house bread", "Sommelier wine pairing", "Vegetarian version available", "Kitchen table option"], cta: "Reserve tasting" },
    { name: "Catering and events", price: "From $65", period: "/guest", description: "Private dining and off-site catering.", features: ["Private room for 24", "Bespoke menus", "Dedicated event host", "Canapés and drinks packages", "Off-site catering available"], cta: "Plan an event" },
  ],
  faqs: [
    { q: "Do you take walk-ins?", a: "Yes. We keep the bar and a few tables free for walk-ins every evening, served on a first-come basis." },
    { q: "Can you accommodate allergies?", a: "Absolutely. Let us know when you book and our kitchen will adapt your dishes. We handle nuts and gluten in the kitchen." },
    { q: "Is there a dress code?", a: "No dress code. Come as you are, whether that is jeans or a special-occasion outfit." },
    { q: "Do you have a cancellation policy?", a: "Please give us 24 hours notice to cancel. Late cancellations for tasting menus incur a $25 per person fee." },
    { q: "Are children welcome?", a: "Children are welcome at lunch and early dinner, and we offer a small menu for younger guests." },
    { q: "Do you offer gift cards?", a: "Yes. Digital gift cards are available in any amount and are valid for 24 months." },
  ],
  footer: [
    { title: "Visit", links: ["Reservations", "Opening hours", "Find us", "Accessibility"] },
    { title: "Menus", links: ["Dinner", "Lunch", "Wine list", "Desserts"] },
    { title: "More", links: ["Private dining", "Gift cards", "Careers", "Press"] },
  ],
  pages: [
    { brand: "Ember and Oak", description: "A wood-fired restaurant landing page with full-bleed hero, menu highlights and reservations.", eyebrow: "Now booking for the season", headline: "Seasonal cooking over an open fire", highlight: "an open fire", subheadline: "Ember and Oak is a neighbourhood restaurant cooking local produce over oak embers, with natural wines and a warm, unhurried room.", primaryCta: "Book a table", secondaryCta: "View the menu", announcement: "Sunday roasts are back from 12pm", tagline: "Fire, smoke and good company.", ctaHeadline: "Save your seat by the fire", ctaBody: "Tables open 60 days ahead. Walk-ins welcome at the bar." },
    { brand: "Maison Lune", description: "A fine dining tasting-menu landing page with editorial serif typography.", eyebrow: "One Michelin star", headline: "A seven-course journey through the seasons", highlight: "through the seasons", subheadline: "Maison Lune offers an intimate 28-seat dining room and a tasting menu that changes with the market, paired with rare wines.", primaryCta: "Reserve tasting", secondaryCta: "Our story", announcement: "Winter truffle menu available until February", tagline: "Fine dining, gently.", ctaHeadline: "An evening to remember", ctaBody: "Reservations open on the first of each month for the month ahead." },
    { brand: "Crumb Bakery", description: "A bakery and cafe landing page with split hero, daily bakes and pre-orders.", eyebrow: "Baked fresh at 5am", headline: "Real bread, baked before sunrise", highlight: "before sunrise", subheadline: "Crumb is a neighbourhood bakery making slow-fermented sourdough, flaky pastries and celebration cakes, every single morning.", primaryCta: "Order for pickup", secondaryCta: "Celebration cakes", announcement: "Pre-order weekend pastry boxes until Thursday", tagline: "Good bread, every day.", ctaHeadline: "Skip the queue this weekend", ctaBody: "Pre-order online and collect from the counter, still warm." },
    { brand: "Saffron Street", description: "A food delivery and takeaway landing page with bento hero and popular dishes.", eyebrow: "Delivered in 30 minutes", headline: "Street food from Mumbai, delivered hot", highlight: "delivered hot", subheadline: "Saffron Street cooks family recipes from Mumbai's street stalls, with free delivery on orders over $25 across the city.", primaryCta: "Order now", secondaryCta: "See the menu", announcement: "Free samosas on your first order this month", tagline: "Big flavours, close to home.", ctaHeadline: "Dinner is sorted", ctaBody: "Order in under a minute and track your rider live." },
    { brand: "Tidewater", description: "A seafood restaurant and catering landing page with dark inverted hero and event packages.", eyebrow: "Catch of the day", headline: "Fresh from the boat to your plate", highlight: "to your plate", subheadline: "Tidewater serves line-caught fish and raw bar classics on the harbour, and caters weddings and events along the coast.", primaryCta: "Reserve a table", secondaryCta: "Plan an event", announcement: "Oyster happy hour, weekdays from 4pm", tagline: "Harbourside since 1998.", ctaHeadline: "Celebrate by the water", ctaBody: "Book the terrace for up to 80 guests or let us cater your event." },
  ],
}
