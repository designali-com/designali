import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7Z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

export default function Authentication02() {
  return (
    <section className="flex min-h-[720px] w-full items-center justify-center bg-muted/40 px-6 py-16">
      <div className="w-full max-w-md border bg-background">
        <div className="space-y-2 border-b p-8 text-center">
          <span className="mx-auto mb-4 flex size-10 items-center justify-center bg-primary text-sm font-semibold text-primary-foreground">
            Fx
          </span>
          <h2 className="text-2xl font-semibold tracking-tight">Create your account</h2>
          <p className="text-sm text-muted-foreground">
            Free for 14 days. No credit card required.
          </p>
        </div>
        <div className="space-y-6 p-8">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-10">
              <GoogleIcon />
              Google
            </Button>
            <Button variant="outline" className="h-10">
              <GitHubIcon />
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
              <Input id="auth-02-name" placeholder="Jordan Reyes" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auth-02-email">Work email</Label>
              <Input id="auth-02-email" type="email" placeholder="jordan@studio.com" className="h-10" />
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
          <a href="#" className="underline underline-offset-4">Terms</a> and{" "}
          <a href="#" className="underline underline-offset-4">Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}
