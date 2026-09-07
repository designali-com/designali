import {
  ClaudeAIWordmark,
  CursorWordmark,
  GithubWordmark,
  GoogleWordmark,
  GrokWordmark,
  OpenAIWordmark,
  ReplicateWordmark,
} from "@designali/logos"

import { Marquee } from "@/registry/designali/ui/marquee"

export default function DemoOne() {
  return (
    <div className="flex h-80 w-full items-center justify-center overflow-hidden border">
      <main className="w-full">
        <Marquee gap={"80px"} speed={25} fade={true}>
          <OpenAIWordmark size={100} />
          <ClaudeAIWordmark size={100} />
          <ReplicateWordmark size={100} />
          <CursorWordmark size={100} />
          <GithubWordmark size={100} />
          <GrokWordmark size={100} />
          <GoogleWordmark className="mr-20" size={100} />
        </Marquee>
      </main>
    </div>
  )
}
