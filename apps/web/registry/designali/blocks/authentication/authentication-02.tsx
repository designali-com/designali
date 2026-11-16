import { Github, GoogleIcon } from "@designali/logos"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function Authentication02() {
  return (
    <section className="flex min-h-[720px] w-full items-center justify-center bg-muted/40 px-6 py-16">
      <div className="w-full max-w-md border bg-background">
        <div className="space-y-2 border-b p-8 text-center">
          <span className="mx-auto mb-4 flex size-10 items-center justify-center bg-primary text-sm font-semibold text-primary-foreground">
            da
          </span>
          <h2 className="text-2xl font-semibold tracking-tight">Create your Designali account</h2>
          <p className="text-sm text-muted-foreground">
            Get free blocks, icons and templates from designali.com.
          </p>
        </div>
        <div className="space-y-6 p-8">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-10">
              <GoogleIcon className="size-4" />
              Google
            </Button>
            <Button variant="outline" className="h-10">
              <Github className="size-4" />
              GitHub
            </Button>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or with email
            <span className="h-px flex-1 bg-border" />
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="auth-02-name">Full name</Label>
              <Input id="auth-02-name" placeholder="Ali Imam" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auth-02-email">Work email</Label>
              <Input id="auth-02-email" type="email" placeholder="you@designali.com" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auth-02-password">Password</Label>
              <Input id="auth-02-password" type="password" placeholder="At least 8 characters" className="h-10" />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Create account
            </Button>
          </form>
        </div>
        <p className="border-t p-5 text-center text-xs text-muted-foreground">
          By continuing you agree to the{" "}
          <a href="https://www.designali.com/docs/legal/terms" className="underline underline-offset-4">Terms</a> and{" "}
          <a href="#" className="underline underline-offset-4">Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}
