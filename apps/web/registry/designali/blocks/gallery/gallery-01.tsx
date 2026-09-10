"use client"

import { useState } from "react"
import Image from "next/image"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export interface GalleryItem {
  id: string
  title: string
  category: string
  src: string
  alt: string
}

const DEFAULT_ITEMS: GalleryItem[] = [
  { id: "1", title: "Modern Architecture", category: "Design", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", alt: "Architecture" },
  { id: "2", title: "Abstract Art", category: "Art", src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600", alt: "Abstract Art" },
  { id: "3", title: "Mountain Peak", category: "Nature", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600", alt: "Mountain" },
  { id: "4", title: "Minimal Interiors", category: "Design", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600", alt: "Interior" },
  { id: "5", title: "Forest Path", category: "Nature", src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600", alt: "Forest" },
  { id: "6", title: "Digital Portrait", category: "Art", src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600", alt: "Portrait" },
]

export function GalleryBlock01() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems = activeTab === "all"
    ? DEFAULT_ITEMS
    : DEFAULT_ITEMS.filter((item) => item.category.toLowerCase() === activeTab)

  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
          Visual Showcase
        </CardTitle>
        <CardDescription className="text-base">
          Browse through our curated collection of designs and media.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full items-center">
          <TabsList className="mx-auto flex w-fit">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="art">Art</TabsTrigger>
            <TabsTrigger value="nature">Nature</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {item.category}
                </Badge>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}