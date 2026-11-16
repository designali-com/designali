import {
  KeyRound,
  Lock,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

function GlyphMark({ letter }: { letter: string }) {
  return (
    <span className="flex size-5 items-center justify-center bg-foreground text-[10px] font-semibold text-background">
      {letter}
    </span>
  )
}

const providers = [
  { name: "Continue with GitHub", letter: "G" },
  { name: "Continue with Figma", letter: "F" },
]

export default function Forms07() {
  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto max-w-md px-6">
        <div className="border border-border bg-background p-6 shadow-sm md:p-10">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex size-7 items-center justify-center bg-primary text-primary-foreground">
              <Lock className="size-3.5" />
            </span>
            designali
          </div>
          <h2 className="mt-8 text-2xl font-semibold tracking-tight">
            Sign in to Designali
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            New here?{" "}
            <a href="#" className="text-foreground underline underline-offset-4">
              Create an account
            </a>
          </p>

          <div className="mt-8 grid gap-2">
            {providers.map((provider) => (
              <Button key={provider.name} variant="outline" size="lg" className="w-full">
                <GlyphMark letter={provider.letter} />
                {provider.name}
              </Button>
            ))}
            <Button variant="outline" size="lg" className="w-full">
              <KeyRound />
              Sign in with a passkey
            </Button>
          </div>

          <div className="my-8 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or with email
            <span className="h-px flex-1 bg-border" />
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="f7-email">Email</Label>
              <Input id="f7-email" type="email" autoComplete="email" placeholder="you@example.com" className="h-10" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="f7-password">Password</Label>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                  Forgot password?
                </a>
              </div>
              <Input id="f7-password" type="password" autoComplete="current-password" className="h-10" />
            </div>
            <Label className="flex items-center gap-2 text-xs font-normal text-muted-foreground">
              <Checkbox defaultChecked />
              Keep me signed in for 30 days
            </Label>
            <Button type="submit" size="lg" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          By signing in you agree to the Designali terms of use.
        </p>
      </div>
    </section>
  )
}
