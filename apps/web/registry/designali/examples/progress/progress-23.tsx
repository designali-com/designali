import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const skills = [
  { name: "Interface design", level: 92 },
  { name: "Design systems", level: 85 },
  { name: "Prototyping", level: 70 },
  { name: "Motion", level: 48 },
]

export default function ProfileSkillLevels() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Ali Imam</p>
          <p className="text-xs text-muted-foreground">
            Design engineer &middot; Designali
          </p>
        </div>
      </div>
      {skills.map((skill) => (
        <Progress key={skill.name} value={skill.level}>
          <ProgressLabel>{skill.name}</ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  )
}
