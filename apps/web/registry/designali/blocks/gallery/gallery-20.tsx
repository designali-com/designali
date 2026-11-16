"use client"

import { useState } from "react"
import {
  Bookmark,
  Grid3x3,
  Heart,
  MessageCircle,
  Play,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const posts = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  likes: [1284, 932, 2410, 488, 1760, 3021, 655, 1149, 870][i]!,
  comments: [86, 41, 203, 17, 94, 312, 28, 77, 45][i]!,
  video: i === 1 || i === 5,
  gradient: `url("/img/ask/ask${i + 1}.jpg") center / cover`,
}))

const tabs = [
  { id: "posts", label: "Posts", icon: Grid3x3 },
  { id: "reels", label: "Reels", icon: Play },
  { id: "saved", label: "Saved", icon: Bookmark },
] as const

export default function Gallery20() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("posts")
  const [following, setFollowing] = useState(false)
  const visible = tab === "reels" ? posts.filter((p) => p.video) : tab === "saved" ? posts.slice(2, 6) : posts

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary via-primary to-chart-2 p-[3px] sm:size-32">
            <img
              src="/ali.jpg"
              alt="Ali Imam"
              className="size-full rounded-full border-2 border-background object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-semibold">designali.code</h2>
              <Button size="sm" variant={following ? "outline" : "default"} onClick={() => setFollowing((f) => !f)}>
                {following ? "Following" : "Follow"}
              </Button>
              <Button size="sm" variant="outline">Message</Button>
            </div>
            <dl className="mt-4 flex gap-6 text-sm">
              <div><dt className="sr-only">Posts</dt><dd><b>214</b> posts</dd></div>
              <div><dt className="sr-only">Followers</dt><dd><b>{following ? "48.3k" : "48.2k"}</b> followers</dd></div>
              <div><dt className="sr-only">Following</dt><dd><b>391</b> following</dd></div>
            </dl>
            <p className="mt-3 text-sm">
              <span className="font-medium">Designali</span> - design and development studio by Ali Imam. Brand
              identity, UI/UX, CGI and production-ready code. Design se code tak.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-10 border-t border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "-mt-px flex items-center gap-1.5 border-t py-3 text-xs font-medium tracking-wider uppercase",
                tab === t.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <t.icon className="size-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-1">
          {visible.map((post) => (
            <a key={post.id} href="https://www.instagram.com/designali.code/" className="group relative aspect-square overflow-hidden">
              <div className="absolute inset-0" style={{ background: post.gradient }} />
              {post.video && <Play className="absolute top-2 right-2 size-4 fill-white text-white" />}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:text-sm">
                <span className="flex items-center gap-1"><Heart className="size-4 fill-white" />{post.likes.toLocaleString()}</span>
                <span className="flex items-center gap-1"><MessageCircle className="size-4 fill-white" />{post.comments}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
