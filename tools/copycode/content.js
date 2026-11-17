/* CopyCode — select a block on any page and copy an exact copy of it:
 *   Code   TSX  — Next.js component with Tailwind v4 classes and shadcn/ui components
 *          JSX / HTML — inline styles, exactly as the browser renders it
 *   Image  PNG of the block
 *   Figma  vector SVG (vector.js) → pastes as layers
 *   Paper  inline-styled HTML → pastes as layers
 *
 * Code pipeline: DOM ──capture()──▶ { tag, attrs, style | classes, children } ──toHTML()/toJSX()──▶ text
 *   "css" mode (JSX/HTML): computed styles diffed against a plain <div> and the tag's
 *          own default, so the copy stays exact with or without a CSS reset.
 *   "tw"  mode (TSX): computed styles diffed against Tailwind's preflight and converted
 *          to classes that mean the same in the target project (tailwind.js); shadcn
 *          components found by data-slot (shadcn-data.js).
 */
;(() => {
  "use strict"

  if (window.__copycode) {
    window.__copycode.toggle()
    return
  }

  // Two tabs, three formats each.
  const TABS = { code: ["tsx", "html", "svg"], image: ["png", "jpg", "svg"] }
  const MAX_NODES = 4000
  const SVG_NS = "http://www.w3.org/2000/svg"
  const XHTML_NS = "http://www.w3.org/1999/xhtml"
  const UI_IMPORT = "@/components/ui"
  const UTILS_IMPORT = "@/lib/utils"

  /* ------------------------------------------------------------------ */
  /* Style capture                                                       */
  /* ------------------------------------------------------------------ */

  const INHERITED = new Set([
    "color", "line-height", "letter-spacing", "word-spacing", "text-align",
    "text-align-last", "text-indent", "text-transform", "text-shadow",
    "white-space", "white-space-collapse", "text-wrap", "text-wrap-mode",
    "text-wrap-style", "word-break", "overflow-wrap", "word-wrap", "line-break",
    "hyphens", "direction", "visibility", "list-style-type", "list-style-position",
    "list-style-image", "quotes", "border-collapse", "border-spacing",
    "caption-side", "empty-cells", "text-decoration-skip-ink",
    "text-underline-offset", "text-underline-position", "text-emphasis-color",
    "text-emphasis-position", "text-emphasis-style", "writing-mode",
    "text-orientation", "pointer-events", "-webkit-text-fill-color",
    "-webkit-text-stroke-width", "-webkit-text-stroke-color",
  ])
  const isInherited = (p) => INHERITED.has(p) || p.startsWith("font-")

  // CSS mode always writes these on the root so the block renders the same when pasted.
  const ROOT_FORCE = new Set(["color", "font-family", "font-size", "font-weight", "line-height"])

  const WEBKIT_KEEP = new Set([
    "-webkit-line-clamp", "-webkit-box-orient", "-webkit-text-fill-color",
    "-webkit-text-stroke-width", "-webkit-text-stroke-color",
  ])

  const SKIP_EXACT = new Set([
    "width", "height", "d", "r", "rx", "ry", "cx", "cy", "x", "y", "cursor",
    "caret-color", "zoom", "speak", "orphans", "widows", "page", "tab-size",
    "text-size-adjust", "user-select", "will-change", "block-size",
    "inline-size", "min-block-size", "min-inline-size", "max-block-size",
    "max-inline-size", "content", "accent-color", "color-scheme", "text-decoration",
  ])

  const SKIP_PREFIX = new RegExp(
    "^(-webkit-|transition|animation|inset-block|inset-inline|margin-block|margin-inline|" +
      "padding-block|padding-inline|border-block|border-inline|border-start|border-end|" +
      "scroll-|overscroll|contain-intrinsic|view-transition|view-timeline|scroll-timeline|" +
      "timeline-|anchor-|position-anchor|position-try|position-visibility|counter-|offset-|" +
      "app-region|interactivity|field-sizing|interpolate-size|ruby-|math-|font-kerning|" +
      "font-optical-sizing|font-palette|font-synthesis|text-rendering|image-rendering|" +
      "text-autospace|text-spacing-trim|text-box|hyphenate|buffered-rendering|" +
      "color-interpolation|color-rendering|shape-rendering|dominant-baseline|" +
      "alignment-baseline|baseline-shift|text-anchor|vector-effect|paint-order|marker|" +
      "stop-|flood-|lighting-color|mask-type|clip-rule|fill|stroke|dynamic-range|reading-|" +
      "corner-|hanging-punctuation|initial-letter|overlay|print-color|forced-color)"
  )

  // Presentation properties copied onto SVG elements.
  const SVG_PROPS = [
    "fill", "fill-opacity", "fill-rule", "stroke", "stroke-width", "stroke-opacity",
    "stroke-linecap", "stroke-linejoin", "stroke-dasharray", "stroke-dashoffset",
    "stroke-miterlimit", "opacity", "stop-color", "stop-opacity",
  ]

  let PROPS = null
  function getProps() {
    if (PROPS) return PROPS
    const cs = getComputedStyle(document.documentElement)
    PROPS = []
    for (let i = 0; i < cs.length; i++) {
      const p = cs[i]
      if (p.startsWith("--")) continue
      if (WEBKIT_KEEP.has(p)) PROPS.push(p)
      else if (!SKIP_EXACT.has(p) && !SKIP_PREFIX.test(p)) PROPS.push(p)
    }
    return PROPS
  }

  // Hidden iframe measuring browser default styles.
  const sandboxes = {}
  const defaultsCache = new Map()

  function getSandbox(mode) {
    if (!sandboxes[mode]) {
      const frame = document.createElement("iframe")
      frame.setAttribute("aria-hidden", "true")
      frame.tabIndex = -1
      frame.style.cssText =
        "position:fixed!important;width:0!important;height:0!important;border:0!important;" +
        "opacity:0!important;pointer-events:none!important;left:-9999px!important;"
      document.documentElement.appendChild(frame)
      const doc = frame.contentDocument
      const css = mode === "tw" ? globalThis.__copycodeTW?.preflight || "" : ""
      doc.open()
      doc.write(`<!doctype html><html><head><style>${css}</style></head><body><svg></svg></body></html>`)
      doc.close()
      sandboxes[mode] = frame
    }
    return sandboxes[mode]
  }

  function getDefaults(tag, isSvg, mode) {
    const key = `${mode}:${isSvg ? "svg:" : ""}${tag}`
    if (defaultsCache.has(key)) return defaultsCache.get(key)
    const frame = getSandbox(mode)
    const doc = frame.contentDocument
    let el
    if (isSvg) {
      el = doc.createElementNS(SVG_NS, tag)
      ;(tag === "svg" ? doc.body : doc.body.querySelector("svg")).appendChild(el)
    } else {
      el = doc.createElement(tag)
      if (tag === "a") el.setAttribute("href", "#") // link styles only apply with href
      doc.body.appendChild(el)
    }
    const cs = frame.contentWindow.getComputedStyle(el)
    const out = {}
    for (const p of getProps()) out[p] = cs.getPropertyValue(p)
    for (const p of [...SVG_PROPS, "overflow", "display"]) out[p] = cs.getPropertyValue(p)
    el.remove()
    defaultsCache.set(key, out)
    return out
  }

  // Flex and grid items get their outer display "blockified" by the browser.
  const blockify = (d) => (d === "inline" || d === "inline-block" ? "block" : d.replace(/^inline-/, ""))

  // Compared with a plain <div> rather than the tag's own defaults: a reset may
  // remove an <h1>'s margins or a <button>'s border, so those are always written.
  // Only `display` is compared with the tag itself (spans stay inline without saying so),
  // except for replaced elements, which resets commonly turn into blocks.
  const ALWAYS_DISPLAY = new Set(["img", "svg", "video", "canvas", "iframe", "picture", "audio", "embed", "object"])
  // Form controls reset differently everywhere; write their box completely.
  const ALWAYS_FORM = new Set(["button", "input", "select", "textarea"])
  const FORM_PROPS = [
    "font-family", "font-size", "font-weight", "line-height", "color", "letter-spacing", "text-align",
    "background-color", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width",
    "border-top-style", "border-right-style", "border-bottom-style", "border-left-style",
    "border-top-color", "border-right-color", "border-bottom-color", "border-left-color",
    "padding-top", "padding-right", "padding-bottom", "padding-left", "margin-top", "margin-right",
    "margin-bottom", "margin-left", "box-sizing", "appearance",
  ]

  function diffStyles(cs, parentCS, isRoot, defaultTag, mode) {
    const own = getDefaults(defaultTag, false, mode)
    const base = getDefaults("div", false, mode)
    const out = {}
    for (const p of getProps()) {
      const v = cs.getPropertyValue(p)
      if (!v) continue
      // Skip a value only when it's what the element gets anyway, with or without a reset:
      // the same as a plain <div> *and* the same as the tag's own browser default.
      // (TSX targets a Tailwind project, so there the defaults are preflight's.)
      const tagSetsIt = own[p] !== base[p] // e.g. h1 margin/font-size, button border, a color
      if (isInherited(p)) {
        if (isRoot) {
          if (!(mode === "css" && ROOT_FORCE.has(p)) && base[p] === v && !tagSetsIt) continue
        } else if (parentCS && parentCS.getPropertyValue(p) === v && !tagSetsIt) continue
      } else if (p === "display") {
        if ((mode === "tw" || !ALWAYS_DISPLAY.has(defaultTag)) && own[p] === v) continue
      } else if (mode === "tw" ? own[p] === v : base[p] === v && own[p] === v) continue
      out[p] = v
    }
    if (mode === "css" && ALWAYS_FORM.has(defaultTag)) for (const p of FORM_PROPS) out[p] = cs.getPropertyValue(p)
    const def = own
    if (out.display && parentCS && /flex|grid/.test(parentCS.display) && out.display === blockify(def.display)) {
      delete out.display
    }
    prune(out, cs, isRoot, own, mode)
    return out
  }

  // next/font hashes family names (__Inter_d65c78, __Inter_Fallback_d65c78); those don't
  // exist anywhere else. Restore the real names and drop the generated fallbacks.
  const GENERIC_FONTS = /^(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-sans-serif|ui-serif|ui-monospace|ui-rounded|math|emoji|fangsong)$/i
  function cleanFontFamily(v) {
    const out = []
    for (const part of v.split(/,(?=(?:[^"']*["'][^"']*["'])*[^"']*$)/)) {
      const bare = part.trim().replace(/^['"]|['"]$/g, "")
      if (!bare || /^__.+_Fallback_[0-9a-f]{5,}$/i.test(bare)) continue
      const m = /^__(.+?)_[0-9a-f]{5,}$/i.exec(bare)
      const name = m ? m[1].replace(/_/g, " ") : bare
      if (!out.some((x) => x.toLowerCase() === name.toLowerCase())) out.push(name)
    }
    return out.map((n) => (GENERIC_FONTS.test(n) || /^-?[a-zA-Z][\w-]*$/.test(n) ? n : `"${n}"`)).join(", ")
  }

  function prune(s, cs, isRoot, own = {}, mode = "css") {
    if (s["font-family"]) s["font-family"] = cleanFontFamily(s["font-family"])
    const color = cs.getPropertyValue("color")
    for (const p of Object.keys(s)) {
      if (p.endsWith("-color") && p !== "color" && p !== "background-color" && s[p] === color) delete s[p]
    }
    for (const p of ["min-width", "min-height"]) if (s[p] === "auto") delete s[p]

    for (const side of ["top", "right", "bottom", "left"]) {
      const style = cs.getPropertyValue(`border-${side}-style`)
      const width = cs.getPropertyValue(`border-${side}-width`)
      if (style === "none" || style === "hidden" || width === "0px") {
        delete s[`border-${side}-color`]
        // The tag has a border of its own (button, input, hr, fieldset…): say it's gone.
        if (own[`border-${side}-style`] && own[`border-${side}-style`] !== "none" && parseFloat(own[`border-${side}-width`]) > 0) {
          s[`border-${side}-width`] = "0px"
          s[`border-${side}-style`] = "none"
        } else {
          delete s[`border-${side}-width`]
          // Under Tailwind's preflight (0 solid) a zero-width border needs no style at all.
          if (width === "0px" && (mode === "tw" || style !== "none")) delete s[`border-${side}-style`]
        }
      }
    }
    if (cs.getPropertyValue("outline-style") === "none") {
      for (const p of ["outline-width", "outline-color", "outline-offset"]) delete s[p]
    }
    if (cs.getPropertyValue("column-rule-style") === "none") {
      for (const p of ["column-rule-style", "column-rule-width", "column-rule-color"]) delete s[p]
    }
    if (cs.getPropertyValue("text-decoration-line") === "none") {
      for (const p of ["text-decoration-style", "text-decoration-color", "text-decoration-thickness"]) delete s[p]
    }
    if (cs.getPropertyValue("transform") === "none") delete s["transform-origin"]
    if (cs.getPropertyValue("perspective") === "none") delete s["perspective-origin"]
    if (cs.getPropertyValue("background-image") === "none") {
      for (const p of [
        "background-position-x", "background-position-y", "background-size",
        "background-repeat", "background-origin", "background-attachment",
      ]) delete s[p]
      if (s["background-clip"] !== "text") delete s["background-clip"]
    }
    const position = cs.getPropertyValue("position")
    if (position === "static") {
      for (const p of ["top", "right", "bottom", "left", "z-index"]) delete s[p]
    } else if (position === "absolute" || position === "fixed") {
      // Computed insets are all resolved to px; keep the edge each box sits closest to.
      for (const [a, b] of [["left", "right"], ["top", "bottom"]]) {
        if (a in s && b in s) {
          const va = parseFloat(s[a]), vb = parseFloat(s[b])
          if (!Number.isNaN(va) && !Number.isNaN(vb)) delete s[vb < va ? a : b]
        }
      }
    }

    if (isRoot) {
      // The copied block becomes a standalone component: drop its placement
      // in the original page, but keep it a containing block for children.
      for (const p of ["margin-top", "margin-right", "margin-bottom", "margin-left",
        "top", "right", "bottom", "left", "z-index", "float", "clear",
        "grid-row-start", "grid-row-end", "grid-column-start", "grid-column-end",
        "flex-grow", "flex-shrink", "flex-basis", "align-self", "justify-self", "order"]) delete s[p]
      if (position !== "static") s.position = "relative"
    }
  }

  const REPLACED = new Set(["img", "video", "canvas", "iframe", "input", "textarea", "select", "svg", "picture", "embed", "object", "progress", "meter"])

  function sizeStyles(el, cs, parentEl, parentCS, isRoot, hasContent, textOnly, mode = "css") {
    const out = {}
    const display = cs.display
    if (display === "inline" || display === "contents") return out
    const replaced = REPLACED.has(el.localName)
    const absolute = cs.position === "absolute" || cs.position === "fixed"
    const scrolls = cs.overflowX !== "visible" || cs.overflowY !== "visible"
    const w = cs.width
    const h = cs.height

    if (replaced && !isRoot && !absolute && parentEl && fillsParent(el, cs, parentEl, parentCS)) {
      out.width = "100%"
      out.height = el.localName === "img" || el.localName === "video" ? "auto" : h
      return out
    }
    if (replaced || absolute) {
      out.width = w
      out.height = h
      return out
    }
    const fills = () => parentEl && fillsParent(el, cs, parentEl, parentCS)
    if (!hasContent) {
      // Empty boxes (dividers, dots, spacers): keep what CSS gives them.
      if ((isRoot && mode === "css") || isExplicit(el, "width")) out.width = fills() ? "100%" : w
      if (isExplicit(el, "height")) out.height = h
      return out
    }
    if (isExplicit(el, "height")) out.height = h // buttons, bars, fixed panels
    if (isRoot && mode === "css") {
      out.width = w // a snapshot: keep the copied width
      return out
    }

    const parentDisplay = parentCS ? parentCS.display : "block"
    const inFlexOrGrid = /flex|grid/.test(parentDisplay)
    if (/grid/.test(parentDisplay)) return out // the grid template sizes it
    if (textOnly && (display.startsWith("inline") || inFlexOrGrid)) return out // shrink-to-fit
    if (inFlexOrGrid && parseFloat(cs.flexGrow) > 0) return out

    if (!isExplicit(el, "width")) return out // sized by layout (content, stretch, flex)
    // Set by CSS: exactly the parent's width means width: 100%.
    out.width = parentEl && fillsParent(el, cs, parentEl, parentCS) ? "100%" : w
    return out
  }

  // Does the page's CSS actually set this size, or is it just the result of
  // layout (content, flex, stretch)? Temporarily force `auto` and compare.
  function isExplicit(el, prop) {
    const before = el.getBoundingClientRect()[prop]
    const attr = el.getAttribute("style")
    el.style.setProperty(prop, "auto", "important")
    // Flex/grid items would just stretch back to the line's size; stop that while measuring.
    const parentDisplay = el.parentElement ? getComputedStyle(el.parentElement).display : ""
    if (/flex|grid/.test(parentDisplay)) el.style.setProperty("align-self", "flex-start", "important")
    if (/grid/.test(parentDisplay)) el.style.setProperty("justify-self", "start", "important")
    const after = el.getBoundingClientRect()[prop]
    if (attr === null) el.removeAttribute("style")
    else el.setAttribute("style", attr)
    return Math.abs(before - after) > 0.5
  }

  function fillsParent(el, cs, parentEl, parentCS) {
    const pcs = parentCS || getComputedStyle(parentEl)
    const parentContent = parentEl.clientWidth - parseFloat(pcs.paddingLeft) - parseFloat(pcs.paddingRight)
    const outer = el.getBoundingClientRect().width + parseFloat(cs.marginLeft) + parseFloat(cs.marginRight)
    return parentContent > 0 && Math.abs(outer - parentContent) < 1.5
  }

  /* ------------------------------------------------------------------ */
  /* Value cleanup + shorthands (inline-style output)                    */
  /* ------------------------------------------------------------------ */

  const hex2 = (n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")

  function cleanValue(v) {
    return v
      .replace(
        /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)/g,
        (_, r, g, b, a) => {
          const alpha = a === undefined ? 1 : a.endsWith("%") ? parseFloat(a) / 100 : parseFloat(a)
          if (alpha === 0) return "transparent"
          const base = `#${hex2(+r)}${hex2(+g)}${hex2(+b)}`
          return alpha >= 1 ? base : base + hex2(alpha * 255)
        }
      )
      .replace(/(-?\d+\.\d{3,})(px|deg|s)\b/g, (_, n, u) => `${+parseFloat(n).toFixed(2)}${u}`)
  }

  const cleanStyle = (style) => {
    const out = {}
    for (const [k, v] of Object.entries(style)) out[k] = cleanValue(v)
    return out
  }

  function box(t, r, b, l) {
    if (t === r && r === b && b === l) return t
    if (t === b && r === l) return `${t} ${r}`
    if (r === l) return `${t} ${r} ${b}`
    return `${t} ${r} ${b} ${l}`
  }

  function compact(style) {
    const s = { ...style }
    const has = (...keys) => keys.every((k) => k in s)
    const merges = []
    const sides = ["top", "right", "bottom", "left"]

    for (const prop of ["margin", "padding"]) {
      const keys = sides.map((d) => `${prop}-${d}`)
      if (has(...keys)) merges.push([keys, prop, box(...keys.map((k) => s[k]))])
    }

    const bw = sides.map((d) => `border-${d}-width`)
    const bs = sides.map((d) => `border-${d}-style`)
    const bc = sides.map((d) => `border-${d}-color`)
    if (has(...bw, ...bs, ...bc)) {
      const same = (keys) => keys.every((k) => s[k] === s[keys[0]])
      if (same(bw) && same(bs) && same(bc)) {
        merges.push([[...bw, ...bs, ...bc], "border", `${s[bw[0]]} ${s[bs[0]]} ${s[bc[0]]}`])
      } else {
        merges.push([bw, "border-width", box(...bw.map((k) => s[k]))])
        merges.push([bs, "border-style", box(...bs.map((k) => s[k]))])
        merges.push([bc, "border-color", box(...bc.map((k) => s[k]))])
      }
    } else if (has(...bs) && !bw.some((k) => k in s) && bs.every((k) => s[k] === "none")) {
      merges.push([bs, "border", "none"])
    }

    const radii = ["top-left", "top-right", "bottom-right", "bottom-left"].map((c) => `border-${c}-radius`)
    if (has(...radii) && radii.every((k) => !s[k].includes(" "))) {
      merges.push([radii, "border-radius", box(...radii.map((k) => s[k]))])
    }

    const pair = (a, b, name, join = (x, y) => (x === y ? x : `${x} ${y}`)) => {
      if (has(a, b)) merges.push([[a, b], name, join(s[a], s[b])])
    }
    pair("row-gap", "column-gap", "gap")
    pair("overflow-x", "overflow-y", "overflow")
    pair("background-position-x", "background-position-y", "background-position", (x, y) => `${x} ${y}`)
    pair("grid-row-start", "grid-row-end", "grid-row", (x, y) => `${x} / ${y}`)
    pair("grid-column-start", "grid-column-end", "grid-column", (x, y) => `${x} / ${y}`)
    if (has("flex-grow", "flex-shrink", "flex-basis")) merges.push([["flex-grow", "flex-shrink", "flex-basis"], "flex", `${s["flex-grow"]} ${s["flex-shrink"]} ${s["flex-basis"]}`])
    if ("text-decoration-line" in s && !("text-decoration-style" in s) && !("text-decoration-color" in s) && !("text-decoration-thickness" in s)) {
      merges.push([["text-decoration-line"], "text-decoration", s["text-decoration-line"]])
    }
    if (has("outline-width", "outline-style", "outline-color")) merges.push([["outline-width", "outline-style", "outline-color"], "outline", `${s["outline-width"]} ${s["outline-style"]} ${s["outline-color"]}`])

    if (!merges.length) return s
    // Rebuild in original order, placing each shorthand where its first longhand was.
    const replaced = new Map()
    const dropped = new Set()
    for (const [keys, name, value] of merges) {
      replaced.set(keys[0], [name, value])
      keys.slice(1).forEach((k) => dropped.add(k))
    }
    const out = {}
    for (const [k, v] of Object.entries(s)) {
      if (dropped.has(k)) continue
      if (replaced.has(k)) {
        const [name, value] = replaced.get(k)
        out[name] = value
      } else out[k] = v
    }
    return out
  }

  /* ------------------------------------------------------------------ */
  /* TSX: shadcn/ui components, Next.js, the site's own Tailwind classes  */
  /* ------------------------------------------------------------------ */

  const TEXT_INPUTS = new Set(["text", "email", "password", "search", "url", "tel", "number", "date", "time", "datetime-local", "month", "week"])
  const SIDES4 = ["top", "right", "bottom", "left"]
  const BOX_PIN = [
    ...SIDES4.map((d) => `padding-${d}`),
    ...SIDES4.map((d) => `border-${d}-width`),
    ...["top-left", "top-right", "bottom-right", "bottom-left"].map((c) => `border-${c}-radius`),
  ]
  const TEXT_PIN = ["color", "font-size", "font-weight", "line-height", "font-family", "letter-spacing", "text-align"]
  const LAYOUT_PIN = ["display", "flex-shrink", "align-items", "justify-content", "column-gap", "white-space-collapse", "text-wrap-mode", "outline-style"]

  // Plain elements mapped to shadcn components. Their look is pinned (written out)
  // so the classes win over the component's own defaults through cn()/tailwind-merge.
  const COMPONENTS = {
    Button: { file: "button", pin: [...TEXT_PIN, ...LAYOUT_PIN, "background-color", "background-clip", "height", "width", ...BOX_PIN] },
    Input: { file: "input", pin: [...TEXT_PIN, "background-color", "height", "width", "min-width", "outline-style", ...BOX_PIN] },
    Textarea: { file: "textarea", pin: [...TEXT_PIN, "background-color", "height", "width", "outline-style", ...BOX_PIN] },
    Label: { file: "label", pin: [...TEXT_PIN, "display", "align-items", "column-gap"] },
    Separator: { file: "separator", pin: [] },
  }

  function componentFor(tag, el) {
    if (tag === "button") return "Button"
    if (tag === "input" && TEXT_INPUTS.has((el.getAttribute("type") || "text").toLowerCase())) return "Input"
    if (tag === "textarea") return "Textarea"
    if (tag === "label") return "Label"
    if (tag === "hr") return "Separator"
    return null
  }

  function buttonVariant(classes, cs) {
    const has = (c) => classes.includes(c)
    const drop = (...list) => list.forEach((c) => {
      const i = classes.indexOf(c)
      if (i >= 0) classes.splice(i, 1)
    })
    const transparent = /rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor)
    const bordered = SIDES4.some((d) => parseFloat(cs.getPropertyValue(`border-${d}-width`)) > 0)
    if (has("bg-secondary")) {
      drop("bg-secondary", "text-secondary-foreground")
      return "secondary"
    }
    if (classes.some((c) => c.startsWith("bg-destructive"))) return "destructive"
    if (transparent && bordered) return "outline"
    if (transparent) {
      drop("bg-transparent")
      return /underline/.test(cs.textDecorationLine) ? "link" : "ghost"
    }
    drop("bg-primary", "text-primary-foreground")
    return null
  }

  const UI = () => globalThis.__copycodeUI || { slots: {}, cva: {} }

  // shadcn marks every component part with data-slot (card, card-header, button…).
  function slotComponent(el) {
    const slot = el.getAttribute("data-slot")
    const info = slot && UI().slots[slot]
    if (!info) return null
    return { slot, ...info, tokenSet: new Set(info.tokens) }
  }

  // Same version as this project's component? (≥ 85% of the classes it always applies.)
  // Otherwise it's copied as plain, exact elements.
  function sameVersion(slot, classList, ctx) {
    const have = new Set(classList)
    const fraction = (alternatives) =>
      Math.max(0, ...alternatives.map((b) => {
        const toks = b.filter((t) => ctx.page.looksUtility(t))
        return toks.length ? toks.filter((t) => have.has(t)).length / toks.length : 1
      }))
    if (fraction(slot.bases || [[]]) < 0.85) return false
    const def = slot.cva && UI().cva[slot.cva]
    return !def || fraction(def.bases || [def.base]) >= 0.85
  }

  // cva variants (variant, size…) whose classes are all on the element.
  function detectVariants(comp, el, classSet) {
    const props = {}
    const def = comp.cva && UI().cva[comp.cva]
    for (const key of ["variant", "size"]) {
      const v = el.getAttribute(`data-${key}`)
      if (v && (!def || def.variants[key]?.[v])) props[key] = v
    }
    if (def) {
      for (const [group, opts] of Object.entries(def.variants)) {
        if (props[group]) continue
        let best = null, bestScore = 0
        for (const [opt, alternatives] of Object.entries(opts)) {
          for (const toks of alternatives) {
            if (!toks.length) continue
            const hit = toks.filter((t) => classSet.has(t)).length
            const score = hit === toks.length ? 1000 + toks.length : hit / toks.length
            if (score > bestScore) {
              best = opt
              bestScore = score
            }
          }
        }
        if (best && bestScore >= 0.6) props[group] = best
      }
      for (const [k, v] of Object.entries(props)) if (def.defaults?.[k] === v) delete props[k]
    } else {
      for (const [k, v] of Object.entries(props)) if (v === "default") delete props[k]
    }
    return props
  }

  // Props a component needs that the DOM only shows as state.
  function stateProps(comp, el) {
    const out = []
    const checked = el.getAttribute("aria-checked") === "true" || el.hasAttribute("data-checked")
    if (/^(checkbox|switch|radio-group-item|toggle)$/.test(comp.slot) && checked) out.push(comp.slot === "toggle" ? "defaultPressed" : "defaultChecked")
    if (comp.slot === "progress") {
      const v = el.getAttribute("aria-valuenow") || el.querySelector("[aria-valuenow]")?.getAttribute("aria-valuenow")
      if (v) out.push(`value={${Math.round(+v)}}`)
    }
    if (el.getAttribute("data-orientation") === "vertical" || el.hasAttribute("data-vertical")) out.push('orientation="vertical"')
    if (el.hasAttribute("disabled") || el.getAttribute("aria-disabled") === "true" || el.hasAttribute("data-disabled")) out.push("disabled")
    return out
  }

  // Site classes computed CSS can't hold: state/responsive variants, transitions,
  // group/peer markers. Kept when they behave the same in this project,
  // otherwise rewritten with the site's real values.
  const BEHAVIOR = /^-?(transition|duration|ease|delay|animate|cursor|select|touch|will|scroll|snap)(-|$)/
  function siteExtras(classList, existing, ctx, cs) {
    if (!ctx.page.isTailwind) return []
    const have = new Set(existing)
    const out = []
    for (const t of classList) {
      if (have.has(t) || /(^|:)(before|after):/.test(t)) continue
      const variant = ctx.page.isVariant(t)
      if (!/^(group|peer)(\/[\w-]+)?$/.test(t) && !variant && !BEHAVIOR.test(t.split(":").pop())) continue
      if (ctx.page.portable(t)) out.push(t)
      else if (variant) out.push(...rewriteVariant(t, ctx, cs))
    }
    return [...new Set(out)].filter((t) => !have.has(t))
  }

  // hover:bg-gray-200 from a site whose gray-200 differs → hover:bg-[#e8e3d9]
  function rewriteVariant(token, ctx, cs) {
    const tr = ctx.page.translate(token)
    if (!tr || !tr.decls.length) return []
    const probe = (ctx.probe ||= (() => {
      const d = document.createElement("div")
      document.documentElement.appendChild(d)
      return d
    })())
    const style = {}
    for (const { prop, value } of tr.decls) {
      if (prop.startsWith("--") || /var\(--tw-/.test(value)) return []
      probe.removeAttribute("style")
      probe.style.setProperty(prop, value)
      probe.style.setProperty("display", "none", "important")
      const pcs = getComputedStyle(probe)
      for (const lp of longhands(prop)) {
        const v = pcs.getPropertyValue(lp)
        if (v) style[lp] = v
      }
    }
    return ctx.tw.convert(cleanStyle(style), cs).map((c) => `${tr.variants.join(":")}:${c}`)
  }

  const SIDES_OF = (p) => SIDES4.map((d) => p.replace("%", d))
  const LONGHANDS = {
    padding: SIDES_OF("padding-%"), margin: SIDES_OF("margin-%"), inset: SIDES4,
    "padding-inline": ["padding-left", "padding-right"], "padding-block": ["padding-top", "padding-bottom"],
    "margin-inline": ["margin-left", "margin-right"], "margin-block": ["margin-top", "margin-bottom"],
    "padding-inline-start": ["padding-left"], "padding-inline-end": ["padding-right"],
    "margin-inline-start": ["margin-left"], "margin-inline-end": ["margin-right"],
    "inset-inline": ["left", "right"], "inset-block": ["top", "bottom"],
    "border-width": SIDES_OF("border-%-width"), "border-style": SIDES_OF("border-%-style"), "border-color": SIDES_OF("border-%-color"),
    border: [...SIDES_OF("border-%-width"), ...SIDES_OF("border-%-style"), ...SIDES_OF("border-%-color")],
    "border-radius": ["border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius"],
    gap: ["row-gap", "column-gap"], overflow: ["overflow-x", "overflow-y"], size: ["width", "height"],
    "inline-size": ["width"], "block-size": ["height"], background: ["background-color", "background-image"],
    font: ["font-size", "font-weight", "font-family", "line-height", "font-style"], flex: ["flex-grow", "flex-shrink", "flex-basis"],
    "text-decoration": ["text-decoration-line", "text-decoration-color", "text-decoration-style"],
    outline: ["outline-width", "outline-style", "outline-color"],
  }
  const longhands = (p) => {
    if (LONGHANDS[p]) return LONGHANDS[p]
    for (const side of SIDES4) if (p === `border-${side}`) return [`border-${side}-width`, `border-${side}-style`, `border-${side}-color`]
    return [p]
  }

  // Tailwind's preflight makes everything border-box. Convert explicit sizes of
  // content-box elements so they render the same, and drop the box-sizing.
  function toBorderBox(style, cs) {
    if (cs.boxSizing !== "content-box") return
    delete style["box-sizing"]
    const extra = (a, b) =>
      ["padding", "border"].reduce((sum, k) => {
        const suffix = k === "border" ? "-width" : ""
        return sum + parseFloat(cs.getPropertyValue(`${k}-${a}${suffix}`)) + parseFloat(cs.getPropertyValue(`${k}-${b}${suffix}`))
      }, 0)
    const dx = extra("left", "right"), dy = extra("top", "bottom")
    for (const [prop, d] of [["width", dx], ["min-width", dx], ["max-width", dx], ["height", dy], ["min-height", dy], ["max-height", dy]]) {
      const m = /^([\d.]+)px$/.exec(style[prop] || "")
      if (m && d) style[prop] = `${Math.round((+m[1] + d) * 100) / 100}px`
    }
  }

  // Values that shift with width but mean the same: equal grid tracks → repeat(n, 1fr),
  // letter-spacing → em (Tailwind's tracking is relative to the font size).
  function twNormalize(style, cs) {
    const g = style["grid-template-columns"]
    if (g && g !== "none") {
      const tracks = g.split(/\s+(?![^(]*\))/).map((t) => parseFloat(t))
      if (tracks.length && tracks.every((t) => !Number.isNaN(t) && Math.abs(t - tracks[0]) <= 1) && /^[\d.\s px]+$/.test(g)) {
        style["grid-template-columns"] = `repeat(${tracks.length}, minmax(0, 1fr))`
      }
    }
    const ls = /^(-?[\d.]+)px$/.exec(style["letter-spacing"] || "")
    if (ls) style["letter-spacing"] = `${Math.round((+ls[1] / parseFloat(cs.fontSize)) * 1000) / 1000}em`
  }

  // An icon the component renders itself (SelectTrigger's chevron), or a wrapper around one.
  function isInternalIcon(node, icons) {
    if (node.type !== "el") return false
    if (node.lucide && icons.includes(node.lucide)) return true
    const els = node.children.filter((c) => c.type === "el")
    const text = node.children.some((c) => c.type === "text" && c.text.trim())
    return !text && els.length === 1 && isInternalIcon(els[0], icons)
  }

  // import specifier → Set of names ("default:Link" for default imports)
  const addImport = (ctx, from, name) => {
    if (!ctx.imports.has(from)) ctx.imports.set(from, new Set())
    ctx.imports.get(from).add(name)
  }
  const pascal = (s) => s.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase())

  /* ------------------------------------------------------------------ */
  /* DOM → neutral tree                                                  */
  /* ------------------------------------------------------------------ */

  const SKIP_TAGS = new Set(["script", "style", "noscript", "template", "link", "meta", "base", "head", "title", "source", "track"])
  const BOOL_ATTRS = new Set(["disabled", "readonly", "required", "checked", "selected", "multiple", "controls", "muted", "loop", "autoplay", "playsinline", "open", "reversed", "download", "hidden", "novalidate"])
  const KEEP_ATTRS = new Set([
    "href", "src", "alt", "title", "type", "placeholder", "name", "role", "target",
    "rel", "colspan", "rowspan", "for", "min", "max", "step", "maxlength",
    "minlength", "pattern", "datetime", "cite", "lang", "dir", "tabindex", "poster",
    "value", "label", "start", "scope", "headers", "abbr", "span", "action",
    "method", "autocomplete", "inputmode", "loading", "decoding", "allow",
    ...BOOL_ATTRS,
  ])

  // Image optimizer URLs (/_next/image?url=…&w=48&q=75, /_vercel/image?url=…) → the original image.
  function unwrapImage(url) {
    try {
      const u = new URL(url, document.baseURI)
      const inner = /\/_(next|vercel)\/image\/?$/.test(u.pathname) && u.searchParams.get("url")
      return inner ? new URL(inner, u.origin).href : u.href
    } catch {
      return url
    }
  }

  const absolutize = (url) => {
    try {
      return new URL(url, document.baseURI).href
    } catch {
      return url
    }
  }

  const SEMANTIC_NAMES = {
    header: "Header", nav: "Navigation", footer: "Footer", section: "Section",
    article: "Article", aside: "Sidebar", main: "Main", form: "Form",
    button: "Button", table: "Table", svg: "Icon", img: "Image", a: "Link",
    ul: "List", ol: "List", figure: "Figure", dialog: "Dialog",
    h1: "Heading", h2: "Heading", h3: "Heading", h4: "Heading",
  }

  function componentName(el) {
    const raw = el.getAttribute("aria-label") || el.id || ""
    const pascal = raw
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .trim()
      .split(/\s+/)
      .slice(0, 4)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("")
    return /^[A-Z][A-Za-z0-9]*$/.test(pascal) && pascal.length <= 40 ? pascal : SEMANTIC_NAMES[el.localName] || "CopiedBlock"
  }

  function placeholderDefaults(tag) {
    const key = `placeholder:${tag}`
    if (defaultsCache.has(key)) return defaultsCache.get(key)
    const frame = getSandbox("css")
    const el = frame.contentDocument.createElement(tag)
    el.setAttribute("placeholder", "x")
    frame.contentDocument.body.appendChild(el)
    const ph = frame.contentWindow.getComputedStyle(el, "::placeholder")
    const out = {}
    for (const p of ["color", "opacity", "font-style", "font-weight", "letter-spacing", "text-transform"]) out[p] = ph.getPropertyValue(p)
    el.remove()
    defaultsCache.set(key, out)
    return out
  }

  function capture(rootEl, mode) {
    const ctx = {
      mode,
      css: [], // rules that can't be inline (::placeholder)
      count: 0,
      truncated: false,
      imports: new Map(),
      skipSlots: new Set(), // parts a component renders itself
      imageHosts: new Set(), // next/image remote hosts
      stats: { components: 0 },
      tw: mode === "tw" ? globalThis.__copycodeTailwind.createConverter() : null,
      page: mode === "tw" ? globalThis.__copycodeTailwind.readPageClasses() : null,
      // ids that something inside the block points at (label for=, aria-labelledby…)
      referencedIds: new Set(
        [rootEl, ...rootEl.querySelectorAll("[for],[aria-labelledby],[aria-describedby],[aria-controls]")].flatMap((e) =>
          ["for", "aria-labelledby", "aria-describedby", "aria-controls"].flatMap((a) => (e.getAttribute(a) || "").split(/\s+/).filter(Boolean))
        )
      ),
    }
    const parentEl = rootEl.parentElement
    const parentCS = parentEl ? getComputedStyle(parentEl) : null
    let tree
    try {
      tree =
        rootEl instanceof SVGElement && rootEl.localName === "svg"
          ? captureSvg(rootEl, parentCS, true, ctx)
          : captureEl(rootEl, parentEl, parentCS, true, ctx)
    } finally {
      ctx.probe?.remove()
    }
    if (tree && ctx.css.length && !VOID.has(tree.tag) && !tree.svg) {
      tree.children.unshift({ type: "el", tag: "style", attrs: {}, style: {}, svg: false, children: [{ type: "text", text: ctx.css.join("\n"), pre: true }] })
    }
    return { tree, ctx }
  }

  function childNodesOf(el) {
    if (el.shadowRoot) return Array.from(el.shadowRoot.childNodes)
    if (el.localName === "slot") {
      const assigned = el.assignedNodes({ flatten: true })
      return assigned.length ? assigned : Array.from(el.childNodes)
    }
    return Array.from(el.childNodes)
  }

  // Turn a collected style map into the node's final representation.
  function finishStyle(node, style, cs, ctx) {
    if (ctx?.mode === "tw") {
      node.classes = ctx.tw.convert(cleanStyle(style), cs, { hints: ctx.hints })
      node.style = {}
    } else node.style = cleanStyle(style)
    return node
  }

  function captureEl(el, parentEl, parentCS, isRoot, ctx) {
    if (++ctx.count > MAX_NODES) {
      ctx.truncated = true
      return null
    }
    if (el === host) return null
    let tag = el.localName
    if (SKIP_TAGS.has(tag)) return null

    if (el instanceof SVGElement) {
      return tag === "svg" ? captureSvg(el, parentCS, false, ctx) : null
    }

    const cs = getComputedStyle(el)
    if (cs.display === "none") return null
    // Visually-hidden form inputs that headless UI libraries render next to their controls.
    if (tag === "input" && el.getAttribute("aria-hidden") === "true") return null
    if (ctx.skipSlots.size && ctx.skipSlots.has(el.getAttribute("data-slot"))) return null

    // <picture> → its rendered <img>
    if (tag === "picture") {
      const img = el.querySelector("img")
      return img ? captureEl(img, el, cs, isRoot, ctx) : null
    }

    // Custom elements and <slot> become plain elements.
    if (tag.includes("-") || tag === "slot") tag = cs.display.startsWith("inline") ? "span" : "div"

    const attrs = {}
    for (const { name, value } of Array.from(el.attributes)) {
      if (name.startsWith("aria-") || KEEP_ATTRS.has(name)) attrs[name] = BOOL_ATTRS.has(name) ? "" : value
    }
    if (el.id && ctx.referencedIds.has(el.id)) attrs.id = el.id

    let children = []

    if (tag === "a" && el.href) {
      if (/^javascript:/i.test(el.getAttribute("href") || "")) delete attrs.href
      else attrs.href = el.href
    }
    if (tag === "img") {
      let src = el.currentSrc || el.src
      const lazy = el.getAttribute("data-src") || el.getAttribute("data-lazy-src")
      if (lazy && (!src || src.startsWith("data:image/gif") || src.startsWith("data:image/svg"))) src = lazy
      if (src) attrs.src = absolutize(unwrapImage(src))
      if (!("alt" in attrs)) attrs.alt = ""
      delete attrs.loading
    }
    if (tag === "video" || tag === "audio" || tag === "iframe" || tag === "embed") {
      const src = el.currentSrc || el.src
      if (src) attrs.src = absolutize(src)
      if (attrs.poster) attrs.poster = absolutize(attrs.poster)
    }
    if (tag === "canvas") {
      try {
        attrs.src = el.toDataURL("image/png")
        attrs.alt = ""
        tag = "img"
      } catch {
        /* tainted canvas — keep an empty box */
      }
    }
    if (tag === "input") {
      if (el.type === "checkbox" || el.type === "radio") {
        if (el.checked) attrs.checked = ""
        else delete attrs.checked
      } else if (el.type !== "password" && el.value) attrs.value = el.value
      else delete attrs.value
    }
    if (tag === "option") {
      if (el.selected) attrs.selected = ""
      else delete attrs.selected
    }
    if (tag === "textarea") {
      delete attrs.value
      children = el.value ? [{ type: "text", text: el.value, pre: true }] : []
    }
    // ::placeholder can't be an inline style: emit one scoped rule when it's restyled.
    if ((tag === "input" || tag === "textarea") && el.placeholder) {
      const ph = getComputedStyle(el, "::placeholder")
      const def = placeholderDefaults(tag)
      const rules = ["color", "opacity", "font-style", "font-weight", "letter-spacing", "text-transform"]
        // color/opacity always: resets restyle placeholders (Tailwind mixes them to 50% currentColor)
        .filter((p) => p === "color" || p === "opacity" || ph.getPropertyValue(p) !== def[p])
        .map((p) => `${p}: ${cleanValue(ph.getPropertyValue(p))}`)
      if (rules.length && ctx.mode === "tw") {
        const map = {}
        for (const p of ["color", "opacity", "font-style", "font-weight", "letter-spacing", "text-transform"]) {
          if (p === "color" || ph.getPropertyValue(p) !== def[p]) map[p] = ph.getPropertyValue(p)
        }
        if (map.opacity === "1") delete map.opacity
        ctx.placeholderClasses = ctx.tw.convert(cleanStyle(map), ph).map((c) => `placeholder:${c}`)
      } else if (rules.length) {
        const id = String(ctx.css.length + 1)
        attrs["data-placeholder"] = id
        ctx.css.push(`[data-placeholder="${id}"]::placeholder { ${rules.join("; ")} }`)
      }
    }

    // TSX: a shadcn component (data-slot, same version as this project's), a plain
    // button/input/… mapped to one, or plain elements — all with exact classes.
    const tw = ctx.mode === "tw"
    const classList = Array.from(el.classList)
    ctx.hints = new Set(classList.map((t) => t.split(":").pop()))
    let slot = tw ? slotComponent(el) : null
    if (slot && !sameVersion(slot, classList, ctx)) slot = null
    const component = slot ? slot.name : tw ? componentFor(tag, el) : null
    const style = diffStyles(cs, parentCS, isRoot, tag, ctx.mode)
    const pseudoInClasses = slot && slot.tokens.some((t) => /(^|:)(before|after):/.test(t))
    const placeholderClasses = ctx.placeholderClasses
    ctx.placeholderClasses = null

    const savedSkip = ctx.skipSlots
    if (slot?.internal.length) ctx.skipSlots = new Set([...savedSkip, ...slot.internal])
    if (tag !== "textarea") {
      const before = pseudoInClasses ? null : capturePseudo(el, "::before", cs, ctx)
      if (before) children.push(before)
      const pre = /pre|break-spaces/.test(cs.whiteSpace)
      for (const node of childNodesOf(el)) {
        if (node.nodeType === Node.TEXT_NODE) {
          let text = node.nodeValue || ""
          if (!pre) text = text.replace(/\s+/g, " ")
          if (text) children.push({ type: "text", text, pre })
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const child = captureEl(node, el, cs, false, ctx)
          if (child) children.push(child)
        }
      }
      const after = pseudoInClasses ? null : capturePseudo(el, "::after", cs, ctx)
      if (after) children.push(after)
    }
    ctx.skipSlots = savedSkip
    if (slot?.icons.length) children = children.filter((c) => !isInternalIcon(c, slot.icons))

    const hasText = children.some((c) => c.type === "text" && c.text.trim())
    const hasEls = children.some((c) => c.type === "el")
    Object.assign(style, sizeStyles(el, cs, parentEl, parentCS, isRoot, hasText || hasEls, hasText && !hasEls, ctx.mode))
    if (tw) twNormalize(style, cs)
    // A reset may switch box-sizing; whenever a size is written, say which box it measures.
    if (!tw && (style.width || style.height || style["min-height"] || style["max-width"])) style["box-sizing"] = cs.boxSizing

    const heuristic = component && !slot
    if (heuristic) {
      if (component === "Separator") for (const k of Object.keys(style)) if (!k.startsWith("margin-")) delete style[k]
      for (const p of COMPONENTS[component].pin) style[p] = cs.getPropertyValue(p)
    }
    if (tw) toBorderBox(style, cs)

    const node = { type: "el", tag, attrs, children, svg: false, inline: cs.display.startsWith("inline"), flow: /flex|grid/.test(cs.display) }
    if (slot) {
      // The component draws itself. Keep the site's extra classes that mean the same here;
      // replace the others (and inline styles) with exact computed values.
      const extra = []
      const replace = new Set()
      for (const t of classList) {
        if (slot.tokenSet.has(t) || /(^|:)(before|after):/.test(t)) continue
        if (ctx.page.isTailwind && ctx.page.portable(t)) extra.push(t)
        else if (!ctx.page.isVariant(t)) ctx.page.propertiesOf(t).forEach((p) => replace.add(p))
      }
      for (let i = 0; i < el.style.length; i++) replace.add(el.style[i])
      const fix = {}
      for (const p of replace) for (const lp of longhands(p)) fix[lp] = cs.getPropertyValue(lp)
      node.classes = [...ctx.tw.convert(cleanStyle(fix), cs), ...extra]
      node.style = {}
    } else {
      finishStyle(node, style, cs, ctx)
      if (tw) {
        node._extras = siteExtras(classList, node.classes, ctx, cs)
        node.classes.push(...node._extras)
        // For the responsive pass: this element's style here, and how to find it again.
        if (!heuristic) node._resp = { path: domPath(el), style: cleanStyle(style), cs, isRoot, tag: el.localName, hasContent: hasText || hasEls, textOnly: hasText && !hasEls, hints: ctx.hints }
      }
    }
    if (placeholderClasses) {
      node._ph = placeholderClasses.filter((c) => !node.classes.includes(c))
      node.classes.push(...node._ph)
    }

    if (slot) {
      node.component = slot.name
      node.props = [...Object.entries(detectVariants(slot, el, new Set(classList))).map(([k, v]) => `${k}="${v}"`), ...stateProps(slot, el)]
      for (const k of Object.keys(node.attrs)) {
        if (k === "role" || k === "tabindex" || (k.startsWith("aria-") && k !== "aria-label") || k === "disabled") delete node.attrs[k]
      }
      if (node.attrs.type === "button") delete node.attrs.type
      // base-ui keeps the form id on a hidden <input> next to the control; put it on the component.
      const hidden = [el.nextElementSibling, el.querySelector("input")].find((x) => x?.localName === "input" && x.getAttribute("aria-hidden") === "true" && x.id)
      if (!node.attrs.id && hidden && ctx.referencedIds.has(hidden.id)) node.attrs.id = hidden.id
      if (tag === "a" && node.attrs.href) {
        // base-ui: render the component as a Next.js link
        node.props.push(`render={<Link href=${jsxString(linkHref(node.attrs.href))} />}`)
        if (slot.name === "Button") node.props.push("nativeButton={false}")
        addImport(ctx, "next/link", "default:Link")
        delete node.attrs.href
      }
      addImport(ctx, `${UI_IMPORT}/${slot.file}`, slot.name)
      ctx.stats.components++
    } else if (component) {
      node.component = component
      addImport(ctx, `${UI_IMPORT}/${COMPONENTS[component].file}`, component)
      ctx.stats.components++
      if (component === "Button") {
        const variant = buttonVariant(node.classes, cs)
        if (variant) node.attrs = { variant, ...node.attrs }
      }
      if (component === "Separator") node.children = []
      if (component === "Input" || component === "Textarea") {
        // shadcn inputs shrink their text at md: (`md:text-sm`); pin ours there too.
        const size = node.classes.find((c) => /^text-(xs|sm|base|lg|\d?xl|\[[\d.]+px\])(\/|$)/.test(c))
        if (size) node.classes.push(`md:${size}`)
      }
    } else if (tw && tag === "a" && node.attrs.href) {
      node.component = "Link"
      node.attrs.href = linkHref(node.attrs.href)
      addImport(ctx, "next/link", "default:Link")
    } else if (tw && tag === "img" && node.attrs.src && !node.attrs.src.startsWith("data:")) {
      // next/image needs the intrinsic size; use the rendered one.
      const r = el.getBoundingClientRect()
      node.component = "Image"
      node.props = [`width={${Math.round(r.width) || el.naturalWidth || 1}}`, `height={${Math.round(r.height) || el.naturalHeight || 1}}`]
      delete node.attrs.width
      delete node.attrs.height
      // The image lives on the copied site, not in your app: keep its absolute URL, and mark it
      // unoptimized so it works without images.remotePatterns / localPatterns config.
      try {
        ctx.imageHosts.add(new URL(node.attrs.src).hostname)
      } catch {
        /* not a URL */
      }
      node.props.push("unoptimized")
      addImport(ctx, "next/image", "default:Image")
    }
    return node
  }

  // Element-child indices from <html> down to el (to find the same element in another copy of the page).
  function domPath(el) {
    const path = []
    for (let e = el; e && e.parentElement; e = e.parentElement) path.unshift([...e.parentElement.children].indexOf(e))
    return path
  }
  function byPath(doc, path) {
    let e = doc.documentElement
    for (const i of path) {
      e = e?.children[i]
      if (!e) return null
    }
    return e
  }

  /* ---------------------- responsive (TSX) ---------------------- */
  // The page is loaded again in hidden iframes at the project's breakpoint widths.
  // Each element's real computed style there becomes the base (mobile) classes and
  // sm:/md:/lg:… overrides — the site's actual responsive behaviour, from any CSS.

  const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"]
  const MOBILE_WIDTH = 375
  const SIZE_DEFAULT = { width: "auto", height: "auto", "min-width": "auto", "min-height": "auto", "max-width": "none", "max-height": "none" }

  function breakpointWidths() {
    const t = globalThis.__copycodeTailwind.target()
    return BREAKPOINTS.map((name) => ({ name, width: parseFloat(t.resolve("width", `var(--breakpoint-${name})`)) || 0 })).filter((b) => b.width > 0)
  }

  // Widths where the site's own CSS changes (@media min-width / max-width), in px.
  function siteBreakpoints() {
    const rootPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
    const out = new Set()
    const toPx = (n, unit) => (unit === "px" ? +n : +n * rootPx)
    const visit = (list) => {
      for (const r of list) {
        const c = r.conditionText || r.media?.mediaText || ""
        for (const m of c.matchAll(/(?:min-width:\s*|width\s*>=\s*)([\d.]+)(px|rem|em)/g)) out.add(Math.round(toPx(m[1], m[2])))
        for (const m of c.matchAll(/(?:width\s*>\s*)([\d.]+)(px|rem|em)/g)) out.add(Math.round(toPx(m[1], m[2]) + 1))
        // desktop-first: (max-width: 767px) / (width < 768px) change at the next pixel
        for (const m of c.matchAll(/(?:max-width:\s*)([\d.]+)(px|rem|em)/g)) out.add(Math.round(toPx(m[1], m[2]) + 1))
        for (const m of c.matchAll(/(?:width\s*<\s*)([\d.]+)(px|rem|em)/g)) out.add(Math.round(toPx(m[1], m[2])))
        if (r.cssRules) visit(r.cssRules)
      }
    }
    for (const sheet of document.styleSheets) {
      try {
        visit(sheet.cssRules)
      } catch {
        /* cross-origin */
      }
    }
    return [...out]
  }

  function loadFrame(width) {
    return new Promise((resolve) => {
      const frame = document.createElement("iframe")
      frame.setAttribute("aria-hidden", "true")
      frame.tabIndex = -1
      frame.style.cssText = `position:fixed!important;left:-${width + 1000}px!important;top:0!important;width:${width}px!important;height:${innerHeight}px!important;border:0!important;opacity:0!important;pointer-events:none!important;`
      let done = false
      const finish = (ok) => {
        if (done) return
        done = true
        clearTimeout(timer)
        resolve(ok ? frame : (frame.remove(), null))
      }
      const timer = setTimeout(() => finish(false), 12000)
      frame.addEventListener("load", async () => {
        try {
          const doc = frame.contentDocument
          if (!doc || doc.location.href !== location.href) return finish(false) // blocked or redirected
          await doc.fonts?.ready
          await new Promise((r) => setTimeout(r, 400)) // let client-side rendering settle
          finish(true)
        } catch {
          finish(false)
        }
      })
      frame.src = location.href
      document.documentElement.appendChild(frame)
    })
  }

  async function applyResponsive(tree, ctx, onProgress) {
    const nodes = []
    const walk = (n) => {
      if (n.type !== "el") return
      if (n._resp) nodes.push(n)
      n.children.forEach(walk)
    }
    walk(tree)
    if (!nodes.length) return { breakpoints: [] }
    // Where to look: the project's breakpoints (sm, md…) plus the site's own (as min-[…]).
    const named = breakpointWidths()
    const points = new Map(named.map((b) => [b.width, b.name]))
    for (const w of siteBreakpoints()) {
      if (w > MOBILE_WIDTH && w <= innerWidth && ![...points.keys()].some((k) => Math.abs(k - w) <= 1)) points.set(w, `min-[${w}px]`)
    }
    const bps = [...points.entries()].map(([width, name]) => ({ width, name })).sort((a, b) => a.width - b.width).filter((b) => b.width <= innerWidth)
    const current = bps[bps.length - 1]
    if (!current) return { breakpoints: [] } // already copying at mobile width
    // Keep the number of page loads reasonable: the nearest 8 points below the current width.
    const samples = [{ name: null, width: MOBILE_WIDTH }, ...bps.slice(0, -1).slice(-8)]
    let loadedCount = 0
    onProgress?.({ step: `Loading breakpoints 0/${samples.length}`, part: 0 })
    const frames = await Promise.all(
      samples.map((s) =>
        loadFrame(s.width).then((f) => {
          loadedCount++
          onProgress?.({ step: `Loading breakpoints ${loadedCount}/${samples.length} · ${s.name || "mobile"}`, part: loadedCount / samples.length })
          return f
        })
      )
    )
    onProgress?.({ step: "Measuring each breakpoint", part: 1 })
    await nextFrame()
    try {
      const loaded = samples.map((s, i) => ({ ...s, frame: frames[i] })).filter((s) => s.frame)
      if (!loaded.length) return { breakpoints: [], failed: true }
      for (const node of nodes) {
        const r = node._resp
        // Style maps from narrow to wide; the live page is the widest.
        const maps = []
        for (const s of loaded) {
          const el2 = byPath(s.frame.contentDocument, r.path)
          if (!el2 || el2.localName !== r.tag) continue
          const cs2 = s.frame.contentWindow.getComputedStyle(el2)
          const p2 = el2.parentElement
          const pcs2 = p2 ? s.frame.contentWindow.getComputedStyle(p2) : null
          // Hidden at this width: keep its styling (shown later by sm:/md:…) and add display: none.
          const style = diffStyles(cs2, pcs2, r.isRoot, r.tag, "tw")
          if (cs2.display !== "none") Object.assign(style, sizeStyles(el2, cs2, p2, pcs2, r.isRoot, r.hasContent, r.textOnly, "tw"))
          toBorderBox(style, cs2)
          twNormalize(style, cs2)
          maps.push({ name: s.name, style: cleanStyle(style), cs: cs2 })
        }
        if (!maps.length) continue
        maps.push({ name: current.name, style: r.style, cs: r.cs })
        const valueAt = (m, p) => m.style[p] ?? (p in SIZE_DEFAULT ? SIZE_DEFAULT[p] : cleanValue(m.cs.getPropertyValue(p)))
        const hints = { hints: r.hints }
        const classes = ctx.tw.convert(maps[0].style, maps[0].cs, hints)
        const seen = new Set(Object.keys(maps[0].style))
        for (let i = 1; i < maps.length; i++) {
          const changed = {}
          for (const p of Object.keys(maps[i].style)) seen.add(p)
          for (const p of seen) {
            const before = valueAt(maps[i - 1], p), now = valueAt(maps[i], p)
            if (before !== now) changed[p] = now
          }
          if (Object.keys(changed).length) classes.push(...ctx.tw.convert(changed, maps[i].cs, hints).map((c) => `${maps[i].name}:${c}`))
        }
        // The site's own breakpoint classes are now covered; keep its state variants (hover:, focus:…).
        const extras = (node._extras || []).filter((t) => !/(^|:)(sm|md|lg|xl|2xl|max-\w+|min-\[[^\]]+\]|max-\[[^\]]+\]):/.test(t))
        node.classes = [...new Set([...classes, ...extras, ...(node._ph || [])])]
      }
      return { breakpoints: loaded.filter((s) => s.name).map((s) => s.name).concat(current.name) }
    } finally {
      frames.forEach((f) => f?.remove())
    }
  }

  // Same-site links become app routes ("/pricing"); others stay absolute.
  function linkHref(href) {
    try {
      const u = new URL(href, location.href)
      return u.origin === location.origin ? u.pathname + u.search + u.hash : u.href
    } catch {
      return href
    }
  }

  function capturePseudo(el, which, cs, ctx) {
    const ps = getComputedStyle(el, which)
    const content = ps.content
    if (!content || content === "none" || content === "normal" || ps.display === "none") return null
    let text = ""
    const m = content.match(/^"((?:[^"\\]|\\.)*)"$/s)
    if (m) text = m[1].replace(/\\(.)/g, "$1")
    const style = diffStyles(ps, cs, false, "span", ctx.mode)
    if (ps.display !== "inline" && (!text || ps.position === "absolute" || ps.position === "fixed")) {
      style.width = ps.width
      style.height = ps.height
    }
    const node = {
      type: "el",
      tag: "span",
      attrs: { "aria-hidden": "true" },
      children: text ? [{ type: "text", text, pre: false }] : [],
      svg: false,
      inline: ps.display.startsWith("inline"),
    }
    if (ctx.mode === "tw") toBorderBox(style, ps)
    return finishStyle(node, style, ps, ctx)
  }

  function captureSvg(el, parentCS, isRoot, ctx, extraDefs) {
    if (++ctx.count > MAX_NODES) {
      ctx.truncated = true
      return null
    }
    const tag = el.localName
    if (tag === "script" || tag === "style") return null
    const cs = getComputedStyle(el)
    if (cs.display === "none") return null
    const isSvgRoot = tag === "svg" && !(el.parentElement instanceof SVGElement)

    const attrs = {}
    for (const { name, value } of Array.from(el.attributes)) {
      if (name === "class" || name === "style" || name.startsWith("on") || name.startsWith("data-")) continue
      attrs[name] = value
    }
    if (isSvgRoot) attrs.xmlns = SVG_NS

    const style = {}
    const def = getDefaults(tag, true, ctx.mode)
    for (const p of SVG_PROPS) {
      const v = cs.getPropertyValue(p)
      if (!v) continue
      if (el.hasAttribute(p)) {
        // Keep the attribute unless CSS overrides it.
        const a = el.getAttribute(p).trim()
        const same = a === v || (a.toLowerCase() === "currentcolor" && v === cs.color) || (!Number.isNaN(parseFloat(a)) && parseFloat(a) === parseFloat(v))
        if (!same) style[p] = v
        continue
      }
      const compareTo = isSvgRoot || !parentCS ? def[p] : parentCS.getPropertyValue(p)
      if (v !== compareTo) style[p] = v
    }
    if (isSvgRoot) {
      style.width = cs.width
      style.height = cs.height
      const color = cs.getPropertyValue("color")
      if (isRoot || !parentCS || parentCS.getPropertyValue("color") !== color) style.color = color
      const svgDef = getDefaults("svg", true, ctx.mode)
      for (const p of ["display", "flex-shrink", "vertical-align", "transform", "opacity", "overflow"]) {
        const v = cs.getPropertyValue(p)
        const d = svgDef[p]
        if (!v || v === d) continue
        if (p === "display" && parentCS && /flex|grid/.test(parentCS.display) && v === blockify(d)) continue
        style[p] = v
      }
      if (!isRoot) {
        for (const p of ["margin-top", "margin-right", "margin-bottom", "margin-left"]) {
          const v = cs.getPropertyValue(p)
          if (v && v !== "0px") style[p] = v
        }
      }
    }

    const children = []
    const defs = isSvgRoot ? new Set() : extraDefs
    for (const node of Array.from(el.childNodes)) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.nodeValue && node.nodeValue.trim()) children.push({ type: "text", text: node.nodeValue, pre: false })
      } else if (node instanceof SVGElement) {
        const child = captureSvg(node, cs, false, ctx, defs)
        if (child) children.push(child)
      }
    }

    // <use href="#sprite"> pointing outside this <svg>: bring the target along.
    if (tag === "use" && defs) {
      const ref = el.getAttribute("href") || el.getAttribute("xlink:href") || ""
      if (ref.startsWith("#")) defs.add(ref.slice(1))
    }
    if (isSvgRoot && defs.size) {
      const defChildren = []
      for (const id of defs) {
        const target = document.getElementById(id)
        if (!target || el.contains(target)) continue
        const captured = captureSvg(target, cs, false, ctx, new Set())
        if (captured) defChildren.push(captured)
      }
      if (defChildren.length) children.unshift({ type: "el", tag: "defs", attrs: {}, style: {}, classes: [], children: defChildren, svg: true })
    }

    const node = { type: "el", tag, attrs, children, svg: true, inline: !isSvgRoot || cs.display.startsWith("inline") }

    // lucide icons → <ArrowRightIcon /> from lucide-react
    const lucide = ctx.mode === "tw" && isSvgRoot && [...el.classList].find((c) => /^lucide-[a-z0-9-]+$/.test(c))
    if (lucide) {
      const name = `${pascal(lucide.slice(7))}Icon`
      node.component = name
      node.lucide = lucide
      node.children = []
      node.attrs = el.getAttribute("aria-label") ? { "aria-label": el.getAttribute("aria-label") } : {}
      node.props = []
      const sw = style["stroke-width"] || el.getAttribute("stroke-width")
      if (sw && parseFloat(sw) !== 2) node.props.push(`strokeWidth={${parseFloat(sw)}}`)
      delete style["stroke-width"]
      delete style.fill
      delete style.stroke
      addImport(ctx, "lucide-react", name)
    }
    return finishStyle(node, style, cs, ctx)
  }

  /* ------------------------------------------------------------------ */
  /* Serializers                                                         */
  /* ------------------------------------------------------------------ */

  const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"])
  const escText = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  const escAttr = (t) => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
  const cssText = (style) => Object.entries(compact(style)).map(([k, v]) => `${k}: ${v}`).join("; ")

  // An element is printed on one line when whitespace inside it is meaningful:
  // it has real text, or spaces separating inline children (`<a>x</a> <a>y</a>`).
  const hasInlineText = (node) =>
    node.children.some((c) => c.type === "text" && c.text.trim()) ||
    // (flex and grid containers don't render whitespace between children)
    (!node.flow && node.children.some((c) => c.type === "text") && node.children.some((c) => c.type === "el" && c.inline))
  const visibleChildren = (node, inline) =>
    inline ? node.children : node.children.filter((c) => c.type !== "text" || c.text.trim() || c.pre)

  // HTML / XHTML (XHTML is used inside the SVG foreignObject)
  function toHTML(node, depth, xml, inline = false) {
    const pad = inline ? "" : "  ".repeat(depth)
    if (node.type === "text") return pad + escText(node.text)
    const attrs = Object.entries(node.attrs)
      .map(([k, v]) => (v === "" && !xml ? ` ${k}` : ` ${k}="${escAttr(v)}"`))
      .join("")
    const css = cssText(node.style)
    const open = `<${node.tag}${attrs}${css ? ` style="${escAttr(css)}"` : ""}`
    const oneLine = inline || hasInlineText(node)
    const kids = visibleChildren(node, oneLine)
    if (!node.svg && VOID.has(node.tag)) return `${pad}${open}${xml ? " />" : ">"}`
    if (!kids.length) return node.svg || xml ? `${pad}${open} />` : `${pad}${open}></${node.tag}>`
    if (oneLine) return `${pad}${open}>${kids.map((c) => toHTML(c, 0, xml, true)).join("")}</${node.tag}>`
    return `${pad}${open}>\n${kids.map((c) => toHTML(c, depth + 1, xml)).join("\n")}\n${pad}</${node.tag}>`
  }

  // JSX / TSX
  const JSX_ATTR = {
    class: "className", for: "htmlFor", tabindex: "tabIndex", colspan: "colSpan",
    rowspan: "rowSpan", readonly: "readOnly", maxlength: "maxLength",
    minlength: "minLength", autocomplete: "autoComplete", autoplay: "autoPlay",
    playsinline: "playsInline", inputmode: "inputMode", datetime: "dateTime",
    crossorigin: "crossOrigin", srcset: "srcSet", novalidate: "noValidate",
    value: "defaultValue", checked: "defaultChecked", "xlink:href": "xlinkHref",
    "xml:space": "xmlSpace", "xmlns:xlink": "xmlnsXlink", "xml:lang": "xmlLang",
  }
  const camel = (s) => s.replace(/[-:]([a-z])/g, (_, c) => c.toUpperCase())

  function jsxAttrName(name, svg, tag) {
    if ((name === "value" || name === "checked") && tag !== "input") return name
    if (JSX_ATTR[name]) return JSX_ATTR[name]
    if (name.startsWith("aria-") || name.startsWith("data-")) return name
    if (svg || name.includes(":")) return camel(name)
    return name
  }

  function styleKey(prop) {
    if (prop.startsWith("--")) return JSON.stringify(prop)
    if (prop.startsWith("-webkit-")) return "Webkit" + camel(prop.slice(8)).replace(/^./, (c) => c.toUpperCase())
    return camel(prop)
  }

  function escJSXText(t) {
    return t
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/[{}]/g, (c) => `{"${c}"}`)
  }

  const jsxString = (v) => (/["\\\n]/.test(v) ? `{${JSON.stringify(v)}}` : `"${v}"`)

  function toJSX(node, depth, inline = false, rootClass = null) {
    const pad = inline ? "" : "  ".repeat(depth)
    if (node.type === "text") {
      if (node.pre) return pad + "{`" + node.text.replace(/[`\\]/g, "\\$&").replace(/\$\{/g, "\\${") + "`}"
      return pad + escJSXText(node.text)
    }
    const tag = node.component || node.tag
    const parts = []
    const classes = (node.classes || []).join(" ")
    if (rootClass !== null) parts.push(typeof rootClass === "function" ? rootClass(classes) : rootClass)
    else if (classes) parts.push(`className=${jsxString(classes)}`)
    if (node.props) parts.push(...node.props)

    const oneLine = inline || hasInlineText(node)
    const kids = visibleChildren(node, oneLine)
    for (const [k, v] of Object.entries(node.attrs)) {
      if (node.tag === "textarea" && k === "value") continue
      const name = jsxAttrName(k, node.svg, node.tag)
      if (v === "" && BOOL_ATTRS.has(k)) parts.push(name)
      else parts.push(`${name}=${jsxString(v)}`)
    }
    if (node.tag === "textarea" && kids.length) {
      parts.push(`defaultValue={${JSON.stringify(kids.map((k) => k.text).join(""))}}`)
      kids.length = 0
    }

    const entries = Object.entries(compact(node.style || {}))
    const styleInline = entries.length
      ? `style={{ ${entries.map(([k, v]) => `${styleKey(k)}: ${JSON.stringify(v)}`).join(", ")} }}`
      : ""
    const singleLine = `${pad}<${tag}${parts.length || styleInline ? " " : ""}${[...parts, styleInline].filter(Boolean).join(" ")}`
    const multiline = !inline && (entries.length > 3 || singleLine.length > 100)

    let open
    if (multiline) {
      if (entries.length) {
        const inner = entries.map(([k, v]) => `${pad}    ${styleKey(k)}: ${JSON.stringify(v)},`).join("\n")
        parts.push(entries.length > 3 ? `style={{\n${inner}\n${pad}  }}` : styleInline)
      }
      open = `${pad}<${tag}\n${parts.map((p) => `${pad}  ${p}`).join("\n")}\n${pad}`
    } else open = singleLine

    if (!kids.length) return `${open}${multiline ? "" : " "}/>`
    if (oneLine) return `${open}>${kids.map((c) => toJSX(c, 0, true)).join("")}</${tag}>`
    return `${open}>\n${kids.map((c) => toJSX(c, depth + 1)).join("\n")}\n${pad}</${tag}>`
  }

  function toComponent(tree, name, typed) {
    const body = toJSX(tree, 2, false, "className={className}")
    const props = typed ? "{ className }: { className?: string }" : "{ className }"
    return `export default function ${name}(${props}) {\n  return (\n${body}\n  )\n}\n`
  }

  // Next.js + shadcn/ui + Tailwind component.
  function toNextComponent(tree, name, ctx) {
    let usesCn = false
    const body = toJSX(tree, 2, false, (classes) => {
      if (!classes) return "className={className}"
      usesCn = true
      return `className={cn(${JSON.stringify(classes)}, className)}`
    })
    const order = (from) => (from.startsWith("next/") ? 0 : from.startsWith(UI_IMPORT) ? 2 : 1)
    const imports = [...ctx.imports.entries()]
      .sort(([a], [b]) => order(a) - order(b) || a.localeCompare(b))
      .map(([from, names]) => {
        const list = [...names]
        const def = list.find((n) => n.startsWith("default:"))?.slice(8)
        const named = list.filter((n) => !n.startsWith("default:")).sort()
        return `import ${[def, named.length ? `{ ${named.join(", ")} }` : ""].filter(Boolean).join(", ")} from "${from}"`
      })
    if (usesCn) imports.push(`import { cn } from "${UTILS_IMPORT}"`)
    const fonts = new Set()
    const findFonts = (n) => {
      if (n.type !== "el") return
      for (const c of n.classes || []) {
        const m = /(?:^|:)font-\[family-name:([^\],]+)/.exec(c)
        const name = m && m[1].replace(/['\\]/g, "").replace(/_/g, " ")
        if (name && !GENERIC_FONTS.test(name) && !/^-apple-system|BlinkMacSystemFont$/i.test(name)) fonts.add(name)
      }
      n.children.forEach(findFonts)
    }
    findFonts(tree)
    const notes =
      (fonts.size ? `// Fonts: ${[...fonts].join(", ")} — load them in your app (e.g. next/font/google) so they render the same.\n` : "") +
      (ctx.imageHosts.size
        ? `// Images load from ${[...ctx.imageHosts].join(", ")}. To optimize them, add the host(s) to images.remotePatterns in next.config and remove \`unoptimized\` — or copy the files into /public.\n`
        : "")
    return `${notes}${imports.join("\n")}${imports.length ? "\n\n" : ""}export function ${name}({ className }: { className?: string }) {\n  return (\n${body}\n  )\n}\n`
  }

  // TSX with responsive classes (loads the page at other widths).
  async function generateTSX(el, onProgress) {
    const { tree, ctx } = capture(el, "tw")
    if (!tree) throw new Error("Nothing visible to copy here")
    const responsive = await applyResponsive(tree, ctx, onProgress)
    let name = componentName(el)
    const imported = new Set([...ctx.imports.values()].flatMap((n) => [...n].map((x) => x.replace(/^default:/, ""))))
    if (imported.has(name)) name = `Copied${name}`
    return { code: toNextComponent(tree, name, ctx), name, nodes: Math.min(ctx.count, MAX_NODES), truncated: ctx.truncated, stats: ctx.stats, responsive }
  }

  function generate(el, format) {
    const mode = format === "tsx" ? "tw" : "css"
    const { tree, ctx } = capture(el, mode)
    if (!tree) throw new Error("Nothing visible to copy here")
    let name = componentName(el)
    const imported = new Set([...ctx.imports.values()].flatMap((n) => [...n].map((x) => x.replace(/^default:/, ""))))
    if (imported.has(name)) name = `Copied${name}`
    let code
    if (format === "html") code = toHTML(tree, 0, false) + "\n"
    else if (format === "jsx") code = toComponent(tree, name, false)
    else code = toNextComponent(tree, name, ctx)
    return { code, name, nodes: Math.min(ctx.count, MAX_NODES), truncated: ctx.truncated, stats: ctx.stats }
  }

  // Vector SVG for design tools (vector.js). Async: images are embedded.
  async function generateSVG(el, onProgress) {
    const svg = await globalThis.__copycodeVector.toSVG(el, { exclude: host, onProgress })
    return { code: svg, name: componentName(el), nodes: el.querySelectorAll("*").length + 1, truncated: false }
  }

  /* ------------------------------------------------------------------ */
  /* Clipboard and screenshots                                           */
  /* ------------------------------------------------------------------ */

  const supports = (type) => (typeof ClipboardItem.supports === "function" ? ClipboardItem.supports(type) : /^(text\/plain|text\/html|image\/png)$/.test(type))

  // Write several representations at once; every app picks the one it reads
  // (editors: text/plain, Paper: text/html, Figma: SVG markup, image apps: image/png).
  // Promises inside the ClipboardItem keep the click's user activation while data is built.
  async function writeClipboard(parts) {
    const items = {}
    for (const [type, promise] of Object.entries(parts)) if (promise && supports(type)) items[type] = promise
    try {
      await navigator.clipboard.write([new ClipboardItem(items)])
    } catch (err) {
      // Some types may be refused: retry with the essentials only.
      const essential = {}
      for (const t of ["text/plain", "image/png"]) if (items[t]) essential[t] = items[t]
      if (!Object.keys(essential).length || Object.keys(essential).length === Object.keys(items).length) throw err
      await navigator.clipboard.write([new ClipboardItem(essential)])
    }
  }
  const textBlob = (type, promise) => Promise.resolve(promise).then((t) => new Blob([t], { type }))

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      const ta = document.createElement("textarea")
      ta.value = text
      ta.style.cssText = "position:fixed;top:-1000px;opacity:0"
      document.documentElement.appendChild(ta)
      ta.select()
      const ok = document.execCommand("copy")
      ta.remove()
      return ok
    }
  }

  const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()))

  // The block as pixels: a screenshot of the tab, cropped. Returns a canvas.
  async function screenshot(el) {
    let rect = el.getBoundingClientRect()
    if (rect.top < 0 || rect.left < 0 || rect.bottom > innerHeight || rect.right > innerWidth) {
      el.scrollIntoView({ block: rect.height > innerHeight ? "start" : "center", inline: "nearest" })
      await nextFrame()
      rect = el.getBoundingClientRect()
    }
    host.style.visibility = "hidden"
    await nextFrame()
    await nextFrame()
    let response
    try {
      response = await chrome.runtime.sendMessage({ type: "copycode:capture" })
    } finally {
      host.style.visibility = ""
    }
    if (!response?.dataUrl) throw new Error(response?.error || "Screenshot failed")
    const img = new Image()
    img.src = response.dataUrl
    await img.decode()
    const scale = img.naturalWidth / innerWidth
    const x = Math.max(0, rect.left), y = Math.max(0, rect.top)
    const w = Math.min(innerWidth, rect.right) - x
    const h = Math.min(innerHeight, rect.bottom) - y
    if (w <= 0 || h <= 0) throw new Error("Block isn't visible on screen")
    const canvas = document.createElement("canvas")
    canvas.width = Math.round(w * scale)
    canvas.height = Math.round(h * scale)
    canvas.getContext("2d").drawImage(img, x * scale, y * scale, w * scale, h * scale, 0, 0, canvas.width, canvas.height)
    return { canvas, cropped: rect.width > w + 1 || rect.height > h + 1 }
  }
  const canvasBlob = (canvas, type, quality) => new Promise((r) => canvas.toBlob(r, type, quality))

  /* ------------------------------------------------------------------ */
  /* Toolbar UI                                                          */
  /* ------------------------------------------------------------------ */

  const ICON = {
    logo: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/><path d="M13.5 4l-3 16"/></svg>`,
    cursor: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l7 17 2.5-7.5L21 11z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>`,
    image: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-9 9"/></svg>`,
    close: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
    check: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,
    spinner: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 3a9 9 0 1 0 9 9"/></svg>`,
    alert: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 7v6M12 17h.01"/></svg>`,
  }

  const FORMAT_INFO = {
    code: { tsx: "Next.js · shadcn/ui · Tailwind", html: "HTML with inline styles", svg: "SVG code (vector)" },
    image: { png: "PNG image", jpg: "JPG image (opaque)", svg: "SVG vector image" },
  }

  const CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; }
    .root {
      --bg: rgba(18, 18, 20, 0.94); --fg: #f4f4f5; --muted: #a1a1aa;
      --line: rgba(255, 255, 255, 0.09); --hover: rgba(255, 255, 255, 0.08);
      --accent: #3b82f6; --ok: #22c55e; --err: #ef4444;
      font: 500 12px/1 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      color: var(--fg); -webkit-font-smoothing: antialiased;
    }
    .bar {
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      display: flex; align-items: center; gap: 6px; padding: 6px;
      background: var(--bg); border: 1px solid var(--line); border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,.35), 0 1px 0 rgba(255,255,255,.04) inset;
      backdrop-filter: blur(14px) saturate(1.4); -webkit-backdrop-filter: blur(14px) saturate(1.4);
      pointer-events: auto; user-select: none; z-index: 3;
      animation: bar-in .16s cubic-bezier(.2,.8,.2,1);
    }
    @keyframes bar-in { from { opacity: 0; transform: translate(-50%, -6px) scale(.98); } }
    .brand { display: flex; align-items: center; gap: 6px; padding: 0 8px 0 6px; height: 28px; cursor: grab; font-weight: 600; letter-spacing: -.01em; }
    .brand:active { cursor: grabbing; }
    .brand svg { color: var(--accent); }
    .seg { display: flex; padding: 2px; gap: 2px; background: rgba(255,255,255,.05); border-radius: 8px; }
    button {
      all: unset; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
      height: 26px; padding: 0 10px; border-radius: 6px; cursor: pointer; color: var(--muted);
      font: inherit; white-space: nowrap; transition: background .12s, color .12s;
    }
    button:hover { background: var(--hover); color: var(--fg); }
    button:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
    .seg button[aria-pressed="true"] { background: var(--fg); color: #09090b; }
    .formats button { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; letter-spacing: .02em; min-width: 42px; }
    .pick[aria-pressed="true"] { background: rgba(59,130,246,.18); color: #93c5fd; }
    .sep { width: 1px; height: 18px; background: var(--line); margin: 0 2px; }
    .icon { width: 28px; padding: 0; }
    .hint {
      position: fixed; top: 60px; left: 50%; transform: translateX(-50%);
      padding: 6px 10px; border-radius: 8px; background: var(--bg); border: 1px solid var(--line);
      color: var(--muted); font-size: 11px; white-space: nowrap; pointer-events: none;
      transition: opacity .2s; z-index: 2;
    }
    .hint kbd { font: inherit; color: var(--fg); padding: 1px 4px; border-radius: 4px; background: rgba(255,255,255,.08); }
    .hl {
      position: fixed; pointer-events: none; border: 1.5px solid var(--accent);
      background: rgba(59,130,246,.08); border-radius: 2px; display: none; z-index: 1;
      transition: top .06s, left .06s, width .06s, height .06s;
    }
    .hl.ok { border-color: var(--ok); background: rgba(34,197,94,.14); }
    .tag {
      position: absolute; left: -1.5px; bottom: 100%; margin-bottom: 4px; padding: 4px 6px;
      border-radius: 4px; background: var(--accent); color: #fff; white-space: nowrap;
      font: 600 11px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    }
    .hl.below .tag { bottom: auto; top: 100%; margin: 4px 0 0; }
    .hl.ok .tag { background: var(--ok); }
    .tag span { opacity: .75; font-weight: 500; }
    .toast {
      position: fixed; bottom: 24px; left: 50%; transform: translate(-50%, 12px) scale(.98); opacity: 0;
      display: flex; align-items: center; gap: 12px; padding: 10px 10px 10px 12px; min-width: 300px;
      background: var(--bg); border: 1px solid var(--line); border-radius: 14px;
      box-shadow: 0 18px 50px rgba(0,0,0,.45);
      backdrop-filter: blur(14px) saturate(1.4); -webkit-backdrop-filter: blur(14px) saturate(1.4);
      pointer-events: none; z-index: 4;
      transition: opacity .2s, transform .25s cubic-bezier(.2,.8,.2,1);
    }
    .toast.show { opacity: 1; transform: translate(-50%, 0) scale(1); pointer-events: auto; }
    .toast .badge {
      flex: none; width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center;
      background: rgba(34,197,94,.16); color: var(--ok);
    }
    .toast.err .badge { background: rgba(239,68,68,.16); color: var(--err); }
    .toast .text { display: flex; flex-direction: column; gap: 4px; margin-right: auto; }
    .toast .title { font-size: 13px; font-weight: 600; color: var(--fg); }
    .toast .detail { font-size: 11px; color: var(--muted); }
    .toast .x { width: 28px; padding: 0; }
    .toast { overflow: hidden; }
    .toast .progress { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: rgba(255,255,255,.06); display: none; }
    .toast .progress i { display: block; height: 100%; width: 0; background: var(--accent); border-radius: 0 2px 2px 0; transition: width .25s ease; }
    .toast.busy .progress { display: block; }
    .toast.busy .badge { background: rgba(59,130,246,.16); color: #93c5fd; }
    .toast.busy .badge svg { animation: spin .8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .toast .pct { font-variant-numeric: tabular-nums; color: var(--muted); font-size: 11px; min-width: 30px; text-align: right; }
    .toast:not(.busy) .pct { display: none; }
  `

  let host, shadow, ui
  let tab = "code"
  const formats = { code: "tsx", image: "png" }
  let picking = false
  let current = null // hovered element
  let trail = [] // elements visited via ArrowUp, for ArrowDown
  let toastTimer = 0

  function buildUI() {
    host = document.createElement("copycode-root")
    host.style.cssText = "all:initial;position:fixed;inset:0;z-index:2147483647;pointer-events:none;"
    shadow = host.attachShadow({ mode: "closed" })
    shadow.innerHTML = `
      <style>${CSS}</style>
      <div class="root">
        <div class="bar" role="toolbar" aria-label="CopyCode">
          <div class="brand" title="Drag to move">${ICON.logo}CopyCode</div>
          <div class="seg tabs" role="tablist" aria-label="Copy as">
            <button data-tab="code" role="tab" title="Copy code (C)">${ICON.code}Code</button>
            <button data-tab="image" role="tab" title="Copy an image (I)">${ICON.image}Image</button>
          </div>
          <div class="seg formats" role="group" aria-label="Format"></div>
          <div class="sep"></div>
          <button class="pick" title="Select element (S)">${ICON.cursor}Select</button>
          <button class="icon close" title="Close (Esc)" aria-label="Close">${ICON.close}</button>
        </div>
        <div class="hint"></div>
        <div class="hl"><div class="tag"></div></div>
        <div class="toast" role="status" aria-live="polite">
          <div class="badge"></div>
          <div class="text"><div class="title"></div><div class="detail"></div></div>
          <span class="pct"></span>
          <button class="x" aria-label="Dismiss">${ICON.close}</button>
          <div class="progress"><i></i></div>
        </div>
      </div>`
    const $ = (s) => shadow.querySelector(s)
    ui = {
      bar: $(".bar"), hint: $(".hint"), hl: $(".hl"), tag: $(".tag"), pick: $(".pick"),
      tabs: shadow.querySelectorAll("[data-tab]"), formats: $(".formats"),
      toast: $(".toast"), badge: $(".toast .badge"), title: $(".toast .title"), detail: $(".toast .detail"),
      fill: $(".toast .progress i"), pct: $(".toast .pct"),
    }
    ui.tabs.forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)))
    ui.pick.addEventListener("click", () => setPicking(!picking))
    $(".close").addEventListener("click", close)
    $(".toast .x").addEventListener("click", hideToast)
    ui.toast.addEventListener("pointerenter", () => clearTimeout(toastTimer))
    ui.toast.addEventListener("pointerleave", () => scheduleHide(1500))
    makeDraggable($(".brand"), ui.bar)
    document.documentElement.appendChild(host)
  }

  function makeDraggable(handle, bar) {
    handle.addEventListener("pointerdown", (e) => {
      const r = bar.getBoundingClientRect()
      const dx = e.clientX - r.left
      const dy = e.clientY - r.top
      handle.setPointerCapture(e.pointerId)
      const move = (ev) => {
        bar.style.transform = "none"
        bar.style.animation = "none"
        bar.style.left = `${Math.max(4, Math.min(innerWidth - r.width - 4, ev.clientX - dx))}px`
        bar.style.top = `${Math.max(4, Math.min(innerHeight - r.height - 4, ev.clientY - dy))}px`
        ui.hint.style.opacity = "0"
      }
      const up = () => {
        handle.removeEventListener("pointermove", move)
        handle.removeEventListener("pointerup", up)
      }
      handle.addEventListener("pointermove", move)
      handle.addEventListener("pointerup", up)
    })
  }

  function save() {
    try {
      chrome.storage?.local.set({ tab, formats })
    } catch {
      /* storage unavailable */
    }
  }

  function render() {
    ui.tabs.forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tab === tab)))
    ui.tabs.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.tab === tab)))
    ui.formats.innerHTML = TABS[tab]
      .map((f, i) => `<button data-format="${f}" aria-pressed="${f === formats[tab]}" title="${FORMAT_INFO[tab][f]} (${i + 1})">${f.toUpperCase()}</button>`)
      .join("")
    ui.formats.querySelectorAll("[data-format]").forEach((b) => b.addEventListener("click", () => setFormat(b.dataset.format)))
    const what = tab === "code" ? `${formats.code.toUpperCase()} code` : `a ${formats.image.toUpperCase()} image`
    const paste = tab === "image" && formats.image !== "svg" ? "pastes as an image" : "pastes as layers in Figma / Paper"
    ui.hint.innerHTML = `Click a block to copy ${what} · ${paste} · <kbd>↑</kbd><kbd>↓</kbd> parent/child · <kbd>Esc</kbd> exit`
  }

  function setTab(t) {
    if (!TABS[t]) return
    tab = t
    render()
    save()
  }

  function setFormat(f) {
    if (!TABS[tab].includes(f)) return
    formats[tab] = f
    render()
    save()
  }

  function setPicking(on) {
    picking = on
    ui.pick.setAttribute("aria-pressed", String(on))
    ui.hint.style.display = on ? "" : "none"
    if (!on) hideHighlight()
  }

  /* ---------------------------- highlight --------------------------- */

  function describe(el) {
    let s = el.localName
    if (el.id) s += `#${el.id}`
    else if (typeof el.className === "string" && el.className.trim()) s += "." + el.className.trim().split(/\s+/).slice(0, 2).join(".")
    return s.length > 48 ? s.slice(0, 47) + "…" : s
  }

  function showHighlight(el, ok = false) {
    current = el
    const r = el.getBoundingClientRect()
    const hl = ui.hl
    hl.style.display = "block"
    hl.style.top = `${r.top}px`
    hl.style.left = `${r.left}px`
    hl.style.width = `${r.width}px`
    hl.style.height = `${r.height}px`
    hl.classList.toggle("ok", ok)
    hl.classList.toggle("below", r.top < 28)
    ui.tag.textContent = describe(el) + " "
    const dims = document.createElement("span")
    dims.textContent = `${Math.round(r.width)}×${Math.round(r.height)}`
    ui.tag.append(dims)
  }

  function flash(el) {
    showHighlight(el, true)
    setTimeout(() => current === el && ui?.hl.classList.remove("ok"), 700)
  }

  function hideHighlight() {
    current = null
    trail = []
    if (ui) ui.hl.style.display = "none"
  }

  /* ------------------------------ toast ----------------------------- */

  // A toast that stays until the work is done: spinner, current step, progress bar.
  function startProgress(title) {
    let shown = 0
    clearTimeout(toastTimer)
    ui.toast.classList.remove("err")
    ui.toast.classList.add("busy")
    ui.badge.innerHTML = ICON.spinner
    ui.title.textContent = title
    ui.detail.textContent = "Starting…"
    ui.fill.style.width = "0%"
    ui.pct.textContent = "0%"
    ui.toast.classList.add("show")
    return (fraction, step) => {
      if (!ui) return
      shown = Math.max(shown, Math.min(0.99, fraction)) // never goes backwards
      ui.fill.style.width = `${Math.round(shown * 100)}%`
      ui.pct.textContent = `${Math.round(shown * 100)}%`
      if (step) ui.detail.textContent = step
    }
  }

  function toast({ title, detail = "", error = false }) {
    ui.toast.classList.remove("busy")
    ui.fill.style.width = "100%"
    ui.toast.classList.toggle("err", error)
    ui.badge.innerHTML = error ? ICON.alert : ICON.check
    ui.title.textContent = title
    ui.detail.textContent = detail
    ui.toast.classList.remove("show")
    void ui.toast.offsetWidth
    ui.toast.classList.add("show")
    scheduleHide(error ? 5000 : 3500)
  }
  function scheduleHide(ms) {
    clearTimeout(toastTimer)
    toastTimer = setTimeout(hideToast, ms)
  }
  function hideToast() {
    clearTimeout(toastTimer)
    ui?.toast.classList.remove("show")
  }

  /* ------------------------------ copy ------------------------------ */

  // Background behind the block, for JPG (no transparency).
  function backdropColor(el) {
    for (let e = el; e; e = e.parentElement) {
      const c = getComputedStyle(e).backgroundColor
      if (c && c !== "transparent" && !/rgba\(.*,\s*0\)$/.test(c)) return c
    }
    return "#ffffff"
  }

  // Run fn after the browser has painted (so the progress toast shows before heavy work).
  const later = (fn) => nextFrame().then(() => new Promise((r) => setTimeout(r, 0))).then(fn)

  async function copyEl(el) {
    const f = formats[tab]
    const what = tab === "code" ? f.toUpperCase() : `${f.toUpperCase()} image`
    const progress = startProgress(`Copying ${what}…`)
    try {
      let title, detail
      // Vector SVG: Figma/Paper layers (and the SVG formats themselves). Image embedding reports progress.
      const svgWeight = tab === "code" && f !== "svg" ? 0 : 1
      const svg = later(() => {
        if (svgWeight) progress(0.1, "Drawing vector layers")
        return generateSVG(el, (n, total) => svgWeight && total && progress(0.2 + 0.7 * (n / total), `Embedding images ${n}/${total}`))
      }).then((r) => r.code)

      if (tab === "code") {
        progress(0.05, "Reading styles")
        const html = later(() => generate(el, "html"))
        let pending
        if (f === "tsx") {
          pending = html.then(() => {
            progress(0.15, "Converting to Tailwind + shadcn/ui")
            return later(() =>
              generateTSX(el, ({ step, part }) => progress(0.2 + 0.65 * part, step))
            )
          })
        } else if (f === "html") pending = html
        else pending = svg.then((code) => ({ code }))
        await writeClipboard({
          "text/plain": textBlob("text/plain", pending.then((r) => r.code)), // the code (editors; Figma for SVG)
          "text/html": f === "svg" ? null : textBlob("text/html", html.then((r) => r.code)), // Paper: frames and text layers
          "image/svg+xml": textBlob("image/svg+xml", svg), // vector layers for apps that read SVG
        })
        const result = await pending
        progress(0.95, "Finishing")
        const code = result.code
        title = `Copied ${f.toUpperCase()}`
        detail = [
          result.nodes ? `${result.nodes} elements` : null,
          result.stats?.components ? `${result.stats.components} shadcn components` : null,
          result.responsive?.breakpoints?.length ? `responsive: base ${result.responsive.breakpoints.join(" ")}` : result.responsive?.failed ? "responsive unavailable on this site" : null,
          `${(code.length / 1024).toFixed(1)} KB`,
          f === "svg" ? "pastes as layers in Figma / Paper" : "Paper pastes it as layers",
        ].filter(Boolean).join(" · ")
      } else if (f === "svg") {
        await writeClipboard({
          "text/plain": textBlob("text/plain", svg), // Figma / Paper: layers
          "image/svg+xml": textBlob("image/svg+xml", svg),
        })
        title = "Copied SVG image"
        detail = `Vector · pastes as layers in Figma / Paper · ${((await svg).length / 1024).toFixed(1)} KB`
      } else {
        progress(0.1, "Capturing the screen")
        const shot = screenshot(el)
        const png = shot.then(({ canvas }) => {
          progress(0.6, `Encoding ${f.toUpperCase()}`)
          if (f !== "jpg") return canvasBlob(canvas, "image/png")
          // JPG has no transparency: flatten onto the page background.
          const flat = document.createElement("canvas")
          flat.width = canvas.width
          flat.height = canvas.height
          const g = flat.getContext("2d")
          g.fillStyle = backdropColor(el)
          g.fillRect(0, 0, flat.width, flat.height)
          g.drawImage(canvas, 0, 0)
          shot.flat = flat
          return canvasBlob(flat, "image/png")
        })
        await writeClipboard({
          "image/png": png,
          // Browsers can't put JPEG on the clipboard as an image; also offer the real JPEG bytes.
          "web image/jpeg": f === "jpg" ? png.then(() => canvasBlob(shot.flat, "image/jpeg", 0.92)) : null,
        })
        const { cropped } = await shot
        const size = (await png).size
        title = `Copied ${f.toUpperCase()} image`
        detail = `${Math.round(size / 1024)} KB${cropped ? " · cropped to the visible area" : ""}`
      }
      flash(el)
      toast({ title, detail })
    } catch (err) {
      console.error("[CopyCode]", err)
      toast({ title: "Couldn't copy", detail: err?.message || String(err), error: true })
    }
  }

  /* ----------------------------- events ----------------------------- */

  const isOurs = (e) => e.composedPath().includes(host)

  function onMove(e) {
    if (!picking || isOurs(e)) return
    const el = e.target
    if (!(el instanceof Element) || el === current) return
    trail = []
    showHighlight(el)
  }

  function swallow(e) {
    if (!picking || isOurs(e)) return
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
  }

  function onClick(e) {
    if (isOurs(e) || !picking) return
    swallow(e)
    if (current) copyEl(current)
  }

  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault()
      e.stopPropagation()
      close()
      return
    }
    if (!picking || e.metaKey || e.ctrlKey || e.altKey) return
    const key = e.key.toLowerCase()
    if (key === "c" || key === "i") {
      swallow(e)
      setTab(key === "c" ? "code" : "image")
      return
    }
    const n = Number(e.key)
    if (n >= 1 && n <= 3) {
      swallow(e)
      setFormat(TABS[tab][n - 1])
      return
    }
    if (!current) return
    if (e.key === "ArrowUp") {
      swallow(e)
      const parent = current.parentElement
      if (parent && parent !== document.documentElement) {
        trail.push(current)
        showHighlight(parent)
      }
    } else if (e.key === "ArrowDown") {
      swallow(e)
      const next = trail.pop() || current.firstElementChild
      if (next) showHighlight(next)
    } else if (e.key === "Enter") {
      swallow(e)
      copyEl(current)
    }
  }

  function onViewportChange() {
    if (current && picking) showHighlight(current, ui.hl.classList.contains("ok"))
  }

  /* --------------------------- lifecycle ---------------------------- */

  const listeners = [
    ["mousemove", onMove],
    ["pointerover", onMove],
    ["pointerdown", swallow],
    ["mousedown", swallow],
    ["pointerup", swallow],
    ["mouseup", swallow],
    ["click", onClick],
    ["dblclick", swallow],
    ["auxclick", swallow],
    ["keydown", onKey],
  ]

  function open() {
    buildUI()
    render()
    try {
      chrome.storage?.local.get(["tab", "formats"], (r) => {
        if (r?.formats) for (const t of Object.keys(TABS)) if (TABS[t].includes(r.formats[t])) formats[t] = r.formats[t]
        if (r?.tab && TABS[r.tab]) tab = r.tab
        render()
      })
    } catch {
      /* storage unavailable */
    }
    setPicking(true)
    for (const [type, fn] of listeners) window.addEventListener(type, fn, true)
    window.addEventListener("scroll", onViewportChange, { capture: true, passive: true })
    window.addEventListener("resize", onViewportChange, { passive: true })
  }

  function close() {
    for (const [type, fn] of listeners) window.removeEventListener(type, fn, true)
    window.removeEventListener("scroll", onViewportChange, { capture: true })
    window.removeEventListener("resize", onViewportChange)
    clearTimeout(toastTimer)
    host?.remove()
    for (const k of Object.keys(sandboxes)) {
      sandboxes[k].remove()
      delete sandboxes[k]
    }
    defaultsCache.clear()
    globalThis.__copycodeTailwind?.disposeTarget()
    globalThis.__copycodePageCache = null
    host = shadow = ui = null
    picking = false
    current = null
  }

  window.__copycode = {
    toggle: () => (host ? close() : open()),
    // For DevTools (CopyCode context): __copycode.generate($0, "tsx").code
    generate,
    generateTSX,
    generateSVG,
  }
  open()
})()
