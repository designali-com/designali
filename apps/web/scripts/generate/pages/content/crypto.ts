import type { CategoryContent } from "../types"

export const crypto: CategoryContent = {
  slug: "crypto",
  name: "Crypto",
  description:
    "Landing pages for exchanges, wallets, DeFi protocols and Web3 infrastructure, with live-market mockups.",
  iconName: "Bitcoin",
  visual: "product",
  navSecondary: "Log in",
  navLinks: ["Markets", "Earn", "Security", "Developers", "Learn"],
  copy: {
    featuresEyebrow: "Why us",
    featuresTitle: "Built for people who take custody seriously",
    featuresBody:
      "Institutional-grade infrastructure with an interface simple enough for your first trade.",
    showcaseTitle: "Markets moving right now",
    showcaseBody:
      "Trade more than 300 assets with deep liquidity, transparent fees and real-time order books.",
    stepsTitle: "From sign-up to first trade in minutes",
    testimonialsTitle: "Trusted by traders, builders and treasuries",
    pricingTitle: "Transparent fees, no surprises",
    pricingBody:
      "Pay less as you trade more. Every tier includes cold storage, proof of reserves and 24/7 support.",
    faqTitle: "Frequently asked questions",
    logosLabel: "Backed by and integrated with",
  },
  features: [
    {
      icon: "ShieldCheck",
      title: "Proof of reserves",
      description:
        "Independent auditors verify our reserves monthly, and you can check your own balance on-chain at any time.",
    },
    {
      icon: "Lock",
      title: "Multi-party custody",
      description:
        "Keys are split across secure enclaves in three jurisdictions. No single person can ever move funds.",
    },
    {
      icon: "Zap",
      title: "Sub-second execution",
      description:
        "Our matching engine handles 1.4 million orders per second with a median latency under 4ms.",
    },
    {
      icon: "Coins",
      title: "Earn on idle assets",
      description:
        "Stake ETH, SOL and ATOM directly from your account, with rewards paid out daily and no lock-ups.",
    },
    {
      icon: "ChartCandlestick",
      title: "Pro trading tools",
      description:
        "Advanced charting, limit, stop and OCO orders, plus a FIX and WebSocket API for algorithmic traders.",
    },
    {
      icon: "Wallet",
      title: "Self-custody wallet",
      description:
        "Move to a non-custodial wallet with one tap and connect to thousands of decentralised apps.",
    },
    {
      icon: "Landmark",
      title: "Fiat on and off ramps",
      description:
        "Deposit and withdraw in USD, EUR and GBP by bank transfer, card or Apple Pay, with same-day settlement.",
    },
    {
      icon: "FileCheck",
      title: "Licensed and regulated",
      description:
        "Registered with FinCEN, licensed under MiCA in the EU and compliant with the travel rule worldwide.",
    },
  ],
  stats: [
    { value: "$48B", label: "Quarterly trading volume" },
    { value: "6.2M", label: "Verified customers" },
    { value: "312", label: "Supported assets" },
    { value: "0.08%", label: "Lowest maker fee" },
    { value: "98%", label: "Assets held in cold storage" },
    { value: "0", label: "Security breaches since 2017" },
  ],
  logos: ["Fidelis", "Blockframe", "Node Capital", "Arcvault", "Meridian", "Chainlab", "Polaris", "Satori"],
  testimonials: [
    {
      quote:
        "We moved our treasury here because the custody model is the only one our auditors signed off on without a single follow-up.",
      name: "Hannah Weiss",
      role: "CFO, Arcvault",
    },
    {
      quote:
        "The API is fast and boringly reliable, which is exactly what you want when your bots trade around the clock.",
      name: "Kenji Watanabe",
      role: "Quant Developer",
    },
    {
      quote:
        "I bought my first Bitcoin here. The interface explained everything without ever making me feel stupid.",
      name: "Laura Mendes",
      role: "Retail investor",
    },
    {
      quote:
        "Staking rewards land every day and I can unstake whenever I want. It just works the way it should.",
      name: "Omar Haddad",
      role: "Long-term holder",
    },
    {
      quote:
        "Proof of reserves was the deciding factor for our fund. Transparency is not optional any more.",
      name: "Grace Liu",
      role: "Partner, Node Capital",
    },
    {
      quote:
        "Support answered my withdrawal question at 3am on a Sunday in under two minutes. That earned my loyalty.",
      name: "Felix Andersson",
      role: "Day trader",
    },
  ],
  steps: [
    { title: "Create your account", description: "Sign up with email and set up two-factor authentication in under a minute." },
    { title: "Verify your identity", description: "Upload an ID and a selfie. Most verifications are approved in under five minutes." },
    { title: "Fund your wallet", description: "Deposit by bank transfer, card or crypto from another wallet or exchange." },
    { title: "Trade and earn", description: "Buy, sell, swap or stake from one balance, with clear fees on every screen." },
  ],
  showcase: [
    { name: "Bitcoin", meta: "BTC · Market cap $1.3T", tag: "+2.4%", price: "$67,420" },
    { name: "Ethereum", meta: "ETH · Staking 3.8% APY", tag: "+1.9%", price: "$3,512" },
    { name: "Solana", meta: "SOL · Staking 6.7% APY", tag: "+5.1%", price: "$172.30" },
    { name: "USD Coin", meta: "USDC · Fully reserved", tag: "Stable", price: "$1.00" },
    { name: "Chainlink", meta: "LINK · Oracle network", tag: "-0.6%", price: "$18.04" },
    { name: "Arbitrum", meta: "ARB · Layer 2", tag: "New", price: "$1.12" },
  ],
  tiers: [
    {
      name: "Standard",
      price: "0.40%",
      period: "per trade",
      description: "For everyday buying and selling.",
      features: ["Instant buy and sell", "Recurring purchases", "Staking rewards", "Email support"],
      cta: "Create account",
    },
    {
      name: "Advanced",
      price: "0.10%",
      period: "maker fee",
      description: "For active traders who want pro tools.",
      features: ["Full order book", "Limit, stop and OCO orders", "Advanced charting", "API access", "Priority support"],
      cta: "Start trading",
    },
    {
      name: "Institutional",
      price: "Custom",
      period: "",
      description: "For funds, treasuries and market makers.",
      features: ["Dedicated custody", "OTC desk", "FIX API", "Sub-accounts", "Named account manager"],
      cta: "Contact sales",
    },
  ],
  faqs: [
    { q: "Is my crypto insured?", a: "Assets in hot storage are covered by a $320M crime insurance policy, and 98% of customer funds are held offline in cold storage." },
    { q: "Which countries are supported?", a: "We serve customers in over 100 countries, including the US, UK, EU member states, Canada and Australia." },
    { q: "How long do withdrawals take?", a: "Crypto withdrawals are processed within minutes. Bank withdrawals usually arrive the same or next business day." },
    { q: "Can I withdraw to my own wallet?", a: "Yes. You can withdraw to any address you control, and we support every major network for each asset." },
    { q: "How are staking rewards paid?", a: "Rewards are calculated daily and credited to your balance automatically. You can unstake at any time." },
    { q: "Do you report to tax authorities?", a: "We provide downloadable tax reports and comply with local reporting rules in each country where we operate." },
  ],
  footer: [
    { title: "Products", links: ["Exchange", "Wallet", "Staking", "Institutional"] },
    { title: "Company", links: ["About", "Careers", "Proof of reserves", "Press"] },
    { title: "Support", links: ["Help center", "Fees", "API docs", "Status"] },
  ],
  pages: [
    {
      brand: "Coinvault",
      description: "A crypto exchange landing page with live market mockup and fee tiers.",
      eyebrow: "Proof of reserves, verified monthly",
      headline: "The exchange that shows you its reserves",
      highlight: "shows you its reserves",
      subheadline:
        "Buy, sell and stake more than 300 assets with deep liquidity, transparent fees and custody your auditor will approve.",
      primaryCta: "Create free account",
      secondaryCta: "View markets",
      announcement: "Zero fees on your first $1,000 of trades",
      tagline: "Crypto, held to a higher standard.",
      ctaHeadline: "Start trading with confidence",
      ctaBody: "Open an account in minutes and get zero fees on your first $1,000.",
    },
    {
      brand: "Keystone",
      description: "A self-custody wallet landing page with split hero and security features.",
      eyebrow: "Self-custody, made simple",
      headline: "Your keys. Your coins. Your rules.",
      highlight: "Your rules.",
      subheadline:
        "Keystone is a non-custodial wallet with passkey recovery, built-in swaps and hardware-level security on your phone.",
      primaryCta: "Download wallet",
      secondaryCta: "How recovery works",
      announcement: "Passkey recovery is now live on iOS and Android",
      tagline: "The wallet you actually own.",
      ctaHeadline: "Take custody of your crypto today",
      ctaBody: "Free on iOS, Android and Chrome. Set up in under a minute.",
    },
    {
      brand: "Yieldra",
      description: "A DeFi protocol landing page with editorial hero and staking stats.",
      eyebrow: "Audited by three firms",
      headline: "Onchain yield without the guesswork",
      highlight: "without the guesswork",
      subheadline:
        "Yieldra routes your stablecoins to audited lending markets automatically, rebalancing every block for the best risk-adjusted return.",
      primaryCta: "Launch app",
      secondaryCta: "Read the docs",
      announcement: "Yieldra v3 is live on Base and Arbitrum",
      tagline: "Automated, audited, onchain.",
      ctaHeadline: "Put your stablecoins to work",
      ctaBody: "Connect a wallet and start earning in two clicks. Withdraw any time.",
    },
    {
      brand: "Blockpay",
      description: "A crypto payments landing page for merchants with bento hero and pricing.",
      eyebrow: "Crypto payments for merchants",
      headline: "Accept stablecoins, settle in dollars",
      highlight: "settle in dollars",
      subheadline:
        "Blockpay lets online stores accept USDC and Bitcoin at checkout, with instant conversion and next-day payouts to your bank.",
      primaryCta: "Start accepting",
      secondaryCta: "Talk to sales",
      announcement: "New Shopify and WooCommerce plugins available",
      tagline: "Global payments, local settlement.",
      ctaHeadline: "Cut card fees by up to 70%",
      ctaBody: "Go live in an afternoon with our plugins or a few lines of code.",
    },
    {
      brand: "Nodeforge",
      description: "A Web3 infrastructure landing page with dark inverted hero for RPC and node services.",
      eyebrow: "RPC for 40+ chains",
      headline: "Blockchain infrastructure that never blinks",
      highlight: "never blinks",
      subheadline:
        "Nodeforge serves 12 billion RPC requests a month with global edge routing, archive data and 99.99% uptime.",
      primaryCta: "Get an API key",
      secondaryCta: "View status",
      announcement: "Archive nodes for Solana now in public beta",
      tagline: "The backbone for onchain apps.",
      ctaHeadline: "Ship your dapp on solid ground",
      ctaBody: "Free tier includes 10 million requests a month. No credit card needed.",
    },
  ],
}
