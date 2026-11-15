import type { CategoryContent } from "../types"

export const nonprofit: CategoryContent = {
  slug: "nonprofit",
  name: "Nonprofit",
  description:
    "Landing pages for charities and foundations, with impact numbers, programmes and donation tiers.",
  iconName: "HandHeart",
  visual: "visual",
  navSecondary: "Volunteer",
  navLinks: ["Our work", "Impact", "Stories", "Get involved", "About"],
  copy: {
    featuresEyebrow: "How we work",
    featuresTitle: "Every gift goes further with us",
    featuresBody:
      "We partner with local organisations, measure everything and publish the results, so you always know what your support achieved.",
    showcaseTitle: "Our programmes",
    showcaseBody:
      "Long-term programmes led by the communities they serve, funded by people like you.",
    stepsTitle: "Where your donation goes",
    testimonialsTitle: "Voices from the communities we serve",
    pricingTitle: "Choose your impact",
    pricingBody:
      "Monthly gifts let us plan ahead and respond faster. Every donation is tax deductible.",
    faqTitle: "Giving questions",
    logosLabel: "Partners and funders",
  },
  features: [
    {
      icon: "HeartHandshake",
      title: "Community-led",
      description:
        "Local leaders decide priorities and run programmes. We provide funding, training and tools.",
    },
    {
      icon: "ChartPie",
      title: "87% to programmes",
      description:
        "Eighty-seven cents of every dollar funds frontline work. Our accounts are audited and public.",
    },
    {
      icon: "FileCheck",
      title: "Independently evaluated",
      description:
        "Third-party evaluators measure outcomes every year, and we publish what did not work too.",
    },
    {
      icon: "Repeat",
      title: "Built to last",
      description:
        "Programmes are designed to become locally sustainable within five to seven years.",
    },
    {
      icon: "Mail",
      title: "Updates you can see",
      description:
        "Donors receive quarterly reports with photos, stories and numbers from the projects they fund.",
    },
    {
      icon: "Shield",
      title: "Safeguarding first",
      description:
        "Strict safeguarding and anti-corruption policies protect the people we work with.",
    },
    {
      icon: "Globe",
      title: "Global reach",
      description:
        "Active programmes in 14 countries, working with more than 120 partner organisations.",
    },
    {
      icon: "BadgeCheck",
      title: "Top-rated charity",
      description:
        "Rated four stars for financial health and transparency by independent charity evaluators.",
    },
  ],
  stats: [
    { value: "1.8M", label: "People reached" },
    { value: "87%", label: "Spent on programmes" },
    { value: "14", label: "Countries" },
    { value: "120", label: "Local partners" },
    { value: "32,000", label: "Monthly donors" },
    { value: "21 yrs", label: "Of impact" },
  ],
  logos: [
    "Hartwell Foundation",
    "Open Society Fund",
    "Bluebridge Trust",
    "Common Good",
    "Meridian Giving",
    "Lantern Partners",
    "Tidewell",
    "Unity Grants",
  ],
  testimonials: [
    {
      quote:
        "Before the well was built my daughters walked three hours for water. Now they walk to school instead.",
      name: "Grace Wanjiru",
      role: "Community leader, Kenya",
    },
    {
      quote:
        "The mentoring programme gave me the confidence to apply for university. I am the first in my family to go.",
      name: "Ahmed Siddiqui",
      role: "Programme graduate",
    },
    {
      quote:
        "I have given monthly for six years. The quarterly updates make me feel like part of the work.",
      name: "Rebecca Lawson",
      role: "Monthly donor",
    },
    {
      quote:
        "They listened to what our village needed, not what looked good in a brochure. That is rare.",
      name: "Luis Ortega",
      role: "Partner organisation, Guatemala",
    },
    {
      quote:
        "Volunteering at the food hub every Saturday is the best part of my week.",
      name: "Kate Morrison",
      role: "Volunteer",
    },
    {
      quote:
        "Our foundation funds them because their evaluation is honest and their outcomes are real.",
      name: "Dr. Samuel Ikeda",
      role: "Programme Director, funder",
    },
  ],
  steps: [
    {
      title: "You give",
      description: "Donate once or monthly. Every gift is processed securely and receipted instantly.",
    },
    {
      title: "We fund local partners",
      description: "Funds go to vetted community organisations who know the needs best.",
    },
    {
      title: "Programmes deliver",
      description: "Clean water, education and health services reach families on the ground.",
    },
    {
      title: "You see the results",
      description: "Quarterly reports show exactly what your support made possible.",
    },
  ],
  showcase: [
    { name: "Clean Water Access", meta: "Wells and filtration in rural East Africa", tag: "Water", price: "412 wells" },
    { name: "Girls in School", meta: "Scholarships and mentoring", tag: "Education", price: "9,800 students" },
    { name: "Community Health Workers", meta: "Trained local health teams", tag: "Health", price: "1,200 trained" },
    { name: "Emergency Response", meta: "Rapid relief after disasters", tag: "Relief", price: "72 hrs" },
    { name: "Food Security Hubs", meta: "Local growing and food banks", tag: "Food", price: "36 hubs" },
    { name: "Climate Resilience", meta: "Drought-proof farming practices", tag: "Climate", price: "14,000 farmers" },
  ],
  tiers: [
    {
      name: "Supporter",
      price: "$15",
      period: "/month",
      description: "Provides clean water for one family each month.",
      features: ["Quarterly impact reports", "Annual tax receipt", "Supporter newsletter", "Cancel anytime"],
      cta: "Give $15 monthly",
    },
    {
      name: "Champion",
      price: "$40",
      period: "/month",
      description: "Funds a girl's school fees and supplies.",
      features: [
        "Everything in Supporter",
        "Letters from programmes",
        "Invitation to donor calls",
        "Annual field report",
        "Champion pin",
      ],
      cta: "Become a Champion",
    },
    {
      name: "Partner",
      price: "$100",
      period: "/month",
      description: "Trains and equips a community health worker.",
      features: [
        "Everything in Champion",
        "Named programme updates",
        "Site visit opportunities",
        "Direct contact with our team",
        "Recognition in annual report",
      ],
      cta: "Become a Partner",
    },
  ],
  faqs: [
    {
      q: "Is my donation tax deductible?",
      a: "Yes. We are a registered charity and you will receive a tax receipt by email immediately after every donation.",
    },
    {
      q: "How much goes to programmes?",
      a: "87% funds programmes directly, 9% goes to fundraising and 4% to administration. Our audited accounts are published every year.",
    },
    {
      q: "Can I choose where my money goes?",
      a: "Yes. You can restrict your gift to a specific programme, or give unrestricted to let us direct funds where the need is greatest.",
    },
    {
      q: "How do I cancel a monthly gift?",
      a: "Email or call our supporter team, or manage it yourself in your donor account. There is never any pressure to continue.",
    },
    {
      q: "Can my company match my donation?",
      a: "Many employers match gifts. Search for your company on our matching page or ask your HR team.",
    },
    {
      q: "Can I volunteer?",
      a: "Yes. We have local volunteering roles, skilled remote roles and fundraising opportunities. Visit the get involved page.",
    },
  ],
  footer: [
    { title: "Our work", links: ["Programmes", "Where we work", "Impact reports", "Stories"] },
    { title: "Get involved", links: ["Donate", "Fundraise", "Volunteer", "Corporate partners"] },
    { title: "About", links: ["Our team", "Accounts", "Safeguarding", "Contact"] },
  ],
  pages: [
    {
      brand: "Wellspring",
      description: "A nonprofit landing page for a clean water charity with impact stats and donation tiers.",
      eyebrow: "Clean water for every family",
      headline: "Clean water changes everything",
      highlight: "everything",
      subheadline:
        "Wellspring builds and maintains wells, rainwater systems and filters with communities in East Africa, so children can go to school instead of walking for water.",
      primaryCta: "Donate now",
      secondaryCta: "See our impact",
      announcement: "Every gift doubled until December 31",
      tagline: "Water first, then everything else.",
      ctaHeadline: "Give a family clean water this month",
      ctaBody: "Fifteen dollars a month provides safe water for one family, for good.",
    },
    {
      brand: "Brightpath",
      description: "A nonprofit landing page for an education charity with editorial hero and programme list.",
      eyebrow: "Education for every girl",
      headline: "When girls learn, communities rise",
      highlight: "communities rise",
      subheadline:
        "Brightpath funds scholarships, mentors and safe transport so girls in rural communities can finish secondary school and go on to lead.",
      primaryCta: "Sponsor a student",
      secondaryCta: "Read their stories",
      announcement: "Our 2025 impact report is out now",
      tagline: "Every girl, every classroom.",
      ctaHeadline: "Keep a girl in school this year",
      ctaBody: "Your monthly gift covers fees, uniforms, books and a mentor.",
    },
    {
      brand: "Harvest Table",
      description: "A nonprofit landing page for a local food bank with volunteer call to action.",
      eyebrow: "Fighting hunger locally",
      headline: "No neighbour should go to bed hungry",
      highlight: "go to bed hungry",
      subheadline:
        "Harvest Table rescues surplus food from grocers and farms and delivers it to 60 pantries, schools and shelters across the city every week.",
      primaryCta: "Give a meal",
      secondaryCta: "Volunteer with us",
      announcement: "Holiday volunteer shifts are open",
      tagline: "Good food, shared.",
      ctaHeadline: "One dollar provides three meals",
      ctaBody: "Give once, give monthly or give your Saturday morning.",
    },
    {
      brand: "Wildway Trust",
      description: "A nonprofit landing page for a wildlife conservation trust with bento hero and stories.",
      eyebrow: "Protecting wild places",
      headline: "Room for wildlife to come back",
      highlight: "come back",
      subheadline:
        "Wildway Trust buys, restores and protects habitat corridors so endangered species can move, breed and recover across the landscapes they need.",
      primaryCta: "Protect an acre",
      secondaryCta: "Explore our reserves",
      announcement: "Lynx sighted in our northern reserve for the first time in 40 years",
      tagline: "Wild places, for good.",
      ctaHeadline: "Help us protect the next acre",
      ctaBody: "Fifty dollars protects one acre of critical habitat forever.",
    },
    {
      brand: "Common Ground",
      description: "A nonprofit landing page for a homelessness and housing charity with timeline steps.",
      eyebrow: "Housing first",
      headline: "A safe home is where recovery begins",
      highlight: "recovery begins",
      subheadline:
        "Common Ground provides permanent housing and wraparound support for people experiencing homelessness, with 91% still housed after two years.",
      primaryCta: "Support our work",
      secondaryCta: "How housing first works",
      announcement: "Winter appeal: help us open 40 more homes",
      tagline: "Everyone deserves a door that locks.",
      ctaHeadline: "Help open a door this winter",
      ctaBody: "Your gift funds a home, a caseworker and a fresh start.",
    },
    {
      brand: "Open Shelf",
      description: "A nonprofit landing page for a children's literacy charity with framed hero and monthly giving.",
      eyebrow: "Every child a reader",
      headline: "Put a book in every child's hands",
      highlight: "every child's hands",
      subheadline:
        "Open Shelf stocks school libraries and runs reading clubs in communities where most homes don't have a single children's book.",
      primaryCta: "Donate books",
      secondaryCta: "See our programmes",
      announcement: "Every gift doubled this month by our matching partners",
      tagline: "Stories open doors.",
      ctaHeadline: "Give a child their first library",
      ctaBody: "A monthly gift of $15 delivers ten new books to a classroom each year.",
    },
    {
      brand: "Kindred Care",
      description: "A nonprofit landing page for a respite and caregiver support charity with spotlight hero and volunteer roles.",
      eyebrow: "Support for family carers",
      headline: "Caring for someone you love? You're not alone",
      highlight: "You're not alone",
      subheadline:
        "Kindred Care offers respite breaks, peer support groups and a free helpline for the millions caring for family members at home.",
      primaryCta: "Get support",
      secondaryCta: "Volunteer with us",
      announcement: "Our free carers helpline is now open seven days a week",
      tagline: "Caring for those who care.",
      ctaHeadline: "Give a carer a day to rest",
      ctaBody: "Your donation funds respite sitters so carers can take a well-earned break.",
    },
    {
      brand: "Rewild Rivers",
      description: "A nonprofit landing page for a river restoration charity with split hero and email capture for updates.",
      eyebrow: "Restoring freshwater habitats",
      headline: "Bring life back to our rivers",
      highlight: "life back to our rivers",
      subheadline:
        "Rewild Rivers removes old weirs, replants riverbanks and works with farmers to keep waterways clean for fish and wildlife.",
      primaryCta: "Donate now",
      secondaryCta: "Get river updates",
      announcement: "Salmon spotted upstream for the first time in 40 years",
      tagline: "Clean water, wild rivers.",
      ctaHeadline: "Follow the rivers we're restoring",
      ctaBody: "Sign up with your email for seasonal updates from our restoration sites.",
    },
    {
      brand: "Second Chance Paws",
      description: "A nonprofit landing page for an animal rescue and adoption shelter with bento hero and sponsor tiers.",
      eyebrow: "Rescue, rehabilitate, rehome",
      headline: "Every rescue deserves a second chance",
      highlight: "a second chance",
      subheadline:
        "Second Chance Paws takes in abandoned dogs and cats, provides full veterinary care and matches each one with a loving home.",
      primaryCta: "Adopt a pet",
      secondaryCta: "Sponsor a kennel",
      announcement: "Adoption fees waived for senior pets this month",
      tagline: "Love, rescued.",
      ctaHeadline: "Help a rescue find their family",
      ctaBody: "Sponsoring a kennel covers food, vet care and bedding for a full month.",
    },
    {
      brand: "Mosaic Arts Fund",
      description: "A nonprofit landing page for a community arts grant foundation with minimal editorial layout and grant rounds.",
      eyebrow: "Funding local artists",
      headline: "Art that belongs to everyone",
      highlight: "belongs to everyone",
      subheadline:
        "Mosaic Arts Fund awards small grants to emerging artists and community projects that bring free art to public spaces.",
      primaryCta: "Apply for a grant",
      secondaryCta: "Support the fund",
      announcement: "Spring grant round now open to first-time applicants",
      tagline: "Art for every street.",
      ctaHeadline: "Fund the next public mural",
      ctaBody: "Every donation goes straight into grants for local artists and projects.",
    },
  ],
}
