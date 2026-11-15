import {
  ChevronRightIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  FolderPlusIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

const folders = [
  {
    value: "brand",
    name: "Brand assets",
    files: ["logo-primary.svg", "logo-mono.svg", "palette.pdf"],
  },
  {
    value: "contracts",
    name: "Contracts",
    files: ["msa-northwind.pdf", "nda-template.docx"],
  },
  {
    value: "research",
    name: "User research",
    files: ["interview-notes.md", "survey-results.csv", "personas.fig"],
  },
]

export default function AccordionFileExplorer() {
  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="text-xs font-medium">Files</span>
        <Button size="icon-xs" variant="ghost" aria-label="New folder">
          <FolderPlusIcon />
        </Button>
      </div>
      <Accordion multiple defaultValue={["brand"]} className="p-1">
        {folders.map((folder) => (
          <AccordionItem
            key={folder.value}
            value={folder.value}
            className="border-none"
          >
            <AccordionTrigger className="items-center gap-1.5 px-2 py-1.5 font-normal hover:bg-muted hover:no-underline">
              <ChevronRightIcon className="size-3.5 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
              <FolderIcon className="size-4 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
              <FolderOpenIcon className="hidden size-4 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
              <span className="flex-1">{folder.name}</span>
              <span className="text-muted-foreground">
                {folder.files.length}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-1">
              {folder.files.map((file) => (
                <button
                  key={file}
                  type="button"
                  className="flex w-full items-center gap-1.5 py-1.5 ps-9 pe-2 text-start hover:bg-muted"
                >
                  <FileIcon className="size-3.5 text-muted-foreground" />
                  <span className="truncate">{file}</span>
                </button>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
