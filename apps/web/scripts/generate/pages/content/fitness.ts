import type { CategoryContent } from "../types"

export const fitness: CategoryContent = {
  slug: "fitness",
  name: "Fitness",
  description:
    "High-energy landing pages for gyms, boutique studios, personal trainers and coaching apps.",
  iconName: "Dumbbell",
  visual: "visual",
  navSecondary: "Member login",
  navLinks: ["Classes", "Coaches", "Membership", "Locations", "App"],
  copy: {
    featuresEyebrow: "Training",
    featuresTitle: "Everything you need to get stronger",
    featuresBody:
      "Expert coaching, smart programming and a community that shows up, whether you train with us in person or at home.",
    showcaseTitle: "Find your class",
    showcaseBody:
      "More than 120 sessions a week, from sunrise strength to late-night mobility. Book in two taps.",
    stepsTitle: "How to get started",
    testimonialsTitle: "Real members, real results",
    pricingTitle: "Memberships for every routine",
    pricingBody:
      "No joining fee, no long contracts. Freeze or cancel your membership any time from the app.",
    faqTitle: "Before your first session",
    logosLabel: "As featured in",
  },
  features: [
    { icon: "Dumbbell", title: "Coach-led strength", description: "Small-group sessions capped at 12 people, so every rep gets a coach's eye on your form." },
    { icon: "CalendarDays", title: "Programs that progress", description: "Twelve-week training blocks that adjust load and volume as you get stronger." },
    { icon: "Smartphone", title: "Book from the app", description: "Reserve classes, join the waitlist and track every workout from your phone." },
    { icon: "HeartPulse", title: "Heart-rate tracking", description: "See your effort zones live on the screens and get a summary after every class." },
    { icon: "Apple", title: "Nutrition coaching", description: "Simple, sustainable meal guidance from registered dietitians, built around foods you enjoy." },
    { icon: "Users", title: "A real community", description: "Monthly challenges, member socials and a crew that notices when you skip a week." },
    { icon: "Timer", title: "Workouts that fit", description: "Sessions from 30 to 60 minutes, so training fits before work, at lunch or after dinner." },
    { icon: "Sparkles", title: "Recovery suite", description: "Sauna, cold plunge and compression boots included with every unlimited membership." },
  ],
  stats: [
    { value: "18,000", label: "Active members" },
    { value: "120+", label: "Classes every week" },
    { value: "4.9", label: "Average class rating" },
    { value: "86%", label: "Hit their 12-week goal" },
    { value: "45", label: "Certified coaches" },
    { value: "9", label: "Studios citywide" },
  ],
  logos: ["Men's Health", "Runner's World", "Outside", "Shape", "GQ", "Women's Health", "Vogue", "Wired"],
  testimonials: [
    { quote: "I deadlifted my bodyweight for the first time at 41. The coaches made heavy lifting feel safe and genuinely fun.", name: "Rachel Kim", role: "Member for 2 years" },
    { quote: "I have joined a dozen gyms and quit them all. This is the first place where people notice if I do not show up.", name: "James Porter", role: "Member for 18 months" },
    { quote: "The app plans my week for me. I just open it, see what is next and go. Zero decision fatigue.", name: "Aisha Bello", role: "App subscriber" },
    { quote: "Lost 9kg, dropped my blood pressure and actually look forward to Monday mornings now.", name: "Daniel Russo", role: "12-week program graduate" },
    { quote: "The recovery suite alone is worth the membership. Sauna after a hard session is my favourite hour of the week.", name: "Chloe Martin", role: "Unlimited member" },
    { quote: "My coach rebuilt my training around a knee injury. I am running again, pain free, for the first time in years.", name: "Ben Adeyemi", role: "Personal training client" },
  ],
  steps: [
    { title: "Book a free intro", description: "Meet a coach for a 30-minute session to talk goals, history and any injuries." },
    { title: "Get your plan", description: "We recommend classes and a weekly schedule based on your experience and goals." },
    { title: "Train consistently", description: "Show up two to four times a week. The app reminds you and tracks your progress." },
    { title: "Retest and level up", description: "Every 12 weeks we retest your benchmarks and set the next target together." },
  ],
  showcase: [
    { name: "Strength Foundations", meta: "Barbell basics · 50 min", tag: "Beginner", price: "6:30 AM" },
    { name: "Hybrid Conditioning", meta: "Rower, sled, kettlebell · 45 min", tag: "Popular", price: "7:15 AM" },
    { name: "Power Yoga", meta: "Heated flow · 60 min", tag: "All levels", price: "12:00 PM" },
    { name: "Ride 45", meta: "Indoor cycling intervals · 45 min", tag: "Cardio", price: "5:45 PM" },
    { name: "Olympic Lifting", meta: "Snatch and clean technique · 60 min", tag: "Advanced", price: "6:30 PM" },
    { name: "Mobility Reset", meta: "Stretch and breathwork · 30 min", tag: "Recovery", price: "8:00 PM" },
  ],
  tiers: [
    { name: "Flex", price: "$25", period: "/class", description: "Drop in whenever your schedule allows.", features: ["Any class, any studio", "Book 7 days ahead", "Free towel and lockers", "No commitment"], cta: "Book a class" },
    { name: "Unlimited", price: "$169", period: "/month", description: "For members training three or more times a week.", features: ["Unlimited classes", "Recovery suite access", "Quarterly progress testing", "Bring a friend monthly", "Book 14 days ahead"], cta: "Join now" },
    { name: "Personal", price: "$399", period: "/month", description: "One-to-one coaching with a dedicated trainer.", features: ["8 private sessions", "Custom program", "Nutrition coaching", "Unlimited classes", "Weekly check-ins"], cta: "Meet a coach" },
  ],
  faqs: [
    { q: "I am a complete beginner. Is that okay?", a: "Absolutely. Around a third of our members had never lifted a weight before joining. Every class has scaled options." },
    { q: "What should I bring to my first class?", a: "Comfortable clothes, trainers and a water bottle. Towels, lockers and showers are provided." },
    { q: "Can I freeze my membership?", a: "Yes. You can freeze for up to three months per year at no cost, straight from the app." },
    { q: "How early should I arrive?", a: "Arrive ten minutes early for your first visit so a coach can show you around and set up your equipment." },
    { q: "Is there a minimum contract?", a: "No. Memberships are month to month and can be cancelled with 30 days notice." },
    { q: "Do you offer corporate memberships?", a: "Yes. Teams of five or more get discounted rates and a dedicated onboarding session." },
  ],
  footer: [
    { title: "Train", links: ["Classes", "Personal training", "Online coaching", "Schedule"] },
    { title: "Studios", links: ["Downtown", "Riverside", "North Park", "All locations"] },
    { title: "About", links: ["Our coaches", "Careers", "Gift cards", "Contact"] },
  ],
  pages: [
    { brand: "Ironworks", description: "A strength gym landing page with full-bleed hero, class schedule and memberships.", eyebrow: "First week free", headline: "Get strong. Stay strong.", highlight: "Stay strong.", subheadline: "Ironworks is a coach-led strength gym with small classes, smart programming and a crew that keeps you coming back.", primaryCta: "Claim free week", secondaryCta: "View schedule", announcement: "New Riverside studio opens this spring", tagline: "Strength for life.", ctaHeadline: "Your first week is on us", ctaBody: "Try any class, meet the coaches and see if we are the right fit." },
    { brand: "Halo Studio", description: "A boutique yoga and pilates studio landing page with editorial serif typography.", eyebrow: "Reformer pilates and hot yoga", headline: "Move slowly. Breathe deeply. Feel better.", highlight: "Feel better.", subheadline: "Halo is a calm, light-filled studio offering reformer pilates, heated yoga and guided recovery for every body.", primaryCta: "Book intro pack", secondaryCta: "Meet the teachers", announcement: "Intro offer: three classes for $45", tagline: "A softer kind of strong.", ctaHeadline: "Find your calm this week", ctaBody: "Three classes for $45. Mats, towels and good vibes included." },
    { brand: "Repcoach", description: "A fitness coaching app landing page with split hero and app features.", eyebrow: "Personal coaching in your pocket", headline: "A real coach, in your pocket", highlight: "in your pocket", subheadline: "Repcoach pairs you with a certified trainer who builds your plan, reviews your form videos and checks in every week.", primaryCta: "Start 7-day trial", secondaryCta: "How it works", announcement: "Apple Watch workout sync now live", tagline: "Coaching that fits your life.", ctaHeadline: "Train with a coach from day one", ctaBody: "Try Repcoach free for seven days. Cancel any time." },
    { brand: "Pulse Ride", description: "An indoor cycling studio landing page with bento hero and class listings.", eyebrow: "Rhythm cycling, 45 minutes", headline: "Ride to the beat. Leave it all behind.", highlight: "Ride to the beat.", subheadline: "Pulse Ride is a candlelit cycling studio where live DJs and expert instructors turn cardio into the best part of your day.", primaryCta: "Book a ride", secondaryCta: "See pricing", announcement: "Friday night DJ rides are back", tagline: "Cardio with a pulse.", ctaHeadline: "Your first ride is free", ctaBody: "Shoes and water included. Just bring your energy." },
    { brand: "Summit Athletics", description: "A hybrid performance gym landing page with dark inverted hero and programs.", eyebrow: "Hybrid training for athletes", headline: "Train like an athlete, at any age", highlight: "at any age", subheadline: "Summit combines strength, conditioning and endurance programming for people who want to race, compete or simply perform better.", primaryCta: "Book assessment", secondaryCta: "Our programs", announcement: "Hyrox prep block starts next month", tagline: "Performance, for everyone.", ctaHeadline: "Find out what you are capable of", ctaBody: "Book a free performance assessment with a Summit coach." },
  ],
}
