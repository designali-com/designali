import type { CategoryContent } from "../types"

export const app: CategoryContent = {
  slug: "app",
  name: "Mobile App",
  description:
    "Landing pages for consumer mobile apps, with app-store calls to action, feature highlights and reviews.",
  iconName: "Smartphone",
  visual: "product",
  navSecondary: "Log in",
  navLinks: ["Features", "How it works", "Reviews", "Pricing", "Support"],
  copy: {
    featuresEyebrow: "Features",
    featuresTitle: "Designed to fit into your day, not take it over",
    featuresBody:
      "Thoughtful features, quick to learn and fast to use, on iPhone, Android and the web.",
    showcaseTitle: "Made for every moment",
    showcaseBody:
      "Widgets, watch complications and shortcuts put the most useful parts one tap away.",
    stepsTitle: "Get started in three minutes",
    testimonialsTitle: "Loved by people who hate most apps",
    pricingTitle: "Free to start. Premium when you want more.",
    pricingBody:
      "The core app is free forever. Premium unlocks advanced features and supports an independent team.",
    faqTitle: "Frequently asked",
    logosLabel: "Featured by",
  },
  features: [
    {
      icon: "Sparkles",
      title: "Smart suggestions",
      description:
        "On-device intelligence learns your routine and surfaces the right thing at the right time.",
    },
    {
      icon: "Bell",
      title: "Gentle reminders",
      description:
        "Notifications that respect focus modes and never nag. Snooze, reschedule or skip with a swipe.",
    },
    {
      icon: "Lock",
      title: "Private by default",
      description:
        "Your data stays on your device and is end-to-end encrypted when it syncs. We never sell it.",
    },
    {
      icon: "RefreshCw",
      title: "Seamless sync",
      description:
        "Start on your phone and pick up on your tablet or laptop. Changes appear in under a second.",
    },
    {
      icon: "Watch",
      title: "Apple Watch and Wear OS",
      description:
        "Glanceable complications and quick actions right on your wrist.",
    },
    {
      icon: "Moon",
      title: "Beautiful dark mode",
      description:
        "Hand-tuned themes for day and night, plus custom app icons and accent colours.",
    },
    {
      icon: "WifiOff",
      title: "Works offline",
      description:
        "Everything works without a connection, on planes, trains and in basements.",
    },
    {
      icon: "Users",
      title: "Share with family",
      description:
        "Invite up to five people to shared spaces with one Premium Family plan.",
    },
  ],
  stats: [
    { value: "3.2M", label: "Downloads" },
    { value: "4.9", label: "App Store rating" },
    { value: "180K", label: "Five-star reviews" },
    { value: "42", label: "Languages supported" },
    { value: "#1", label: "In 18 countries" },
    { value: "11 min", label: "Saved per user daily" },
  ],
  logos: ["App Store", "Google Play", "The Verge", "Wired", "TechCrunch", "Product Hunt", "Fast Company", "9to5Mac"],
  testimonials: [
    {
      quote:
        "I have tried every app in this category. This is the first one I have kept on my home screen for more than a month.",
      name: "Jasmine Wu",
      role: "App Store review",
    },
    {
      quote:
        "Clean, fast and no dark patterns. Paying for Premium felt like supporting people who respect their users.",
      name: "Tyler Brooks",
      role: "Google Play review",
    },
    {
      quote:
        "The widgets are genius. I barely open the app because everything I need is right on my lock screen.",
      name: "Noor Haddad",
      role: "Premium member",
    },
    {
      quote:
        "Our whole family uses the shared space. It replaced a fridge full of sticky notes.",
      name: "Carlos Mendes",
      role: "Family plan user",
    },
    {
      quote:
        "I love that it works offline. I use it on the subway every morning without a hiccup.",
      name: "Emily Shaw",
      role: "App Store review",
    },
    {
      quote:
        "Small details everywhere. You can tell the team obsesses over making it feel right.",
      name: "Andre Silva",
      role: "Designer, longtime user",
    },
  ],
  steps: [
    {
      title: "Download the app",
      description: "Free on the App Store and Google Play. No account needed to try it.",
    },
    {
      title: "Pick your goals",
      description: "Answer three quick questions and we tailor the experience to you.",
    },
    {
      title: "Add your first item",
      description: "Use the quick-add button, a widget, Siri or a share sheet from any app.",
    },
    {
      title: "Build the habit",
      description: "Weekly insights show your progress and keep you gently on track.",
    },
  ],
  showcase: [
    { name: "Home screen widgets", meta: "Small, medium and large sizes", tag: "iOS and Android", price: "Free" },
    { name: "Lock screen glance", meta: "See today at a glance", tag: "iOS 17+", price: "Free" },
    { name: "Watch app", meta: "Quick actions on your wrist", tag: "watchOS", price: "Premium" },
    { name: "Siri and Shortcuts", meta: "Hands-free logging", tag: "Voice", price: "Free" },
    { name: "Weekly insights", meta: "Trends and streaks", tag: "Insights", price: "Premium" },
    { name: "Family spaces", meta: "Share with up to five people", tag: "Family", price: "Family" },
  ],
  tiers: [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Everything you need to get started.",
      features: ["Core features", "Sync across 2 devices", "Home screen widgets", "Dark mode"],
      cta: "Download free",
    },
    {
      name: "Premium",
      price: "$4.99",
      period: "/month",
      description: "For people who want the full experience.",
      features: [
        "Unlimited devices",
        "Weekly insights",
        "Watch app",
        "Custom themes and icons",
        "Priority support",
      ],
      cta: "Try 7 days free",
    },
    {
      name: "Family",
      price: "$7.99",
      period: "/month",
      description: "Premium for up to six people.",
      features: [
        "Everything in Premium",
        "Up to 6 members",
        "Shared spaces",
        "Parental controls",
        "One simple bill",
      ],
      cta: "Start family plan",
    },
  ],
  faqs: [
    {
      q: "Is the app really free?",
      a: "Yes. The free plan has no ads and no time limit. Premium adds advanced features for people who want more.",
    },
    {
      q: "Which devices are supported?",
      a: "iPhone and iPad on iOS 16 or later, Android 10 or later, Apple Watch, Wear OS and any modern web browser.",
    },
    {
      q: "What happens to my data if I cancel?",
      a: "Nothing is deleted. You keep full access to your data on the free plan and can export it at any time.",
    },
    {
      q: "Do you sell my data?",
      a: "Never. We make money from subscriptions, not advertising. Your data is encrypted and stays yours.",
    },
    {
      q: "Can I use it without an account?",
      a: "Yes. Accounts are only needed to sync between devices or share with family members.",
    },
    {
      q: "How do I cancel Premium?",
      a: "Cancel any time from your App Store or Google Play subscription settings. You keep Premium until the period ends.",
    },
  ],
  footer: [
    { title: "App", links: ["Features", "Premium", "Download", "What is new"] },
    { title: "Company", links: ["About", "Blog", "Press kit", "Careers"] },
    { title: "Help", links: ["Support", "Privacy", "Terms", "Contact"] },
  ],
  pages: [
    {
      brand: "Daybook",
      description: "A mobile app landing page for a journaling app with phone mockup and app reviews.",
      eyebrow: "Apple Design Award finalist",
      headline: "A journal that writes back",
      highlight: "writes back",
      subheadline:
        "Daybook turns two minutes of daily reflection into a private record of your life, with prompts, mood tracking and beautiful yearly recaps.",
      primaryCta: "Download for iPhone",
      secondaryCta: "Get it on Android",
      announcement: "Daybook 3 adds voice entries and yearly recaps",
      tagline: "Your life, one page at a time.",
      ctaHeadline: "Start your first entry tonight",
      ctaBody: "Free to download. Your journal stays private and encrypted.",
    },
    {
      brand: "Pocketsplit",
      description: "A mobile app landing page for a bill-splitting and shared expenses app with split hero.",
      eyebrow: "Shared expenses, sorted",
      headline: "Split bills without the awkward maths",
      highlight: "awkward maths",
      subheadline:
        "Pocketsplit tracks who paid for what on trips, in shared flats and between friends, then settles up in one tap with instant transfers.",
      primaryCta: "Get the app",
      secondaryCta: "See how it works",
      announcement: "Now supporting 38 currencies with live rates",
      tagline: "Friends stay friends.",
      ctaHeadline: "Never chase a friend for money again",
      ctaBody: "Create a group in seconds and invite everyone with a link.",
    },
    {
      brand: "Sprout",
      description: "A mobile app landing page for a plant care app with bento hero and feature grid.",
      eyebrow: "Plant care, made easy",
      headline: "Keep every plant alive and thriving",
      highlight: "alive and thriving",
      subheadline:
        "Snap a photo to identify any plant, get a watering schedule tuned to your home's light and humidity, and diagnose problems before leaves drop.",
      primaryCta: "Download free",
      secondaryCta: "Identify a plant",
      announcement: "Sprout now identifies over 18,000 species",
      tagline: "Greener thumbs for everyone.",
      ctaHeadline: "Your plants will thank you",
      ctaBody: "Join three million plant parents and never forget to water again.",
    },
    {
      brand: "Tempo Run",
      description: "A mobile app landing page for a running coach app with dark inverted hero and plans.",
      eyebrow: "Your pocket running coach",
      headline: "Train smarter for your next race",
      highlight: "next race",
      subheadline:
        "Tempo Run builds an adaptive plan from your pace, heart rate and schedule, then coaches you live through every interval.",
      primaryCta: "Start training",
      secondaryCta: "Browse plans",
      announcement: "New marathon plans with live audio coaching",
      tagline: "Every run, with purpose.",
      ctaHeadline: "Lace up. Your plan is ready.",
      ctaBody: "Free for your first four weeks. Works with Apple Watch, Garmin and Strava.",
    },
    {
      brand: "Lingo Loop",
      description: "A mobile app landing page for a language learning app with email capture and pricing.",
      eyebrow: "Learn languages by talking",
      headline: "Speak a new language in 15 minutes a day",
      highlight: "15 minutes a day",
      subheadline:
        "Lingo Loop uses real conversations with an AI tutor and native speakers, so you build confidence speaking instead of just tapping flashcards.",
      primaryCta: "Start learning",
      secondaryCta: "Choose a language",
      announcement: "Japanese and Korean courses now live",
      tagline: "Talk your way to fluent.",
      ctaHeadline: "Your first conversation is free",
      ctaBody: "Pick a language and have a real conversation in under five minutes.",
    },
    {
      brand: "Mealwise",
      description: "A mobile app landing page for a meal planning and grocery list app with framed hero and reviews.",
      eyebrow: "Meal planning made simple",
      headline: "Dinner planned for the week in five minutes",
      highlight: "five minutes",
      subheadline:
        "Mealwise suggests recipes around what is already in your fridge, builds a sorted grocery list and cuts food waste for busy households.",
      primaryCta: "Download free",
      secondaryCta: "Browse recipes",
      announcement: "New family plans share lists across every phone",
      tagline: "Eat well, waste less.",
      ctaHeadline: "Make tonight's dinner the easy part",
      ctaBody: "Free to download. Your first weekly plan is ready in under a minute.",
    },
    {
      brand: "Nestcam",
      description: "A mobile app landing page for a baby monitor app with spotlight hero and safety features.",
      eyebrow: "Smart baby monitor app",
      headline: "Peace of mind from the next room",
      highlight: "Peace of mind",
      subheadline:
        "Nestcam turns any spare phone into an encrypted baby monitor with cry detection, sleep tracking and a live feed both parents can see.",
      primaryCta: "Get the app",
      secondaryCta: "How it stays private",
      announcement: "Sleep insights now included in the free plan",
      tagline: "Rest easy, together.",
      ctaHeadline: "Sleep better tonight, both of you",
      ctaBody: "Set up in two minutes with two phones you already own.",
    },
    {
      brand: "Hikeline",
      description: "A mobile app landing page for a trail navigation app with split hero and email capture.",
      eyebrow: "Offline trail maps",
      headline: "Find your way with no signal at all",
      highlight: "no signal at all",
      subheadline:
        "Hikeline downloads topographic maps, routes and waypoints to your phone, so you can navigate remote trails confidently without coverage.",
      primaryCta: "Join the beta",
      secondaryCta: "Explore trails",
      announcement: "Beta testers wanted for our new Alps trail pack",
      tagline: "Every trail, mapped offline.",
      ctaHeadline: "Be first on the trail",
      ctaBody: "Leave your email to get beta access and three free premium regions.",
    },
    {
      brand: "Focusly",
      description: "A mobile app landing page for a focus timer and deep work app with bento hero.",
      eyebrow: "Deep work, made daily",
      headline: "Win back two hours of focus every day",
      highlight: "two hours of focus",
      subheadline:
        "Focusly blocks distracting apps, runs structured focus sessions and shows exactly where your attention goes each week.",
      primaryCta: "Download for iPhone",
      secondaryCta: "See the features",
      announcement: "Focusly now syncs with Mac and iPad",
      tagline: "Attention, protected.",
      ctaHeadline: "Your best work is waiting",
      ctaBody: "Start a free focus session in seconds. No account needed.",
    },
    {
      brand: "Pagecraft",
      description: "A mobile app landing page for a reading tracker and book club app with minimal editorial layout.",
      eyebrow: "For people who love books",
      headline: "Read more books and remember them",
      highlight: "remember them",
      subheadline:
        "Pagecraft tracks your reading, saves highlights and quotes, and brings small book clubs together around one shared shelf.",
      primaryCta: "Get the app",
      secondaryCta: "Start a book club",
      announcement: "Yearly reading wrap-ups are now live",
      tagline: "A home for your reading life.",
      ctaHeadline: "Your next great book is one tap away",
      ctaBody: "Free on iOS and Android. Import your shelf from Goodreads in a minute.",
    },
  ],
}
