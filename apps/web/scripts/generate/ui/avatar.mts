import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ColoredInitialsFallback",
    description: "Initial fallbacks with a deterministic tint picked from each person's name.",
    code: `
const people = ["Maya Chen", "Theo Alvarez", "Priya Natarajan", "Jonas Berg", "Lena Okafor", "Sami Haddad"]

const tints = [
  "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
]

function tintFor(name: string) {
  const sum = [...name].reduce((total, char) => total + char.charCodeAt(0), 0)
  return tints[sum % tints.length]
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function ColoredInitialsFallback() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {people.map((person) => (
        <Avatar key={person} size="lg" title={person}>
          <AvatarFallback className={cn("font-medium", tintFor(person))}>
            {initialsOf(person)}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PresenceStatusAvatars",
    description: "Avatars with online, away, busy, and offline presence dots plus a legend.",
    code: `
const members = [
  { name: "Ava Lindqvist", initials: "AL", status: "Online", dot: "bg-emerald-500" },
  { name: "Ravi Menon", initials: "RM", status: "Away", dot: "bg-amber-500" },
  { name: "Clara Dubois", initials: "CD", status: "Busy", dot: "bg-red-500" },
  { name: "Owen Park", initials: "OP", status: "Offline", dot: "bg-muted-foreground" },
]

export default function PresenceStatusAvatars() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-3">
      {members.map((member) => (
        <div key={member.name} className="flex items-center gap-3 border p-3">
          <Avatar>
            <AvatarFallback>{member.initials}</AvatarFallback>
            <AvatarBadge className={member.dot} />
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{member.name}</p>
            <p className="text-xs text-muted-foreground">{member.status}</p>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "UserIdentityRow",
    description: "Avatar paired with a name and email, as used in account headers and lists.",
    code: `
export default function UserIdentityRow() {
  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-3">
      <Avatar size="lg">
        <AvatarFallback className="bg-primary text-primary-foreground">NK</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">Nadia Karim</p>
        <p className="truncate text-xs text-muted-foreground">nadia.karim@northwind.dev</p>
      </div>
      <Button variant="ghost" size="icon-sm" aria-label="More options">
        <EllipsisVerticalIcon />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "TeamMembersList",
    description: "Team settings list with avatars, roles, and a member management action.",
    code: `
const team = [
  { name: "Elena Rossi", email: "elena@fieldnotes.app", initials: "ER", role: "Owner" },
  { name: "Marcus Webb", email: "marcus@fieldnotes.app", initials: "MW", role: "Admin" },
  { name: "Yuki Tanaka", email: "yuki@fieldnotes.app", initials: "YT", role: "Editor" },
  { name: "Daniel Osei", email: "daniel@fieldnotes.app", initials: "DO", role: "Viewer" },
]

export default function TeamMembersList() {
  return (
    <ItemGroup className="w-full max-w-md gap-0 border">
      {team.map((member, index) => (
        <Item key={member.email} className={cn(index > 0 && "border-t-border")}>
          <ItemMedia>
            <Avatar>
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{member.name}</ItemTitle>
            <ItemDescription>{member.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant={member.role === "Owner" ? "default" : "outline"}>{member.role}</Badge>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}`,
  },
  {
    name: "CommentThreadAvatars",
    description: "A document comment thread where each reply is anchored by the author's avatar.",
    code: `
const comments = [
  { author: "Hana Sato", initials: "HS", time: "2h ago", body: "Can we move the pricing table above the FAQ? It answers most of the questions." },
  { author: "Leo Martins", initials: "LM", time: "1h ago", body: "Agreed. I'll also shorten the intro paragraph so it fits above the fold." },
  { author: "Hana Sato", initials: "HS", time: "12m ago", body: "Perfect, marking this as resolved once the draft is updated." },
]

export default function CommentThreadAvatars() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {comments.map((comment, index) => (
        <div key={index} className="flex gap-3">
          <Avatar size="sm" className="mt-0.5">
            <AvatarFallback>{comment.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium">{comment.author}</span>
              <span className="text-xs text-muted-foreground">{comment.time}</span>
            </div>
            <p className="text-sm text-muted-foreground">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ChatConversationAvatars",
    description: "Chat bubbles with avatars aligned to the sender's side of the conversation.",
    code: `
const messages = [
  { from: "them", text: "Hey! Did the new build fix the export bug?" },
  { from: "me", text: "Yes, CSV and PDF exports both work now." },
  { from: "them", text: "Amazing, shipping it to beta testers tonight." },
]

export default function ChatConversationAvatars() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      {messages.map((message, index) => {
        const mine = message.from === "me"
        return (
          <div key={index} className={cn("flex items-end gap-2", mine && "flex-row-reverse")}>
            <Avatar size="sm">
              <AvatarFallback className={cn(mine && "bg-primary text-primary-foreground")}>
                {mine ? "ME" : "JR"}
              </AvatarFallback>
            </Avatar>
            <p className={cn("max-w-[75%] px-3 py-2 text-sm", mine ? "bg-primary text-primary-foreground" : "bg-muted")}>
              {message.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "AvatarGroupWithTooltips",
    description: "Stacked collaborators that reveal each person's name in a tooltip on hover.",
    code: `
const collaborators = [
  { name: "Iris Novak", initials: "IN" },
  { name: "Kofi Mensah", initials: "KM" },
  { name: "Sofia Reyes", initials: "SR" },
  { name: "Arjun Patel", initials: "AP" },
]

export default function AvatarGroupWithTooltips() {
  return (
    <TooltipProvider>
      <AvatarGroup>
        {collaborators.map((person) => (
          <Tooltip key={person.name}>
            <TooltipTrigger
              render={
                <Avatar className="ring-2 ring-background">
                  <AvatarFallback>{person.initials}</AvatarFallback>
                </Avatar>
              }
            />
            <TooltipContent>{person.name}</TooltipContent>
          </Tooltip>
        ))}
      </AvatarGroup>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "AvatarGroupSizeScale",
    description: "Small, default, and large avatar groups with overflow counts that scale with them.",
    code: `
const sizes = ["sm", "default", "lg"] as const
const initials = ["BK", "MT", "ZA"]

export default function AvatarGroupSizeScale() {
  return (
    <div className="flex flex-col items-start gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-14 text-xs text-muted-foreground">{size}</span>
          <AvatarGroup>
            {initials.map((value) => (
              <Avatar key={value} size={size}>
                <AvatarFallback>{value}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+8</AvatarGroupCount>
          </AvatarGroup>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ProfileCardHeader",
    description: "A profile card with an oversized avatar, bio, and follow action.",
    code: `
export default function ProfileCardHeader() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="flex flex-col items-center gap-3 text-center">
        <Avatar className="size-20">
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-2xl font-semibold text-white">
            GB
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-base font-semibold">Greta Bauer</p>
          <p className="text-xs text-muted-foreground">Product designer at Lumen Labs</p>
        </div>
        <div className="flex gap-6 text-xs">
          <div><span className="block text-sm font-semibold">248</span>Posts</div>
          <div><span className="block text-sm font-semibold">12.4k</span>Followers</div>
          <div><span className="block text-sm font-semibold">310</span>Following</div>
        </div>
        <Button className="w-full">Follow</Button>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "UnreadCountAvatarBadge",
    description: "Avatars with numeric badges showing unread messages per conversation.",
    code: `
const inbox = [
  { initials: "TF", unread: 3 },
  { initials: "MO", unread: 12 },
  { initials: "RS", unread: 0 },
]

export default function UnreadCountAvatarBadge() {
  return (
    <div className="flex items-center gap-5">
      {inbox.map((item) => (
        <Avatar key={item.initials} size="lg">
          <AvatarFallback>{item.initials}</AvatarFallback>
          {item.unread > 0 && (
            <AvatarBadge className="-end-1.5 -top-1.5 bottom-auto h-4 min-w-4 bg-destructive px-1 text-[10px] font-semibold text-white group-data-[size=lg]/avatar:size-auto group-data-[size=lg]/avatar:h-4">
              {item.unread > 9 ? "9+" : item.unread}
            </AvatarBadge>
          )}
        </Avatar>
      ))}
    </div>
  )
}`,
  },
  {
    name: "VerifiedCreatorAvatar",
    description: "A creator avatar with a check badge marking a verified account.",
    code: `
export default function VerifiedCreatorAvatar() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarFallback className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">PV</AvatarFallback>
        <AvatarBadge className="bg-sky-500 text-white">
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
      <div>
        <p className="flex items-center gap-1 text-sm font-medium">Pablo Vega</p>
        <p className="text-xs text-muted-foreground">Verified creator · 84k subscribers</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "GuestIconFallback",
    description: "Icon fallbacks for guests, deleted users, and anonymous viewers.",
    code: `
const variants = [
  { label: "Guest", icon: UserIcon },
  { label: "Deleted user", icon: UserXIcon },
  { label: "Anonymous", icon: VenetianMaskIcon },
]

export default function GuestIconFallback() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {variants.map((variant) => (
        <div key={variant.label} className="flex flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarFallback>
              <variant.icon className="size-5" />
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{variant.label}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SquareWorkspaceAvatars",
    description: "Square avatars used to represent workspaces and organizations instead of people.",
    code: `
const workspaces = [
  { name: "Acorn Studio", short: "AS", tone: "bg-emerald-600" },
  { name: "Bluefin Labs", short: "BL", tone: "bg-sky-600" },
  { name: "Copperline", short: "CO", tone: "bg-orange-600" },
]

export default function SquareWorkspaceAvatars() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {workspaces.map((workspace) => (
        <div key={workspace.name} className="flex items-center gap-3 border p-2">
          <Avatar className="rounded-none after:rounded-none">
            <AvatarFallback className={cn("rounded-none text-xs font-semibold text-white", workspace.tone)}>
              {workspace.short}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{workspace.name}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "WorkspaceSwitcherMenu",
    description: "A dropdown workspace switcher where each option leads with a square avatar.",
    code: `
const workspaces = [
  { name: "Harbor Analytics", plan: "Pro", short: "HA" },
  { name: "Pinecrest Design", plan: "Team", short: "PD" },
  { name: "Side Project", plan: "Free", short: "SP" },
]

export default function WorkspaceSwitcherMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-56 justify-start gap-2 px-2" />}>
        <Avatar size="sm" className="rounded-none after:rounded-none">
          <AvatarFallback className="rounded-none bg-primary text-primary-foreground">HA</AvatarFallback>
        </Avatar>
        <span className="flex-1 text-left">Harbor Analytics</span>
        <ChevronsUpDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
          {workspaces.map((workspace) => (
            <DropdownMenuItem key={workspace.name}>
              <Avatar size="sm" className="rounded-none after:rounded-none">
                <AvatarFallback className="rounded-none">{workspace.short}</AvatarFallback>
              </Avatar>
              <span className="flex-1">{workspace.name}</span>
              <span className="text-xs text-muted-foreground">{workspace.plan}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusIcon />
          Create workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "AssigneeToggleSelector",
    description: "Clickable avatars that toggle task assignees, with selected ones ringed and checked.",
    code: `
const people = [
  { id: "am", name: "Alma Moreau" },
  { id: "bj", name: "Bilal Jaber" },
  { id: "cw", name: "Cora Whitfield" },
  { id: "dn", name: "Dev Nair" },
  { id: "ek", name: "Emi Kowal" },
]

export default function AssigneeToggleSelector() {
  const [selected, setSelected] = React.useState<string[]>(["bj"])

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
    )
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <p className="text-sm font-medium">Assign to</p>
      <div className="flex flex-wrap gap-2">
        {people.map((person) => {
          const active = selected.includes(person.id)
          return (
            <button
              key={person.id}
              type="button"
              aria-pressed={active}
              aria-label={person.name}
              title={person.name}
              onClick={() => toggle(person.id)}
              className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Avatar size="lg" className={cn("transition", active ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-60 hover:opacity-100")}>
                <AvatarFallback className="uppercase">{person.id}</AvatarFallback>
                {active && (
                  <AvatarBadge>
                    <CheckIcon />
                  </AvatarBadge>
                )}
              </Avatar>
            </button>
          )
        })}
      </div>
      <p className="text-xs text-muted-foreground">
        {selected.length === 0 ? "Unassigned" : selected.length + " assignee" + (selected.length > 1 ? "s" : "")}
      </p>
    </div>
  )
}`,
  },
  {
    name: "MeetingAttendeesCard",
    description: "Calendar event card with attendee avatars marked by RSVP response.",
    code: `
const attendees = [
  { initials: "FL", name: "Farah Lee", rsvp: "yes" },
  { initials: "GM", name: "Gabe Moss", rsvp: "yes" },
  { initials: "HI", name: "Hiro Ito", rsvp: "maybe" },
  { initials: "JW", name: "Jade Wu", rsvp: "no" },
]

const rsvpStyle: Record<string, string> = {
  yes: "bg-emerald-500",
  maybe: "bg-amber-500",
  no: "bg-red-500",
}

export default function MeetingAttendeesCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Q3 roadmap review</CardTitle>
        <CardDescription>Thu, Sep 12 · 10:00 - 11:00 AM</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {attendees.map((person) => (
          <div key={person.initials} className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarFallback>{person.initials}</AvatarFallback>
              <AvatarBadge className={rsvpStyle[person.rsvp]} />
            </Avatar>
            <span className="flex-1 text-sm">{person.name}</span>
            <span className="text-xs capitalize text-muted-foreground">{person.rsvp === "yes" ? "Going" : person.rsvp === "no" ? "Declined" : "Maybe"}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "SharedFileAccessRow",
    description: "File manager rows that show who a file is shared with as a compact avatar stack.",
    code: `
const files = [
  { name: "Brand guidelines.pdf", size: "4.2 MB", shared: ["KL", "PO", "RA", "TS", "UV"] },
  { name: "Launch budget.xlsx", size: "860 KB", shared: ["KL", "PO"] },
  { name: "Interview notes.docx", size: "120 KB", shared: [] as string[] },
]

export default function SharedFileAccessRow() {
  return (
    <div className="w-full max-w-md divide-y border">
      {files.map((file) => (
        <div key={file.name} className="flex items-center gap-3 p-3">
          <FileTextIcon className="size-5 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{file.name}</p>
            <p className="text-xs text-muted-foreground">{file.size}</p>
          </div>
          {file.shared.length === 0 ? (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <LockIcon className="size-3" /> Only you
            </span>
          ) : (
            <AvatarGroup>
              {file.shared.slice(0, 3).map((value) => (
                <Avatar key={value} size="sm">
                  <AvatarFallback>{value}</AvatarFallback>
                </Avatar>
              ))}
              {file.shared.length > 3 && <AvatarGroupCount>+{file.shared.length - 3}</AvatarGroupCount>}
            </AvatarGroup>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ActivityTimelineAvatars",
    description: "A project activity timeline with avatars connected by a vertical rail.",
    code: `
const events = [
  { initials: "OS", who: "Olga Sanz", action: "merged pull request #482", time: "Just now" },
  { initials: "BT", who: "Ben Tran", action: "commented on Checkout redesign", time: "25 min ago" },
  { initials: "MC", who: "Mina Cho", action: "moved Billing API to Done", time: "1 hour ago" },
  { initials: "OS", who: "Olga Sanz", action: "created the milestone v2.3", time: "Yesterday" },
]

export default function ActivityTimelineAvatars() {
  return (
    <ol className="relative flex w-full max-w-sm flex-col gap-5 before:absolute before:inset-y-2 before:start-4 before:w-px before:bg-border">
      {events.map((event, index) => (
        <li key={index} className="relative flex gap-3">
          <Avatar className="ring-4 ring-background">
            <AvatarFallback>{event.initials}</AvatarFallback>
          </Avatar>
          <div className="pt-1 text-sm">
            <p>
              <span className="font-medium">{event.who}</span>{" "}
              <span className="text-muted-foreground">{event.action}</span>
            </p>
            <p className="text-xs text-muted-foreground">{event.time}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}`,
  },
  {
    name: "TypingIndicatorAvatar",
    description: "A chat typing indicator showing who is composing a reply.",
    code: `
export default function TypingIndicatorAvatar() {
  return (
    <div className="flex items-end gap-2">
      <Avatar size="sm">
        <AvatarFallback>QA</AvatarFallback>
        <AvatarBadge className="bg-emerald-500" />
      </Avatar>
      <div className="flex items-center gap-1 bg-muted px-3 py-2.5" aria-label="Quinn is typing">
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
      </div>
      <span className="text-xs text-muted-foreground">Quinn is typing...</span>
    </div>
  )
}`,
  },
  {
    name: "SeenByReceipts",
    description: "Tiny read-receipt avatars displayed under the last message in a group chat.",
    code: `
const readers = ["AB", "CF", "DG", "EH", "IJ", "KM"]

export default function SeenByReceipts() {
  return (
    <div className="flex w-full max-w-xs flex-col items-end gap-1.5">
      <p className="bg-primary px-3 py-2 text-sm text-primary-foreground">
        Standup moved to 9:30 tomorrow.
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-muted-foreground">Seen by</span>
        <AvatarGroup className="-space-x-1.5">
          {readers.slice(0, 4).map((value) => (
            <Avatar key={value} className="size-4 ring-1!">
              <AvatarFallback className="text-[8px]">{value}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount className="size-4 text-[8px] ring-1">+{readers.length - 4}</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SalesLeaderboard",
    description: "A ranked leaderboard with avatars, medal colors for the top three, and totals.",
    code: `
const leaders = [
  { name: "Rosa Diaz", initials: "RD", amount: "$84,200" },
  { name: "Tomás Herrera", initials: "TH", amount: "$71,950" },
  { name: "Wen Li", initials: "WL", amount: "$66,300" },
  { name: "Kai Johansson", initials: "KJ", amount: "$52,780" },
  { name: "Noor Aziz", initials: "NA", amount: "$48,010" },
]

const medals = ["ring-amber-400", "ring-zinc-400", "ring-orange-700"]

export default function SalesLeaderboard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Top sellers this quarter</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {leaders.map((leader, index) => (
          <div key={leader.name} className="flex items-center gap-3">
            <span className="w-4 text-xs text-muted-foreground tabular-nums">{index + 1}</span>
            <Avatar className={cn(index < 3 && "ring-2 ring-offset-2 ring-offset-card", medals[index])}>
              <AvatarFallback>{leader.initials}</AvatarFallback>
            </Avatar>
            <span className="flex-1 truncate text-sm">{leader.name}</span>
            <span className="text-sm font-medium tabular-nums">{leader.amount}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "ProfilePhotoSettings",
    description: "Profile settings section with an editable avatar and upload and remove actions.",
    code: `
export default function ProfilePhotoSettings() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-4 border p-4">
      <div className="relative">
        <Avatar className="size-16">
          <AvatarFallback className="text-lg font-medium">LM</AvatarFallback>
        </Avatar>
        <Button size="icon-xs" variant="outline" className="absolute -end-1 -bottom-1 rounded-full" aria-label="Change photo">
          <CameraIcon />
        </Button>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">Profile photo</p>
        <p className="text-xs text-muted-foreground">PNG or JPG, at least 256 x 256 px.</p>
        <div className="mt-2 flex gap-2">
          <Button size="sm">
            <UploadIcon data-icon="inline-start" />
            Upload
          </Button>
          <Button size="sm" variant="ghost">Remove</Button>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "GradientAvatarSet",
    description: "Generated gradient avatars used as playful defaults for new accounts.",
    code: `
const gradients = [
  { initials: "ZO", className: "from-pink-500 to-orange-400" },
  { initials: "LU", className: "from-cyan-500 to-blue-600" },
  { initials: "MA", className: "from-lime-400 to-emerald-600" },
  { initials: "FE", className: "from-violet-500 to-indigo-700" },
  { initials: "RI", className: "from-yellow-400 to-red-500" },
]

export default function GradientAvatarSet() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {gradients.map((item) => (
        <Avatar key={item.initials} size="lg">
          <AvatarFallback className={cn("bg-gradient-to-br font-semibold text-white", item.className)}>
            {item.initials}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AssistantBotAvatar",
    description: "An AI assistant message distinguished by an icon avatar with a sparkle badge.",
    code: `
export default function AssistantBotAvatar() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex gap-3">
        <Avatar>
          <AvatarFallback className="bg-foreground text-background">
            <BotIcon className="size-4" />
          </AvatarFallback>
          <AvatarBadge className="bg-violet-500 text-white">
            <SparklesIcon />
          </AvatarBadge>
        </Avatar>
        <div className="flex-1 border bg-muted/40 p-3 text-sm">
          <p className="mb-1 text-xs font-medium text-muted-foreground">Assistant</p>
          I found 3 invoices overdue by more than 30 days. Want me to draft reminder emails?
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3">
        <Avatar>
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <p className="bg-primary px-3 py-2 text-sm text-primary-foreground">Yes, please.</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ContactHoverCard",
    description: "A mention that opens a hover card with the contact's avatar and details.",
    code: `
export default function ContactHoverCard() {
  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Final copy was approved by{" "}
      <HoverCard>
        <HoverCardTrigger delay={10} closeDelay={100} render={<a href="#" className="font-medium text-foreground underline underline-offset-4" />}>
          @mira.holt
        </HoverCardTrigger>
        <HoverCardContent className="flex w-72 gap-3">
          <Avatar size="lg">
            <AvatarFallback>MH</AvatarFallback>
            <AvatarBadge className="bg-emerald-500" />
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">Mira Holt</p>
            <p className="text-xs text-muted-foreground">Head of Content · Lisbon</p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <ClockIcon className="size-3" /> 4:12 PM local time
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      this morning.
    </p>
  )
}`,
  },
  {
    name: "MentionSuggestionList",
    description: "An @mention autocomplete list with avatars and the active suggestion highlighted.",
    code: `
const suggestions = [
  { handle: "sam.ortiz", name: "Sam Ortiz", initials: "SO" },
  { handle: "sana.qureshi", name: "Sana Qureshi", initials: "SQ" },
  { handle: "sasha.ivanov", name: "Sasha Ivanov", initials: "SI" },
]

export default function MentionSuggestionList() {
  const [active, setActive] = React.useState(0)

  return (
    <div className="w-full max-w-xs">
      <div className="border px-3 py-2 text-sm">
        Thanks for the review <span className="bg-primary/10 text-primary">@sa</span>
      </div>
      <div role="listbox" className="mt-1 border bg-popover p-1 shadow-md">
        {suggestions.map((user, index) => (
          <div
            key={user.handle}
            role="option"
            aria-selected={active === index}
            onMouseEnter={() => setActive(index)}
            className={cn("flex cursor-pointer items-center gap-2 px-2 py-1.5", active === index && "bg-muted")}
          >
            <Avatar size="sm">
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{user.name}</span>
            <span className="ms-auto text-xs text-muted-foreground">@{user.handle}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "KanbanTaskAssignees",
    description: "A kanban task card footer with assignee avatars, due date, and comment count.",
    code: `
export default function KanbanTaskAssignees() {
  return (
    <Card size="sm" className="w-full max-w-xs">
      <CardHeader>
        <div className="flex gap-1">
          <Badge variant="secondary">Design</Badge>
          <Badge variant="outline">P2</Badge>
        </div>
        <CardTitle className="mt-1">Redesign onboarding checklist</CardTitle>
        <CardDescription>Simplify steps and add progress hints for new teams.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarFallback>VP</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>CE</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <CalendarIcon className="size-3" /> Oct 4
          </span>
          <span className="flex items-center gap-1">
            <MessageSquareIcon className="size-3" /> 6
          </span>
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "LiveCollaboratorsBar",
    description: "A document header showing who is viewing right now with colored cursor rings.",
    code: `
const viewers = [
  { initials: "AN", ring: "ring-rose-500", name: "Ana" },
  { initials: "BO", ring: "ring-sky-500", name: "Bo" },
  { initials: "CY", ring: "ring-emerald-500", name: "Cyrus" },
]

export default function LiveCollaboratorsBar() {
  return (
    <div className="flex w-full max-w-md items-center justify-between border px-3 py-2">
      <div className="flex items-center gap-2 text-sm">
        <FileTextIcon className="size-4 text-muted-foreground" />
        <span className="font-medium">Q4 Launch Plan</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-1.5">
          {viewers.map((viewer) => (
            <Avatar key={viewer.initials} size="sm" title={viewer.name + " is viewing"} className={cn("ring-2", viewer.ring)}>
              <AvatarFallback>{viewer.initials}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Button size="sm">
          <Share2Icon data-icon="inline-start" />
          Share
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AvatarLoadingSkeleton",
    description: "A member row that toggles between a skeleton placeholder and the loaded avatar.",
    code: `
export default function AvatarLoadingSkeleton() {
  const [loading, setLoading] = React.useState(true)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3 border p-3">
        {loading ? (
          <>
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-3 w-20" />
            </div>
          </>
        ) : (
          <>
            <Avatar size="lg">
              <AvatarFallback>EV</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Esme Vance</p>
              <p className="text-xs text-muted-foreground">Joined 3 days ago</p>
            </div>
          </>
        )}
      </div>
      <Button variant="outline" size="sm" onClick={() => setLoading((value) => !value)}>
        {loading ? "Finish loading" : "Show skeleton"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "InviteTeammatesStack",
    description: "An avatar stack ending in an add button for inviting more teammates.",
    code: `
export default function InviteTeammatesStack() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-4">
      <div>
        <p className="text-sm font-medium">Design team</p>
        <p className="text-xs text-muted-foreground">5 members · 2 pending invites</p>
      </div>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>TK</AvatarFallback>
        </Avatar>
        <button
          type="button"
          aria-label="Invite teammate"
          className="relative flex size-8 shrink-0 items-center justify-center rounded-full text-xs ring-2 ring-background [&>svg]:size-4 border border-dashed border-muted-foreground/50 bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <UserPlusIcon />
        </button>
      </AvatarGroup>
    </div>
  )
}`,
  },
  {
    name: "ReviewerApprovalStatus",
    description: "Pull request reviewers with badges for approved, changes requested, and pending.",
    code: `
const reviewers = [
  { name: "Ilse Ward", initials: "IW", state: "Approved" },
  { name: "Mateo Cruz", initials: "MC", state: "Changes requested" },
  { name: "Oona Fitz", initials: "OF", state: "Pending" },
]

export default function ReviewerApprovalStatus() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Reviewers</p>
      {reviewers.map((reviewer) => (
        <div key={reviewer.name} className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{reviewer.initials}</AvatarFallback>
            {reviewer.state === "Approved" && (
              <AvatarBadge className="bg-emerald-500 text-white"><CheckIcon /></AvatarBadge>
            )}
            {reviewer.state === "Changes requested" && (
              <AvatarBadge className="bg-red-500 text-white"><XIcon /></AvatarBadge>
            )}
            {reviewer.state === "Pending" && (
              <AvatarBadge className="bg-amber-500 text-white"><ClockIcon /></AvatarBadge>
            )}
          </Avatar>
          <div>
            <p className="text-sm">{reviewer.name}</p>
            <p className="text-xs text-muted-foreground">{reviewer.state}</p>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SupportAgentWidget",
    description: "A help widget introducing the support team with avatars and response time.",
    code: `
export default function SupportAgentWidget() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <AvatarGroup className="mb-2">
          <Avatar size="lg">
            <AvatarFallback className="bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">LN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback className="bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300">PK</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback className="bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">DY</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <CardTitle>Questions? Chat with us</CardTitle>
        <CardDescription>Lina, Pedro, and Dana typically reply in under 5 minutes.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">
          <MessageCircleIcon data-icon="inline-start" />
          Start a conversation
        </Button>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "AccountSwitcherMenu",
    description: "A user menu that lists signed-in accounts with avatars and a checkmark on the active one.",
    code: `
const accounts = [
  { name: "Ines Carvalho", email: "ines@personal.me", initials: "IC" },
  { name: "Ines Carvalho", email: "ines@orbitworks.io", initials: "IC" },
]

export default function AccountSwitcherMenu() {
  const [active, setActive] = React.useState(accounts[0]!.email)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full" aria-label="Account menu" />}>
        <Avatar>
          <AvatarFallback>IC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Switch account</DropdownMenuLabel>
          {accounts.map((account) => (
            <DropdownMenuItem key={account.email} onClick={() => setActive(account.email)}>
              <Avatar size="sm">
                <AvatarFallback>{account.initials}</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate">{account.name}</span>
                <span className="truncate text-xs text-muted-foreground">{account.email}</span>
              </div>
              {active === account.email && <CheckIcon />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserPlusIcon />
          Add another account
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Sign out of all accounts
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "ProfileCompletionRing",
    description: "An avatar wrapped in an SVG progress ring that shows profile completion.",
    code: `
const percent = 70
const radius = 30
const circumference = 2 * Math.PI * radius

export default function ProfileCompletionRing() {
  return (
    <div className="flex w-full max-w-xs items-center gap-4 border p-4">
      <div className="relative size-16 shrink-0">
        <svg viewBox="0 0 64 64" className="absolute inset-0 -rotate-90">
          <circle cx="32" cy="32" r={radius} fill="none" strokeWidth="3" className="stroke-muted" />
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percent / 100)}
            className="stroke-primary"
          />
        </svg>
        <Avatar className="absolute inset-1.5 size-auto">
          <AvatarFallback className="font-medium">RB</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-sm font-medium">Profile {percent}% complete</p>
        <p className="text-xs text-muted-foreground">Add a bio and timezone to finish setup.</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "StoryRingAvatars",
    description: "Story-style avatars with gradient rings for unseen updates and muted rings for seen ones.",
    code: `
const stories = [
  { name: "You", initials: "+", seen: false, add: true },
  { name: "felix", initials: "FX", seen: false, add: false },
  { name: "june", initials: "JN", seen: false, add: false },
  { name: "rami", initials: "RA", seen: true, add: false },
  { name: "tess", initials: "TE", seen: true, add: false },
]

export default function StoryRingAvatars() {
  return (
    <div className="flex w-full max-w-sm gap-3 overflow-x-auto p-1">
      {stories.map((story) => (
        <div key={story.name} className="flex w-14 shrink-0 flex-col items-center gap-1">
          <div
            className={cn(
              "rounded-full p-0.5",
              story.add ? "border border-dashed border-muted-foreground/50" : story.seen ? "bg-border" : "bg-gradient-to-tr from-amber-400 via-rose-500 to-fuchsia-600"
            )}
          >
            <Avatar size="lg" className="ring-2 ring-background">
              <AvatarFallback className={cn(story.add && "bg-background")}>
                {story.add ? <PlusIcon className="size-4" /> : story.initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="truncate text-[11px] text-muted-foreground">{story.name}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CustomAvatarSizes",
    description: "Avatars sized beyond the built-in presets, from extra small to hero size.",
    code: `
const sizes = [
  { label: "XS", className: "size-5", text: "text-[9px]" },
  { label: "SM", className: "size-6", text: "text-xs" },
  { label: "MD", className: "size-8", text: "text-sm" },
  { label: "LG", className: "size-10", text: "text-sm" },
  { label: "XL", className: "size-14", text: "text-lg" },
  { label: "2XL", className: "size-20", text: "text-2xl" },
]

export default function CustomAvatarSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col items-center gap-2">
          <Avatar className={size.className}>
            <AvatarFallback className={size.text}>HW</AvatarFallback>
          </Avatar>
          <span className="text-[10px] text-muted-foreground">{size.label}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AdminTableOwnerColumn",
    description: "An admin projects table that identifies each owner with an avatar and name.",
    code: `
const projects = [
  { project: "Mobile app", owner: "Rhea Kapoor", initials: "RK", updated: "2h ago" },
  { project: "Marketing site", owner: "Gus Lindgren", initials: "GL", updated: "Yesterday" },
  { project: "Data pipeline", owner: "Amara Obi", initials: "AO", updated: "Mar 14" },
]

export default function AdminTableOwnerColumn() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead className="text-right">Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((row) => (
            <TableRow key={row.project}>
              <TableCell className="font-medium">{row.project}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>{row.initials}</AvatarFallback>
                  </Avatar>
                  <span>{row.owner}</span>
                </div>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">{row.updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ExpandableContributorStack",
    description: "A contributor stack whose overflow count expands to reveal every avatar.",
    code: `
const contributors = ["AH", "BC", "DE", "FG", "HJ", "KL", "MN", "PQ", "RS"]

export default function ExpandableContributorStack() {
  const [expanded, setExpanded] = React.useState(false)
  const visible = expanded ? contributors : contributors.slice(0, 4)

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-2">
      <AvatarGroup className={cn("flex-wrap justify-center", expanded && "gap-y-2")}>
        {visible.map((value) => (
          <Avatar key={value}>
            <AvatarFallback>{value}</AvatarFallback>
          </Avatar>
        ))}
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={expanded ? "Show fewer contributors" : "Show all contributors"}
          onClick={() => setExpanded((value) => !value)}
          className="relative flex size-8 shrink-0 items-center justify-center rounded-full text-xs ring-2 ring-background [&>svg]:size-4 bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          {expanded ? <ChevronLeftIcon /> : "+" + (contributors.length - 4)}
        </button>
      </AvatarGroup>
      <p className="text-xs text-muted-foreground">{contributors.length} contributors</p>
    </div>
  )
}`,
  },
  {
    name: "VideoCallParticipants",
    description: "Video call tiles with large avatars for participants whose cameras are off.",
    code: `
const participants = [
  { name: "Yara Haddad", initials: "YH", muted: false, speaking: true },
  { name: "Jon Sterling", initials: "JS", muted: true, speaking: false },
  { name: "Mei Lin", initials: "ML", muted: false, speaking: false },
  { name: "You", initials: "ME", muted: true, speaking: false },
]

export default function VideoCallParticipants() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-2">
      {participants.map((person) => (
        <div
          key={person.name}
          className={cn("relative flex aspect-video items-center justify-center bg-muted", person.speaking && "ring-2 ring-emerald-500")}
        >
          <Avatar className="size-14">
            <AvatarFallback className="bg-background text-lg">{person.initials}</AvatarFallback>
          </Avatar>
          <div className="absolute start-2 bottom-2 flex items-center gap-1 bg-background/80 px-1.5 py-0.5 text-[11px]">
            {person.muted ? <MicOffIcon className="size-3 text-destructive" /> : <MicIcon className="size-3" />}
            {person.name}
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TestimonialAuthor",
    description: "A customer testimonial attributed with an avatar, name, and title.",
    code: `
export default function TestimonialAuthor() {
  return (
    <figure className="flex w-full max-w-sm flex-col gap-4 border p-5">
      <QuoteIcon className="size-5 text-muted-foreground" />
      <blockquote className="text-sm leading-relaxed">
        We cut our month-end close from six days to two. The reconciliation view alone paid for the subscription.
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-600 font-medium text-white">CA</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Celeste Arno</p>
          <p className="text-xs text-muted-foreground">Finance Lead, Brightwater Co.</p>
        </div>
      </figcaption>
    </figure>
  )
}`,
  },
  {
    name: "RoleIconAvatarBadges",
    description: "Avatar badges with role icons for owners, admins, and moderators.",
    code: `
const roles = [
  { initials: "OW", role: "Owner", icon: CrownIcon, tone: "bg-amber-500 text-white" },
  { initials: "AD", role: "Admin", icon: ShieldIcon, tone: "bg-blue-600 text-white" },
  { initials: "MO", role: "Moderator", icon: StarIcon, tone: "bg-violet-600 text-white" },
]

export default function RoleIconAvatarBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {roles.map((item) => (
        <div key={item.role} className="flex flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarFallback>{item.initials}</AvatarFallback>
            <AvatarBadge className={item.tone}>
              <item.icon />
            </AvatarBadge>
          </Avatar>
          <span className="text-xs text-muted-foreground">{item.role}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "UnassignedAssigneeSlot",
    description: "A dashed empty avatar slot that assigns the current user when clicked.",
    code: `
export default function UnassignedAssigneeSlot() {
  const [assigned, setAssigned] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs items-center justify-between border p-3">
      <div>
        <p className="text-sm font-medium">Fix flaky checkout test</p>
        <p className="text-xs text-muted-foreground">{assigned ? "Assigned to you" : "No assignee"}</p>
      </div>
      {assigned ? (
        <button type="button" onClick={() => setAssigned(false)} aria-label="Unassign" className="rounded-full">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">ME</AvatarFallback>
          </Avatar>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setAssigned(true)}
          aria-label="Assign to me"
          className="flex size-8 items-center justify-center rounded-full border border-dashed border-muted-foreground/50 text-muted-foreground hover:border-foreground hover:text-foreground"
        >
          <UserPlusIcon className="size-4" />
        </button>
      )}
    </div>
  )
}`,
  },
]

export default examples
