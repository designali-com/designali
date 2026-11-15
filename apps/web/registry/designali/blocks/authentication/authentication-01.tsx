import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function Authentication01() {
  return (
    <section className="grid min-h-[720px] w-full bg-background lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden border-e bg-foreground p-12 text-background lg:flex">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(var(--background) 1px, transparent 1px), linear-gradient(90deg, var(--background) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <a href="#" className="relative flex items-center gap-2 font-semibold">
          <span className="size-5 bg-background" />
          Ledgerly
        </a>
        <blockquote className="relative space-y-6">
          <p className="text-3xl leading-snug font-medium tracking-tight">
            &ldquo;We closed our books four days faster in the first month.
            Finance finally gets weekends back.&rdquo;
          </p>
          <footer className="text-sm text-background/60">
            Sofia Martins &middot; Controller, Brightline Logistics
          </footer>
        </blockquote>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Welcome back</h2>
            <p className="text-sm text-muted-foreground">
              Sign in to your Ledgerly workspace.
            </p>
          </div>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="auth-01-email">Email</Label>
              <Input
                id="auth-01-email"
                type="email"
                placeholder="name@company.com"
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
            New to Ledgerly?{" "}
            <a href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
