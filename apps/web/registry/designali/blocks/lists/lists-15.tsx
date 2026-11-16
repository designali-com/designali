const menu = [
  {
    course: "Design",
    items: [
      { name: "Brand identity", note: "Logo, type, colour and guidelines", price: 2400 },
      { name: "UI/UX design", note: "Flows, wireframes and Figma UI", price: 3200, tag: "F" },
      { name: "Design system", note: "Tokens, components and docs", price: 4800 },
      { name: "Icon set", note: "Custom icons in the @designali/icons style", price: 900, tag: "F" },
    ],
  },
  {
    course: "Development",
    items: [
      { name: "Landing page", note: "Next.js, Tailwind CSS, deployed on Vercel", price: 2600 },
      { name: "Marketing website", note: "Multi-page site with CMS and blog", price: 6400 },
      { name: "CGI and motion", note: "3D renders and motion design", price: 3600, tag: "F" },
      { name: "Digital product", note: "Design and build, end to end", price: 12000 },
    ],
  },
]

export default function Lists15() {
  return (
    <section className="w-full bg-stone-950 py-24 text-stone-100">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-amber-300/80 uppercase">Studio services · Remote, worldwide</p>
          <h2 className="mt-4 font-serif text-5xl tracking-tight md:text-6xl">designali</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone-400">
            A short menu of studio services, priced in USD. Everything is
            designed and coded by Ali Imam — design se code tak.
          </p>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-16">
          {menu.map((section) => (
            <div key={section.course}>
              <h3 className="border-b border-stone-700 pb-3 font-mono text-xs tracking-widest text-amber-300/80 uppercase">
                {section.course}
              </h3>
              <ul className="mt-6 space-y-6">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-xl">{item.name}</span>
                      {item.tag && (
                        <span className="border border-stone-600 px-1 font-mono text-[9px] text-stone-400">{item.tag}</span>
                      )}
                      <span className="min-w-4 flex-1 translate-y-[-4px] border-b border-dotted border-stone-600" />
                      <span className="font-mono text-sm text-amber-200">{item.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-stone-400">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          F includes Figma source files · Starting prices, final quote after a free call · hello@designali.com
        </p>
      </div>
    </section>
  )
}
