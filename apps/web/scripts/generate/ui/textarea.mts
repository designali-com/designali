import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "TextareaCharacterCount",
    description: "Controlled textarea with a live character counter and max length.",
    code: `
export default function TextareaCharacterCount() {
  const [value, setValue] = React.useState("")
  const max = 280

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ta-count">Status update</Label>
      <Textarea
        id="ta-count"
        value={value}
        maxLength={max}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What are you working on?"
      />
      <p className={cn("text-end text-xs tabular-nums", value.length > max - 20 ? "text-destructive" : "text-muted-foreground")}>
        {value.length}/{max}
      </p>
    </div>
  )
}`,
  },
  {
    name: "DisabledTextarea",
    description: "Disabled textarea with an explanation of why editing is locked.",
    code: `
export default function DisabledTextarea() {
  return (
    <Field data-disabled="true" className="w-full max-w-sm">
      <FieldLabel htmlFor="ta-disabled">Contract terms</FieldLabel>
      <Textarea
        id="ta-disabled"
        disabled
        defaultValue="Payment is due within 30 days of invoice. Late payments incur a 1.5% monthly fee."
      />
      <FieldDescription className="flex items-center gap-1">
        <LockIcon className="size-3" />
        Locked after signature on Nov 3, 2026.
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "InvalidTextarea",
    description: "Textarea in an invalid state with an inline field error.",
    code: `
export default function InvalidTextarea() {
  return (
    <Field data-invalid="true" className="w-full max-w-sm">
      <FieldLabel htmlFor="ta-invalid">Reason for refund</FieldLabel>
      <Textarea id="ta-invalid" aria-invalid defaultValue="bad" />
      <FieldError>Please describe the issue in at least 20 characters.</FieldError>
    </Field>
  )
}`,
  },
  {
    name: "ReadOnlyKeyTextarea",
    description: "Read-only monospace textarea holding a public key with a copy action.",
    code: `
const key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK3m9qP0xVb7rT2sYw8fLh4cN1jQeZ6uD5oG2aRk9WvX deploy@orbit-ci"

export default function ReadOnlyKeyTextarea() {
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="ta-key">Deploy key</Label>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => { void navigator.clipboard?.writeText(key); setCopied(true) }}
        >
          {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <Textarea id="ta-key" readOnly value={key} className="resize-none bg-muted/40 font-mono break-all" />
    </div>
  )
}`,
  },
  {
    name: "AutoGrowTextarea",
    description: "Textarea that grows with its content up to a maximum height, then scrolls.",
    code: `
export default function AutoGrowTextarea() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ta-grow">Meeting agenda</Label>
      <Textarea
        id="ta-grow"
        rows={1}
        className="min-h-9 max-h-40 resize-none"
        placeholder="Type and press Enter, the box grows with you…"
      />
      <p className="text-xs text-muted-foreground">Grows up to 10 lines, then scrolls.</p>
    </div>
  )
}`,
  },
  {
    name: "TextareaResizeModes",
    description: "Side-by-side textareas showing no resize, vertical resize and fixed rows.",
    code: `
const modes = [
  { label: "No resize", className: "resize-none" },
  { label: "Vertical", className: "resize-y [field-sizing:fixed]" },
  { label: "Fixed 4 rows", className: "resize-none [field-sizing:fixed]", rows: 4 },
]

export default function TextareaResizeModes() {
  return (
    <div className="grid w-full max-w-md gap-3 sm:grid-cols-3">
      {modes.map((m) => (
        <div key={m.label} className="grid content-start gap-1.5">
          <Label htmlFor={"ta-" + m.label}>{m.label}</Label>
          <Textarea id={"ta-" + m.label} rows={m.rows} className={m.className} placeholder="Notes" />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ChatComposerTextarea",
    description: "Chat composer built with an input group textarea, attach and send buttons, sending on Enter.",
    code: `
export default function ChatComposerTextarea() {
  const [messages, setMessages] = React.useState(["Hey! Are we still on for the demo at 4?"])
  const [draft, setDraft] = React.useState("")

  function send() {
    if (!draft.trim()) return
    setMessages([...messages, draft.trim()])
    setDraft("")
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-col gap-1.5">
        {messages.map((m, i) => (
          <p key={i} className={cn("max-w-[80%] px-3 py-2 text-xs", i === 0 ? "self-start bg-muted" : "self-end bg-primary text-primary-foreground")}>
            {m}
          </p>
        ))}
      </div>
      <InputGroup>
        <InputGroupTextarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send() }
          }}
          placeholder="Message Theo…"
          className="max-h-32"
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="icon-xs" aria-label="Attach file"><PaperclipIcon /></InputGroupButton>
          <InputGroupButton size="icon-xs" variant="default" className="ms-auto" aria-label="Send" onClick={send} disabled={!draft.trim()}>
            <SendIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,
  },
  {
    name: "CommentBoxWithAvatar",
    description: "Comment box with the author's avatar and a submit button that enables once text is entered.",
    code: `
export default function CommentBoxWithAvatar() {
  const [text, setText] = React.useState("")

  return (
    <div className="flex w-full max-w-md gap-3">
      <Avatar>
        <AvatarFallback>MB</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-2">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment…"
          aria-label="Comment"
        />
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm" onClick={() => setText("")} disabled={!text}>Cancel</Button>
          <Button size="sm" disabled={!text.trim()}>Comment</Button>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FeedbackRatingTextarea",
    description: "Feedback widget pairing an emoji-style rating with a follow-up textarea.",
    code: `
const moods = [
  { value: "bad", label: "Bad", icon: FrownIcon },
  { value: "ok", label: "Okay", icon: MehIcon },
  { value: "good", label: "Good", icon: SmileIcon },
]

export default function FeedbackRatingTextarea() {
  const [mood, setMood] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <p className="text-sm font-medium">How was your checkout experience?</p>
      <div className="flex gap-2">
        {moods.map((m) => (
          <Button
            key={m.value}
            variant={mood === m.value ? "default" : "outline"}
            size="sm"
            onClick={() => setMood(m.value)}
            aria-pressed={mood === m.value}
          >
            <m.icon data-icon="inline-start" />
            {m.label}
          </Button>
        ))}
      </div>
      <Textarea
        disabled={!mood}
        placeholder={mood === "bad" ? "Sorry to hear that. What went wrong?" : "Anything we could do better?"}
        aria-label="Feedback details"
      />
      <Button size="sm" disabled={!mood} className="self-end">Send feedback</Button>
    </div>
  )
}`,
  },
  {
    name: "SupportTicketForm",
    description: "Support ticket form with a subject input, description textarea and attachment button.",
    code: `
export default function SupportTicketForm() {
  return (
    <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="st-subject">Subject</FieldLabel>
          <Input id="st-subject" placeholder="Can't export invoices to CSV" />
        </Field>
        <Field>
          <FieldLabel htmlFor="st-body">Describe the problem</FieldLabel>
          <Textarea id="st-body" className="min-h-28" placeholder="Steps to reproduce, what you expected, what happened…" />
          <FieldDescription>Include any error codes you saw.</FieldDescription>
        </Field>
        <div className="flex items-center justify-between">
          <Button type="button" variant="outline" size="sm"><PaperclipIcon data-icon="inline-start" />Attach</Button>
          <Button type="submit" size="sm">Submit ticket</Button>
        </div>
      </FieldGroup>
    </form>
  )
}`,
  },
  {
    name: "ProductReviewTextarea",
    description: "Product review form with star rating and a minimum-length textarea check.",
    code: `
export default function ProductReviewTextarea() {
  const [stars, setStars] = React.useState(4)
  const [text, setText] = React.useState("")
  const tooShort = text.length > 0 && text.length < 30

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-1" role="radiogroup" aria-label="Rating">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" role="radio" aria-checked={stars === n} aria-label={n + " stars"} onClick={() => setStars(n)}>
            <StarIcon className={cn("size-5", n <= stars ? "fill-amber-400 text-amber-400" : "text-muted-foreground")} />
          </button>
        ))}
      </div>
      <Field data-invalid={tooShort || undefined}>
        <FieldLabel htmlFor="pr-text">Your review</FieldLabel>
        <Textarea id="pr-text" value={text} aria-invalid={tooShort || undefined} onChange={(e) => setText(e.target.value)} placeholder="How did the Alder desk lamp work out?" />
        {tooShort ? (
          <FieldError>{30 - text.length} more characters needed.</FieldError>
        ) : (
          <FieldDescription>Minimum 30 characters.</FieldDescription>
        )}
      </Field>
      <Button size="sm" disabled={text.length < 30}>Post review</Button>
    </div>
  )
}`,
  },
  {
    name: "ProfileBioTextarea",
    description: "Profile bio textarea with a progress bar showing how much of the limit is used.",
    code: `
export default function ProfileBioTextarea() {
  const [bio, setBio] = React.useState("Product designer in Oslo. Into type, trains and tiny apps.")
  const max = 160

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Bio</CardTitle>
        <CardDescription>Shown on your public profile.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Textarea value={bio} maxLength={max} onChange={(e) => setBio(e.target.value)} aria-label="Bio" />
        <div className="flex items-center gap-2">
          <Progress value={(bio.length / max) * 100} className="flex-1" />
          <span className="text-xs tabular-nums text-muted-foreground">{max - bio.length} left</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "MarkdownToolbarTextarea",
    description: "Textarea with a formatting toolbar that wraps the current selection in markdown syntax.",
    code: `
const tools = [
  { label: "Bold", icon: BoldIcon, before: "**", after: "**" },
  { label: "Italic", icon: ItalicIcon, before: "_", after: "_" },
  { label: "Code", icon: CodeIcon, before: "\`", after: "\`" },
  { label: "Link", icon: LinkIcon, before: "[", after: "](https://)" },
]

export default function MarkdownToolbarTextarea() {
  const ref = React.useRef<null | HTMLTextAreaElement>(null)
  const [value, setValue] = React.useState("Select some text and press a button.")

  function wrap(before: string, after: string) {
    const el = ref.current
    if (!el) return
    const { selectionStart: s, selectionEnd: e } = el
    setValue(value.slice(0, s) + before + value.slice(s, e) + after + value.slice(e))
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(s + before.length, e + before.length)
    })
  }

  return (
    <div className="w-full max-w-md border">
      <div className="flex gap-0.5 border-b p-1">
        {tools.map((t) => (
          <Button key={t.label} variant="ghost" size="icon-sm" aria-label={t.label} onClick={() => wrap(t.before, t.after)}>
            <t.icon />
          </Button>
        ))}
      </div>
      <Textarea
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="min-h-24 border-0 focus-visible:ring-0"
        aria-label="Markdown"
      />
    </div>
  )
}`,
  },
  {
    name: "MentionSuggestionsTextarea",
    description: "Textarea that shows teammate suggestions when the user types an @ mention.",
    code: `
const people = ["Amara Osei", "Bruno Costa", "Chloe Martin", "Diego Alvarez"]

export default function MentionSuggestionsTextarea() {
  const [value, setValue] = React.useState("Thanks for the review ")
  const match = /@(\\w*)$/.exec(value)
  const query = match?.[1]?.toLowerCase() ?? null
  const results = query === null ? [] : people.filter((p) => p.toLowerCase().includes(query))

  function pick(name: string) {
    setValue(value.replace(/@\\w*$/, "@" + name.split(" ")[0] + " "))
  }

  return (
    <div className="relative w-full max-w-sm">
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} aria-label="Reply" placeholder="Type @ to mention" />
      {results.length > 0 && (
        <div className="absolute inset-x-0 top-full z-10 mt-1 border bg-popover p-1 shadow-md">
          {results.map((p) => (
            <button key={p} type="button" onClick={() => pick(p)} className="flex w-full items-center gap-2 px-2 py-1.5 text-start text-xs hover:bg-muted">
              <Avatar size="sm"><AvatarFallback>{p.split(" ").map((x) => x[0]).join("")}</AvatarFallback></Avatar>
              {p}
            </button>
          ))}
        </div>
      )}
      <p className="mt-1.5 text-xs text-muted-foreground">Try typing @ch</p>
    </div>
  )
}`,
  },
  {
    name: "AIPromptTextarea",
    description: "AI prompt box with a model badge, attachment button and Cmd+Enter submit hint.",
    code: `
export default function AIPromptTextarea() {
  const [prompt, setPrompt] = React.useState("")
  const [sent, setSent] = React.useState<string | null>(null)

  function submit() {
    if (!prompt.trim()) return
    setSent(prompt.trim())
    setPrompt("")
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <InputGroup>
        <InputGroupTextarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); submit() }
          }}
          placeholder="Ask anything about your sales data…"
          className="min-h-20"
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="icon-xs" variant="outline" aria-label="Add context"><PlusIcon /></InputGroupButton>
          <Badge variant="secondary"><SparklesIcon />Quill 2</Badge>
          <InputGroupText className="ms-auto"><KbdGroup><Kbd>⌘</Kbd><Kbd>↵</Kbd></KbdGroup></InputGroupText>
          <InputGroupButton size="icon-xs" variant="default" aria-label="Submit" onClick={submit} disabled={!prompt.trim()}>
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      {sent && <p className="text-xs text-muted-foreground">Asked: {sent}</p>}
    </div>
  )
}`,
  },
  {
    name: "JsonEditorTextarea",
    description: "Monospace JSON textarea that validates on demand and reports parse errors.",
    code: `
export default function JsonEditorTextarea() {
  const [value, setValue] = React.useState('{\\n  "retries": 3,\\n  "timeout": 5000\\n}')
  const [status, setStatus] = React.useState<{ ok: boolean; msg: string } | null>(null)

  function validate() {
    try {
      const keys = Object.keys(JSON.parse(value) as object)
      setStatus({ ok: true, msg: "Valid JSON · " + keys.length + " keys" })
    } catch (err) {
      setStatus({ ok: false, msg: (err as Error).message })
    }
  }

  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="ta-json">Webhook config</Label>
      <Textarea
        id="ta-json"
        value={value}
        spellCheck={false}
        aria-invalid={status?.ok === false || undefined}
        onChange={(e) => { setValue(e.target.value); setStatus(null) }}
        className="min-h-28 font-mono"
      />
      <div className="flex items-center justify-between gap-2">
        <span className={cn("truncate text-xs", status?.ok ? "text-emerald-600" : "text-destructive")}>{status?.msg}</span>
        <Button variant="outline" size="sm" onClick={validate}>Validate</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "QuickReplyTemplates",
    description: "Support reply textarea with saved-reply chips that insert template text.",
    code: `
const templates = [
  { label: "Greeting", text: "Hi there, thanks for reaching out! " },
  { label: "Refund", text: "I've issued a full refund, it should appear within 5 business days. " },
  { label: "Closing", text: "Let me know if there's anything else I can help with." },
]

export default function QuickReplyTemplates() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex flex-wrap gap-1.5">
        {templates.map((t) => (
          <Button key={t.label} variant="outline" size="xs" onClick={() => setValue(value + t.text)}>
            <ZapIcon data-icon="inline-start" />
            {t.label}
          </Button>
        ))}
      </div>
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} className="min-h-24" placeholder="Reply to Hana…" aria-label="Reply" />
      <div className="flex justify-end">
        <Button size="sm" disabled={!value}>Send reply</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CancellationReasonTextarea",
    description: "Cancellation survey where choosing Other reveals a required textarea.",
    code: `
const reasons = ["Too expensive", "Missing features", "Switching to another tool", "Other"]

export default function CancellationReasonTextarea() {
  const [reason, setReason] = React.useState("Too expensive")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <p className="text-sm font-medium">Why are you cancelling?</p>
      <RadioGroup value={reason} onValueChange={(v) => setReason(v as string)}>
        {reasons.map((r) => (
          <Field key={r} orientation="horizontal">
            <RadioGroupItem value={r} id={"cr-" + r} />
            <FieldLabel htmlFor={"cr-" + r} className="font-normal">{r}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {reason === "Other" && (
        <Textarea autoFocus required placeholder="Tell us a bit more…" aria-label="Other reason" />
      )}
      <Button variant="destructive" size="sm">Cancel subscription</Button>
    </div>
  )
}`,
  },
  {
    name: "EmailComposerTextarea",
    description: "Email composer with recipient and subject inputs above a message body textarea.",
    code: `
export default function EmailComposerTextarea() {
  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-2 border-b px-3 py-1.5 text-xs">
        <span className="text-muted-foreground">To</span>
        <Badge variant="secondary">liam@greenhouse.studio</Badge>
      </div>
      <Input placeholder="Subject" aria-label="Subject" className="border-0 border-b focus-visible:ring-0" defaultValue="Revised quote for the spring campaign" />
      <Textarea
        aria-label="Message"
        className="min-h-32 border-0 focus-visible:ring-0"
        defaultValue={"Hi Liam,\\n\\nAttached is the revised quote. The main change is the shorter shoot schedule.\\n\\nBest,\\nAvery"}
      />
      <div className="flex items-center justify-between border-t p-2">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Attach"><PaperclipIcon /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Discard"><Trash2Icon /></Button>
        </div>
        <Button size="sm"><SendIcon data-icon="inline-start" />Send</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AutosaveTextarea",
    description: "Notes textarea that autosaves after typing stops and shows the save status.",
    code: `
export default function AutosaveTextarea() {
  const [value, setValue] = React.useState("Call the venue about the projector.")
  const [status, setStatus] = React.useState<"saved" | "saving" | "idle">("saved")

  React.useEffect(() => {
    if (status !== "idle") return
    const save = setTimeout(() => setStatus("saving"), 600)
    return () => clearTimeout(save)
  }, [value, status])

  React.useEffect(() => {
    if (status !== "saving") return
    const done = setTimeout(() => setStatus("saved"), 700)
    return () => clearTimeout(done)
  }, [status])

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="ta-autosave">Private notes</Label>
        <span className="flex items-center gap-1 text-xs text-muted-foreground" aria-live="polite">
          {status === "saving" && <><Spinner className="size-3" />Saving…</>}
          {status === "saved" && <><CloudCheckIcon className="size-3.5" />Saved</>}
          {status === "idle" && "Editing"}
        </span>
      </div>
      <Textarea id="ta-autosave" value={value} onChange={(e) => { setValue(e.target.value); setStatus("idle") }} />
    </div>
  )
}`,
  },
  {
    name: "ClearableTextarea",
    description: "Textarea with an inline clear button that appears once it has content.",
    code: `
export default function ClearableTextarea() {
  const [value, setValue] = React.useState("Pick up dry cleaning, buy oat milk, return library books")

  return (
    <div className="relative w-full max-w-sm">
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} className="pe-8" aria-label="Errands" placeholder="Errands for today" />
      {value && (
        <Button variant="ghost" size="icon-xs" aria-label="Clear" onClick={() => setValue("")} className="absolute end-1.5 top-1.5">
          <XIcon />
        </Button>
      )}
    </div>
  )
}`,
  },
  {
    name: "KeyboardSubmitNotes",
    description: "Quick-notes textarea that adds entries with Cmd/Ctrl+Enter and lists them below.",
    code: `
export default function KeyboardSubmitNotes() {
  const [notes, setNotes] = React.useState<string[]>(["Ask design for the empty state"])
  const [draft, setDraft] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && draft.trim()) {
            e.preventDefault()
            setNotes([draft.trim(), ...notes])
            setDraft("")
          }
        }}
        placeholder="Jot something down"
        aria-label="New note"
      />
      <p className="flex items-center gap-1 text-xs text-muted-foreground">
        Press <KbdGroup><Kbd>⌘</Kbd><Kbd>Enter</Kbd></KbdGroup> to add
      </p>
      <ul className="divide-y border text-xs">
        {notes.map((n, i) => <li key={i} className="px-3 py-2">{n}</li>)}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "StickyNoteTextarea",
    description: "Sticky-note styled textarea with selectable note colours.",
    code: `
const colors = [
  { name: "Lemon", className: "bg-yellow-100 dark:bg-yellow-900/40" },
  { name: "Mint", className: "bg-emerald-100 dark:bg-emerald-900/40" },
  { name: "Rose", className: "bg-rose-100 dark:bg-rose-900/40" },
]

export default function StickyNoteTextarea() {
  const [color, setColor] = React.useState(colors[0]!)

  return (
    <div className={cn("flex w-full max-w-60 flex-col gap-2 p-3 shadow-md", color.className)}>
      <Textarea
        defaultValue="Retro Thursday: bring one thing that went well and one thing to change."
        className="min-h-32 border-0 bg-transparent text-sm focus-visible:ring-0 dark:bg-transparent"
        aria-label="Sticky note"
      />
      <div className="flex gap-1.5">
        {colors.map((c) => (
          <button
            key={c.name}
            type="button"
            aria-label={c.name}
            onClick={() => setColor(c)}
            className={cn("size-4 rounded-full border", c.className, color.name === c.name && "ring-2 ring-foreground/40")}
          />
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "WordLimitEssayTextarea",
    description: "Application essay textarea that turns invalid when it exceeds a word limit.",
    code: `
export default function WordLimitEssayTextarea() {
  const [text, setText] = React.useState("")
  const limit = 50
  const words = text.trim() ? text.trim().split(/\\s+/).length : 0
  const over = words > limit

  return (
    <Field data-invalid={over || undefined} className="w-full max-w-sm">
      <FieldLabel htmlFor="ta-essay">Why do you want to join the residency?</FieldLabel>
      <Textarea id="ta-essay" value={text} aria-invalid={over || undefined} onChange={(e) => setText(e.target.value)} className="min-h-28" />
      <div className="flex justify-between text-xs">
        {over ? <FieldError>Please trim {words - limit} words.</FieldError> : <FieldDescription>Up to {limit} words.</FieldDescription>}
        <span className={cn("tabular-nums", over ? "text-destructive" : "text-muted-foreground")}>{words}/{limit}</span>
      </div>
    </Field>
  )
}`,
  },
  {
    name: "DeliveryInstructionsTextarea",
    description: "Checkout delivery-instructions textarea with quick suggestion chips.",
    code: `
const hints = ["Leave at door", "Ring twice", "Call on arrival", "Side entrance"]

export default function DeliveryInstructionsTextarea() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <div className="flex items-center gap-2 text-sm font-medium"><TruckIcon className="size-4" />Delivery instructions</div>
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} maxLength={200} placeholder="Gate code, where to leave the parcel…" aria-label="Delivery instructions" />
      <div className="flex flex-wrap gap-1.5">
        {hints.map((h) => (
          <Badge
            key={h}
            variant="outline"
            render={<button type="button" />}
            onClick={() => setValue(value ? value + ". " + h : h)}
            className="cursor-pointer"
          >
            + {h}
          </Badge>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "GiftMessageTextarea",
    description: "Gift options with a switch that reveals a gift-message textarea.",
    code: `
export default function GiftMessageTextarea() {
  const [gift, setGift] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <GiftIcon className="size-4" />
          <Label htmlFor="gm-switch">This order is a gift</Label>
        </div>
        <Switch id="gm-switch" checked={gift} onCheckedChange={setGift} />
      </div>
      {gift && (
        <div className="grid gap-1.5">
          <Label htmlFor="gm-text" className="text-muted-foreground">Gift message (printed on the card)</Label>
          <Textarea id="gm-text" maxLength={150} defaultValue="Happy birthday, Sol! Enjoy the new kettle. Love, Ines" className="font-serif text-sm" />
          <p className="text-xs text-muted-foreground">Prices are hidden on the packing slip.</p>
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "BulkInviteTextarea",
    description: "Bulk invite textarea that parses pasted emails into valid and invalid badges.",
    code: `
export default function BulkInviteTextarea() {
  const [raw, setRaw] = React.useState("maya@loom.dev, kenji@loom.dev\\nnot-an-email\\nzara@loom.dev")
  const entries = raw.split(/[\\s,;]+/).filter(Boolean)
  const isValid = (e: string) => /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(e)
  const valid = entries.filter(isValid)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="ta-invite">Invite by email</Label>
      <Textarea id="ta-invite" value={raw} onChange={(e) => setRaw(e.target.value)} className="min-h-20" placeholder="Paste emails separated by commas or new lines" />
      <div className="flex flex-wrap gap-1">
        {entries.map((e, i) => (
          <Badge key={i} variant={isValid(e) ? "secondary" : "destructive"}>{e}</Badge>
        ))}
      </div>
      <Button size="sm" disabled={!valid.length}>
        <SendIcon data-icon="inline-start" />
        Send {valid.length} invite{valid.length === 1 ? "" : "s"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "EnvVariablesTextarea",
    description: "Paste-in textarea for KEY=VALUE environment variables with a parsed preview.",
    code: `
export default function EnvVariablesTextarea() {
  const [raw, setRaw] = React.useState("DATABASE_URL=postgres://localhost/app\\nPAYMENTS_KEY=key_demo_123\\n# comment\\nPORT=3000")
  const vars = raw
    .split("\\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)] as const)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="ta-env">Environment variables</Label>
      <Textarea id="ta-env" value={raw} onChange={(e) => setRaw(e.target.value)} spellCheck={false} className="min-h-24 font-mono" />
      <p className="text-xs text-muted-foreground">{vars.length} variables detected</p>
      <div className="divide-y border font-mono text-xs">
        {vars.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 px-2.5 py-1.5">
            <span className="font-medium">{k}</span>
            <span className="truncate text-muted-foreground">{k.includes("KEY") ? "••••••" : v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "TranslationSideBySide",
    description: "Translation editor with a read-only source textarea beside an editable target.",
    code: `
export default function TranslationSideBySide() {
  return (
    <div className="grid w-full max-w-md gap-3 sm:grid-cols-2">
      <div className="grid gap-1.5">
        <Label htmlFor="tr-src" className="flex items-center gap-1"><LanguagesIcon className="size-3.5" />English</Label>
        <Textarea id="tr-src" readOnly className="resize-none bg-muted/40" value="Your order has shipped and will arrive within three days." />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="tr-dst">Spanish</Label>
        <Textarea id="tr-dst" defaultValue="Tu pedido ha sido enviado y llegará en tres días." />
      </div>
      <div className="flex justify-end gap-2 sm:col-span-2">
        <Button variant="ghost" size="sm">Skip</Button>
        <Button size="sm">Approve</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ImageAltTextTextarea",
    description: "Alt-text textarea next to an image placeholder with a recommended length hint.",
    code: `
export default function ImageAltTextTextarea() {
  const [alt, setAlt] = React.useState("Two hikers on a ridge at sunset")
  const recommended = 125

  return (
    <div className="flex w-full max-w-md gap-3">
      <div className="aspect-square w-24 shrink-0 bg-gradient-to-br from-orange-300 via-rose-400 to-indigo-600" aria-hidden />
      <Field>
        <FieldLabel htmlFor="ta-alt">Alt text</FieldLabel>
        <Textarea id="ta-alt" value={alt} onChange={(e) => setAlt(e.target.value)} className="min-h-16" />
        <FieldDescription className={cn(alt.length > recommended && "text-amber-600")}>
          {alt.length}/{recommended} recommended. Describe what matters in the image.
        </FieldDescription>
      </Field>
    </div>
  )
}`,
  },
  {
    name: "ThreadReplyTextarea",
    description: "Compact reply textarea under a quoted message in a discussion thread.",
    code: `
export default function ThreadReplyTextarea() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="flex gap-2">
        <Avatar size="sm"><AvatarFallback>RV</AvatarFallback></Avatar>
        <div className="text-xs">
          <p><span className="font-medium">Rosa Vidal</span> <span className="text-muted-foreground">· 2h</span></p>
          <p className="text-muted-foreground">Should we push the launch to Monday so support is fully staffed?</p>
        </div>
      </div>
      <div className="flex items-end gap-2 border-s-2 ps-3">
        <Textarea rows={1} className="min-h-8" placeholder="Reply in thread…" aria-label="Reply" />
        <Button size="icon-sm" aria-label="Send reply"><CornerDownLeftIcon /></Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SubmittingTextarea",
    description: "Feedback textarea that is disabled with a spinner while the submission is in flight.",
    code: `
export default function SubmittingTextarea() {
  const [state, setState] = React.useState<"idle" | "sending" | "sent">("idle")

  function submit() {
    setState("sending")
    setTimeout(() => setState("sent"), 1500)
  }

  if (state === "sent") {
    return (
      <div className="flex w-full max-w-sm flex-col items-center gap-2 border p-6 text-center text-xs">
        <CircleCheckIcon className="size-6 text-emerald-600" />
        Thanks! Our team reads every message.
        <Button variant="outline" size="xs" onClick={() => setState("idle")}>Send another</Button>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="ta-submit">Suggest a feature</Label>
      <Textarea id="ta-submit" disabled={state === "sending"} defaultValue="Let me snooze reminders for a week." />
      <Button size="sm" onClick={submit} disabled={state === "sending"}>
        {state === "sending" && <Spinner data-icon="inline-start" />}
        {state === "sending" ? "Sending…" : "Submit"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "TextareaSizes",
    description: "Small, default and large textarea sizes stacked for comparison.",
    code: `
const sizes = [
  { label: "Small", className: "min-h-12 px-2 py-1.5 text-[11px] md:text-[11px]" },
  { label: "Default", className: "" },
  { label: "Large", className: "min-h-24 px-3 py-2.5 text-sm md:text-sm" },
]

export default function TextareaSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {sizes.map((s) => (
        <div key={s.label} className="grid gap-1">
          <Label htmlFor={"ta-size-" + s.label} className="text-muted-foreground">{s.label}</Label>
          <Textarea id={"ta-size-" + s.label} className={s.className} placeholder="Leave a note for the courier" />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "MeetingNotesTimestamp",
    description: "Meeting notes textarea with a button that inserts the current timestamp at the cursor.",
    code: `
export default function MeetingNotesTimestamp() {
  const ref = React.useRef<null | HTMLTextAreaElement>(null)
  const [notes, setNotes] = React.useState("Weekly sync\\n")

  function stamp() {
    const el = ref.current
    const pos = el?.selectionStart ?? notes.length
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    setNotes(notes.slice(0, pos) + "[" + time + "] " + notes.slice(pos))
    el?.focus()
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="ta-meeting">Notes</Label>
        <Button variant="outline" size="xs" onClick={stamp}><ClockIcon data-icon="inline-start" />Timestamp</Button>
      </div>
      <Textarea id="ta-meeting" ref={ref} value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-28" />
    </div>
  )
}`,
  },
  {
    name: "SqlQueryTextarea",
    description: "SQL query textarea with a run button and a small results table.",
    code: `
const rows = [
  { plan: "starter", users: 1204 },
  { plan: "team", users: 388 },
  { plan: "enterprise", users: 41 },
]

export default function SqlQueryTextarea() {
  const [ran, setRan] = React.useState(false)

  return (
    <div className="w-full max-w-md border">
      <Textarea
        spellCheck={false}
        defaultValue={"SELECT plan, count(*) AS users\\nFROM accounts\\nGROUP BY plan\\nORDER BY users DESC;"}
        className="min-h-24 border-0 font-mono focus-visible:ring-0"
        aria-label="SQL query"
      />
      <div className="flex items-center justify-between border-y bg-muted/40 px-2 py-1">
        <span className="text-xs text-muted-foreground">{ran ? "3 rows · 18 ms" : "Not run yet"}</span>
        <Button size="xs" onClick={() => setRan(true)}><PlayIcon data-icon="inline-start" />Run</Button>
      </div>
      {ran && (
        <Table>
          <TableHeader>
            <TableRow><TableHead>plan</TableHead><TableHead className="text-end">users</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.plan}>
                <TableCell className="font-mono">{r.plan}</TableCell>
                <TableCell className="text-end tabular-nums">{r.users}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}`,
  },
  {
    name: "DraftRestoreTextarea",
    description: "Textarea prefilled from a restored draft with an alert offering to discard it.",
    code: `
export default function DraftRestoreTextarea() {
  const [restored, setRestored] = React.useState(true)
  const [value, setValue] = React.useState("Hi Marco, following up on the invoice we discussed last week…")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {restored && (
        <Alert>
          <HistoryIcon />
          <AlertTitle>Draft restored</AlertTitle>
          <AlertDescription>
            From your last session, 3 hours ago.{" "}
            <Button variant="link" size="xs" className="h-auto p-0" onClick={() => { setValue(""); setRestored(false) }}>Discard</Button>
          </AlertDescription>
        </Alert>
      )}
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} aria-label="Message" placeholder="Write a message" />
    </div>
  )
}`,
  },
  {
    name: "ReportContentDialog",
    description: "Report dialog with reason chips and a details textarea.",
    code: `
const reasons = ["Spam", "Harassment", "Misinformation", "Other"]

export default function ReportContentDialog() {
  const [reason, setReason] = React.useState("Spam")

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <FlagIcon data-icon="inline-start" />
        Report post
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Report this post</DialogTitle>
          <DialogDescription>Reports are anonymous. Our moderators review them within 24 hours.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-1.5">
          {reasons.map((r) => (
            <Button key={r} size="xs" variant={reason === r ? "default" : "outline"} onClick={() => setReason(r)}>{r}</Button>
          ))}
        </div>
        <Textarea placeholder="Add details that help us understand the problem" aria-label="Details" className="min-h-24" />
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button variant="destructive">Submit report</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "BookingSpecialRequests",
    description: "Hotel booking special-requests textarea with checkboxes for common requests.",
    code: `
const options = ["Early check-in", "Late checkout", "High floor", "Extra pillows"]

export default function BookingSpecialRequests() {
  const [picked, setPicked] = React.useState<string[]>(["Late checkout"])

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Special requests</CardTitle>
        <CardDescription>Seaview Suites · Nov 21–24</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          {options.map((o) => (
            <Field key={o} orientation="horizontal">
              <Checkbox
                id={"br-" + o}
                checked={picked.includes(o)}
                onCheckedChange={(c) => setPicked(c ? [...picked, o] : picked.filter((p) => p !== o))}
              />
              <FieldLabel htmlFor={"br-" + o} className="font-normal">{o}</FieldLabel>
            </Field>
          ))}
        </div>
        <Textarea placeholder="Anything else? e.g. celebrating an anniversary" aria-label="Other requests" />
        <p className="text-xs text-muted-foreground">Requests depend on availability and aren&apos;t guaranteed.</p>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "CommitMessageTextarea",
    description: "Commit form with a 50-character summary input and a body textarea with a 72-column hint.",
    code: `
export default function CommitMessageTextarea() {
  const [summary, setSummary] = React.useState("Fix rounding in cart totals")
  const [body, setBody] = React.useState("")
  const longLine = body.split("\\n").some((l) => l.length > 72)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <div className="flex items-center gap-2">
        <Input value={summary} onChange={(e) => setSummary(e.target.value)} aria-label="Summary" className="font-mono" />
        <span className={cn("w-8 text-end text-xs tabular-nums", summary.length > 50 ? "text-destructive" : "text-muted-foreground")}>{50 - summary.length}</span>
      </div>
      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Explain why this change is needed (optional)"
        aria-label="Description"
        className="min-h-20 font-mono"
      />
      {longLine && <p className="text-xs text-amber-600">Some lines are longer than 72 characters.</p>}
      <Button size="sm" disabled={!summary.trim()}><GitCommitHorizontalIcon data-icon="inline-start" />Commit to main</Button>
    </div>
  )
}`,
  },
  {
    name: "InlineEditTextarea",
    description: "Read-only description that switches to an editable textarea with save and cancel.",
    code: `
export default function InlineEditTextarea() {
  const [text, setText] = React.useState("Quarterly planning for the mobile team. Goals, staffing and dependencies.")
  const [draft, setDraft] = React.useState(text)
  const [editing, setEditing] = React.useState(false)

  return (
    <div className="w-full max-w-sm border p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium">Description</p>
        {!editing && (
          <Button variant="ghost" size="icon-xs" aria-label="Edit description" onClick={() => { setDraft(text); setEditing(true) }}>
            <PencilIcon />
          </Button>
        )}
      </div>
      {editing ? (
        <div className="flex flex-col gap-2">
          <Textarea autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} aria-label="Description" />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="xs" onClick={() => setEditing(false)}>Cancel</Button>
            <Button size="xs" onClick={() => { setText(draft); setEditing(false) }}>Save</Button>
          </div>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">{text}</p>
      )}
    </div>
  )
}`,
  },
  {
    name: "SurveyOpenQuestion",
    description: "Survey step with a progress bar, open-ended textarea and navigation buttons.",
    code: `
export default function SurveyOpenQuestion() {
  const [answer, setAnswer] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Question 4 of 5</span>
        <span>80%</span>
      </div>
      <Progress value={80} />
      <Label htmlFor="sv-q4" className="text-sm">What&apos;s one thing that would make you recommend us to a friend?</Label>
      <Textarea id="sv-q4" value={answer} onChange={(e) => setAnswer(e.target.value)} className="min-h-24" placeholder="Your answer" />
      <div className="flex justify-between">
        <Button variant="ghost" size="sm"><ArrowLeftIcon data-icon="inline-start" />Back</Button>
        <Button size="sm" disabled={!answer.trim()}>Next<ArrowRightIcon data-icon="inline-end" /></Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CustomCssTextarea",
    description: "Admin setting for custom CSS where the textarea is enabled by a switch.",
    code: `
export default function CustomCssTextarea() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Label htmlFor="css-switch">Custom CSS</Label>
          <p className="text-xs text-muted-foreground">Applied to your public help center only.</p>
        </div>
        <Switch id="css-switch" checked={enabled} onCheckedChange={setEnabled} />
      </div>
      <Textarea
        disabled={!enabled}
        spellCheck={false}
        aria-label="Custom CSS"
        className="min-h-28 font-mono"
        defaultValue={".hc-header {\\n  background: #0f172a;\\n}\\n.hc-article h2 {\\n  letter-spacing: -0.01em;\\n}"}
      />
    </div>
  )
}`,
  },
  {
    name: "TextCleanupTextarea",
    description: "Textarea with tools to trim whitespace, change case and remove blank lines.",
    code: `
const actions = [
  { label: "Trim spaces", run: (s: string) => s.split("\\n").map((l) => l.trim().replace(/\\s{2,}/g, " ")).join("\\n") },
  { label: "Remove blank lines", run: (s: string) => s.split("\\n").filter((l) => l.trim()).join("\\n") },
  { label: "lowercase", run: (s: string) => s.toLowerCase() },
  { label: "UPPERCASE", run: (s: string) => s.toUpperCase() },
]

export default function TextCleanupTextarea() {
  const [text, setText] = React.useState("  Apples   x3\\n\\n   Pears    x2  \\n\\nFigs x10")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-28 font-mono whitespace-pre" aria-label="Text" />
      <div className="flex flex-wrap gap-1.5">
        {actions.map((a) => (
          <Button key={a.label} variant="outline" size="xs" onClick={() => setText(a.run(text))}>{a.label}</Button>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CharacterRingComposer",
    description: "Post composer with a circular SVG character ring that turns red near the limit.",
    code: `
export default function CharacterRingComposer() {
  const [text, setText] = React.useState("Just shipped keyboard shortcuts for the whole app")
  const max = 140
  const pct = Math.min(1, text.length / max)
  const r = 9
  const c = 2 * Math.PI * r
  const left = max - text.length

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <Textarea value={text} onChange={(e) => setText(e.target.value)} className="border-0 text-sm focus-visible:ring-0" aria-label="Post" />
      <div className="flex items-center justify-end gap-3 border-t pt-2">
        <div className="flex items-center gap-1.5">
          {left <= 20 && <span className={cn("text-xs tabular-nums", left < 0 ? "text-destructive" : "text-amber-600")}>{left}</span>}
          <svg viewBox="0 0 24 24" className="size-6 -rotate-90">
            <circle cx="12" cy="12" r={r} fill="none" strokeWidth="2.5" className="stroke-muted" />
            <circle
              cx="12" cy="12" r={r} fill="none" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
              className={cn(left < 0 ? "stroke-destructive" : left <= 20 ? "stroke-amber-500" : "stroke-primary")}
            />
          </svg>
        </div>
        <Button size="sm" disabled={!text.trim() || left < 0}>Post</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ModerationRejectReason",
    description: "Moderation card where rejecting requires a reason entered in a textarea.",
    code: `
export default function ModerationRejectReason() {
  const [mode, setMode] = React.useState<"review" | "reject" | "done">("review")
  const [reason, setReason] = React.useState("")

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Listing: Vintage oak chair</CardTitle>
        <CardDescription>Submitted by Pell Furniture · awaiting review</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {mode === "reject" && (
          <Field data-invalid={!reason.trim() || undefined}>
            <FieldLabel htmlFor="mod-reason">Reason shown to the seller</FieldLabel>
            <Textarea id="mod-reason" autoFocus value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Photos don't match the description…" />
          </Field>
        )}
        {mode === "done" && <p className="text-xs text-muted-foreground">Decision recorded.</p>}
      </CardContent>
      {mode !== "done" && (
        <CardFooter className="gap-2">
          {mode === "review" ? (
            <>
              <Button size="sm" onClick={() => setMode("done")}>Approve</Button>
              <Button size="sm" variant="outline" onClick={() => setMode("reject")}>Reject</Button>
            </>
          ) : (
            <>
              <Button size="sm" variant="destructive" disabled={!reason.trim()} onClick={() => setMode("done")}>Confirm rejection</Button>
              <Button size="sm" variant="ghost" onClick={() => setMode("review")}>Back</Button>
            </>
          )}
        </CardFooter>
      )}
    </Card>
  )
}`,
  },
  {
    name: "HorizontalSettingsTextarea",
    description: "Settings row with the label and help text on the left and the textarea on the right.",
    code: `
export default function HorizontalSettingsTextarea() {
  return (
    <FieldGroup className="w-full max-w-md">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="ta-welcome">Welcome message</FieldLabel>
          <FieldDescription>Sent automatically when someone joins the workspace.</FieldDescription>
        </FieldContent>
        <Textarea id="ta-welcome" className="sm:min-w-56" defaultValue="Welcome aboard! Start in #introductions and say hi." />
      </Field>
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="ta-away">Away message</FieldLabel>
          <FieldDescription>Shown on your profile while you&apos;re offline.</FieldDescription>
        </FieldContent>
        <Textarea id="ta-away" className="sm:min-w-56" placeholder="Back on Monday" />
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "PromptVariablesTextarea",
    description: "Prompt template textarea that detects {{variables}} and renders an input for each.",
    code: `
export default function PromptVariablesTextarea() {
  const [template, setTemplate] = React.useState("Write a {{tone}} reply to {{customer}} about their {{topic}}.")
  const vars = [...new Set([...template.matchAll(/\\{\\{(\\w+)\\}\\}/g)].map((m) => m[1]!))]

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="grid gap-1.5">
        <Label htmlFor="ta-template">Prompt template</Label>
        <Textarea id="ta-template" value={template} onChange={(e) => setTemplate(e.target.value)} className="font-mono" />
      </div>
      <div className="grid gap-2">
        {vars.map((v) => (
          <div key={v} className="flex items-center gap-2">
            <Badge variant="outline" className="w-20 justify-center font-mono">{v}</Badge>
            <Input placeholder={"Value for " + v} aria-label={v} />
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CodeReviewSuggestion",
    description: "Code review comment textarea attached to a diff line, with a suggestion insert button.",
    code: `
export default function CodeReviewSuggestion() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-full max-w-md border font-mono text-xs">
      <div className="flex bg-rose-500/10"><span className="w-8 shrink-0 text-center text-muted-foreground">41</span><span className="text-rose-600">- const total = price * qty</span></div>
      <div className="flex bg-emerald-500/10"><span className="w-8 shrink-0 text-center text-muted-foreground">41</span><span className="text-emerald-700 dark:text-emerald-400">+ const total = round(price * qty)</span></div>
      <div className="flex flex-col gap-2 border-t p-2 font-sans">
        <Textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Leave a comment on line 41" aria-label="Review comment" />
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="xs" onClick={() => setValue(value + "\\n\`\`\`suggestion\\nconst total = round(price * qty, 2)\\n\`\`\`")}>
            <FileDiffIcon data-icon="inline-start" />Suggest change
          </Button>
          <div className="flex gap-1.5">
            <Button variant="outline" size="xs">Cancel</Button>
            <Button size="xs" disabled={!value.trim()}>Add comment</Button>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  },
]

export default examples
