"use client"

import { TrophyIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"
import {
  Toast,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  useToastManager,
} from "@workspace/ui/components/toast"

const notify = createToastManager()

function AchievementToasts() {
  const { toasts } = useToastManager()
  return toasts.map((t) => (
    <Toast key={t.id} toast={t}>
      <ToastContent>
        <div className="flex size-10 shrink-0 items-center justify-center bg-gradient-to-br from-amber-400 to-orange-600 text-white">
          <TrophyIcon className="size-5" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
            Achievement unlocked
          </span>
          <ToastTitle />
          <ToastDescription className="text-xs" />
        </div>
      </ToastContent>
    </Toast>
  ))
}

export default function AchievementUnlockedToast() {
  return (
    <ToastProvider toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex justify-between text-sm">
          <span>Daily streak</span>
          <span className="font-medium">6 / 7 days</span>
        </div>
        <Progress value={86} />
        <Button
          size="sm"
          onClick={() =>
            notify.add({
              title: "Week warrior",
              description: "Practiced 7 days in a row. +50 XP",
            })
          }
        >
          Complete today&apos;s lesson
        </Button>
      </div>
      <ToastPortal>
        <ToastViewport>
          <AchievementToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}
