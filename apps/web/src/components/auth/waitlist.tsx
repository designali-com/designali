"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Alert,
  AlertDescription,
} from "@workspace/ui/components/alert"

import {
  Loader2,
  MailIcon,
  SparklesIcon,
} from "lucide-react"

import { Warp } from "@paper-design/shaders-react"

const waitlistInfo = [
  {
    icon: <MailIcon />,
    label: "Questions?",
    value: "hello@designali.com",
  },
  {
    icon: <SparklesIcon />,
    label: "Early Access",
    value: "Get access to new components and templates first",
  },
]

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative h-full w-full overflow-hidden border-t border-dotted"
    >
      <Warp
        className="absolute inset-0 z-0 h-full w-full"
        colors={["#00000000", "#8606fe"]}
        proportion={0.45}
        softness={2}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        speed={1}
      />

      <div className="relative mx-auto grid h-full w-full max-w-4xl border-x border-dotted bg-background/80 shadow-xl backdrop-blur-xs md:grid-cols-2">
        {/* Left Column */}
        <div className="col-span-1 flex flex-col space-y-4 p-8 lg:p-10">
          
          <h2 className="text-2xl font-medium md:text-3xl">
            Stay in the loop.
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Get early access to new UI components, templates, experiments,
            and everything we’re building at Designali.
          </p>

          <p className="max-w-md text-xs leading-relaxed text-muted-foreground md:text-sm">
            No spam. Just good design, useful code, and occasional updates.
          </p>

          <div className="grid gap-2 pt-4">
            {waitlistInfo.map((info) => (
              <InfoItem key={info.label} {...info} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 flex items-center border-t border-dotted p-8 md:border-t-0 md:border-l">
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}

function WaitlistForm() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
  })

  const [loading, setLoading] = useState(false)

  const [status, setStatus] = useState<{
    type: "success" | "error" | ""
    message: string
  }>({
    type: "",
    message: "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)

    setStatus({
      type: "",
      message: "",
    })

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName,
          email: form.email,
        }),
      })

      const contentType = response.headers.get("content-type")

      let data

      if (contentType?.includes("application/json")) {
        data = await response.json()
      } else {
        const text = await response.text()

        throw new Error(
          text || `Request failed with status ${response.status}`
        )
      }

      if (!response.ok) {
        throw new Error(
          data?.error || "Something went wrong."
        )
      }

      setStatus({
        type: "success",
        message:
          data?.message ||
          "🎉 You're in! We'll keep you updated with new Designali releases.",
      })

      setForm({
        firstName: "",
        email: "",
      })
    } catch (error) {
      console.error("Waitlist error:", error)

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">
            Name
          </FieldLabel>

          <Input
            id="name"
            className="h-12 pl-6"
            placeholder="Ali Imam"
            value={form.firstName}
            onChange={(e) =>
              setForm({
                ...form,
                firstName: e.target.value,
              })
            }
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">
            Email Address
          </FieldLabel>

          <Input
            id="email"
            type="email"
            required
            className="h-12 pl-6"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
        </Field>
      </FieldGroup>

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Community"
        )}
      </Button>

      {status.message && (
        <Alert
          className={
            status.type === "success"
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "border-destructive/40 bg-destructive/10 text-destructive"
          }
        >
          <AlertDescription>
            {status.message}
          </AlertDescription>
        </Alert>
      )}
    </form>
  )
}

type InfoItemProps = React.ComponentProps<"div"> & {
  icon: React.ReactNode
  label: string
  value: string
}

function InfoItem({
  icon,
  label,
  value,
  className,
  ...props
}: InfoItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 py-3",
        className
      )}
      {...props}
    >
      <div className="rounded-full border bg-card p-3 [&_svg]:size-5">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium">
          {label}
        </p>

        <p className="text-xs text-muted-foreground">
          {value}
        </p>
      </div>
    </div>
  )
}