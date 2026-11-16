# CopyCode

A Chrome extension for selecting any block on a web page and getting an **exact copy** of it:

| Format | What you get |
| --- | --- |
| **TSX** (default) / **JSX** | React component with inline `style={{…}}`, exactly as the browser renders it (optional `className` prop) |
| **HTML** | The same as plain markup with inline styles |
| **Figma** | Real vectors (boxes, text, images, icons) to paste into **Figma** or **Paper** |
| **PNG** | Screenshot of the block (download only) |

No frameworks or class names: the output is plain, self-contained code that looks the same wherever you paste it.

## Install (developer mode)

1. Open `chrome://extensions`
2. Turn on **Developer mode** (top right)
3. Click **Load unpacked** and pick this folder (`tools/copycode`)
4. Pin CopyCode to the toolbar

No build step is needed. After you edit a file, press the reload icon on the extension card.

## Use

Click the CopyCode icon, or press **Alt+Shift+C**. A toolbar appears:

| Control | What it does |
| --- | --- |
| `TSX` `JSX` `HTML` `Figma` | Copy format (TSX by default; your last choice is remembered) |
| **Select** | Hover to highlight a block, click to copy it |
| **Download ▾** | Download the last block as `.tsx`, `.jsx`, `.html`, `.svg` or `.png`. If nothing is selected yet, the next click downloads. |
| `×` | Close |

Every copy shows a toast with a one-click download of the same block.

Keyboard: `↑` / `↓` parent / child · `Enter` copy · `D` download · `1`–`4` format · `Esc` close.

## Pasting into Figma and Paper

Choose **Figma** and click a block. The clipboard then holds an SVG (as text and as HTML), and pasting it into Figma or Paper creates editable layers:

- **Boxes** become rectangles with fill, border, per-corner radius and drop shadows (written the way Figma exports shadows, so they come back as Drop shadow effects). Linear gradients and background images are included.
- **Text** becomes text layers. Each rendered line is placed at its exact position, with the font family, size, weight, color, letter-spacing and decoration.
- **Images** are embedded (design tools don't load external URLs). Inline SVG icons stay vectors.
- `overflow: hidden` becomes a clip and opacity becomes layer opacity. `::before` / `::after` are included.
- Layers are named after the element (`div.card`, `button`, `h3`…).

If an app doesn't accept the paste, download **.svg** and drag the file in.

## Why the code is exact

- Styles come from `getComputedStyle`, so classes, CSS modules, inline styles and `[data-*]` selectors are all captured.
- A value is left out only if the element would get it anyway, with or without a CSS reset: it has to match a plain `<div>` *and* the tag's own browser default. So an `<h1>`'s margins, a `<button>`'s border or a list's padding are always written, and the copy looks the same on a bare page and in a project with Tailwind's preflight or normalize.css.
- Sizes are written only when the page's CSS sets them. Each one is checked by switching it to `auto` for a moment and measuring, so content-sized boxes stay flexible. `box-sizing` is written wherever a size is.
- `::before` / `::after` become `<span aria-hidden>` elements. `::placeholder` styling becomes one small scoped `<style>` rule.
- URLs are made absolute, lazy images are resolved, `<canvas>` becomes an image, and open shadow DOM and custom elements are flattened.

Tested by rendering copies next to their originals and comparing pixels. The HTML was identical on a plain page and under Tailwind's preflight, apart from anti-aliasing at a few edges.

## Limitations

- Captures the current state only: no hover / focus / animation states, and media queries are resolved at the width you copied at.
- Web fonts are referenced by name, not bundled. Figma uses the font if it's installed.
- In the Figma format, transforms (rotation) aren't applied, and text inside SVG is rasterized slightly differently from HTML.
- Cross-origin iframes and closed shadow roots can't be read.
- Chrome blocks extensions on `chrome://` pages and the Chrome Web Store.

## Files

```
manifest.json           MV3 manifest (activeTab, scripting, storage, clipboardWrite)
background.js           Injects the scripts; takes screenshots for PNG downloads
vector.js               Rendered DOM → vector SVG for Figma / Paper
content.js              Toolbar UI, picker, style capture, HTML/JSX serializers, downloads
icons/                  Generated PNG icons
scripts/make-icons.mjs  Regenerates icons
```

```sh
npm run icons
npm run zip     # copycode.zip for the Chrome Web Store
```

## Debugging

In DevTools, pick the **CopyCode** context in the console dropdown, select an element in the Elements panel, then run:

```js
__copycode.generate($0, "html").code
await __copycodeVector.toSVG($0)
```
