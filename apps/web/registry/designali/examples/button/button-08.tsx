import {
  Mail as MailIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const providers = [
  { label: "Continue with Google", glyph: "G" },
  { label: "Continue with GitHub", glyph: "GH" },
  { label: "Continue with Apple", glyph: "A" },
]

export default function SocialLoginButtons() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {providers.map((provider) => (
        <Button
          key={provider.label}
          variant="outline"
          className="w-full justify-start"
        >
          <span className="flex size-5 items-center justify-center bg-foreground text-[10px] font-semibold text-background">
            {provider.glyph}
          </span>
          <span className="flex-1 text-center">{provider.label}</span>
        </Button>
      ))}
      <Button className="w-full">
        <MailIcon data-icon="inline-start" />
        Continue with email
      </Button>
    </div>
  )
}
