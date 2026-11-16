import {
  Download,
  FileText,
  Film,
  Folder,
  Image as ImageIcon,
} from "@designali/icons"

import type * as React from "react"

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>

const files: {
  name: string
  icon: IconComponent
  size: string
  modified: string
  owner: string
}[] = [
  { name: "Designali brand guidelines.pdf", icon: FileText, size: "18.4 MB", modified: "2 hours ago", owner: "Ali Imam" },
  { name: "Designali logo package", icon: Folder, size: "42 files", modified: "Yesterday", owner: "Ali Imam" },
  { name: "Templates hero.png", icon: ImageIcon, size: "6.1 MB", modified: "Nov 10", owner: "Sara" },
  { name: "Colorful spheres motion.mp4", icon: Film, size: "312 MB", modified: "Nov 08", owner: "Omar" },
  { name: "Design se code tak - tone of voice.pdf", icon: FileText, size: "2.3 MB", modified: "Oct 29", owner: "Nina" },
]

export default function Lists05() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Shared with you</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">Designali brand assets</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs hover:bg-muted"
          >
            <Download className="size-3.5" />
            Download all
          </a>
        </div>

        <div className="mt-10 overflow-x-auto border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-border bg-muted/50 text-xs text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Owner</th>
                <th className="px-4 py-3 font-medium">Modified</th>
                <th className="px-4 py-3 text-right font-medium">Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {files.map((file) => (
                <tr key={file.name} className="hover:bg-muted/40">
                  <td className="px-4 py-3.5">
                    <span className="flex items-center gap-3">
                      <file.icon className="size-4 text-muted-foreground" />
                      {file.name}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-muted-foreground">{file.owner}</td>
                  <td className="px-4 py-3.5 text-muted-foreground">{file.modified}</td>
                  <td className="px-4 py-3.5 text-right font-mono text-xs text-muted-foreground">
                    {file.size}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
