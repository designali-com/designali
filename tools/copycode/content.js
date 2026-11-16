/* CopyCode — select a block on any page and copy an exact copy of it:
 *   HTML / JSX / TSX  — markup with inline styles, exactly as the browser renders it
 *   SVG               — real vectors (boxes, text, images) for Figma, Paper & co. (vector.js)
 *   PNG               — screenshot (download)
 *
 * Code pipeline: DOM ──capture()──▶ { tag, attrs, style, children } ──toHTML()/toJSX()──▶ text
 *
 * Styles come from getComputedStyle and are diffed against a plain <div>, not the
 * tag's browser defaults, so the copy stays exact even where a CSS reset
 * (Tailwind preflight, normalize…) changes those defaults.
 */
;(() => {
  "use strict"

  if (window.__copycode) {
    window.__copycode.toggle()
    return
  }

  const FORMATS = ["tsx", "jsx", "html", "svg"]
  const DOWNLOADS = ["tsx", "jsx", "html", "svg", "png"]
  const MAX_NODES = 4000
  const SVG_NS = "http://www.w3.org/2000/svg"
  const XHTML_NS = "http://www.w3.org/1999/xhtml"

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
      doc.open()
      doc.write(`<!doctype html><html><head></head><body><svg></svg></body></html>`)
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
      const tagSetsIt = own[p] !== base[p] // e.g. h1 margin/font-size, button border, a color
      if (isInherited(p)) {
        if (isRoot) {
          if (!ROOT_FORCE.has(p) && base[p] === v && !tagSetsIt) continue
        } else if (parentCS && parentCS.getPropertyValue(p) === v && !tagSetsIt) continue
      } else if (p === "display") {
        if (!ALWAYS_DISPLAY.has(defaultTag) && own[p] === v) continue
      } else if (base[p] === v && own[p] === v) continue
      out[p] = v
    }
    if (ALWAYS_FORM.has(defaultTag)) for (const p of FORM_PROPS) out[p] = cs.getPropertyValue(p)
    const def = own
    if (out.display && parentCS && /flex|grid/.test(parentCS.display) && out.display === blockify(def.display)) {
      delete out.display
    }
    prune(out, cs, isRoot, own)
    return out
  }

  function prune(s, cs, isRoot, own = {}) {
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
        if (own[`border-${side}-style`] && own[`border-${side}-style`] !== "none") {
          s[`border-${side}-width`] = "0px"
          s[`border-${side}-style`] = "none"
        } else {
          delete s[`border-${side}-width`]
          if (width === "0px" && style !== "none") delete s[`border-${side}-style`]
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

  function sizeStyles(el, cs, parentEl, parentCS, isRoot, hasContent, textOnly) {
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
    if (!hasContent) {
      // Empty boxes (dividers, dots, spacers): keep what CSS gives them.
      if (isRoot || isExplicit(el, "width")) out.width = w
      if (isExplicit(el, "height")) out.height = h
      return out
    }
    if (isExplicit(el, "height")) out.height = h // buttons, bars, fixed panels
    if (isRoot) {
      out.width = w
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
      .replace(/(-?\d+\.\d{3,})(px|em|rem|deg|s)\b/g, (_, n, u) => `${+parseFloat(n).toFixed(2)}${u}`)
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

  const kebab = (name) => name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()

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
      // ids that something inside the block points at (label for=, aria-labelledby…)
      referencedIds: new Set(
        [rootEl, ...rootEl.querySelectorAll("[for],[aria-labelledby],[aria-describedby],[aria-controls]")].flatMap((e) =>
          ["for", "aria-labelledby", "aria-describedby", "aria-controls"].flatMap((a) => (e.getAttribute(a) || "").split(/\s+/).filter(Boolean))
        )
      ),
    }
    const parentEl = rootEl.parentElement
    const parentCS = parentEl ? getComputedStyle(parentEl) : null
    const tree =
      rootEl instanceof SVGElement && rootEl.localName === "svg"
        ? captureSvg(rootEl, parentCS, true, ctx)
        : captureEl(rootEl, parentEl, parentCS, true, ctx)
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
  function finishStyle(node, style) {
    node.style = cleanStyle(style)
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
      if (src) attrs.src = absolutize(src)
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
      if (rules.length) {
        const id = String(ctx.css.length + 1)
        attrs["data-placeholder"] = id
        ctx.css.push(`[data-placeholder="${id}"]::placeholder { ${rules.join("; ")} }`)
      }
    }

    const style = diffStyles(cs, parentCS, isRoot, tag, ctx.mode)

    if (tag !== "textarea") {
      const before = capturePseudo(el, "::before", cs, ctx)
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
      const after = capturePseudo(el, "::after", cs, ctx)
      if (after) children.push(after)
    }

    const hasText = children.some((c) => c.type === "text" && c.text.trim())
    const hasEls = children.some((c) => c.type === "el")
    Object.assign(style, sizeStyles(el, cs, parentEl, parentCS, isRoot, hasText || hasEls, hasText && !hasEls))
    // A reset may switch box-sizing; whenever a size is written, say which box it measures.
    if (style.width || style.height || style["min-height"] || style["max-width"]) style["box-sizing"] = cs.boxSizing

    const node = { type: "el", tag, attrs, children, svg: false, inline: cs.display.startsWith("inline"), flow: /flex|grid/.test(cs.display) }
    return finishStyle(node, style)
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
    return finishStyle(node, style)
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

    return finishStyle(node, style)
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
    const tag = node.tag
    const parts = []
    if (rootClass !== null) parts.push(rootClass)

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

  function generate(el, format) {
    const { tree, ctx } = capture(el, "css")
    if (!tree) throw new Error("Nothing visible to copy here")
    const name = componentName(el)
    let code
    if (format === "html") code = toHTML(tree, 0, false) + "\n"
    else code = toComponent(tree, name, format === "tsx")
    return { code, name, nodes: Math.min(ctx.count, MAX_NODES), truncated: ctx.truncated }
  }

  // Vector SVG for design tools (vector.js). Async: images are embedded.
  async function generateSVG(el) {
    const svg = await globalThis.__copycodeVector.toSVG(el, { exclude: host })
    return { code: svg, name: componentName(el), nodes: el.querySelectorAll("*").length + 1, truncated: false }
  }

  /* ------------------------------------------------------------------ */
  /* Clipboard, files, screenshots                                       */
  /* ------------------------------------------------------------------ */

  // SVG goes on the clipboard as text (Figma imports pasted SVG markup as layers)
  // and as HTML for apps that read rich clipboard content. The promise keeps the
  // click's user activation while images are being embedded.
  async function copySVG(promise) {
    const blob = (type) => promise.then(({ code }) => new Blob([code], { type }))
    try {
      await navigator.clipboard.write([new ClipboardItem({ "text/plain": blob("text/plain"), "text/html": blob("text/html") })])
      return await promise
    } catch (err) {
      const result = await promise
      if (await copyText(result.code)) return result
      throw err
    }
  }

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

  function saveBlob(blob, filename) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    // Inside our shadow root, so the picker's click interception ignores it.
    shadow.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 30_000)
  }

  const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()))

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
    const blob = await new Promise((r) => canvas.toBlob(r, "image/png"))
    const cropped = rect.width > w + 1 || rect.height > h + 1
    return { blob, cropped }
  }

  const htmlDocument = (code, name) =>
    `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <title>${name}</title>\n</head>\n<body style="margin: 0; padding: 24px">\n${code}</body>\n</html>\n`

  async function download(el, fmt) {
    const name = componentName(el)
    const file = `${kebab(name)}.${fmt}`
    if (fmt === "png") {
      const { blob, cropped } = await screenshot(el)
      saveBlob(blob, file)
      return { file, detail: cropped ? "Cropped to the visible area" : `${Math.round(blob.size / 1024)} KB` }
    }
    const { code } = fmt === "svg" ? await generateSVG(el) : generate(el, fmt)
    const body = fmt === "html" ? htmlDocument(code, name) : code
    const type = { tsx: "text/plain", jsx: "text/plain", html: "text/html", svg: "image/svg+xml" }[fmt]
    const blob = new Blob([body], { type: `${type};charset=utf-8` })
    saveBlob(blob, file)
    return { file, detail: `${(blob.size / 1024).toFixed(1)} KB` }
  }

  /* ------------------------------------------------------------------ */
  /* Toolbar UI                                                          */
  /* ------------------------------------------------------------------ */

  const ICON = {
    logo: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/><path d="M13.5 4l-3 16"/></svg>`,
    cursor: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l7 17 2.5-7.5L21 11z"/></svg>`,
    download: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"/><path d="M7 10l5 5 5-5"/><path d="M5 20h14"/></svg>`,
    chevron: `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
    close: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
    check: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,
    alert: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 7v6M12 17h.01"/></svg>`,
  }

  const FORMAT_INFO = {
    html: "HTML, inline styles",
    jsx: "React, inline styles",
    tsx: "React + TypeScript, inline styles",
    svg: "Vectors for Figma / Paper",
    png: "Screenshot",
  }
  const FORMAT_LABEL = { html: "HTML", jsx: "JSX", tsx: "TSX", svg: "Figma" }

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
    .seg button { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; letter-spacing: .02em; }
    .seg button[aria-pressed="true"] { background: var(--fg); color: #09090b; }
    .pick[aria-pressed="true"] { background: rgba(59,130,246,.18); color: #93c5fd; }
    .dl[aria-expanded="true"] { background: var(--hover); color: var(--fg); }
    .dl .chev { opacity: .6; margin-left: -2px; }
    .sep { width: 1px; height: 18px; background: var(--line); margin: 0 2px; }
    .icon { width: 28px; padding: 0; }
    .menu-wrap { position: relative; }
    .menu {
      position: absolute; top: calc(100% + 10px); right: -6px; min-width: 232px; padding: 6px;
      background: var(--bg); border: 1px solid var(--line); border-radius: 12px;
      box-shadow: 0 16px 40px rgba(0,0,0,.4); display: none; flex-direction: column; gap: 2px;
      backdrop-filter: blur(14px) saturate(1.4); -webkit-backdrop-filter: blur(14px) saturate(1.4);
    }
    .menu.open { display: flex; animation: menu-in .14s cubic-bezier(.2,.8,.2,1); }
    @keyframes menu-in { from { opacity: 0; transform: translateY(-4px); } }
    .menu-title { padding: 6px 8px 8px; color: var(--muted); font-size: 11px; }
    .menu button { height: 34px; justify-content: flex-start; gap: 10px; padding: 0 8px; color: var(--fg); }
    .menu .ext {
      width: 40px; height: 20px; display: inline-flex; align-items: center; justify-content: center;
      border-radius: 5px; background: rgba(255,255,255,.07); color: var(--fg);
      font: 600 10px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .03em;
    }
    .menu .desc { color: var(--muted); font-size: 12px; }
    .menu button:hover .ext { background: var(--accent); color: #fff; }
    .hint {
      position: fixed; top: 60px; left: 50%; transform: translateX(-50%);
      padding: 6px 10px; border-radius: 8px; background: var(--bg); border: 1px solid var(--line);
      color: var(--muted); font-size: 11px; white-space: nowrap; pointer-events: none;
      transition: opacity .2s; z-index: 2;
    }
    .hint kbd { font: inherit; color: var(--fg); padding: 1px 4px; border-radius: 4px; background: rgba(255,255,255,.08); }
    .hint.pending { color: #bfdbfe; border-color: rgba(59,130,246,.5); }
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
    .toast .action { height: 28px; padding: 0 10px; background: rgba(255,255,255,.08); color: var(--fg); }
    .toast .action:hover { background: var(--accent); color: #fff; }
    .toast .action[hidden] { display: none; }
    .toast .x { width: 28px; padding: 0; }
  `

  let host, shadow, ui
  let format = "tsx"
  let picking = false
  let current = null // hovered element
  let lastEl = null // last copied / downloaded element
  let pendingDownload = null // format waiting for a click
  let trail = [] // elements visited via ArrowUp, for ArrowDown
  let toastTimer = 0
  let toastAction = null

  function buildUI() {
    host = document.createElement("copycode-root")
    host.style.cssText = "all:initial;position:fixed;inset:0;z-index:2147483647;pointer-events:none;"
    shadow = host.attachShadow({ mode: "closed" })
    shadow.innerHTML = `
      <style>${CSS}</style>
      <div class="root">
        <div class="bar" role="toolbar" aria-label="CopyCode">
          <div class="brand" title="Drag to move">${ICON.logo}CopyCode</div>
          <div class="seg" role="group" aria-label="Copy format">
            ${FORMATS.map((f, i) => `<button data-format="${f}" title="Copy as ${FORMAT_INFO[f]} (${i + 1})">${FORMAT_LABEL[f]}</button>`).join("")}
          </div>
          <div class="sep"></div>
          <button class="pick" title="Select element (S)">${ICON.cursor}Select</button>
          <div class="menu-wrap">
            <button class="dl" aria-haspopup="menu" aria-expanded="false" title="Download (D)">${ICON.download}Download<span class="chev">${ICON.chevron}</span></button>
            <div class="menu" role="menu">
              <div class="menu-title">Download selected block as</div>
              ${DOWNLOADS.map((f) => `<button role="menuitem" data-download="${f}"><span class="ext">.${f}</span><span class="desc">${FORMAT_INFO[f]}</span></button>`).join("")}
            </div>
          </div>
          <button class="icon close" title="Close (Esc)" aria-label="Close">${ICON.close}</button>
        </div>
        <div class="hint"></div>
        <div class="hl"><div class="tag"></div></div>
        <div class="toast" role="status" aria-live="polite">
          <div class="badge"></div>
          <div class="text"><div class="title"></div><div class="detail"></div></div>
          <button class="action"></button>
          <button class="x" aria-label="Dismiss">${ICON.close}</button>
        </div>
      </div>`
    const $ = (s) => shadow.querySelector(s)
    ui = {
      bar: $(".bar"), hint: $(".hint"), hl: $(".hl"), tag: $(".tag"), pick: $(".pick"),
      dl: $(".dl"), menu: $(".menu"), formats: shadow.querySelectorAll("[data-format]"),
      toast: $(".toast"), badge: $(".toast .badge"), title: $(".toast .title"),
      detail: $(".toast .detail"), action: $(".toast .action"),
    }

    ui.formats.forEach((b) => b.addEventListener("click", () => setFormat(b.dataset.format)))
    ui.pick.addEventListener("click", () => setPicking(!picking))
    ui.dl.addEventListener("click", () => toggleMenu())
    shadow.querySelectorAll("[data-download]").forEach((b) =>
      b.addEventListener("click", () => {
        toggleMenu(false)
        requestDownload(b.dataset.download)
      })
    )
    $(".close").addEventListener("click", close)
    $(".toast .x").addEventListener("click", hideToast)
    ui.action.addEventListener("click", () => {
      const fn = toastAction
      hideToast()
      fn?.()
    })
    ui.toast.addEventListener("pointerenter", () => clearTimeout(toastTimer))
    ui.toast.addEventListener("pointerleave", () => scheduleHide(1500))
    makeDraggable($(".brand"), ui.bar)
    document.documentElement.appendChild(host)
    renderHint()
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

  function renderHint() {
    ui.hint.classList.toggle("pending", !!pendingDownload)
    ui.hint.innerHTML = pendingDownload
      ? `Click a block to download it as <kbd>.${pendingDownload}</kbd> · <kbd>Esc</kbd> cancel`
      : `Click a block to copy · <kbd>↑</kbd> parent · <kbd>↓</kbd> child · <kbd>D</kbd> download · <kbd>Esc</kbd> exit`
  }

  function setFormat(f) {
    if (!FORMATS.includes(f)) return
    format = f
    ui.formats.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.format === f)))
    try {
      chrome.storage?.local.set({ format: f })
    } catch {
      /* storage unavailable */
    }
  }

  function setPicking(on) {
    picking = on
    ui.pick.setAttribute("aria-pressed", String(on))
    ui.hint.style.display = on ? "" : "none"
    if (!on) {
      hideHighlight()
      pendingDownload = null
      renderHint()
    }
  }

  function toggleMenu(open = ui.dl.getAttribute("aria-expanded") !== "true") {
    ui.dl.setAttribute("aria-expanded", String(open))
    ui.menu.classList.toggle("open", open)
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

  function toast({ title, detail = "", error = false, action = null }) {
    ui.toast.classList.toggle("err", error)
    ui.badge.innerHTML = error ? ICON.alert : ICON.check
    ui.title.textContent = title
    ui.detail.textContent = detail
    toastAction = action?.run || null
    ui.action.hidden = !action
    if (action) ui.action.innerHTML = `${ICON.download}${action.label}`
    // Restart the entrance animation for back-to-back toasts.
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

  /* ----------------------------- actions ---------------------------- */

  async function copyEl(el) {
    try {
      let result
      if (format === "svg") result = await copySVG(generateSVG(el))
      else {
        result = generate(el, format)
        if (!(await copyText(result.code))) throw new Error("Clipboard access was blocked on this page")
      }
      const { code, nodes, truncated } = result
      lastEl = el
      flash(el)
      const kb = (new Blob([code]).size / 1024).toFixed(1)
      const fmt = format
      toast({
        title: fmt === "svg" ? "Copied for Figma / Paper" : `Copied as ${fmt.toUpperCase()}`,
        detail: fmt === "svg" ? `Paste in Figma or Paper · ${kb} KB` : `${nodes} elements · ${kb} KB${truncated ? ` · truncated at ${MAX_NODES}` : ""}`,
        action: { label: `.${fmt}`, run: () => downloadEl(el, fmt) },
      })
    } catch (err) {
      console.error("[CopyCode]", err)
      toast({ title: "Couldn't copy", detail: err?.message || String(err), error: true })
    }
  }

  async function downloadEl(el, fmt) {
    try {
      const { file, detail } = await download(el, fmt)
      lastEl = el
      flash(el)
      toast({ title: `Downloaded ${file}`, detail })
    } catch (err) {
      console.error("[CopyCode]", err)
      toast({ title: "Couldn't download", detail: err?.message || String(err), error: true })
    }
  }

  function requestDownload(fmt) {
    const target = lastEl?.isConnected ? lastEl : null
    if (target) return downloadEl(target, fmt)
    pendingDownload = fmt
    if (!picking) setPicking(true)
    renderHint()
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
    if (isOurs(e)) {
      // Clicking elsewhere in the toolbar closes the menu.
      if (!e.composedPath().some((n) => n.classList?.contains("menu-wrap"))) toggleMenu(false)
      return
    }
    toggleMenu(false)
    if (!picking) return
    swallow(e)
    if (!current) return
    if (pendingDownload) {
      const fmt = pendingDownload
      pendingDownload = null
      renderHint()
      downloadEl(current, fmt)
    } else copyEl(current)
  }

  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault()
      e.stopPropagation()
      if (ui.menu.classList.contains("open")) toggleMenu(false)
      else if (pendingDownload) {
        pendingDownload = null
        renderHint()
      } else close()
      return
    }
    if (!picking || e.metaKey || e.ctrlKey || e.altKey) return
    const n = Number(e.key)
    if (n >= 1 && n <= FORMATS.length) {
      swallow(e)
      setFormat(FORMATS[n - 1])
      return
    }
    if (e.key === "d" || e.key === "D") {
      swallow(e)
      if (current) downloadEl(current, format)
      else toggleMenu(true)
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
    setFormat("tsx")
    try {
      chrome.storage?.local.get("format", (r) => r?.format && setFormat(r.format))
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
    host = shadow = ui = null
    picking = false
    current = lastEl = pendingDownload = null
  }

  window.__copycode = {
    toggle: () => (host ? close() : open()),
    // For DevTools (CopyCode context): __copycode.generate($0, "tsx").code
    generate,
  }
  open()
})()
