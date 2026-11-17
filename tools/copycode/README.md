# CopyCode

A Chrome extension: select any block on a web page and copy it exactly, as **code** or as an **image**. No separate buttons for design tools: code copies also carry HTML (Paper pastes it as layers), and SVG copies paste as vector layers in Figma and Paper.

| Tab | Formats |
| --- | --- |
| **Code** | **TSX** (Next.js + shadcn/ui + Tailwind, default) · **HTML** (inline styles) · **SVG** (vector code) |
| **Image** | **PNG** · **JPG** · **SVG** (vector image) |

## Install (developer mode)

1. Open `chrome://extensions`
2. Turn on **Developer mode** (top right)
3. Click **Load unpacked** and pick this folder (`tools/copycode`)
4. Pin CopyCode to the toolbar

No build step is needed. After you edit a file, press the reload icon on the extension card.

## Use

Click the CopyCode icon (or **Alt+Shift+C**), pick a tab and format, then hover and click a block.

While a copy is being built, a toast shows its progress (current step, percentage and a progress bar), for example "Loading breakpoints 3/6 · md" or "Embedding images 2/5". It turns into a summary when the copy is on the clipboard.

Keyboard: `C` / `I` tab · `1`–`3` format · `↑` / `↓` parent / child · `Enter` copy · `Esc` close.

### What goes on the clipboard

One copy holds several representations, and every app takes the one it understands:

| Copy | Code editor | Paper | Figma |
| --- | --- | --- | --- |
| Code · TSX / HTML | the code | HTML → frames and text layers | — (pastes the code as text) |
| Code · SVG, Image · SVG | SVG code | SVG | SVG markup → vector layers |
| Image · PNG / JPG | — | image | image |

All code copies also include `image/svg+xml` (vector layers) for apps that read it. For Figma layers, use an **SVG** format: Figma imports pasted SVG markup as layers.

Browsers can't put a JPEG on the clipboard as an image. **JPG** copies the block flattened onto its background (no transparency, like a JPG) as an image, plus the real JPEG bytes as `web image/jpeg`.

## TSX: Next.js + shadcn/ui + Tailwind

```tsx
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function SignupCard({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <Image className="w-full h-auto aspect-video object-cover" src="/hero.png" alt="" width={384} height={216} />
      <CardHeader>
        <CardTitle>Create account</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Link className="underline underline-offset-4 hover:text-foreground" href="/terms">Read terms</Link>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button size="lg">Continue <ArrowRightIcon /></Button>
      </CardFooter>
    </Card>
  )
}
```

- **shadcn components** are found by `data-slot` and mapped to this repo's components (340 slots from `packages/ui`):
  - `variant` / `size` and state props (`defaultChecked`, `value`, `orientation`, `disabled`) are detected.
  - Only the classes the site added on top are kept.
  - Parts the component renders itself (checkbox tick, select chevron) are skipped.
  - A component is used only when the site's version matches yours. Otherwise the copy is plain, exact elements.
- **Plain** `button` / `input` / `textarea` / `label` / `hr` map to `Button`, `Input`, `Textarea`, `Label` and `Separator`, with their look pinned.
- **Next.js**: links become `<Link>` (same-site URLs become app routes like `/pricing`), and images become `<Image>` with `width` / `height`. External image hosts are listed in a comment for `images.remotePatterns`.
- **Icons**: lucide icons become `<ArrowRightIcon />` from `lucide-react`.
- **Exact**: classes come from the browser's computed CSS and are checked against your project's real theme (Tailwind defaults + `packages/ui` overrides + `:root` tokens).
  - A named class (`rounded-xl`, `text-sm`, `bg-primary`…) is used only if it has the same value in your project. Otherwise the exact value is written (`rounded-[12px]`).
  - The site's `hover:` / `md:` / `dark:` classes are kept when they behave the same, or rewritten with the site's real values (`hover:bg-[#e8e3d9]`, `wide:` → `min-[1400px]:`).
- **Responsive**: TSX copies take a moment because the page is loaded again in hidden frames at mobile width (375px) and at each breakpoint up to your current width.
  - Breakpoints are your project's (`sm`, `md`, `lg`, `xl`, `2xl`) plus the site's own media-query widths, written as `min-[1080px]:`.
  - Each element's real styles at each width become mobile-first classes: `flex flex-col md:flex-row`, `hidden md:inline-block`, `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `text-3xl lg:text-5xl`.
  - This works for any site, Tailwind or plain CSS media queries.
  - Sites that block being framed fall back to the current width (the toast says so).
  - Elements hidden at your current width aren't copied (e.g. a mobile-only menu button). Copy at that width to get them.
- **Fonts**: `next/font` hashed names (`__Inter_d65c78`, `__Inter_Fallback_…`) are turned back into the real family (`Inter`). When it's a font your theme defines (`--font-sans`, `--font-heading`…), the class is `font-sans` / `font-heading`. Otherwise the family is written exactly, and a comment at the top lists the fonts to load (e.g. with `next/font/google`).
- Imports use `@/components/ui/*` and `@/lib/utils` (edit `UI_IMPORT` / `UTILS_IMPORT` in `content.js`).

After changing components or the theme in `packages/ui`, run `npm run shadcn` and `npm run tailwind`.

## JSX / HTML

Inline styles only, exactly as rendered. A value is left out only if the element gets it anyway, with or without a CSS reset, so the copy looks the same on a bare page and under Tailwind's preflight. `::placeholder` becomes one small scoped `<style>` rule.

## Figma and Paper

- **Figma**: the clipboard gets vector SVG as plain text. Figma turns pasted SVG markup into layers:
  - frames and groups named after the elements (`div.card`, `button`…)
  - rectangles with fills, borders, radius and drop shadows
  - text layers positioned line by line
  - embedded images and vector icons
- **Paper**: the clipboard gets inline-styled HTML. Paper is built on HTML/CSS, so it pastes as frames (with their flex layout) and text layers.

## Limitations

- HTML / SVG / images capture the current width; TSX is responsive. Hover / focus / animation states are kept where the site's Tailwind classes carry them (TSX).
- Web fonts are referenced by name, not bundled.
- PNG / JPG capture what's on screen; taller blocks are cropped.
- Figma format: rotation isn't applied.
- Cross-origin iframes, closed shadow roots and `chrome://` pages can't be read.

## Files

```
manifest.json                   MV3 manifest
background.js                   Injects the scripts; screenshots for PNG / JPG
content.js                      Toolbar, picker, capture, TSX/HTML output, clipboard
tailwind.js                     Computed CSS → Tailwind classes; reads the site's own classes
vector.js                       DOM → vector SVG (Figma)
tailwind-data.js                Generated: preflight, palette, project theme
shadcn-data.js                  Generated: data-slot → component map from packages/ui
scripts/build-tailwind-data.mjs npm run tailwind
scripts/build-shadcn-data.mjs   npm run shadcn
scripts/make-icons.mjs          npm run icons
```

`npm run zip` builds `copycode.zip` for the Chrome Web Store.
