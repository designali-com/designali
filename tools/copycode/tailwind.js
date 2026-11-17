/* CopyCode — computed CSS → Tailwind v4 classes (TSX output).
 *
 * Exact by design: named classes (p-6, text-sm, rounded-xl, bg-primary…) are only
 * used when they have the same value in the target project. Its theme (Tailwind
 * defaults + packages/ui @theme overrides + :root tokens, from tailwind-data.js)
 * is loaded into a hidden frame and resolved by the browser. Anything else is
 * written as an exact arbitrary value.
 *
 * readPageClasses() reads the copied site's own stylesheet so its state/responsive
 * variants (hover:, md:, dark:…) can be kept when they behave the same in the
 * project, or rewritten with the site's real values when they don't.
 */
;(() => {
  "use strict"
  if (globalThis.__copycodeTailwind) return

  /* ----------------------------- colors ----------------------------- */

  const srgb = (c) => {
    const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055
    return Math.max(0, Math.min(255, v * 255))
  }
  const inGamut = (...lin) => lin.every((c) => c >= -0.001 && c <= 1.001)

  function oklabToRgb(L, a, b) {
    const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
    const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
    const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3
    const lin = [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ]
    return { r: srgb(lin[0]), g: srgb(lin[1]), b: srgb(lin[2]), wide: !inGamut(...lin) }
  }

  // CIE Lab (D50) → sRGB
  function labToRgb(L, a, b) {
    const fy = (L + 16) / 116, fx = fy + a / 500, fz = fy - b / 200
    const f = (t) => (t ** 3 > 216 / 24389 ? t ** 3 : (116 * t - 16) / (24389 / 27))
    const X = (0.3457 / 0.3585) * f(fx), Y = f(fy), Z = ((1 - 0.3457 - 0.3585) / 0.3585) * f(fz)
    const x = 0.9554734527042182 * X - 0.023098536874261423 * Y + 0.0632593086610217 * Z
    const y = -0.028369706963208136 * X + 1.0099954580058226 * Y + 0.021041398966943008 * Z
    const z = 0.012314001688319899 * X - 0.020507696433157568 * Y + 1.3303659366080753 * Z
    const lin = [
      3.2409699419045226 * x - 1.537383177570094 * y - 0.4986107602930034 * z,
      -0.9692436362808796 * x + 1.8759675015077202 * y + 0.04155505740717559 * z,
      0.05563007969699366 * x - 0.20397695888897652 * y + 1.0569715142428786 * z,
    ]
    return { r: srgb(lin[0]), g: srgb(lin[1]), b: srgb(lin[2]), wide: !inGamut(...lin) }
  }

  const fnum = (s, pctScale = 1) => (s.endsWith("%") ? (parseFloat(s) / 100) * pctScale : parseFloat(s))
  const alphaOf = (s) => (s === undefined || s === "none" ? 1 : fnum(s))

  function parseColor(v) {
    v = String(v).trim().toLowerCase()
    if (v === "transparent") return { r: 0, g: 0, b: 0, a: 0 }
    let m
    if ((m = /^#([0-9a-f]{3,8})$/.exec(v))) {
      let h = m[1]
      if (h.length <= 4) h = [...h].map((c) => c + c).join("")
      return {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16),
        a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1,
      }
    }
    if (!(m = /^([a-z-]+)\((.*)\)$/.exec(v))) return null
    const [fn, body] = [m[1], m[2]]
    const [main, alpha] = body.split("/").map((x) => x.trim())
    const p = main.split(/[\s,]+/).filter(Boolean)
    if (fn === "rgb" || fn === "rgba") return { r: fnum(p[0], 255), g: fnum(p[1], 255), b: fnum(p[2], 255), a: alphaOf(alpha ?? p[3]) }
    if (fn === "oklch") {
      const L = fnum(p[0]), C = fnum(p[1], 0.4), H = p[2] === "none" ? 0 : parseFloat(p[2])
      const h = (H * Math.PI) / 180
      return { ...oklabToRgb(L, C * Math.cos(h), C * Math.sin(h)), a: alphaOf(alpha) }
    }
    if (fn === "oklab") return { ...oklabToRgb(fnum(p[0]), fnum(p[1], 0.4), fnum(p[2], 0.4)), a: alphaOf(alpha) }
    if (fn === "lab" || fn === "lch") {
      const L = fnum(p[0], 100)
      let a = fnum(p[1], 125), b = fnum(p[2], 125)
      if (fn === "lch") {
        const C = fnum(p[1], 150), H = (parseFloat(p[2]) * Math.PI) / 180
        a = C * Math.cos(H)
        b = C * Math.sin(H)
      }
      return { ...labToRgb(L, a, b), a: alphaOf(alpha) }
    }
    if (fn === "color" && p[0] === "srgb") return { r: fnum(p[1]) * 255, g: fnum(p[2]) * 255, b: fnum(p[3]) * 255, a: alphaOf(alpha) }
    return null
  }

  const dist = (x, y) => Math.hypot(x.r - y.r, x.g - y.g, x.b - y.b)

  const PALETTE = Object.entries(globalThis.__copycodeTW?.palette || {}).map(([name, hex]) => ({ name, ...parseColor(hex) }))

  const TOKEN_NAMES = [
    "background", "foreground", "card", "card-foreground", "popover", "popover-foreground",
    "primary", "primary-foreground", "secondary", "secondary-foreground", "muted",
    "muted-foreground", "accent", "accent-foreground", "destructive", "border", "input", "ring",
  ]
  const TOKEN_PREFERENCE = {
    bg: ["background", "card", "popover", "primary", "secondary", "muted", "accent", "destructive", "input", "border"],
    text: ["foreground", "muted-foreground", "primary-foreground", "secondary-foreground", "accent-foreground", "card-foreground", "popover-foreground", "primary", "destructive"],
    border: ["border", "input", "ring", "primary", "foreground", "muted-foreground", "destructive"],
  }

  /* ----------------------------- helpers ---------------------------- */

  // Arbitrary values: spaces → "_", "_" escaped (except inside url()), " → '.
  const enc = (v) =>
    String(v)
      .trim()
      .replace(/"/g, "'")
      .split(/(url\([^)]*\))/)
      .map((part, i) => (i % 2 ? part : part.replace(/_/g, "\\_").replace(/\s*,\s*/g, ",").replace(/\s+/g, "_")))
      .join("")
  const arb = (prop, v) => `[${prop}:${enc(v)}]`
  const PX = /^(-?\d*\.?\d+(?:e[+-]?\d+)?)px$/i
  const px = (v) => {
    const m = PX.exec(v || "")
    return m ? +m[1] : null
  }
  const r2 = (n) => Math.round(n * 100) / 100
  const splitTop = (v, sep = ",") => {
    const out = []
    let depth = 0, cur = ""
    for (const ch of v) {
      if (ch === "(") depth++
      if (ch === ")") depth--
      if (ch === sep && depth === 0) {
        out.push(cur.trim())
        cur = ""
      } else cur += ch
    }
    if (cur.trim()) out.push(cur.trim())
    return out
  }
  const splitSpaces = (v) => splitTop(v, " ").filter(Boolean)

  const hexify = (v) =>
    v.replace(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)/g, (_, r, g, b, a) => {
      const alpha = a === undefined ? 1 : a.endsWith("%") ? parseFloat(a) / 100 : parseFloat(a)
      if (alpha === 0) return "transparent"
      const h = (n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")
      return `#${h(+r)}${h(+g)}${h(+b)}${alpha >= 1 ? "" : h(alpha * 255)}`
    })

  /* ------------------- scales, filled from the target theme ------------------- */

  let SPACING_UNIT = 4
  let FONT_SIZES = {}, IMPLIED_LEADING = {}, WEIGHTS = {}, TRACKING = {}, RADII = { 0: "none" }
  let BLURS = {}, CONTAINERS = {}, SHADOWS = {}
  let COLORS = [] // [{ name, r, g, b, a }]
  let FONTS = [] // [{ name: "sans", full, primary }]
  let TARGET = null

  const FRACTIONS = { 50: "1/2", 33.33: "1/3", 66.67: "2/3", 25: "1/4", 75: "3/4", 20: "1/5", 40: "2/5", 60: "3/5", 80: "4/5", 100: "full" }
  const KEYWORD_SIZES = { "100%": "full", "fit-content": "fit", "min-content": "min", "max-content": "max", none: "none", auto: "auto" }
  const BG_POSITIONS = {
    "50% 50%": "center", "0% 0%": "top-left", "50% 0%": "top", "100% 0%": "top-right", "0% 50%": "left",
    "100% 50%": "right", "0% 100%": "bottom-left", "50% 100%": "bottom", "100% 100%": "bottom-right",
  }

  function target() {
    if (TARGET) return TARGET
    const TW = globalThis.__copycodeTW || {}
    const vars = { ...(TW.theme || {}), ...(TW.rootVars || {}) }
    const frame = document.createElement("iframe")
    frame.setAttribute("aria-hidden", "true")
    frame.tabIndex = -1
    frame.style.cssText =
      "position:fixed!important;width:0!important;height:0!important;border:0!important;opacity:0!important;pointer-events:none!important;left:-9999px!important;"
    document.documentElement.appendChild(frame)
    const doc = frame.contentDocument
    doc.open()
    doc.write(`<!doctype html><html><head><style>:root{${Object.entries(vars).map(([k, v]) => `${k}:${v}`).join(";")}}</style></head><body><div></div></body></html>`)
    doc.close()
    const probe = doc.body.firstChild
    const resolve = (prop, value, extra) => {
      probe.removeAttribute("style")
      if (extra) for (const [k, v] of Object.entries(extra)) probe.style.setProperty(k, v)
      probe.style.setProperty(prop, value)
      return frame.contentWindow.getComputedStyle(probe).getPropertyValue(prop).trim()
    }
    TARGET = { frame, resolve, vars }
    buildScales(TARGET)
    return TARGET
  }

  function buildScales({ resolve, vars }) {
    const names = (prefix) =>
      Object.keys(vars)
        .filter((k) => k.startsWith(prefix) && k.length > prefix.length && !k.slice(2).includes("--"))
        .map((k) => k.slice(prefix.length))
    const first = (map, key, name) => {
      if (key !== null && !Number.isNaN(key) && !(key in map)) map[key] = name
    }
    SPACING_UNIT = px(resolve("width", "var(--spacing)")) || null
    FONT_SIZES = {}
    IMPLIED_LEADING = {}
    for (const n of names("--text-")) {
      if (/shadow/.test(n)) continue
      const size = px(resolve("font-size", `var(--text-${n})`))
      if (size === null) continue
      first(FONT_SIZES, r2(size), n)
      IMPLIED_LEADING[n] = vars[`--text-${n}--line-height`]
        ? px(resolve("line-height", `var(--text-${n}--line-height)`, { "font-size": `var(--text-${n})` }))
        : null
    }
    WEIGHTS = {}
    for (const n of names("--font-weight-")) first(WEIGHTS, resolve("font-weight", `var(--font-weight-${n})`), n)
    TRACKING = {}
    for (const n of names("--tracking-")) {
      const v = px(resolve("letter-spacing", `var(--tracking-${n})`, { "font-size": "1000px" }))
      if (v !== null) first(TRACKING, String(r2(v / 10) / 100), n)
    }
    RADII = { 0: "none" }
    for (const n of names("--radius-")) first(RADII, r2(px(resolve("border-top-left-radius", `var(--radius-${n})`))), n)
    BLURS = {}
    for (const n of names("--blur-")) first(BLURS, r2(px(resolve("width", `var(--blur-${n})`))), n)
    CONTAINERS = {}
    for (const n of names("--container-")) first(CONTAINERS, r2(px(resolve("width", `var(--container-${n})`))), n)
    SHADOWS = {}
    for (const n of names("--shadow-")) {
      const v = resolve("box-shadow", `var(--shadow-${n})`)
      if (v && v !== "none") first(SHADOWS, hexify(v), n)
    }
    FONTS = []
    const fam = (v) => v.split(",").map((f) => f.trim().replace(/^['"]|['"]$/g, "").toLowerCase())
    for (const n of names("--font-")) {
      if (n.startsWith("weight")) continue
      const v = resolve("font-family", `var(--font-${n})`)
      if (v) FONTS.push({ name: n, full: fam(v).join(","), primary: fam(v)[0] })
    }
    COLORS = []
    for (const n of names("--color-")) {
      const c = parseColor(resolve("color", `var(--color-${n})`))
      if (c && c.a > 0) COLORS.push({ name: n, ...c })
    }
  }

  function disposeTarget() {
    TARGET?.frame.remove()
    TARGET = null
  }

  // Spacing-scale token for a length (no sign), e.g. 24px → "6" with a 4px unit.
  function spaceTok(v) {
    if (v === "auto") return "auto"
    const n = px(v)
    if (n !== null) {
      const a = r2(Math.abs(n))
      if (a === 0) return "0"
      if (a === 1) return "px"
      const q = SPACING_UNIT ? r2(a / SPACING_UNIT) : NaN
      if (Number.isInteger(r2(q * 2)) && Math.abs(q * SPACING_UNIT - a) < 0.01) return String(q)
      return `[${a}px]`
    }
    if (v.endsWith("%")) {
      const f = FRACTIONS[r2(Math.abs(parseFloat(v)))]
      return f || `[${Math.abs(parseFloat(v))}%]`
    }
    return `[${enc(v)}]`
  }
  function spaceUtil(prefix, v, allowNeg = true) {
    const neg = v.startsWith("-") && px(v) !== 0
    if (neg && !allowNeg) return `${prefix}-[${enc(v)}]`
    return `${neg ? "-" : ""}${prefix}-${spaceTok(neg ? v.slice(1) : v)}`
  }
  function sizeTok(v, containers = false) {
    if (KEYWORD_SIZES[v]) return KEYWORD_SIZES[v]
    if (containers && CONTAINERS[r2(px(v))]) return CONTAINERS[r2(px(v))]
    return spaceTok(v)
  }
  // 4-sided property (margin, padding, inset) in the shortest form.
  function sides(prefixes, vals, util) {
    let [t, r, b, l] = vals
    const out = []
    if (t !== undefined && t === r && r === b && b === l) return [util(prefixes.all, t)]
    if (r !== undefined && r === l) {
      out.push(util(prefixes.x, r))
      r = l = undefined
    }
    if (t !== undefined && t === b) {
      out.push(util(prefixes.y, t))
      t = b = undefined
    }
    if (t !== undefined) out.push(util(prefixes.t, t))
    if (r !== undefined) out.push(util(prefixes.r, r))
    if (b !== undefined) out.push(util(prefixes.b, b))
    if (l !== undefined) out.push(util(prefixes.l, l))
    return out
  }
  const leadTok = (lh) => {
    if (lh === "normal") return "[normal]"
    const n = px(lh)
    if (n !== null && n > 1) {
      const t = spaceTok(`${n}px`)
      if (!t.startsWith("[")) return t
    }
    return `[${n !== null ? r2(n) + "px" : enc(lh)}]`
  }
  const radiusTok = (v) => {
    if (v === "50%" || px(v) >= 9999) return "full"
    if (px(v) === 0) return "none"
    const n = px(v)
    if (n !== null && RADII[r2(n)]) return RADII[r2(n)]
    return `[${enc(v)}]`
  }
  const intOrArb = (prefix, v) => {
    const n = parseFloat(v)
    if (String(n) === v && Number.isInteger(n)) return `${n < 0 ? "-" : ""}${prefix}-${Math.abs(n)}`
    return `${prefix}-[${enc(v)}]`
  }

  /* ---------------------------- converter --------------------------- */

  function createConverter() {
    target()
    const byName = new Map(COLORS.map((c) => [c.name, c]))

    let HINTS = null // the element's own class names, to pick between equal colors
    // A color name is used only when it is this exact color in the target project.
    function matchColor(c, kind, prefix) {
      const close = (x) => x && dist(x, c) <= 2 && Math.abs((x.a ?? 1) - 1) < 0.01
      if (HINTS) {
        for (const h of HINTS) {
          if (!h.startsWith(prefix + "-")) continue
          const name = h.slice(prefix.length + 1).replace(/\/\d+$/, "")
          if (close(byName.get(name))) return name
        }
      }
      for (const name of TOKEN_PREFERENCE[kind] || TOKEN_PREFERENCE.text) if (close(byName.get(name))) return name
      let best = null, bestD = 2
      for (const x of COLORS) {
        if (/-foreground$|^(sidebar|chart)/.test(x.name) && kind !== "text") continue
        const d = dist(x, c)
        if (d <= bestD && Math.abs((x.a ?? 1) - 1) < 0.01) {
          best = x.name
          bestD = d
        }
      }
      return best
    }

    function color(prefix, v, kind) {
      if (v === "currentcolor") return `${prefix}-current`
      const c = parseColor(v)
      if (!c) return `${prefix}-[${enc(v)}]`
      if (c.a === 0) return `${prefix}-transparent`
      const name = matchColor(c, kind, prefix)
      if (!name) {
        if (c.wide) return `${prefix}-[${enc(v)}]`
        const h = (n) => Math.round(n).toString(16).padStart(2, "0")
        return `${prefix}-[#${h(c.r)}${h(c.g)}${h(c.b)}${c.a < 1 ? h(c.a * 255) : ""}]`
      }
      const pct = Math.round(c.a * 100)
      return pct >= 100 ? `${prefix}-${name}` : `${prefix}-${name}/${pct}`
    }

    function shadow(v, out) {
      if (v === "none") return out.push("shadow-none")
      const layers = splitTop(v).filter((l) => !/^transparent 0px 0px( 0px)?( 0px)?$/.test(l))
      const rest = []
      let hasRing = false
      for (const layer of layers) {
        const m = /^((?:[a-z-]+\([^)]*\))|#[0-9a-f]+|[a-z]+)\s+(-?[\d.]+px)\s+(-?[\d.]+px)\s+(-?[\d.]+px)\s+(-?[\d.]+px)(\s+inset)?$/.exec(layer)
        if (m && !m[6] && !hasRing && px(m[2]) === 0 && px(m[3]) === 0 && px(m[4]) === 0 && px(m[5]) > 0) {
          const w = px(m[5])
          out.push(w === 1 ? "ring" : Number.isInteger(w) ? `ring-${w}` : `ring-[${w}px]`, color("ring", m[1], "border"))
          hasRing = true
          continue
        }
        rest.push(layer)
      }
      if (!rest.length) return
      const key = rest.join(", ")
      if (SHADOWS[key]) return out.push(`shadow-${SHADOWS[key]}`)
      const readable = rest.map((l) => {
        const m = /^((?:[a-z-]+\([^)]*\))|#[0-9a-f]+|[a-z]+)\s+(.*)$/.exec(l)
        return m ? `${m[2]} ${m[1]}` : l
      })
      out.push(`shadow-[${enc(readable.join(", "))}]`)
    }

    function filter(prefix, prop, v, out) {
      const m = /^blur\(([\d.]+)px\)$/.exec(v)
      if (m) {
        const n = +m[1]
        return out.push(BLURS[n] ? `${prefix}blur-${BLURS[n]}` : `${prefix}blur-[${n}px]`)
      }
      out.push(arb(prop, v))
    }

    function transform(v, out) {
      const m = /^matrix\(([^)]+)\)$/.exec(v)
      if (!m) return out.push(arb("transform", v))
      const [a, b, c, d, e, f] = m[1].split(",").map(parseFloat)
      const eps = 1e-3
      if (Math.abs(a - d) < eps && Math.abs(b + c) < eps) {
        const deg = r2((Math.atan2(b, a) * 180) / Math.PI)
        const scale = r2(Math.hypot(a, b))
        if (Math.abs(e) > eps) out.push(spaceUtil("translate-x", `${r2(e)}px`))
        if (Math.abs(f) > eps) out.push(spaceUtil("translate-y", `${r2(f)}px`))
        if (deg) out.push(Number.isInteger(deg) ? `${deg < 0 ? "-" : ""}rotate-${Math.abs(deg)}` : `rotate-[${deg}deg]`)
        if (scale !== 1) out.push(Number.isInteger(r2(scale * 100)) ? `scale-${r2(scale * 100)}` : `scale-[${scale}]`)
        return
      }
      out.push(arb("transform", v))
    }

    /** @returns {string[]} */
    function convert(input, cs, opts = {}) {
      HINTS = opts.hints || null
      const s = { ...input }
      const out = []
      const take = (p) => {
        const v = s[p]
        delete s[p]
        return v
      }
      const has = (p) => p in s
      const SIDES = ["top", "right", "bottom", "left"]

      // --- layout ---
      if (has("-webkit-line-clamp")) {
        const n = take("-webkit-line-clamp")
        if (n !== "none") {
          out.push(/^\d+$/.test(n) ? `line-clamp-${n}` : arb("-webkit-line-clamp", n))
          if (s.display === "-webkit-box") delete s.display
          delete s["-webkit-box-orient"]
          if (s["overflow-x"] === "hidden" && s["overflow-y"] === "hidden") {
            delete s["overflow-x"]
            delete s["overflow-y"]
          }
        }
      }
      if (has("display")) {
        const d = take("display")
        out.push(d === "none" ? "hidden" : /^(block|inline|inline-block|flex|inline-flex|grid|inline-grid|table|table-row|table-cell|table-caption|table-column|table-row-group|table-header-group|table-footer-group|contents|flow-root|list-item)$/.test(d) ? d : arb("display", d))
      }
      if (has("position")) out.push(take("position"))
      {
        const vals = SIDES.map((d) => take(d))
        if (vals.some((v) => v !== undefined)) out.push(...sides({ all: "inset", x: "inset-x", y: "inset-y", t: "top", r: "right", b: "bottom", l: "left" }, vals, (p, v) => spaceUtil(p, v)))
      }
      if (has("z-index")) out.push(intOrArb("z", take("z-index")))
      if (has("float")) out.push(`float-${take("float")}`)
      if (has("clear")) out.push(`clear-${take("clear")}`)
      if (has("box-sizing")) out.push(take("box-sizing") === "content-box" ? "box-content" : "box-border")
      if (has("isolation")) out.push(take("isolation") === "isolate" ? "isolate" : "isolation-auto")
      if (has("visibility")) {
        const v = take("visibility")
        out.push(v === "hidden" ? "invisible" : v === "collapse" ? "collapse" : "visible")
      }
      if (has("overflow-x") || has("overflow-y")) {
        const x = take("overflow-x"), y = take("overflow-y")
        if (x && x === y) out.push(`overflow-${x}`)
        else {
          if (x) out.push(`overflow-x-${x}`)
          if (y) out.push(`overflow-y-${y}`)
        }
      }

      // --- flex & grid ---
      if (has("flex-direction")) {
        const v = take("flex-direction")
        out.push({ row: "flex-row", column: "flex-col", "row-reverse": "flex-row-reverse", "column-reverse": "flex-col-reverse" }[v] || arb("flex-direction", v))
      }
      if (has("flex-wrap")) {
        const v = take("flex-wrap")
        out.push(v === "wrap" ? "flex-wrap" : v === "wrap-reverse" ? "flex-wrap-reverse" : "flex-nowrap")
      }
      if (s["flex-grow"] === "1" && s["flex-basis"] === "0%" && !has("flex-shrink")) {
        out.push("flex-1")
        take("flex-grow")
        take("flex-basis")
      }
      if (has("flex-grow")) {
        const v = take("flex-grow")
        out.push(v === "1" ? "grow" : v === "0" ? "grow-0" : intOrArb("grow", v))
      }
      if (has("flex-shrink")) {
        const v = take("flex-shrink")
        out.push(v === "1" ? "shrink" : v === "0" ? "shrink-0" : intOrArb("shrink", v))
      }
      if (has("flex-basis")) out.push(`basis-${sizeTok(take("flex-basis"))}`)
      if (has("order")) out.push(intOrArb("order", take("order")))
      const ALIGN = { "flex-start": "start", start: "start", "flex-end": "end", end: "end", center: "center", baseline: "baseline", "first baseline": "baseline", "last baseline": "baseline-last", stretch: "stretch", "space-between": "between", "space-around": "around", "space-evenly": "evenly", normal: "normal", "self-start": "start", "self-end": "end", left: "start", right: "end" }
      for (const [prop, prefix] of [["align-items", "items"], ["justify-content", "justify"], ["align-content", "content"], ["align-self", "self"], ["justify-items", "justify-items"], ["justify-self", "justify-self"]]) {
        if (!has(prop)) continue
        const v = take(prop)
        if (v === "auto") out.push(`${prefix}-auto`)
        else out.push(ALIGN[v] ? `${prefix}-${ALIGN[v]}` : arb(prop, v))
      }
      for (const [prop, prefix] of [["grid-template-columns", "grid-cols"], ["grid-template-rows", "grid-rows"]]) {
        if (!has(prop)) continue
        const v = take(prop)
        if (v === "none") continue
        const rep = /^repeat\((\d+),\s*minmax\(0(?:px)?,\s*1fr\)\)$/.exec(v)
        if (rep) {
          out.push(`${prefix}-${rep[1]}`)
          continue
        }
        const tracks = splitSpaces(v)
        // Chrome reports implicit (auto) rows as resolved px tracks; don't freeze them.
        if (prop === "grid-template-rows" && tracks.every((t) => px(t) !== null)) continue
        if (!v.includes("[") && tracks.length > 0 && tracks.every((t) => t === tracks[0])) out.push(`${prefix}-${tracks.length}`)
        else out.push(`${prefix}-[${enc(v)}]`)
      }
      if (has("grid-auto-flow")) {
        const v = take("grid-auto-flow")
        out.push({ row: "grid-flow-row", column: "grid-flow-col", dense: "grid-flow-dense", "row dense": "grid-flow-row-dense", "column dense": "grid-flow-col-dense" }[v] || arb("grid-auto-flow", v))
      }
      if (has("grid-auto-columns")) out.push(`auto-cols-[${enc(take("grid-auto-columns"))}]`)
      if (has("grid-auto-rows")) out.push(`auto-rows-[${enc(take("grid-auto-rows"))}]`)
      for (const [axis, short] of [["column", "col"], ["row", "row"]]) {
        const start = take(`grid-${axis}-start`), end = take(`grid-${axis}-end`)
        const span = /^span (\d+)$/.exec(start || "")
        if (span && (!end || end === "auto")) out.push(`${short}-span-${span[1]}`)
        else {
          if (start && start !== "auto") out.push(/^-?\d+$/.test(start) ? intOrArb(`${short}-start`, start) : arb(`grid-${axis}-start`, start))
          if (end && end !== "auto") out.push(/^-?\d+$/.test(end) ? intOrArb(`${short}-end`, end) : arb(`grid-${axis}-end`, end))
        }
      }
      if (has("row-gap") || has("column-gap")) {
        const row = take("row-gap"), col = take("column-gap")
        if (row && row === col) out.push(`gap-${spaceTok(row)}`)
        else {
          if (col && col !== "normal") out.push(`gap-x-${spaceTok(col)}`)
          if (row && row !== "normal") out.push(`gap-y-${spaceTok(row)}`)
        }
      }

      // --- sizing ---
      {
        const w = take("width"), h = take("height")
        if (w && h && w === h && px(w) !== null) out.push(`size-${sizeTok(w)}`)
        else {
          if (w) out.push(`w-${sizeTok(w)}`)
          if (h) out.push(`h-${sizeTok(h)}`)
        }
      }
      if (has("min-width")) out.push(`min-w-${sizeTok(take("min-width"))}`)
      if (has("max-width")) out.push(`max-w-${sizeTok(take("max-width"), true)}`)
      if (has("min-height")) out.push(`min-h-${sizeTok(take("min-height"))}`)
      if (has("max-height")) out.push(`max-h-${sizeTok(take("max-height"))}`)
      if (has("aspect-ratio")) {
        const v = take("aspect-ratio")
        // "auto 48 / 48" is the hint browsers derive from width/height attributes — not a style.
        if (v !== "auto" && !v.startsWith("auto ")) {
          const r = v.replace(/^auto\s+/, "")
          out.push(r === "1 / 1" ? "aspect-square" : r === "16 / 9" ? "aspect-video" : `aspect-[${r.replace(/\s+/g, "")}]`)
        }
      }

      // --- spacing ---
      for (const [prop, p, neg] of [["margin", "m", true], ["padding", "p", false]]) {
        const vals = SIDES.map((d) => take(`${prop}-${d}`))
        if (vals.every((v) => v === undefined)) continue
        out.push(...sides({ all: p, x: `${p}x`, y: `${p}y`, t: `${p}t`, r: `${p}r`, b: `${p}b`, l: `${p}l` }, vals, (pre, v) => spaceUtil(pre, v, neg)))
      }

      // --- typography ---
      if (has("font-family")) {
        // A theme font (font-sans, font-mono, font-heading…) when it's the same family here.
        const v = take("font-family")
        const list = v.split(",").map((f) => f.trim().replace(/^['"]|['"]$/g, "").toLowerCase())
        const hit = FONTS.find((f) => f.full === list.join(",")) || FONTS.find((f) => f.primary === list[0] && !/^(ui-|system-ui|-apple-system)/.test(list[0]) === !/^(ui-|system-ui|-apple-system)/.test(f.primary))
        out.push(hit ? `font-${hit.name}` : `font-[family-name:${enc(v)}]`)
      }
      if (has("font-size") || has("line-height")) {
        const fs = px(cs.fontSize)
        const lh = cs.lineHeight
        const sizeChanged = has("font-size")
        take("font-size")
        const lhChanged = take("line-height") !== undefined
        if (sizeChanged) {
          const name = FONT_SIZES[r2(fs)]
          const tok = name || `[${r2(fs)}px]`
          const implied = name ? IMPLIED_LEADING[name] : null
          const needLeading = name ? !(implied && px(lh) !== null && Math.abs(px(lh) - implied) < 0.5) : lhChanged
          out.push(needLeading ? `text-${tok}/${leadTok(lh)}` : `text-${tok}`)
        } else if (lhChanged) out.push(`leading-${leadTok(lh)}`)
      }
      if (has("font-weight")) {
        const v = take("font-weight")
        out.push(WEIGHTS[v] ? `font-${WEIGHTS[v]}` : `font-[${v}]`)
      }
      if (has("font-style")) out.push(take("font-style") === "italic" ? "italic" : "not-italic")
      if (has("font-variant-numeric")) {
        const v = take("font-variant-numeric")
        out.push(v === "tabular-nums" ? "tabular-nums" : v === "normal" ? "normal-nums" : arb("font-variant-numeric", v))
      }
      if (has("letter-spacing")) {
        const v = take("letter-spacing")
        const n = px(v)
        const fs = px(cs.fontSize) || 16
        const emv = /^(-?[\d.]+)em$/.exec(v)
        if (v === "normal") out.push("tracking-normal")
        else if (emv) {
          const em = +emv[1]
          const hit = Object.entries(TRACKING).find(([k]) => Math.abs(+k - em) < 0.002)
          out.push(hit ? `tracking-${hit[1]}` : `tracking-[${em}em]`)
        } else if (n !== null) {
          const em = n / fs
          const hit = Object.entries(TRACKING).find(([k]) => Math.abs(+k - em) < 0.002)
          out.push(hit ? `tracking-${hit[1]}` : `tracking-[${r2(em * 1000) / 1000}em]`)
        } else out.push(`tracking-[${enc(v)}]`)
      }
      if (has("color")) out.push(color("text", take("color"), "text"))
      if (has("text-align")) {
        const v = take("text-align")
        out.push(/^(left|center|right|justify|start|end)$/.test(v) ? `text-${v}` : arb("text-align", v))
      }
      if (has("text-transform")) {
        const v = take("text-transform")
        out.push(v === "none" ? "normal-case" : /^(uppercase|lowercase|capitalize)$/.test(v) ? v : arb("text-transform", v))
      }
      if (has("text-decoration-line")) {
        const v = take("text-decoration-line")
        if (v === "none") out.push("no-underline")
        else v.split(/\s+/).forEach((x) => out.push(x === "line-through" ? "line-through" : x === "overline" ? "overline" : "underline"))
      }
      if (has("text-decoration-color")) out.push(color("decoration", take("text-decoration-color"), "text"))
      if (has("text-decoration-style")) out.push(`decoration-${take("text-decoration-style")}`)
      if (has("text-decoration-thickness")) {
        const v = take("text-decoration-thickness"), n = px(v)
        out.push(v === "from-font" ? "decoration-from-font" : v === "auto" ? "decoration-auto" : n !== null && Number.isInteger(n) ? `decoration-${n}` : `decoration-[${enc(v)}]`)
      }
      if (has("text-underline-offset")) {
        const v = take("text-underline-offset"), n = px(v)
        out.push(v === "auto" ? "underline-offset-auto" : n !== null && Number.isInteger(n) ? `underline-offset-${n}` : `underline-offset-[${enc(v)}]`)
      }
      if (has("white-space") || has("white-space-collapse") || has("text-wrap-mode")) {
        take("white-space")
        take("white-space-collapse")
        take("text-wrap-mode")
        const ws = cs.whiteSpace
        out.push(/^(normal|nowrap|pre|pre-line|pre-wrap|break-spaces)$/.test(ws) ? `whitespace-${ws}` : arb("white-space", ws))
      }
      if (has("text-wrap-style")) {
        const v = take("text-wrap-style")
        out.push(v === "balance" ? "text-balance" : v === "pretty" ? "text-pretty" : arb("text-wrap-style", v))
      }
      if (has("text-overflow")) out.push(take("text-overflow") === "ellipsis" ? "text-ellipsis" : "text-clip")
      if (has("word-break")) {
        const v = take("word-break")
        out.push(v === "break-all" ? "break-all" : v === "keep-all" ? "break-keep" : v === "normal" ? "break-normal" : arb("word-break", v))
      }
      if (has("overflow-wrap")) {
        const v = take("overflow-wrap")
        out.push(v === "anywhere" ? "wrap-anywhere" : v === "break-word" ? "wrap-break-word" : "wrap-normal")
      }
      if (has("text-indent")) out.push(spaceUtil("indent", take("text-indent")))
      if (has("vertical-align")) {
        const v = take("vertical-align")
        out.push(/^(baseline|top|middle|bottom|text-top|text-bottom|sub|super)$/.test(v) ? `align-${v}` : `align-[${enc(v)}]`)
      }
      if (has("list-style-type")) {
        const v = take("list-style-type")
        out.push(/^(none|disc|decimal)$/.test(v) ? `list-${v}` : `list-[${enc(v)}]`)
      }
      if (has("list-style-position")) out.push(`list-${take("list-style-position")}`)

      // --- backgrounds ---
      if (has("background-color")) out.push(color("bg", take("background-color"), "bg"))
      if (has("background-image")) {
        const v = take("background-image")
        if (v !== "none") out.push(`bg-[${enc(v)}]`)
      }
      if (has("background-size")) {
        const v = take("background-size")
        out.push(/^(cover|contain|auto)$/.test(v) ? `bg-${v}` : `bg-size-[${enc(v)}]`)
      }
      if (has("background-position-x") || has("background-position-y")) {
        const pos = `${take("background-position-x") || "0%"} ${take("background-position-y") || "0%"}`
        out.push(BG_POSITIONS[pos] ? `bg-${BG_POSITIONS[pos]}` : `bg-position-[${enc(pos)}]`)
      }
      if (has("background-repeat")) {
        const v = take("background-repeat")
        out.push({ "no-repeat": "bg-no-repeat", repeat: "bg-repeat", "repeat-x": "bg-repeat-x", "repeat-y": "bg-repeat-y", round: "bg-repeat-round", space: "bg-repeat-space" }[v] || arb("background-repeat", v))
      }
      if (has("background-clip")) {
        const v = take("background-clip")
        out.push({ text: "bg-clip-text", "padding-box": "bg-clip-padding", "content-box": "bg-clip-content", "border-box": "bg-clip-border" }[v] || arb("background-clip", v))
      }
      if (has("background-origin")) out.push(`bg-origin-${take("background-origin").replace("-box", "")}`)
      if (has("background-attachment")) out.push(`bg-${take("background-attachment")}`)

      // --- borders ---
      {
        const widths = SIDES.map((d) => take(`border-${d}-width`))
        const styles = SIDES.map((d) => take(`border-${d}-style`))
        const colors = SIDES.map((d) => take(`border-${d}-color`))
        const wTok = (v) => {
          const n = px(v)
          return n === 1 ? "" : n !== null && Number.isInteger(n) ? `-${n}` : `-[${enc(v)}]`
        }
        if (widths.some((w) => w !== undefined)) out.push(...sides({ all: "border", x: "border-x", y: "border-y", t: "border-t", r: "border-r", b: "border-b", l: "border-l" }, widths, (p, v) => p + wTok(v)))
        const definedStyles = styles.filter((v) => v !== undefined)
        if (definedStyles.length) {
          if (definedStyles.length === 4 && definedStyles.every((v) => v === definedStyles[0])) out.push(`border-${definedStyles[0]}`)
          else styles.forEach((v, i) => v !== undefined && out.push(arb(`border-${SIDES[i]}-style`, v)))
        }
        const definedColors = colors.filter((v) => v !== undefined)
        if (definedColors.length === 4 && definedColors.every((v) => v === definedColors[0])) out.push(color("border", definedColors[0], "border"))
        else colors.forEach((v, i) => v !== undefined && out.push(color(`border-${"trbl"[i]}`, v, "border")))
        // Tailwind/shadcn projects default borders to the theme color, not currentColor.
        if (widths.some((w) => w !== undefined && px(w) !== 0) && !definedColors.length) out.push("border-current")
      }
      {
        const corners = ["top-left", "top-right", "bottom-right", "bottom-left"].map((c) => take(`border-${c}-radius`))
        const [tl, tr, br, bl] = corners
        if (corners.some((v) => v !== undefined)) {
          if (corners.every((v) => v !== undefined && v === tl)) out.push(`rounded-${radiusTok(tl)}`)
          else if (tl !== undefined && tl === tr && bl === br && bl !== undefined) out.push(`rounded-t-${radiusTok(tl)}`, `rounded-b-${radiusTok(bl)}`)
          else if (tl !== undefined && tl === bl && tr === br && tr !== undefined) out.push(`rounded-l-${radiusTok(tl)}`, `rounded-r-${radiusTok(tr)}`)
          else ["tl", "tr", "br", "bl"].forEach((n, i) => corners[i] !== undefined && out.push(`rounded-${n}-${radiusTok(corners[i])}`))
        }
      }
      if (has("outline-style") || has("outline-width")) {
        const st = take("outline-style"), w = take("outline-width")
        if (st === "none") out.push("outline-none")
        else {
          const n = px(w)
          if (w) out.push(n === 1 ? "outline" : n !== null && Number.isInteger(n) ? `outline-${n}` : `outline-[${enc(w)}]`)
          if (st && st !== "solid") out.push(`outline-${st}`)
        }
      }
      if (has("outline-color")) out.push(color("outline", take("outline-color"), "border"))
      if (has("outline-offset")) {
        const v = take("outline-offset"), n = px(v)
        out.push(n !== null && Number.isInteger(n) ? `${n < 0 ? "-" : ""}outline-offset-${Math.abs(n)}` : `outline-offset-[${enc(v)}]`)
      }
      if (has("border-collapse")) out.push(`border-${take("border-collapse")}`)
      if (has("table-layout")) out.push(take("table-layout") === "fixed" ? "table-fixed" : "table-auto")

      // --- effects ---
      if (has("box-shadow")) shadow(take("box-shadow"), out)
      if (has("opacity")) {
        const v = parseFloat(take("opacity"))
        const pct = Math.round(v * 100)
        out.push(Math.abs(v * 100 - pct) < 0.01 ? `opacity-${pct}` : `opacity-[${v}]`)
      }
      if (has("mix-blend-mode")) out.push(`mix-blend-${take("mix-blend-mode")}`)
      if (has("filter")) filter("", "filter", take("filter"), out)
      if (has("backdrop-filter")) filter("backdrop-", "backdrop-filter", take("backdrop-filter"), out)

      // --- transforms (Tailwind v4 uses the individual properties) ---
      if (has("translate")) {
        const v = take("translate")
        if (v !== "none") {
          const [x, y = "0px"] = splitSpaces(v)
          if (px(x) !== 0) out.push(spaceUtil("translate-x", x))
          if (px(y) !== 0) out.push(spaceUtil("translate-y", y))
        }
      }
      if (has("rotate")) {
        const v = take("rotate")
        const m = /^(-?[\d.]+)deg$/.exec(v)
        if (v !== "none") out.push(m && Number.isInteger(+m[1]) ? `${+m[1] < 0 ? "-" : ""}rotate-${Math.abs(+m[1])}` : `rotate-[${enc(v)}]`)
      }
      if (has("scale")) {
        const v = take("scale")
        if (v !== "none") {
          const [x, y = x] = splitSpaces(v).map(parseFloat)
          const fmt = (n) => (Number.isInteger(r2(n * 100)) ? String(r2(n * 100)) : `[${n}]`)
          if (x === y) out.push(`scale-${fmt(x)}`)
          else out.push(`scale-x-${fmt(x)}`, `scale-y-${fmt(y)}`)
        }
      }
      if (has("transform")) {
        const v = take("transform")
        if (v !== "none") transform(v, out)
      }
      if (has("transform-origin")) out.push(`origin-[${enc(take("transform-origin"))}]`)

      // --- misc ---
      if (has("object-fit")) out.push(`object-${take("object-fit")}`)
      if (has("object-position")) {
        const v = take("object-position")
        if (v !== "50% 50%") out.push(`object-[${enc(v)}]`)
      }
      if (has("pointer-events")) out.push(take("pointer-events") === "none" ? "pointer-events-none" : "pointer-events-auto")
      if (has("appearance")) out.push(take("appearance") === "none" ? "appearance-none" : "appearance-auto")
      if (has("resize")) {
        const v = take("resize")
        out.push({ none: "resize-none", both: "resize", vertical: "resize-y", horizontal: "resize-x" }[v] || arb("resize", v))
      }

      // --- svg ---
      if (has("fill")) {
        const v = take("fill")
        out.push(v === "none" ? "fill-none" : color("fill", v, "text"))
      }
      if (has("stroke")) {
        const v = take("stroke")
        out.push(v === "none" ? "stroke-none" : color("stroke", v, "text"))
      }
      if (has("stroke-width")) {
        const v = take("stroke-width")
        const n = px(v) ?? parseFloat(v)
        out.push(Number.isInteger(n) ? `stroke-${n}` : `stroke-[${n}]`)
      }

      // Everything else: arbitrary properties.
      for (const [p, v] of Object.entries(s)) out.push(arb(p, v))
      return out.filter(Boolean)
    }

    return { convert }
  }

  /* --------------------- the page's own Tailwind classes ------------------- */

  const UTIL_ROOTS = new Set((
    "flex grid inline block hidden contents table flow list items justify gap p px py pt pr pb pl ps pe m mx my mt mr mb ml ms me " +
    "w h size min max text font leading tracking bg border rounded shadow ring outline opacity z top right bottom left inset " +
    "start end absolute relative fixed sticky static overflow object aspect col row order shrink grow basis self place content " +
    "transition duration ease delay animate transform translate rotate scale skew origin cursor select pointer whitespace " +
    "break truncate line underline no decoration uppercase lowercase capitalize normal italic not antialiased subpixel fill " +
    "stroke sr isolate mix backdrop blur brightness contrast drop grayscale invert saturate sepia filter space divide " +
    "container columns float clear box align indent tabular ordinal slashed lining oldstyle proportional diagonal stacked " +
    "accent caret appearance resize scroll snap touch will field wrap hyphens from via to mask prose visible invisible " +
    "collapse forced inset-shadow inset-ring text-shadow perspective backface bg-blend contain zoom"
  ).split(/\s+/))
  const MARKER = /^(group|peer)(\/[\w-]+)?$|^(dark|light|not-prose)$/
  const NON_COLOR = /^(\d+(\.\d+)?|px|xs|sm|base|md|lg|xl|\dxl|\d?xs|none|left|center|right|justify|start|end|wrap|nowrap|balance|pretty|ellipsis|clip|solid|dashed|dotted|double|hidden|collapse|separate|cover|contain|auto|fixed|local|scroll|repeat(-\w+)?|no-repeat|inset|from-font|top|bottom|(top|bottom)-(left|right)|blend-.+|clip-.+|origin-.+|linear.*|radial.*|conic.*|size-.+|position-.+|offset-.+|spacing-.+|shadow.*|opacity-.+|[xytrblse](-.+)?)$/
  const COLOR_UTIL = /^-?(bg|text|border(?:-[xytrblse])?|ring|ring-offset|outline|fill|stroke|from|via|to|decoration|divide|placeholder|caret|accent|shadow|inset-shadow|inset-ring|text-shadow)-(.+)$/

  // Strip variants ("md:hover:") and the important flag; return the bare utility.
  function bareUtility(token) {
    let depth = 0, last = 0
    for (let i = 0; i < token.length; i++) {
      const c = token[i]
      if (c === "[" || c === "(") depth++
      else if (c === "]" || c === ")") depth--
      else if (c === ":" && depth === 0) last = i + 1
    }
    return token.slice(last).replace(/^!|!$/g, "")
  }

  function readPageClasses() {
    target()
    const cache = globalThis.__copycodePageCache
    if (cache && Date.now() - cache.at < 10_000) return cache.page
    const known = new Set()
    const rules = new Map() // class → [cssText of each rule targeting it, with its @media/@supports]
    let blocked = 0
    const unescape = (s) => s.replace(/\\([0-9a-fA-F]{1,6})\s?/g, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/\\(.)/g, "$1")
    const visit = (list, conds = []) => {
      for (const r of list) {
        if (r.selectorText) {
          for (const m of r.selectorText.matchAll(/\.((?:\\[0-9a-fA-F]{1,6}\s?|\\[^\n0-9a-fA-F]|[\w-])+)/g)) {
            const cls = unescape(m[1])
            known.add(cls)
            if (!rules.has(cls)) rules.set(cls, [])
            rules.get(cls).push(conds.length ? `${conds.map((c) => `@media ${c}`).join(" ")} { ${r.cssText} }` : r.cssText)
          }
        }
        if (r.cssRules) visit(r.cssRules, r.conditionText ? [...conds, r.conditionText] : conds)
      }
    }
    for (const sheet of [...document.styleSheets, ...(document.adoptedStyleSheets || [])]) {
      try {
        visit(sheet.cssRules)
      } catch {
        blocked++ // cross-origin stylesheet
      }
    }
    const verifiable = known.size > 50
    const hallmarks = ["flex", "items-center", "justify-between", "hidden", "relative", "absolute", "w-full", "text-sm", "font-medium", "gap-2", "mx-auto", "rounded-md", "px-4", "inset-0"]
    let isTailwind
    if (verifiable) isTailwind = hallmarks.filter((h) => known.has(h)).length >= 5
    else {
      const sample = [...document.querySelectorAll("[class]")].slice(0, 400).flatMap((e) => [...e.classList])
      isTailwind = sample.length > 20 && sample.filter((t) => hallmarks.includes(t)).length >= 5
    }

    const TW = globalThis.__copycodeTW || {}
    const UI = globalThis.__copycodeUI || {}
    const themeVars = TW.theme || {}
    const themeColors = new Set([...TOKEN_NAMES, ...(UI.themeColors || []), ...PALETTE.map((p) => p.name), ...COLORS.map((c) => c.name), "white", "black", "transparent", "current", "inherit"])

    function isCustomColor(util) {
      const m = COLOR_UTIL.exec(util)
      if (!m) return false
      const rest = m[2].replace(/\/[\w.\[\]%-]+$/, "")
      if (/^[\[(]/.test(rest) || NON_COLOR.test(rest) || themeColors.has(rest)) return false
      if (/^sidebar(-.+)?$|^chart-\d+$/.test(rest)) return false
      return /^[a-z]+(-[a-z0-9]+)*$/.test(rest)
    }

    function valid(token) {
      if (MARKER.test(token)) return true
      const util = bareUtility(token)
      if (!util) return false
      if (/^\[[\w-]+:.+\]$/.test(util)) return !verifiable || known.has(token)
      const root = util.replace(/^-/, "").split(/-(?![^[(]*[\])])/)[0]
      if (!UTIL_ROOTS.has(root) && !UTIL_ROOTS.has(util.replace(/^-/, ""))) return false
      if (isCustomColor(util)) return false
      return !verifiable || known.has(token)
    }

    /* ---- does a class mean the same thing in the target project? ---- */
    const sitePro = document.createElement("div")
    const siteResolve = (prop, value) => {
      document.documentElement.appendChild(sitePro)
      sitePro.removeAttribute("style")
      sitePro.style.setProperty("display", "none", "important")
      sitePro.style.setProperty(prop, value)
      const v = getComputedStyle(sitePro).getPropertyValue(prop).trim()
      sitePro.remove()
      return v
    }
    const varProperty = (name) =>
      /^--color-/.test(name) ? "color"
      : /^--font-weight-/.test(name) ? "font-weight"
      : /^--(font|default-font|default-mono-font)/.test(name) ? "font-family"
      : /^--tracking-/.test(name) ? "letter-spacing"
      : /^--leading-|--line-height$/.test(name) ? "line-height"
      : /^--text-/.test(name) ? "font-size"
      : /^--shadow-|^--inset-shadow-|^--drop-shadow-/.test(name) ? "box-shadow"
      : /^--radius/.test(name) ? "border-top-left-radius"
      : /^--ease-|timing-function$/.test(name) ? "transition-timing-function"
      : /duration$/.test(name) ? "transition-duration"
      : /^--animate-/.test(name) ? "animation-name"
      : /^--perspective-/.test(name) ? "perspective"
      : "width"
    const sameValue = (a, b) => {
      const ca = parseColor(a), cb = parseColor(b)
      if (ca && cb) return dist(ca, cb) <= 1.5 && Math.abs(ca.a - cb.a) < 0.02
      const norm = (v) => v.replace(/\s+/g, " ").replace(/(^|[^\d])0\./g, "$1.").replace(/\s*([(),/])\s*/g, "$1").trim().toLowerCase()
      return norm(a) === norm(b)
    }
    const SIMPLE_VARIANTS = new Set((
      "hover focus focus-visible focus-within active visited target disabled enabled checked indeterminate default required " +
      "valid invalid user-valid user-invalid in-range out-of-range placeholder-shown autofill read-only read-write optional " +
      "first last only odd even first-of-type last-of-type only-of-type empty open inert placeholder file marker selection " +
      "first-line first-letter backdrop motion-safe motion-reduce contrast-more contrast-less print portrait landscape rtl ltr " +
      "starting details-content forced-colors pointer-fine pointer-coarse pointer-none any-pointer-fine any-pointer-coarse " +
      "noscript inverted-colors * **"
    ).split(/\s+/).concat(TW.customVariants || []))

    function variantOk(v, css) {
      if (SIMPLE_VARIANTS.has(v)) return true
      if (/^\[.+\]$|^@/.test(v)) return true
      if (/^(not|group|peer|has|in|aria|data|supports|nth|nth-last|nth-of-type|nth-last-of-type)-/.test(v)) {
        const inner = v.replace(/^(not|group|peer|has|in)-/, "").replace(/\/[\w-]+$/, "")
        return /^(group|peer|not|has|in)-/.test(v) ? variantOk(inner, css) || /^\[|^(aria|data)-/.test(inner) : true
      }
      const bp = /^(max-|min-)?(sm|md|lg|xl|2xl)$/.exec(v)
      if (bp) {
        const want = themeVars[`--breakpoint-${bp[2]}`]
        const m = /(?:width\s*[<>]=?\s*|min-width:\s*|max-width:\s*)([\d.]+(?:rem|px|em))/.exec(css || "")
        return !!want && !!m && sameValue(m[1], want)
      }
      if (/^(max|min)-\[.+\]$/.test(v)) return true
      return false // a custom variant this project doesn't define (e.g. "wide:")
    }

    const portableCache = new Map()
    function portable(token) {
      if (portableCache.has(token)) return portableCache.get(token)
      let ok = false
      if (MARKER.test(token)) ok = true
      else if (valid(token)) {
        const util = bareUtility(token)
        const variants = token.slice(0, token.length - util.length).split(":").filter(Boolean)
        const css = (rules.get(token) || []).join("\n")
        if (verifiable && !css) ok = false
        else if (!variants.every((v) => variantOk(v, css))) ok = false
        else {
          ok = true
          const refs = [...new Set([...css.matchAll(/var\((--[\w-]+)/g)].map((m) => m[1]).filter((n) => !n.startsWith("--tw-")))]
          for (const name of refs) {
            if (themeVars[name] === undefined && !(TW.rootVars || {})[name]) {
              ok = false
              break
            }
            const prop = varProperty(name)
            const want = target().resolve(prop, `var(${name})`)
            const have = siteResolve(prop, `var(${name})`)
            if (!want || !have || !sameValue(hexify(have), hexify(want))) {
              ok = false
              break
            }
          }
          // No theme variables: only literal/arbitrary values are safe (v3 sites inline their theme).
          if (ok && !refs.length && /\d/.test(util) && !/\[.*\]/.test(util)) ok = !verifiable
        }
      }
      portableCache.set(token, ok)
      return ok
    }

    function declarationsOf(token) {
      const out = []
      for (const css of rules.get(token) || []) {
        for (const block of css.matchAll(/\{([^{}]*)\}/g)) {
          for (const d of block[1].split(";")) {
            const i = d.indexOf(":")
            if (i > 0) out.push({ prop: d.slice(0, i).trim(), value: d.slice(i + 1).replace(/!important/, "").trim() })
          }
        }
      }
      return out
    }

    // A variant class that doesn't carry over: keep its variants (custom breakpoints become
    // min-[…]/max-[…]) and hand back the site's declarations so they can be written exactly.
    function translate(token) {
      const util = bareUtility(token)
      const variants = token.slice(0, token.length - util.length).split(":").filter(Boolean)
      const css = (rules.get(token) || []).join("\n")
      if (!css) return null
      const out = []
      for (const v of variants) {
        if (variantOk(v, css)) out.push(v)
        else {
          const min = /width\s*>=?\s*([\d.]+(?:rem|px|em))|min-width:\s*([\d.]+(?:rem|px|em))/.exec(css)
          const max = /width\s*<=?\s*([\d.]+(?:rem|px|em))|max-width:\s*([\d.]+(?:rem|px|em))/.exec(css)
          if (min) out.push(`min-[${min[1] || min[2]}]`)
          else if (max) out.push(`max-[${max[1] || max[2]}]`)
          else return null
        }
      }
      return { variants: out, decls: declarationsOf(token) }
    }

    function propertiesOf(token) {
      const props = new Set()
      for (const css of rules.get(token) || []) {
        const body = css.slice(css.indexOf("{"))
        for (const m of body.matchAll(/([a-z-]+)\s*:/g)) if (!m[1].startsWith("--")) props.add(m[1])
      }
      return [...props]
    }

    const page = {
      isTailwind,
      verifiable,
      blocked,
      valid,
      portable,
      translate,
      propertiesOf,
      looksUtility: (t) => {
        const util = bareUtility(t)
        const root = util.replace(/^-/, "").split(/-(?![^[(]*[\])])/)[0]
        return /^\[/.test(util) || UTIL_ROOTS.has(root) || UTIL_ROOTS.has(util.replace(/^-/, ""))
      },
      isVariant: (t) => bareUtility(t) !== t.replace(/^!|!$/g, ""),
    }
    globalThis.__copycodePageCache = { at: Date.now(), page }
    return page
  }

  globalThis.__copycodeTailwind = { createConverter, parseColor, readPageClasses, target, disposeTarget }
})()
