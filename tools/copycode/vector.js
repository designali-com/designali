/* CopyCode — rendered DOM → plain vector SVG.
 *
 * For design tools (Figma, Paper, Sketch, Illustrator), which can't render HTML
 * inside <foreignObject>. Every box, text line and image is drawn where the
 * browser drew it:
 *   boxes   → <rect>/<path> with fill, border, per-corner radius, box-shadow
 *             (written as the filter chain Figma itself exports, so it comes back as a Drop shadow)
 *   text    → <text> with one <tspan> per rendered line, at the measured baseline
 *   images  → <image>, embedded as data: URIs (design tools don't load external URLs)
 *   <svg>   → copied as vectors with colors resolved
 *   overflow: hidden → clip-path, opacity → group opacity
 * Every element is a <g id="tag.class">, which Figma uses as the layer name.
 */
;(() => {
  "use strict"
  if (globalThis.__copycodeVector) return

  const SVG_NS = "http://www.w3.org/2000/svg"
  const r2 = (n) => Math.round(n * 100) / 100
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

  function parseRGBA(v) {
    const m = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)/.exec(v || "")
    if (!m) return null
    const a = m[4] === undefined ? 1 : m[4].endsWith("%") ? parseFloat(m[4]) / 100 : parseFloat(m[4])
    return { r: +m[1], g: +m[2], b: +m[3], a }
  }
  const hex = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")

  // Normalise any CSS color (oklch, lab, color-mix…) to sRGB: paint one pixel and read it.
  const colorCanvas = document.createElement("canvas")
  colorCanvas.width = colorCanvas.height = 1
  const colorCtx = colorCanvas.getContext("2d", { willReadFrequently: true })
  const colorCache = new Map()
  function toRGBA(v) {
    if (!v || v === "transparent") return { r: 0, g: 0, b: 0, a: 0 }
    const direct = parseRGBA(v)
    if (direct) return direct
    if (colorCache.has(v)) return colorCache.get(v)
    colorCtx.clearRect(0, 0, 1, 1)
    colorCtx.fillStyle = "rgba(0,0,0,0)"
    colorCtx.fillStyle = v
    colorCtx.fillRect(0, 0, 1, 1)
    const [r, g, b, a] = colorCtx.getImageData(0, 0, 1, 1).data
    // Un-premultiplied by the browser; alpha back to 0–1.
    const c = { r, g, b, a: a / 255 }
    colorCache.set(v, c)
    return c
  }
  // fill="#hex" fill-opacity="a"
  const paint = (attr, v) => {
    const c = toRGBA(v)
    if (c.a <= 0) return null
    return `${attr}="${hex(c)}"${c.a < 1 ? ` ${attr}-opacity="${r2(c.a)}"` : ""}`
  }

  const metricsCtx = document.createElement("canvas").getContext("2d")
  function fontMetrics(cs) {
    metricsCtx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
    const m = metricsCtx.measureText("Hgjy")
    return { ascent: m.fontBoundingBoxAscent, descent: m.fontBoundingBoxDescent }
  }

  // Split a shadow list on top-level commas.
  function splitTop(v) {
    const out = []
    let depth = 0, cur = ""
    for (const ch of v) {
      if (ch === "(") depth++
      if (ch === ")") depth--
      if (ch === "," && depth === 0) {
        out.push(cur.trim())
        cur = ""
      } else cur += ch
    }
    if (cur.trim()) out.push(cur.trim())
    return out
  }

  function parseShadows(v) {
    if (!v || v === "none") return []
    return splitTop(v)
      .map((layer) => {
        const inset = /\binset\b/.test(layer)
        const color = (/(rgba?\([^)]*\)|#[0-9a-f]+|[a-z]+\([^)]*\))/i.exec(layer) || [])[1] || "rgba(0,0,0,1)"
        const nums = layer.replace(color, "").replace("inset", "").trim().split(/\s+/).map(parseFloat)
        const [x = 0, y = 0, blur = 0, spread = 0] = nums
        return { inset, color: toRGBA(color), x, y, blur, spread }
      })
      .filter((s) => !s.inset && s.color.a > 0)
  }

  // Box outline as SVG geometry with independent corner radii.
  function boxShape(x, y, w, h, [tl, tr, br, bl]) {
    if (w <= 0 || h <= 0) return null
    const k = Math.min(1, w / Math.max(tl + tr, bl + br, 1e-9), h / Math.max(tl + bl, tr + br, 1e-9))
    ;[tl, tr, br, bl] = [tl, tr, br, bl].map((v) => Math.max(0, v * k))
    if (tl === tr && tr === br && br === bl) {
      return `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${r2(h)}"${tl ? ` rx="${r2(tl)}"` : ""}`
    }
    const d = [
      `M${r2(x + tl)} ${r2(y)}`, `H${r2(x + w - tr)}`, tr ? `A${r2(tr)} ${r2(tr)} 0 0 1 ${r2(x + w)} ${r2(y + tr)}` : "",
      `V${r2(y + h - br)}`, br ? `A${r2(br)} ${r2(br)} 0 0 1 ${r2(x + w - br)} ${r2(y + h)}` : "",
      `H${r2(x + bl)}`, bl ? `A${r2(bl)} ${r2(bl)} 0 0 1 ${r2(x)} ${r2(y + h - bl)}` : "",
      `V${r2(y + tl)}`, tl ? `A${r2(tl)} ${r2(tl)} 0 0 1 ${r2(x + tl)} ${r2(y)}` : "", "Z",
    ].join("")
    return `<path d="${d}"`
  }

  function radii(cs, w, h) {
    return ["top-left", "top-right", "bottom-right", "bottom-left"].map((c) => {
      const v = cs.getPropertyValue(`border-${c}-radius`).split(" ")[0]
      return v.endsWith("%") ? (parseFloat(v) / 100) * Math.min(w, h) : parseFloat(v) || 0
    })
  }

  // linear-gradient(…) → <linearGradient> (angle + color stops)
  function linearGradient(v, x, y, w, h, newId, defs) {
    const m = /^linear-gradient\((.*)\)$/.exec(v.trim())
    if (!m) return null
    const parts = splitTop(m[1])
    let angle = 180
    if (/^-?[\d.]+deg$/.test(parts[0])) angle = parseFloat(parts.shift())
    else if (/^to /.test(parts[0])) {
      const dir = parts.shift()
      angle = { "to top": 0, "to right": 90, "to bottom": 180, "to left": 270, "to top right": 45, "to bottom right": 135, "to bottom left": 225, "to top left": 315 }[dir] ?? 180
    }
    const stops = parts.map((p, i, all) => {
      const pm = /^(.*?)(?:\s+(-?[\d.]+)%)?$/.exec(p.replace(/\s+in\s+\w+$/, ""))
      const c = toRGBA(pm[1])
      const offset = pm[2] !== undefined ? parseFloat(pm[2]) / 100 : all.length > 1 ? i / (all.length - 1) : 0
      return `<stop offset="${r2(offset)}" stop-color="${hex(c)}"${c.a < 1 ? ` stop-opacity="${r2(c.a)}"` : ""}/>`
    })
    // CSS gradient line through the box center, long enough to reach the corners.
    const a = ((angle - 90) * Math.PI) / 180
    const len = Math.abs(w * Math.sin((angle * Math.PI) / 180)) + Math.abs(h * Math.cos((angle * Math.PI) / 180))
    const cx = x + w / 2, cy = y + h / 2
    const id = newId("g")
    defs.push(
      `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${r2(cx - (Math.cos(a) * len) / 2)}" y1="${r2(cy - (Math.sin(a) * len) / 2)}" x2="${r2(cx + (Math.cos(a) * len) / 2)}" y2="${r2(cy + (Math.sin(a) * len) / 2)}">${stops.join("")}</linearGradient>`
    )
    return `url(#${id})`
  }

  // Drop shadows in the shape Figma exports, so it re-imports them as effects.
  function shadowFilter(shadows, x, y, w, h, newId, defs) {
    const pad = Math.max(...shadows.map((s) => s.blur + Math.abs(s.x) + Math.abs(s.y) + Math.max(0, s.spread))) + 4
    const id = newId("f")
    const parts = [`<feFlood flood-opacity="0" result="BackgroundImageFix"/>`]
    let prev = "BackgroundImageFix"
    shadows
      .slice()
      .reverse()
      .forEach((s, i) => {
        parts.push(`<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>`)
        if (s.spread) parts.push(`<feMorphology radius="${r2(Math.abs(s.spread))}" operator="${s.spread > 0 ? "dilate" : "erode"}" in="SourceAlpha" result="effect${i + 1}_spread"/>`)
        parts.push(`<feOffset dx="${r2(s.x)}" dy="${r2(s.y)}"${s.spread ? ` in="effect${i + 1}_spread"` : ""}/>`)
        if (s.blur) parts.push(`<feGaussianBlur stdDeviation="${r2(s.blur / 2)}"/>`)
        parts.push(`<feComposite in2="hardAlpha" operator="out"/>`)
        parts.push(`<feColorMatrix type="matrix" values="0 0 0 0 ${r2(s.color.r / 255)} 0 0 0 0 ${r2(s.color.g / 255)} 0 0 0 0 ${r2(s.color.b / 255)} 0 0 0 ${r2(s.color.a)} 0"/>`)
        parts.push(`<feBlend mode="normal" in2="${prev}" result="effect${i + 1}_dropShadow"/>`)
        prev = `effect${i + 1}_dropShadow`
      })
    parts.push(`<feBlend mode="normal" in="SourceGraphic" in2="${prev}" result="shape"/>`)
    defs.push(
      `<filter id="${id}" x="${r2(x - pad)}" y="${r2(y - pad)}" width="${r2(w + pad * 2)}" height="${r2(h + pad * 2)}" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">${parts.join("")}</filter>`
    )
    return `url(#${id})`
  }

  const FIT = { cover: "xMidYMid slice", contain: "xMidYMid meet", none: "xMidYMid slice", "scale-down": "xMidYMid meet", fill: "none" }

  /**
   * @param {Element} root
   * @param {{ exclude?: Element }} opts
   * @returns {Promise<string>}
   */
  // ::before/::after have no DOM box to measure. For the duration of the copy, swap each
  // one for a real <span> with the same computed style (same layout), then put it back.
  function materializePseudos(root) {
    const style = document.createElement("style")
    style.textContent = "[data-cc-pseudo~=before]::before,[data-cc-pseudo~=after]::after{content:none!important}"
    const added = []
    const marked = []
    for (const el of [root, ...root.querySelectorAll("*")]) {
      if (el instanceof SVGElement || /^(img|input|textarea|select|br|hr|video|canvas|iframe)$/.test(el.localName)) continue
      for (const which of ["before", "after"]) {
        const ps = getComputedStyle(el, `::${which}`)
        const content = ps.content
        if (!content || content === "none" || content === "normal" || ps.display === "none") continue
        const span = document.createElement("span")
        span.setAttribute("data-cc-materialized", "")
        for (let i = 0; i < ps.length; i++) {
          const prop = ps[i]
          if (prop === "content" || prop.startsWith("--")) continue
          span.style.setProperty(prop, ps.getPropertyValue(prop))
        }
        const text = /^"((?:[^"\\]|\\.)*)"$/s.exec(content)?.[1]?.replace(/\\(.)/g, "$1") || ""
        span.textContent = text
        if (which === "before") el.insertBefore(span, el.firstChild)
        else el.appendChild(span)
        added.push(span)
        marked.push([el, which])
      }
    }
    if (!added.length) return () => {}
    for (const [el, which] of marked) {
      el.setAttribute("data-cc-pseudo", `${el.getAttribute("data-cc-pseudo") || ""} ${which}`.trim())
    }
    document.head.appendChild(style)
    return () => {
      added.forEach((s) => s.remove())
      marked.forEach(([el]) => el.removeAttribute("data-cc-pseudo"))
      style.remove()
    }
  }

  async function toSVG(root, opts = {}) {
    const restore = materializePseudos(root)
    try {
      return await render(root, opts)
    } finally {
      restore()
    }
  }

  async function render(root, opts) {
    const R = root.getBoundingClientRect()
    const ox = R.left, oy = R.top
    const W = Math.ceil(R.width), H = Math.ceil(R.height)
    const defs = []
    const images = [] // [{ token, url, el }]
    let uid = 0
    const newId = (p) => `${p}${++uid}`
    const used = new Map()
    const layerId = (el) => {
      let base = el.hasAttribute("data-cc-materialized") ? "pseudo" : el.localName
      if (el.id) base += `#${el.id}`
      else if (typeof el.className === "string" && el.className.trim()) base += `.${el.className.trim().split(/\s+/)[0]}`
      base = base.replace(/[^\w.#-]/g, "").slice(0, 48) || "layer"
      const n = (used.get(base) || 0) + 1
      used.set(base, n)
      return n === 1 ? base : `${base}-${n}`
    }
    const imageRef = (url, el) => {
      const token = `__img${images.length}__`
      images.push({ token, url, el })
      return token
    }

    function text(node, cs, out) {
      const raw = node.nodeValue || ""
      if (!raw.trim()) return
      const pre = /pre|break-spaces/.test(cs.whiteSpace)
      const range = document.createRange()
      const lines = []
      for (const m of raw.matchAll(/\S+/g)) {
        range.setStart(node, m.index)
        range.setEnd(node, m.index + m[0].length)
        for (const rect of range.getClientRects()) {
          if (!rect.width && !rect.height) continue
          let line = lines.find((l) => Math.abs(l.top - rect.top) < 2)
          if (!line) {
            line = { top: rect.top, left: rect.left, start: m.index, end: m.index + m[0].length }
            lines.push(line)
          }
          line.left = Math.min(line.left, rect.left)
          line.start = Math.min(line.start, m.index)
          line.end = Math.max(line.end, m.index + m[0].length)
          break
        }
      }
      if (!lines.length) return
      const { ascent } = fontMetrics(cs)
      const transform = (t) =>
        cs.textTransform === "uppercase" ? t.toUpperCase() : cs.textTransform === "lowercase" ? t.toLowerCase() : cs.textTransform === "capitalize" ? t.replace(/\b\w/g, (c) => c.toUpperCase()) : t
      const fill = paint("fill", cs.webkitTextFillColor && toRGBA(cs.webkitTextFillColor).a > 0 ? cs.webkitTextFillColor : cs.color)
      if (!fill) return
      const deco = cs.textDecorationLine && cs.textDecorationLine !== "none" ? ` text-decoration="${cs.textDecorationLine}"` : ""
      const ls = parseFloat(cs.letterSpacing)
      const tspans = lines
        .sort((a, b) => a.top - b.top)
        .map((l) => {
          let t = raw.slice(l.start, l.end)
          if (!pre) t = t.replace(/\s+/g, " ")
          return `<tspan x="${r2(l.left - ox)}" y="${r2(l.top - oy + ascent)}">${esc(transform(t))}</tspan>`
        })
      out.push(
        `<text ${fill} font-family="${esc(cs.fontFamily)}" font-size="${parseFloat(cs.fontSize)}" font-weight="${cs.fontWeight}"${cs.fontStyle !== "normal" ? ` font-style="${cs.fontStyle}"` : ""}${ls ? ` letter-spacing="${r2(ls)}"` : ""}${deco} xml:space="preserve">${tspans.join("")}</text>`
      )
    }

    // Text drawn inside a form control (value or placeholder).
    function controlText(el, cs, out) {
      let value = el.value
      let style = cs
      if (el.localName === "select") value = el.selectedOptions?.[0]?.text || ""
      if (!value && el.placeholder) {
        value = el.placeholder
        style = getComputedStyle(el, "::placeholder")
      }
      if (!value || el.type === "password" || el.type === "checkbox" || el.type === "radio") return
      const r = el.getBoundingClientRect()
      const bl = parseFloat(cs.borderLeftWidth) + parseFloat(cs.paddingLeft)
      const bt = parseFloat(cs.borderTopWidth) + parseFloat(cs.paddingTop)
      const bb = parseFloat(cs.borderBottomWidth) + parseFloat(cs.paddingBottom)
      const { ascent, descent } = fontMetrics(cs)
      const innerH = r.height - bt - bb
      const top = el.localName === "textarea" ? r.top + bt : r.top + bt + (innerH - (ascent + descent)) / 2
      const fill = paint("fill", style.color)
      if (!fill) return
      out.push(
        `<text ${fill} font-family="${esc(cs.fontFamily)}" font-size="${parseFloat(cs.fontSize)}" font-weight="${cs.fontWeight}" xml:space="preserve"><tspan x="${r2(r.left + bl - ox)}" y="${r2(top - oy + ascent)}">${esc(value.split("\n")[0])}</tspan></text>`
      )
    }

    // Inline <svg>: clone with resolved paint so it doesn't depend on CSS.
    function inlineSvg(el, x, y, w, h, out) {
      const clone = el.cloneNode(true)
      const src = [el, ...el.querySelectorAll("*")]
      const dst = [clone, ...clone.querySelectorAll("*")]
      src.forEach((s, i) => {
        const d = dst[i]
        const scs = getComputedStyle(s)
        for (const p of ["fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "opacity", "fill-opacity", "stroke-opacity", "fill-rule", "stop-color", "stop-opacity"]) {
          let v = scs.getPropertyValue(p)
          if (!v) continue
          if (/^(rgb|oklch|lab|color|#)/.test(v) || v === "currentcolor") {
            const c = toRGBA(v === "currentcolor" ? scs.color : v)
            if (p === "fill" || p === "stroke" || p === "stop-color") {
              if (s.hasAttribute(p) && s.getAttribute(p) === "none") continue
              d.setAttribute(p, c.a ? hex(c) : "none")
              if (c.a && c.a < 1) d.setAttribute(`${p === "stop-color" ? "stop" : p}-opacity`, r2(c.a))
              continue
            }
          }
          if (p === "fill" && v === "none") {
            d.setAttribute("fill", "none")
            continue
          }
          // CSS wins over presentation attributes (e.g. .lucide { stroke-width: 1.5 }).
          const attr = s.getAttribute(p)
          const value = v.replace(/px$/, "")
          if (attr !== null) {
            if (attr !== value && parseFloat(attr) !== parseFloat(value)) d.setAttribute(p, value)
          } else if (!/^(1|1px|normal)$/.test(v)) d.setAttribute(p, value)
        }
        d.removeAttribute("class")
        d.removeAttribute("style")
        for (const a of [...d.attributes]) if (/^(data-|on)/.test(a.name)) d.removeAttribute(a.name)
      })
      clone.setAttribute("x", r2(x))
      clone.setAttribute("y", r2(y))
      clone.setAttribute("width", r2(w))
      clone.setAttribute("height", r2(h))
      clone.setAttribute("id", layerId(el))
      if (!clone.getAttribute("viewBox") && el.viewBox?.baseVal?.width) {
        const vb = el.viewBox.baseVal
        clone.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.width} ${vb.height}`)
      }
      out.push(new XMLSerializer().serializeToString(clone).replace(/ xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, ""))
    }

    function element(el, out) {
      if (opts.exclude && (el === opts.exclude || opts.exclude.contains?.(el))) return
      const cs = getComputedStyle(el)
      if (cs.display === "none") return
      const tag = el.localName
      if (/^(script|style|noscript|template|head|meta|link)$/.test(tag)) return
      const opacity = parseFloat(cs.opacity)
      if (opacity === 0) return
      const visible = cs.visibility !== "hidden"
      const r = el.getBoundingClientRect()
      const x = r.left - ox, y = r.top - oy, w = r.width, h = r.height
      const g = []
      const rad = radii(cs, w, h)

      if (visible && w > 0 && h > 0) {
        const shape = boxShape(x, y, w, h, rad)
        const bg = toRGBA(cs.backgroundColor)
        const shadows = parseShadows(cs.boxShadow)
        if (bg.a > 0 && shape) {
          const filter = shadows.length ? ` filter="${shadowFilter(shadows, x, y, w, h, newId, defs)}"` : ""
          g.push(`${shape} ${paint("fill", cs.backgroundColor)}${filter}/>`)
        } else if (shadows.length && shape) {
          // Shadow without a background: draw it from an opaque copy of the box, masked out inside.
          const filter = shadowFilter(shadows, x, y, w, h, newId, defs)
          const mid = newId("m")
          defs.push(`<mask id="${mid}" maskUnits="userSpaceOnUse" x="${r2(x - 9999)}" y="${r2(y - 9999)}" width="${r2(w + 19998)}" height="${r2(h + 19998)}"><rect x="${r2(x - 9999)}" y="${r2(y - 9999)}" width="${r2(w + 19998)}" height="${r2(h + 19998)}" fill="#fff"/>${shape} fill="#000"/></mask>`)
          g.push(`<g mask="url(#${mid})">${shape} fill="#000" filter="${filter}"/></g>`)
        }
        // background-image layers (top layer first in CSS → paint last)
        if (cs.backgroundImage && cs.backgroundImage !== "none" && shape) {
          for (const layer of splitTop(cs.backgroundImage).reverse()) {
            if (layer.startsWith("linear-gradient")) {
              const fill = linearGradient(layer, x, y, w, h, newId, defs)
              if (fill) g.push(`${shape} fill="${fill}"/>`)
            } else {
              const url = /^url\(["']?(.*?)["']?\)$/.exec(layer)?.[1]
              if (!url) continue
              const size = cs.backgroundSize
              const par = size === "cover" ? "xMidYMid slice" : size === "contain" ? "xMidYMid meet" : "xMidYMid slice"
              const cid = newId("c")
              defs.push(`<clipPath id="${cid}">${shape}/></clipPath>`)
              g.push(`<image href="${imageRef(url)}" x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${r2(h)}" preserveAspectRatio="${par}" clip-path="url(#${cid})"/>`)
            }
          }
        }
        // borders
        const sides = ["top", "right", "bottom", "left"].map((s) => ({
          w: parseFloat(cs.getPropertyValue(`border-${s}-width`)) || 0,
          style: cs.getPropertyValue(`border-${s}-style`),
          color: cs.getPropertyValue(`border-${s}-color`),
        }))
        const drawn = sides.filter((s) => s.w > 0 && s.style !== "none" && s.style !== "hidden" && toRGBA(s.color).a > 0)
        if (drawn.length) {
          const same = drawn.length === 4 && sides.every((s) => s.w === sides[0].w && s.color === sides[0].color && s.style === sides[0].style)
          if (same) {
            const bw = sides[0].w
            const inner = boxShape(x + bw / 2, y + bw / 2, w - bw, h - bw, rad.map((v) => Math.max(0, v - bw / 2)))
            const dash = sides[0].style === "dashed" ? ` stroke-dasharray="${r2(bw * 3)} ${r2(bw * 3)}"` : sides[0].style === "dotted" ? ` stroke-dasharray="${r2(bw)} ${r2(bw)}" stroke-linecap="round"` : ""
            if (inner) g.push(`${inner} fill="none" ${paint("stroke", sides[0].color)} stroke-width="${r2(bw)}"${dash}/>`)
          } else {
            const [t, rt, b, l] = sides
            const rects = [
              t.w && [x, y, w, t.w, t], rt.w && [x + w - rt.w, y, rt.w, h, rt],
              b.w && [x, y + h - b.w, w, b.w, b], l.w && [x, y, l.w, h, l],
            ]
            for (const rc of rects) {
              if (!rc || rc[4].style === "none" || rc[4].style === "hidden") continue
              const f = paint("fill", rc[4].color)
              if (f) g.push(`<rect x="${r2(rc[0])}" y="${r2(rc[1])}" width="${r2(rc[2])}" height="${r2(rc[3])}" ${f}/>`)
            }
          }
        }
      }

      // content
      if (tag === "svg") {
        if (visible) inlineSvg(el, x, y, w, h, g)
      } else if (tag === "img" || tag === "video" || tag === "canvas") {
        if (visible) {
          let url = tag === "img" ? el.currentSrc || el.src : tag === "video" ? el.poster : null
          if (tag === "canvas") {
            try {
              url = el.toDataURL("image/png")
            } catch {
              url = null
            }
          }
          if (url) {
            const cid = newId("c")
            defs.push(`<clipPath id="${cid}">${boxShape(x, y, w, h, rad)}/></clipPath>`)
            g.push(`<image href="${imageRef(url, tag === "img" ? el : null)}" x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${r2(h)}" preserveAspectRatio="${FIT[cs.objectFit] || "none"}" clip-path="url(#${cid})"/>`)
          }
        }
      } else if (/^(input|textarea|select)$/.test(tag)) {
        if (visible) controlText(el, cs, g)
      } else {
        const kids = []
        const nodes = el.shadowRoot ? el.shadowRoot.childNodes : el.childNodes
        for (const child of nodes) {
          if (child.nodeType === Node.TEXT_NODE) {
            if (visible) text(child, cs, kids)
          } else if (child.nodeType === Node.ELEMENT_NODE) element(child, kids)
        }
        if (kids.length) {
          if (cs.overflowX !== "visible" || cs.overflowY !== "visible") {
            const bl = parseFloat(cs.borderLeftWidth) || 0, bt = parseFloat(cs.borderTopWidth) || 0
            const br = parseFloat(cs.borderRightWidth) || 0, bb = parseFloat(cs.borderBottomWidth) || 0
            const clip = boxShape(x + bl, y + bt, w - bl - br, h - bt - bb, rad.map((v) => Math.max(0, v - Math.max(bl, bt))))
            if (clip) {
              const cid = newId("c")
              defs.push(`<clipPath id="${cid}">${clip}/></clipPath>`)
              g.push(`<g clip-path="url(#${cid})">${kids.join("")}</g>`)
            } else g.push(...kids)
          } else g.push(...kids)
        }
      }

      if (!g.length) return
      out.push(`<g id="${esc(layerId(el))}"${opacity < 1 ? ` opacity="${r2(opacity)}"` : ""}>${g.join("")}</g>`)
    }

    const body = []
    element(root, body)

    let svg =
      `<svg xmlns="${SVG_NS}" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none">` +
      (defs.length ? `<defs>${defs.join("")}</defs>` : "") +
      body.join("") +
      `</svg>`

    // Embed images as data: URIs so design tools can show them.
    const embedded = await Promise.all(images.map((img) => embed(img.url, img.el)))
    images.forEach((img, i) => {
      svg = svg.split(img.token).join(esc(embedded[i] || img.url))
    })
    return svg
  }

  async function embed(url, imgEl) {
    if (!url || url.startsWith("data:")) return url
    try {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 6000)
      const res = await fetch(url, { signal: ctrl.signal, credentials: "omit" })
      clearTimeout(timer)
      if (!res.ok) throw new Error(res.status)
      const blob = await res.blob()
      return await new Promise((resolve, reject) => {
        const fr = new FileReader()
        fr.onload = () => resolve(fr.result)
        fr.onerror = reject
        fr.readAsDataURL(blob)
      })
    } catch {
      // Cross-origin without CORS: draw the already-loaded image (works if it isn't tainted).
      try {
        if (!imgEl?.naturalWidth) return url
        const c = document.createElement("canvas")
        c.width = imgEl.naturalWidth
        c.height = imgEl.naturalHeight
        c.getContext("2d").drawImage(imgEl, 0, 0)
        return c.toDataURL("image/png")
      } catch {
        return url
      }
    }
  }

  globalThis.__copycodeVector = { toSVG }
})()
