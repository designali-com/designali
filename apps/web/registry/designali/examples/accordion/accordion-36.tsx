import {
  ChevronDown as ChevronDownIcon,
  FileCode as FileCodeIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { cn } from "@workspace/ui/lib/utils"

const files = [
  {
    value: "price",
    path: "src/pricing/template-price.ts",
    added: 4,
    removed: 2,
    diff: [
      { type: "remove", text: "const tax = subtotal * 0.2" },
      { type: "add", text: "const tax = subtotal * rateFor(region)" },
      { type: "context", text: "return subtotal + tax" },
    ],
  },
  {
    value: "region",
    path: "src/pricing/region.ts",
    added: 12,
    removed: 0,
    diff: [
      { type: "add", text: "export function rateFor(region: Region) {" },
      { type: "add", text: "  return RATES[region] ?? 0" },
      { type: "add", text: "}" },
    ],
  },
]

export default function AccordionCodeReviewFiles() {
  return (
    <Accordion
      multiple
      defaultValue={["price"]}
      className="w-full max-w-md gap-2"
    >
      {files.map((file) => (
        <AccordionItem
          key={file.value}
          value={file.value}
          className="border not-last:border-b"
        >
          <AccordionTrigger className="items-center bg-muted/50 px-3 font-sans hover:no-underline">
            <span className="flex min-w-0 items-center gap-2">
              <FileCodeIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate">{file.path}</span>
            </span>
            <span className="ms-auto me-2 flex gap-1.5">
              <span className="text-primary dark:text-primary">
                +{file.added}
              </span>
              <span className="text-destructive">-{file.removed}</span>
            </span>
            <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <pre className="overflow-x-auto font-mono text-[11px]">
              {file.diff.map((line) => (
                <div
                  key={line.text}
                  className={cn(
                    "px-3 py-0.5",
                    line.type === "add" && "bg-primary/10",
                    line.type === "remove" && "bg-destructive/10"
                  )}
                >
                  <span className="me-2 text-muted-foreground select-none">
                    {line.type === "add"
                      ? "+"
                      : line.type === "remove"
                        ? "-"
                        : " "}
                  </span>
                  {line.text}
                </div>
              ))}
            </pre>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
