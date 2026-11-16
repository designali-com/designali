import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { GridPattern } from "@/registry/designali/ui/grid-pattern"

export default function Authentication01() {
  return (
    <section className="grid min-h-[720px] w-full bg-background lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden border-e bg-foreground p-12 text-background lg:flex">
        <GridPattern
          width={56}
          height={56}
          className="stroke-background/20"
        />
        <a href="#" className="relative flex items-center gap-2 font-semibold">
          <span className="size-5 bg-background" />
          designali
        </a>
        <div className="relative flex justify-center">
          <Macbook variant="macbook-pro" color="silver" size="sm" className="max-w-full">
            <img
              src="/img/dashboard-1-light.jpg"
              alt="Designali dashboard"
              className="size-full object-cover"
            />
          </Macbook>
        </div>
        <blockquote className="relative space-y-6">
          <p className="text-3xl leading-snug font-medium tracking-tight">
            &ldquo;Where thoughtful design meets production-ready code.
            Design se code tak.&rdquo;
          </p>
          <footer className="text-sm text-background/60">
            Ali Imam &middot; Founder, Designali
          </footer>
        </blockquote>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Welcome back</h2>
            <p className="text-sm text-muted-foreground">
              Sign in to your Designali account.
            </p>
          </div>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="auth-01-email">Email</Label>
              <Input
                id="auth-01-email"
                type="email"
                placeholder="you@designali.com"
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="auth-01-password">Password</Label>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                  Forgot password?
                </a>
              </div>
              <Input id="auth-01-password" type="password" className="h-10" />
            </div>
            <Label className="text-sm font-normal text-muted-foreground">
              <Checkbox defaultChecked />
              Keep me signed in for 30 days
            </Label>
            <Button type="submit" size="lg" className="w-full">
              Sign in
              <ArrowRight />
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            New to Designali?{" "}
            <a href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
