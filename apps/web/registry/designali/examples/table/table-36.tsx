"use client"

import * as React from "react"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const initialTracks = [
  { id: "t1", title: "Morning Static", artist: "Lumen Drive", length: "3:42" },
  { id: "t2", title: "Glass Harbor", artist: "Okra Sun", length: "4:10" },
  { id: "t3", title: "Paper Kites", artist: "Velvet Ash", length: "2:58" },
  { id: "t4", title: "Night Cycle", artist: "Lumen Drive", length: "5:01" },
]

export default function ReorderableRowsTable() {
  const [tracks, setTracks] = React.useState(initialTracks)
  const move = (index: number, dir: -1 | 1) =>
    setTracks((list) => {
      const next = [...list]
      const [item] = next.splice(index, 1)
      next.splice(index + dir, 0, item!)
      return next
    })

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Length</TableHead>
            <TableHead className="w-16">
              <span className="sr-only">Reorder</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tracks.map((track, i) => (
            <TableRow key={track.id}>
              <TableCell className="text-muted-foreground tabular-nums">
                {i + 1}
              </TableCell>
              <TableCell>
                <p className="font-medium">{track.title}</p>
                <p className="text-muted-foreground">{track.artist}</p>
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {track.length}
              </TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    disabled={i === 0}
                    onClick={() => move(i, -1)}
                    aria-label={"Move " + track.title + " up"}
                  >
                    <ArrowUpIcon />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    disabled={i === tracks.length - 1}
                    onClick={() => move(i, 1)}
                    aria-label={"Move " + track.title + " down"}
                  >
                    <ArrowDownIcon />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
