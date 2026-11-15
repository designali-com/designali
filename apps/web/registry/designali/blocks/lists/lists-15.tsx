const menu = [
  {
    course: "Small plates",
    items: [
      { name: "Charred leeks", note: "Romesco, toasted hazelnut", price: 11 },
      { name: "Burrata", note: "Blood orange, fennel pollen", price: 14, tag: "V" },
      { name: "Crispy squid", note: "Smoked paprika aioli, lime", price: 13 },
      { name: "Sourdough", note: "Cultured butter, sea salt", price: 6, tag: "V" },
    ],
  },
  {
    course: "Large plates",
    items: [
      { name: "Hake", note: "Brown butter, capers, potato rösti", price: 26 },
      { name: "Lamb shoulder", note: "12-hour braise, white beans, salsa verde", price: 29 },
      { name: "Wild mushroom orzo", note: "Aged parmesan, thyme", price: 21, tag: "V" },
      { name: "Half chicken", note: "Piri piri, charred greens", price: 24 },
    ],
  },
]

export default function Lists15() {
  return (
    <section className="w-full bg-stone-950 py-24 text-stone-100">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-amber-300/80 uppercase">Dinner · From 18:00</p>
          <h2 className="mt-4 font-serif text-5xl tracking-tight md:text-6xl">Salt &amp; Ember</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone-400">
            A short menu that changes with the market. Everything is cooked over
            the wood grill unless it shouldn&apos;t be.
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
          V vegetarian · Please tell us about any allergies · A discretionary 12.5% service charge is added
        </p>
      </div>
    </section>
  )
}
