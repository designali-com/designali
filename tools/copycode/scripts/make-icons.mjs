// Generates icons/icon{16,32,48,128}.png — a dark rounded square with a "</>" glyph.
// Run: node scripts/make-icons.mjs
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { deflateSync } from "node:zlib"

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "icons")
mkdirSync(outDir, { recursive: true })

const CRC = new Uint32Array(256).map((_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})
const crc32 = (buf) => {
  let c = 0xffffffff
  for (const b of buf) c = CRC[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
const chunk = (type, data) => {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const td = Buffer.concat([Buffer.from(type), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(td))
  return Buffer.concat([len, td, crc])
}
const png = (size, rgba) => {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr.set([8, 6, 0, 0, 0], 8)
  const raw = Buffer.alloc((size * 4 + 1) * size)
  for (let y = 0; y < size; y++) rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4)
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ])
}

const segDist = (px, py, [ax, ay], [bx, by]) => {
  const dx = bx - ax, dy = by - ay
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy))
}
const inRoundRect = (x, y, r) => {
  const cx = Math.max(r, Math.min(1 - r, x)), cy = Math.max(r, Math.min(1 - r, y))
  return Math.hypot(x - cx, y - cy) <= r
}

// "</>" in unit coordinates
const SEGMENTS = [
  [[0.33, 0.33], [0.17, 0.5]], [[0.17, 0.5], [0.33, 0.67]],
  [[0.67, 0.33], [0.83, 0.5]], [[0.83, 0.5], [0.67, 0.67]],
  [[0.56, 0.25], [0.44, 0.75]],
]
const BG = [10, 10, 12], FG = [255, 255, 255], ACCENT = [59, 130, 246]

for (const size of [16, 32, 48, 128]) {
  const stroke = size <= 16 ? 0.065 : size <= 32 ? 0.055 : 0.045
  const rgba = Buffer.alloc(size * size * 4)
  const SS = 4
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let a = 0, r = 0, g = 0, b = 0
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const u = (x + (sx + 0.5) / SS) / size
          const v = (y + (sy + 0.5) / SS) / size
          if (!inRoundRect(u, v, 0.22)) continue
          const onGlyph = SEGMENTS.some((s) => segDist(u, v, ...s) <= stroke)
          const isSlash = segDist(u, v, ...SEGMENTS[4]) <= stroke
          const c = onGlyph ? (isSlash ? ACCENT : FG) : BG
          a++; r += c[0]; g += c[1]; b += c[2]
        }
      }
      const i = (y * size + x) * 4
      if (a) rgba.set([r / a, g / a, b / a, (a / (SS * SS)) * 255], i)
    }
  }
  writeFileSync(join(outDir, `icon${size}.png`), png(size, rgba))
  console.log(`icons/icon${size}.png`)
}
