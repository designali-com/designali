const PhoneMenu = () => {
  const mainNav = [
    {
      title: "Templates",
      items: [
        { label: "Portfolio", href: "/templates" },
        { label: "Design Agency", href: "/templates" },
        { label: "AI", href: "/templates" },
      ],
    },
    {
      title: "Blocks",
      items: [
        { label: "Heroes", href: "/blocks" },
        { label: "Features", href: "/blocks" },
        { label: "Pricing", href: "/blocks" },
        { label: "Footers", href: "/blocks" },
      ],
    },
    {
      title: "UI Designs",
      items: [{ label: "2300+ UI examples", href: "/ui" }],
    },
    {
      title: "Icons",
      items: [{ label: "@designali/icons", href: "/icons" }],
    },
    {
      title: "Logos",
      items: [{ label: "@designali/logos", href: "/logos" }],
    },
    {
      title: "Illustration",
      items: [{ label: "@designali/vectors", href: "/illustration" }],
    },
    {
      title: "Pricing",
      items: [{ label: "Plans", href: "/pricing" }],
    },
    {
      title: "Docs",
      items: [{ label: "Getting started", href: "/docs" }],
    },
    {
      title: "Blogs",
      items: [{ label: "Latest posts", href: "/blogs" }],
    },
    {
      title: "Contact",
      items: [{ label: "hello@designali.com", href: "mailto:hello@designali.com" }],
    },
  ]

  return (
    <nav className="flex flex-col py-6">
      {mainNav.map((item) => (
        <div key={item.title} className="border-b border-white/10">
          <button className="w-full px-6 py-3 text-left text-sm text-white transition-colors hover:bg-white/5">
            {item.title}
          </button>
        </div>
      ))}
    </nav>
  )
}

export { PhoneMenu }
