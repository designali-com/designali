import { type Example } from "./_lib.mjs"

/* ------------------------------------------------------------------ */
/* Template for the simpler, context-driven confirmations              */
/* ------------------------------------------------------------------ */

interface Simple {
  name: string
  description: string
  /** Trigger button label (omit for icon-only triggers). */
  trigger?: string
  triggerVariant?: string
  triggerSize?: string
  triggerIcon?: string
  triggerLabel?: string
  media?: string
  mediaClass?: string
  title: string
  body: string
  cancel?: string
  action: string
  actionVariant?: string
  actionIcon?: string
  size?: "sm"
  /** Optional setting-row context wrapped around the trigger. */
  row?: { title: string; text: string; icon?: string }
}

function simple(o: Simple): Example {
  const tv = o.triggerVariant ? ` variant="${o.triggerVariant}"` : ""
  const ts = o.triggerSize ? ` size="${o.triggerSize}"` : ""
  const aria = o.triggerLabel ? ` aria-label="${o.triggerLabel}"` : ""
  const ticon = o.triggerIcon
    ? o.trigger
      ? `<${o.triggerIcon} data-icon="inline-start" />`
      : `<${o.triggerIcon} />`
    : ""
  const trigger = `<AlertDialogTrigger render={<Button${tv}${ts}${aria} />}>
        ${ticon}
        ${o.trigger ?? ""}
      </AlertDialogTrigger>`
  const media = o.media
    ? `<AlertDialogMedia${o.mediaClass ? ` className="${o.mediaClass}"` : ""}>
            <${o.media} />
          </AlertDialogMedia>`
    : ""
  const av = o.actionVariant ? ` variant="${o.actionVariant}"` : ""
  const aicon = o.actionIcon ? `<${o.actionIcon} data-icon="inline-start" />` : ""
  const dialog = `<AlertDialog>
      ${trigger}
      <AlertDialogContent${o.size ? ` size="${o.size}"` : ""}>
        <AlertDialogHeader>
          ${media}
          <AlertDialogTitle>${o.title}</AlertDialogTitle>
          <AlertDialogDescription>
            ${o.body}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>${o.cancel ?? "Cancel"}</AlertDialogCancel>
          <AlertDialogAction${av}>
            ${aicon}
            ${o.action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>`
  const root = o.row
    ? `<div className="flex w-full max-w-md items-center gap-3 border p-4">
      ${o.row.icon ? `<div className="flex size-9 shrink-0 items-center justify-center bg-muted"><${o.row.icon} className="size-4" /></div>` : ""}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">${o.row.title}</p>
        <p className="text-xs text-muted-foreground">${o.row.text}</p>
      </div>
      ${dialog}
    </div>`
    : dialog
  return {
    name: o.name,
    description: o.description,
    code: `
export default function ${o.name}() {
  return (
    ${root}
  )
}`,
  }
}

const simpleExamples: Example[] = [
  simple({
    name: "DiscardDraftDialog",
    description: "Compact small-size dialog asking whether to discard an unsent draft.",
    trigger: "Discard draft",
    triggerVariant: "outline",
    triggerIcon: "PenLineIcon",
    size: "sm",
    media: "FileXIcon",
    title: "Discard this draft?",
    body: "Your note to the design team will be lost. This can&apos;t be recovered.",
    cancel: "Keep editing",
    action: "Discard",
    actionVariant: "destructive",
  }),
  simple({
    name: "SignOutAllDevices",
    description: "Security settings row that confirms signing out every other active session.",
    row: { title: "Active sessions", text: "4 devices are signed in", icon: "MonitorSmartphoneIcon" },
    trigger: "Sign out all",
    triggerVariant: "outline",
    triggerSize: "sm",
    media: "LogOutIcon",
    title: "Sign out of all devices?",
    body: "You&apos;ll stay signed in here, but every other browser and phone will need to log in again.",
    action: "Sign out everywhere",
  }),
  simple({
    name: "LeaveWorkspaceDialog",
    description: "Destructive confirmation for leaving a shared workspace.",
    trigger: "Leave workspace",
    triggerVariant: "destructive",
    triggerIcon: "DoorOpenIcon",
    media: "DoorOpenIcon",
    mediaClass: "bg-destructive/10 text-destructive",
    title: "Leave Northwind Studio?",
    body: "You will lose access to 12 projects and 3 shared boards. An admin will need to invite you again.",
    cancel: "Stay",
    action: "Leave workspace",
    actionVariant: "destructive",
  }),
  simple({
    name: "RevokeApiKeyIconTrigger",
    description: "Icon-only ghost trigger on an API key row that confirms revoking the key.",
    row: { title: "Production key", text: "key_demo_...4f9a  -  created Mar 2", icon: "KeyRoundIcon" },
    triggerVariant: "ghost",
    triggerSize: "icon-sm",
    triggerIcon: "Trash2Icon",
    triggerLabel: "Revoke key",
    size: "sm",
    title: "Revoke API key?",
    body: "Requests signed with this key will fail immediately.",
    action: "Revoke",
    actionVariant: "destructive",
  }),
  simple({
    name: "CancelSubscriptionDialog",
    description: "Billing confirmation that frames cancelling as the secondary choice.",
    trigger: "Cancel subscription",
    triggerVariant: "link",
    media: "CreditCardIcon",
    title: "Cancel your Pro plan?",
    body: "You&apos;ll keep Pro features until June 30. After that your workspace moves to the Free plan.",
    cancel: "Keep Pro",
    action: "Cancel plan",
    actionVariant: "destructive",
  }),
  simple({
    name: "ArchiveChannelDialog",
    description: "Neutral archive confirmation for a chat channel.",
    trigger: "Archive #launch-week",
    triggerVariant: "secondary",
    triggerIcon: "ArchiveIcon",
    media: "ArchiveIcon",
    title: "Archive this channel?",
    body: "Members can still search its history, but no one will be able to post new messages.",
    action: "Archive channel",
    actionIcon: "ArchiveIcon",
  }),
  simple({
    name: "UnpublishSiteDialog",
    description: "Confirmation for taking a live website offline.",
    trigger: "Unpublish site",
    triggerVariant: "outline",
    triggerIcon: "GlobeIcon",
    media: "CloudOffIcon",
    title: "Take maple-bakery.site offline?",
    body: "Visitors will see a placeholder page until you publish again. Your content and settings are kept.",
    action: "Unpublish",
    actionVariant: "destructive",
  }),
  simple({
    name: "ClearBuildCacheDialog",
    description: "Developer tooling dialog for clearing the build cache before a redeploy.",
    row: { title: "Build cache", text: "1.8 GB across 42 builds", icon: "DatabaseIcon" },
    trigger: "Clear",
    triggerVariant: "secondary",
    triggerSize: "sm",
    media: "EraserIcon",
    title: "Clear build cache?",
    body: "The next deployment will rebuild from scratch and may take a few extra minutes.",
    action: "Clear cache and redeploy",
  }),
  simple({
    name: "EndMeetingForAll",
    description: "Small destructive dialog for ending a video call for every participant.",
    trigger: "End call",
    triggerVariant: "destructive",
    triggerIcon: "PhoneOffIcon",
    size: "sm",
    media: "PhoneOffIcon",
    mediaClass: "bg-destructive/10 text-destructive",
    title: "End meeting for all?",
    body: "All 9 participants will be disconnected.",
    action: "End for all",
    actionVariant: "destructive",
  }),
  simple({
    name: "DisableTwoFactorDialog",
    description: "Security warning before turning off two-factor authentication.",
    row: { title: "Two-factor authentication", text: "Enabled with an authenticator app", icon: "ShieldCheckIcon" },
    trigger: "Disable",
    triggerVariant: "destructive",
    triggerSize: "sm",
    media: "ShieldOffIcon",
    mediaClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    title: "Turn off two-factor authentication?",
    body: "Your account will be protected by your password only. We strongly recommend keeping 2FA on.",
    cancel: "Keep 2FA",
    action: "Turn off",
    actionVariant: "destructive",
  }),
  simple({
    name: "MakeRepositoryPublic",
    description: "Visibility change confirmation for a code repository.",
    trigger: "Change visibility",
    triggerVariant: "outline",
    triggerIcon: "EyeIcon",
    media: "LockOpenIcon",
    title: "Make atlas-api public?",
    body: "Anyone on the internet will be able to see this repository, including its full commit history.",
    action: "I understand, make public",
  }),
  simple({
    name: "DeleteFolderDialog",
    description: "File manager confirmation for deleting a folder and its contents.",
    row: { title: "Brand assets", text: "38 files  -  214 MB", icon: "FolderIcon" },
    triggerVariant: "ghost",
    triggerSize: "icon-sm",
    triggerIcon: "FolderXIcon",
    triggerLabel: "Delete folder",
    media: "FolderXIcon",
    title: "Delete &quot;Brand assets&quot;?",
    body: "The folder and its 38 files will move to Trash and be permanently removed after 30 days.",
    action: "Move to Trash",
    actionVariant: "destructive",
  }),
  simple({
    name: "ExitOnboardingDialog",
    description: "Close button on an onboarding flow that confirms skipping setup.",
    triggerVariant: "outline",
    triggerSize: "icon",
    triggerIcon: "XIcon",
    triggerLabel: "Exit setup",
    size: "sm",
    media: "MapIcon",
    title: "Skip setup for now?",
    body: "You can finish onboarding anytime from Settings.",
    cancel: "Continue setup",
    action: "Skip",
    actionVariant: "secondary",
  }),
  simple({
    name: "ConfirmPayoutDialog",
    description: "Non-destructive confirmation before sending a payout.",
    trigger: "Send payout",
    triggerIcon: "BanknoteIcon",
    media: "BanknoteIcon",
    mediaClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    title: "Send $2,480.00 to Lena Ortiz?",
    body: "Funds will arrive in the account ending 4421 within 1-2 business days.",
    action: "Send payout",
    actionIcon: "SendIcon",
  }),
  simple({
    name: "RestoreVersionDialog",
    description: "Version history action confirming a restore to an earlier revision.",
    row: { title: "Version 14", text: "Edited by Priya Nair  -  2 days ago", icon: "HistoryIcon" },
    trigger: "Restore",
    triggerVariant: "outline",
    triggerSize: "sm",
    media: "HistoryIcon",
    title: "Restore version 14?",
    body: "The current document will be saved as a new version first, so nothing is lost.",
    action: "Restore this version",
  }),
  simple({
    name: "BlockUserDialog",
    description: "Community moderation dialog confirming a user block.",
    trigger: "Block @rowan.k",
    triggerVariant: "ghost",
    triggerIcon: "BanIcon",
    size: "sm",
    media: "BanIcon",
    mediaClass: "bg-destructive/10 text-destructive",
    title: "Block @rowan.k?",
    body: "They won&apos;t be able to message you or see your posts.",
    action: "Block",
    actionVariant: "destructive",
  }),
  simple({
    name: "ForcePushWarning",
    description: "Warning dialog before force-pushing over a protected branch.",
    trigger: "Force push",
    triggerVariant: "destructive",
    triggerIcon: "GitBranchIcon",
    media: "TriangleAlertIcon",
    mediaClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    title: "Force push to main?",
    body: "This rewrites history on a shared branch. 3 teammates have commits that will be overwritten.",
    cancel: "Abort",
    action: "Force push anyway",
    actionVariant: "destructive",
  }),
]

/* ------------------------------------------------------------------ */
/* Custom examples                                                     */
/* ------------------------------------------------------------------ */

const customExamples: Example[] = [
  {
    name: "TypeToConfirmDelete",
    description: "Delete action that stays disabled until the project name is typed exactly.",
    code: `
const projectName = "orbit-dashboard"

export default function TypeToConfirmDelete() {
  const [value, setValue] = React.useState("")
  const matches = value === projectName

  return (
    <AlertDialog onOpenChange={(open) => !open && setValue("")}>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Delete project
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {projectName}?</AlertDialogTitle>
          <AlertDialogDescription>
            This permanently removes the project, its 18 deployments and all environment variables.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Field>
          <FieldLabel htmlFor="confirm-project">
            Type <span className="font-mono text-foreground">{projectName}</span> to confirm
          </FieldLabel>
          <Input
            id="confirm-project"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoComplete="off"
            aria-invalid={value.length > 0 && !matches}
          />
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" disabled={!matches}>
            Delete project
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "AsyncConfirmWithSpinner",
    description: "Controlled dialog that shows a spinner while the deletion request runs, then closes.",
    code: `
export default function AsyncConfirmWithSpinner() {
  const [open, setOpen] = React.useState(false)
  const [pending, setPending] = React.useState(false)
  const [deleted, setDeleted] = React.useState(false)

  function handleConfirm() {
    setPending(true)
    setTimeout(() => {
      setPending(false)
      setDeleted(true)
      setOpen(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <AlertDialog open={open} onOpenChange={(next) => !pending && setOpen(next)}>
        <AlertDialogTrigger render={<Button variant="outline" disabled={deleted} />}>
          {deleted ? "Webhook deleted" : "Delete webhook"}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <WebhookIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete webhook endpoint?</AlertDialogTitle>
            <AlertDialogDescription>
              Events will no longer be sent to https://hooks.fernway.dev/orders.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={handleConfirm} disabled={pending}>
              {pending && <Spinner data-icon="inline-start" />}
              {pending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {deleted && (
        <Button variant="link" size="sm" onClick={() => setDeleted(false)}>
          Reset demo
        </Button>
      )}
    </div>
  )
}`,
  },
  {
    name: "DontAskAgainCheckbox",
    description: "Confirmation with a remembered 'don't ask again' preference that skips the dialog next time.",
    code: `
export default function DontAskAgainCheckbox() {
  const [open, setOpen] = React.useState(false)
  const [skip, setSkip] = React.useState(false)
  const [remember, setRemember] = React.useState(false)
  const [moved, setMoved] = React.useState(0)

  function moveToTrash() {
    setMoved((count) => count + 1)
    setOpen(false)
    if (remember) setSkip(true)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button variant="outline" onClick={() => (skip ? moveToTrash() : setOpen(true))}>
        <Trash2Icon data-icon="inline-start" />
        Move to Trash
      </Button>
      <p className="text-xs text-muted-foreground">
        {moved} item{moved === 1 ? "" : "s"} moved {skip && "- confirmation skipped"}
      </p>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Move to Trash?</AlertDialogTitle>
            <AlertDialogDescription>You can restore it from Trash for 30 days.</AlertDialogDescription>
          </AlertDialogHeader>
          <Field orientation="horizontal">
            <Checkbox
              id="dont-ask"
              checked={remember}
              onCheckedChange={(checked) => setRemember(checked === true)}
            />
            <FieldLabel htmlFor="dont-ask" className="font-normal">
              Don&apos;t ask me again
            </FieldLabel>
          </Field>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={moveToTrash}>Move</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}`,
  },
  {
    name: "BulkDeleteSelectedFiles",
    description: "Bulk action bar whose confirmation lists every selected file before deletion.",
    code: `
const files = [
  { name: "q3-roadmap.pdf", size: "2.4 MB" },
  { name: "logo-final-v4.svg", size: "84 KB" },
  { name: "interview-notes.docx", size: "312 KB" },
  { name: "pricing-model.xlsx", size: "1.1 MB" },
]

export default function BulkDeleteSelectedFiles() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 border bg-muted/40 px-3 py-2">
      <span className="text-sm">{files.length} files selected</span>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="destructive" size="sm" />}>
          <Trash2Icon data-icon="inline-start" />
          Delete
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {files.length} files?</AlertDialogTitle>
            <AlertDialogDescription>These files will be permanently deleted for everyone.</AlertDialogDescription>
          </AlertDialogHeader>
          <ul className="divide-y border text-sm">
            {files.map((file) => (
              <li key={file.name} className="flex items-center gap-2 px-3 py-2">
                <FileIcon className="size-4 text-muted-foreground" />
                <span className="min-w-0 flex-1 truncate">{file.name}</span>
                <span className="text-xs text-muted-foreground">{file.size}</span>
              </li>
            ))}
          </ul>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive">Delete files</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}`,
  },
  {
    name: "DropdownMenuDeleteAction",
    description: "A row actions dropdown whose Delete item opens a controlled alert dialog.",
    code: `
export default function DropdownMenuDeleteAction() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center justify-between border p-3">
      <div>
        <p className="text-sm font-medium">Spring campaign</p>
        <p className="text-xs text-muted-foreground">Scheduled for Apr 14</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Campaign actions" />}>
          <EllipsisIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={() => setOpen(true)}>
            <Trash2Icon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete campaign?</AlertDialogTitle>
            <AlertDialogDescription>The scheduled send to 4,210 subscribers will be cancelled.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}`,
  },
  {
    name: "RemoveTeamMemberAvatar",
    description: "Team list row where removing a member shows their avatar inside the dialog media slot.",
    code: `
export default function RemoveTeamMemberAvatar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <Avatar>
        <AvatarFallback>DK</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Daniel Kovacs</p>
        <p className="truncate text-xs text-muted-foreground">daniel@lumenlabs.io</p>
      </div>
      <Badge variant="secondary">Editor</Badge>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Remove Daniel Kovacs" />}>
          <UserMinusIcon />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-transparent">
              <Avatar size="lg">
                <AvatarFallback>DK</AvatarFallback>
              </Avatar>
            </AlertDialogMedia>
            <AlertDialogTitle>Remove Daniel from Lumen Labs?</AlertDialogTitle>
            <AlertDialogDescription>
              Daniel will lose access immediately. Files he owns will be transferred to you.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive">Remove member</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}`,
  },
  {
    name: "TableRowDeleteConfirm",
    description: "Admin table where each row's delete button confirms before removing that row from state.",
    code: `
const initialInvoices = [
  { id: "INV-1042", client: "Harbor & Pine", amount: "$1,250.00" },
  { id: "INV-1043", client: "Sunfield Co.", amount: "$860.00" },
  { id: "INV-1044", client: "Kite Robotics", amount: "$3,400.00" },
]

export default function TableRowDeleteConfirm() {
  const [invoices, setInvoices] = React.useState(initialInvoices)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Client</TableHead>
            <TableHead className="text-end">Amount</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-mono text-xs">{invoice.id}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell className="text-end">{invoice.amount}</TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger render={<Button variant="ghost" size="icon-xs" aria-label={"Delete " + invoice.id} />}>
                    <Trash2Icon />
                  </AlertDialogTrigger>
                  <AlertDialogContent size="sm">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Void {invoice.id}?</AlertDialogTitle>
                      <AlertDialogDescription>
                        {invoice.client} will be notified that this invoice is no longer due.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        variant="destructive"
                        onClick={() => setInvoices((list) => list.filter((item) => item.id !== invoice.id))}
                      >
                        Void
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
          {invoices.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="py-6 text-center text-muted-foreground">
                No open invoices.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "PlanDowngradeFeatureLoss",
    description: "Downgrade confirmation listing the features the workspace will lose.",
    code: `
const losing = [
  "Unlimited version history",
  "SSO and SCIM provisioning",
  "Advanced analytics dashboards",
  "Priority support",
]

export default function PlanDowngradeFeatureLoss() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Downgrade to Starter</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <ArrowDownCircleIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Downgrade to Starter?</AlertDialogTitle>
          <AlertDialogDescription>Your Business plan ends on your next billing date, July 1.</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-2 border bg-muted/40 p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium">You&apos;ll lose access to</span>
            <Badge variant="destructive">{losing.length} features</Badge>
          </div>
          <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
            {losing.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <XIcon className="size-3.5 text-destructive" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Business</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Downgrade</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "SessionTimeoutCountdown",
    description: "Idle-session warning that counts down and lets the user stay signed in.",
    code: `
export default function SessionTimeoutCountdown() {
  const [open, setOpen] = React.useState(false)
  const [seconds, setSeconds] = React.useState(60)

  React.useEffect(() => {
    if (!open) return
    const timer = setInterval(() => {
      setSeconds((value) => (value > 0 ? value - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [open])

  function show() {
    setSeconds(60)
    setOpen(true)
  }

  return (
    <>
      <Button variant="outline" onClick={show}>
        <TimerIcon data-icon="inline-start" />
        Simulate idle timeout
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <TimerIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Your session is about to expire</AlertDialogTitle>
            <AlertDialogDescription>
              For your security, you&apos;ll be signed out in{" "}
              <span className="font-mono font-medium text-foreground tabular-nums">0:{String(seconds).padStart(2, "0")}</span>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Progress value={(seconds / 60) * 100} />
          <AlertDialogFooter>
            <AlertDialogCancel>Sign out</AlertDialogCancel>
            <AlertDialogAction onClick={() => setOpen(false)}>Stay signed in</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}`,
  },
  {
    name: "DeleteUserReassignChoice",
    description: "Offboarding dialog with a radio choice for what happens to the user's content.",
    code: `
export default function DeleteUserReassignChoice() {
  const [choice, setChoice] = React.useState("transfer")

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Offboard Maya Chen</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Offboard Maya Chen?</AlertDialogTitle>
          <AlertDialogDescription>Maya owns 27 documents and 4 automations. Choose what happens to them.</AlertDialogDescription>
        </AlertDialogHeader>
        <RadioGroup value={choice} onValueChange={(value) => setChoice(value as string)}>
          <Field orientation="horizontal">
            <RadioGroupItem value="transfer" id="offboard-transfer" />
            <FieldContent>
              <FieldLabel htmlFor="offboard-transfer">Transfer to me</FieldLabel>
              <FieldDescription>Keep everything and become the new owner.</FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="delete" id="offboard-delete" />
            <FieldContent>
              <FieldLabel htmlFor="offboard-delete">Delete all content</FieldLabel>
              <FieldDescription>Permanently remove her documents and automations.</FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            {choice === "delete" ? "Offboard and delete" : "Offboard and transfer"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "WireTransferOtpConfirm",
    description: "High-value transfer confirmation requiring a 6-digit code before the action enables.",
    code: `
export default function WireTransferOtpConfirm() {
  const [code, setCode] = React.useState("")

  return (
    <AlertDialog onOpenChange={(open) => !open && setCode("")}>
      <AlertDialogTrigger render={<Button />}>
        <LandmarkIcon data-icon="inline-start" />
        Confirm wire transfer
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Send $18,000.00?</AlertDialogTitle>
          <AlertDialogDescription>
            Enter the code we sent to your phone ending in 07 to authorize this transfer to Brightline Supply.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={code} onChange={setCode}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={code.length < 6}>Authorize transfer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "PasswordReauthDelete",
    description: "Account deletion that asks for the current password and shows an inline validation error.",
    code: `
export default function PasswordReauthDelete() {
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")

  function handleDelete() {
    if (password.length < 8) {
      setError("That password doesn't look right. Try again.")
      return
    }
    setError("")
  }

  return (
    <AlertDialog
      onOpenChange={(open) => {
        if (!open) {
          setPassword("")
          setError("")
        }
      }}
    >
      <AlertDialogTrigger render={<Button variant="destructive" />}>Delete account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <UserXIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete your account?</AlertDialogTitle>
          <AlertDialogDescription>All your data will be erased within 14 days. Confirm with your password.</AlertDialogDescription>
        </AlertDialogHeader>
        <Field data-invalid={Boolean(error)}>
          <FieldLabel htmlFor="reauth-password">Current password</FieldLabel>
          <Input
            id="reauth-password"
            type="password"
            value={password}
            aria-invalid={Boolean(error)}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && <FieldError>{error}</FieldError>}
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={handleDelete} disabled={!password}>
            Delete account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "ArchiveWithUndo",
    description: "Confirmation that archives a project and then offers an inline undo.",
    code: `
export default function ArchiveWithUndo() {
  const [archived, setArchived] = React.useState(false)

  if (archived) {
    return (
      <div className="flex w-full max-w-sm items-center justify-between gap-3 border bg-muted/40 px-3 py-2 text-sm">
        <span className="flex items-center gap-2">
          <ArchiveIcon className="size-4 text-muted-foreground" />
          &quot;Website refresh&quot; archived
        </span>
        <Button variant="link" size="sm" onClick={() => setArchived(false)}>
          <Undo2Icon data-icon="inline-start" />
          Undo
        </Button>
      </div>
    )
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <ArchiveIcon data-icon="inline-start" />
        Archive project
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Archive &quot;Website refresh&quot;?</AlertDialogTitle>
          <AlertDialogDescription>It will be hidden from the sidebar for all members.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setArchived(true)}>Archive</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "StackedFullWidthFooter",
    description: "Mobile-style dialog with centered header and full-width stacked actions.",
    code: `
export default function StackedFullWidthFooter() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button />}>Enable notifications</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="place-items-center text-center sm:group-data-[size=default]/alert-dialog-content:place-items-center sm:group-data-[size=default]/alert-dialog-content:text-center">
          <AlertDialogMedia className="size-12 rounded-full">
            <BellRingIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Stay in the loop</AlertDialogTitle>
          <AlertDialogDescription>
            Get notified when your order ships, when a driver is nearby, and when it&apos;s delivered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:flex-col-reverse sm:justify-stretch">
          <AlertDialogCancel variant="ghost" className="w-full">
            Not now
          </AlertDialogCancel>
          <AlertDialogAction className="w-full">Allow notifications</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "KeyboardShortcutHints",
    description: "Dialog whose actions display Esc and Enter keyboard hints.",
    code: `
export default function KeyboardShortcutHints() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Close tab
        <KbdGroup className="ms-1">
          <Kbd>Ctrl</Kbd>
          <Kbd>W</Kbd>
        </KbdGroup>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Close with unsaved changes?</AlertDialogTitle>
          <AlertDialogDescription>&quot;onboarding-copy.md&quot; has edits that haven&apos;t been saved.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel <Kbd className="ms-1">Esc</Kbd>
          </AlertDialogCancel>
          <AlertDialogAction variant="destructive" autoFocus>
            Close anyway <Kbd className="ms-1">Enter</Kbd>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "TermsAcceptanceScroll",
    description: "Terms update dialog with a scrollable summary and an agreement checkbox gating the action.",
    code: `
const changes = [
  "We now process payments through a new regional provider in the EU.",
  "Data retention for deleted workspaces is reduced from 90 to 30 days.",
  "Usage-based add-ons are billed at the end of each billing period.",
  "You can export your full account data at any time from Settings.",
  "Disputes are handled under the laws of the state of Oregon.",
]

export default function TermsAcceptanceScroll() {
  const [agreed, setAgreed] = React.useState(false)

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <ScrollTextIcon data-icon="inline-start" />
        Review updated terms
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>We&apos;ve updated our Terms of Service</AlertDialogTitle>
          <AlertDialogDescription>Please review the summary below. The changes take effect on May 1.</AlertDialogDescription>
        </AlertDialogHeader>
        <ScrollArea className="h-32 border">
          <ol className="flex list-decimal flex-col gap-2 p-3 ps-7 text-xs text-muted-foreground">
            {changes.map((change) => (
              <li key={change}>{change}</li>
            ))}
          </ol>
        </ScrollArea>
        <Field orientation="horizontal">
          <Checkbox id="agree-terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
          <FieldLabel htmlFor="agree-terms" className="font-normal">
            I have read and agree to the updated terms
          </FieldLabel>
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Remind me later</AlertDialogCancel>
          <AlertDialogAction disabled={!agreed}>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "StopUploadProgress",
    description: "Upload panel where cancelling an in-progress upload asks for confirmation.",
    code: `
export default function StopUploadProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center bg-muted">
          <FileVideoIcon className="size-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">product-launch-keynote.mp4</p>
          <p className="text-xs text-muted-foreground">1.2 GB of 1.9 GB  -  2 min left</p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Stop upload" />}>
            <XIcon />
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia>
                <UploadCloudIcon />
              </AlertDialogMedia>
              <AlertDialogTitle>Stop uploading?</AlertDialogTitle>
              <AlertDialogDescription>63% is uploaded. You&apos;ll need to start over.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep going</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Stop</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Progress value={63} />
    </div>
  )
}`,
  },
  {
    name: "EnvironmentImpactSummary",
    description: "Deleting an environment shows a grid of the resources that will be destroyed.",
    code: `
const impact = [
  { label: "Deployments", value: "126" },
  { label: "Domains", value: "3" },
  { label: "Env variables", value: "42" },
  { label: "Cron jobs", value: "5" },
]

export default function EnvironmentImpactSummary() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        <ServerOffIcon data-icon="inline-start" />
        Delete staging
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete the staging environment?</AlertDialogTitle>
          <AlertDialogDescription>The following resources will be destroyed and cannot be restored.</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid grid-cols-2 gap-px border bg-border">
          {impact.map((item) => (
            <div key={item.label} className="bg-popover p-3">
              <p className="text-lg font-semibold tabular-nums">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete environment</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "PublishReleaseChecklist",
    description: "Release publish confirmation with a pre-flight checklist showing passed and warning checks.",
    code: `
const checks = [
  { label: "All 248 tests passed", ok: true },
  { label: "Changelog updated", ok: true },
  { label: "2 open issues tagged for this release", ok: false },
]

export default function PublishReleaseChecklist() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button />}>
        <RocketIcon data-icon="inline-start" />
        Publish v2.4.0
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Publish v2.4.0 to npm?</AlertDialogTitle>
          <AlertDialogDescription>Published versions can be deprecated but never overwritten.</AlertDialogDescription>
        </AlertDialogHeader>
        <ul className="flex flex-col gap-2 text-sm">
          {checks.map((check) => (
            <li key={check.label} className="flex items-center gap-2">
              {check.ok ? (
                <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <CircleAlertIcon className="size-4 text-amber-600 dark:text-amber-400" />
              )}
              <span className={cn(!check.ok && "text-muted-foreground")}>{check.label}</span>
            </li>
          ))}
        </ul>
        <AlertDialogFooter>
          <AlertDialogCancel>Not yet</AlertDialogCancel>
          <AlertDialogAction>Publish release</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "SwitchToggleConfirmation",
    description: "A maintenance-mode switch that only turns on after the change is confirmed.",
    code: `
export default function SwitchToggleConfirmation() {
  const [enabled, setEnabled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-4">
      <div>
        <p className="text-sm font-medium">Maintenance mode</p>
        <p className="text-xs text-muted-foreground">
          {enabled ? "Visitors see a maintenance page" : "Storefront is live"}
        </p>
      </div>
      <Switch
        checked={enabled}
        onCheckedChange={(checked) => (checked ? setOpen(true) : setEnabled(false))}
        aria-label="Maintenance mode"
      />
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <ConstructionIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Turn on maintenance mode?</AlertDialogTitle>
            <AlertDialogDescription>Customers won&apos;t be able to browse or check out until you turn it off.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setEnabled(true)
                setOpen(false)
              }}
            >
              Turn on
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}`,
  },
  {
    name: "UnsavedChangesThreeActions",
    description: "Navigation guard on a dirty form offering save, discard, or cancel.",
    code: `
export default function UnsavedChangesThreeActions() {
  const [name, setName] = React.useState("Acme Field Ops")
  const [saved, setSaved] = React.useState("Acme Field Ops")
  const [open, setOpen] = React.useState(false)
  const dirty = name !== saved

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Field>
        <FieldLabel htmlFor="team-name">Team name</FieldLabel>
        <Input id="team-name" value={name} onChange={(event) => setName(event.target.value)} />
        <FieldDescription>{dirty ? "You have unsaved changes." : "All changes saved."}</FieldDescription>
      </Field>
      <Button variant="outline" onClick={() => (dirty ? setOpen(true) : undefined)}>
        <ArrowLeftIcon data-icon="inline-start" />
        Back to teams
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Save changes before leaving?</AlertDialogTitle>
            <AlertDialogDescription>Your edits to this team will be lost if you don&apos;t save them.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="ghost" className="sm:me-auto">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              variant="outline"
              onClick={() => {
                setName(saved)
                setOpen(false)
              }}
            >
              Discard
            </AlertDialogAction>
            <AlertDialogAction
              onClick={() => {
                setSaved(name)
                setOpen(false)
              }}
            >
              Save
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}`,
  },
  {
    name: "SyncErrorRetry",
    description: "Error-state alert dialog with a monospace error code and a retry action.",
    code: `
export default function SyncErrorRetry() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <RefreshCwOffIcon data-icon="inline-start" />
        Sync failed
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <CircleXIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Couldn&apos;t sync your calendar</AlertDialogTitle>
          <AlertDialogDescription>
            The provider rejected our request. Check your connection or <a href="#">reconnect the account</a>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <pre className="overflow-x-auto bg-muted p-3 font-mono text-xs text-muted-foreground">
          ERR_TOKEN_EXPIRED (401){"\\n"}request_id: 7f3a-91c2-bb04
        </pre>
        <AlertDialogFooter>
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction>
            <RefreshCwIcon data-icon="inline-start" />
            Try again
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "EmailChangeConfirm",
    description: "Account email change showing the old and new address side by side.",
    code: `
export default function EmailChangeConfirm() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="secondary" />}>
        <AtSignIcon data-icon="inline-start" />
        Update email
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Change your sign-in email?</AlertDialogTitle>
          <AlertDialogDescription>We&apos;ll send a verification link to the new address. Until then, keep using your current one.</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-2 border p-3 text-sm sm:flex-row sm:items-center">
          <span className="min-w-0 truncate text-muted-foreground line-through">sam.rivera@oldmail.com</span>
          <ArrowRightIcon className="size-4 shrink-0 rotate-90 text-muted-foreground sm:rotate-0" />
          <span className="min-w-0 truncate font-medium">sam@rivera.studio</span>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Send verification</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "CancelEventNotifyGuests",
    description: "Calendar event cancellation with a notify-guests switch and optional message.",
    code: `
export default function CancelEventNotifyGuests() {
  const [notify, setNotify] = React.useState(true)

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <CalendarXIcon data-icon="inline-start" />
        Cancel event
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancel &quot;Quarterly planning&quot;?</AlertDialogTitle>
          <AlertDialogDescription>Thu, Sep 12  -  10:00-11:30 AM  -  12 guests</AlertDialogDescription>
        </AlertDialogHeader>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="notify-guests" className="flex-1">
              Email guests about the cancellation
            </FieldLabel>
            <Switch id="notify-guests" checked={notify} onCheckedChange={setNotify} />
          </Field>
          {notify && (
            <Field>
              <FieldLabel htmlFor="cancel-note">Message (optional)</FieldLabel>
              <Textarea id="cancel-note" placeholder="We'll reschedule after the offsite." className="min-h-16" />
            </Field>
          )}
        </FieldGroup>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep event</AlertDialogCancel>
          <AlertDialogAction variant="destructive">{notify ? "Cancel and notify" : "Cancel event"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "CartRemoveItem",
    description: "Checkout cart line item whose remove button confirms in a small dialog.",
    code: `
export default function CartRemoveItem() {
  const [removed, setRemoved] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      {removed ? (
        <p className="py-4 text-center text-sm text-muted-foreground">Your cart is empty.</p>
      ) : (
        <div className="flex items-center gap-3">
          <div className="size-14 shrink-0 bg-linear-to-br from-orange-300 to-rose-400" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">Ceramic pour-over set</p>
            <p className="text-xs text-muted-foreground">Sand  -  Qty 1</p>
            <p className="mt-1 text-sm font-semibold">$64.00</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="ghost" size="sm" />}>Remove</AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <ShoppingCartIcon />
                </AlertDialogMedia>
                <AlertDialogTitle>Remove from cart?</AlertDialogTitle>
                <AlertDialogDescription>Only 3 left in stock.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep</AlertDialogCancel>
                <AlertDialogAction variant="destructive" onClick={() => setRemoved(true)}>
                  Remove
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
      <Button disabled={removed} className="w-full">
        Checkout
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ChatDeleteMessageScope",
    description: "Chat message delete dialog offering 'for me' and 'for everyone' options.",
    code: `
export default function ChatDeleteMessageScope() {
  return (
    <div className="flex w-full max-w-sm flex-col items-end gap-1">
      <div className="group flex items-center gap-1">
        <AlertDialog>
          <AlertDialogTrigger
            render={<Button variant="ghost" size="icon-xs" aria-label="Delete message" className="opacity-60 group-hover:opacity-100" />}
          >
            <Trash2Icon />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete message?</AlertDialogTitle>
              <AlertDialogDescription>Deleting for everyone removes it from Jonah&apos;s chat too.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="outline">Delete for me</AlertDialogAction>
              <AlertDialogAction variant="destructive">Delete for everyone</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className="max-w-60 bg-primary px-3 py-2 text-sm text-primary-foreground">
          Sending the venue deposit now, can you double-check the date?
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground">Delivered  -  9:41 AM</span>
    </div>
  )
}`,
  },
  {
    name: "DecisionResultTracking",
    description: "Controlled dialog that reports whether the user confirmed or dismissed it.",
    code: `
export default function DecisionResultTracking() {
  const [open, setOpen] = React.useState(false)
  const [result, setResult] = React.useState<"none" | "confirmed" | "dismissed">("none")

  return (
    <div className="flex flex-col items-center gap-3">
      <AlertDialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next && result !== "confirmed") setResult("dismissed")
        }}
      >
        <AlertDialogTrigger render={<Button variant="outline" onClick={() => setResult("none")} />}>
          Reset analytics data
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Reset analytics?</AlertDialogTitle>
            <AlertDialogDescription>Page views and events from the last 90 days will be cleared.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                setResult("confirmed")
                setOpen(false)
              }}
            >
              Reset
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Badge variant={result === "confirmed" ? "destructive" : "secondary"}>
        Last decision: {result === "none" ? "pending" : result}
      </Badge>
    </div>
  )
}`,
  },
  {
    name: "EmptyTrashCountBadge",
    description: "Empty Trash trigger with an item-count badge and a permanent-deletion warning.",
    code: `
export default function EmptyTrashCountBadge() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <Trash2Icon data-icon="inline-start" />
        Empty Trash
        <Badge variant="secondary" className="ms-1">
          57
        </Badge>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Permanently delete 57 items?</AlertDialogTitle>
          <AlertDialogDescription>This frees up 3.6 GB. Items in Trash can&apos;t be recovered once deleted.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Empty Trash</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "DescriptionWithLearnMoreLink",
    description: "Data residency change whose description includes an inline documentation link.",
    code: `
export default function DescriptionWithLearnMoreLink() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <MapPinIcon data-icon="inline-start" />
        Move data to EU region
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <GlobeLockIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Migrate workspace to Frankfurt?</AlertDialogTitle>
          <AlertDialogDescription>
            Migration runs overnight and the workspace is read-only for up to 2 hours.{" "}
            <a href="#">Learn how data residency works</a>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Not now</AlertDialogCancel>
          <AlertDialogAction>Schedule migration</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "TransferOwnershipSelect",
    description: "Ownership transfer where a new owner must be chosen from a select before confirming.",
    code: `
const admins = [
  { value: null, label: "Choose an admin" },
  { value: "amara", label: "Amara Osei" },
  { value: "tomas", label: "Tomas Lindqvist" },
  { value: "keiko", label: "Keiko Tanaka" },
]

export default function TransferOwnershipSelect() {
  const [owner, setOwner] = React.useState<string | null>(null)

  return (
    <AlertDialog onOpenChange={(open) => !open && setOwner(null)}>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <CrownIcon data-icon="inline-start" />
        Transfer ownership
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Transfer workspace ownership</AlertDialogTitle>
          <AlertDialogDescription>
            The new owner gets full billing and admin control. You&apos;ll become an admin.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Field>
          <FieldLabel>New owner</FieldLabel>
          <Select items={admins} value={owner} onValueChange={(value) => setOwner(value as string | null)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {admins.filter((admin) => admin.value).map((admin) => (
                <SelectItem key={admin.value} value={admin.value}>
                  {admin.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={!owner}>Transfer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "RefundOrderAmount",
    description: "Order refund confirmation summarising line totals before issuing the refund.",
    code: `
const lines = [
  { label: "Linen throw blanket", value: "$89.00" },
  { label: "Shipping", value: "$6.50" },
  { label: "Tax", value: "$7.64" },
]

export default function RefundOrderAmount() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="secondary" />}>
        <ReceiptIcon data-icon="inline-start" />
        Refund order #5821
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Issue a full refund?</AlertDialogTitle>
          <AlertDialogDescription>The customer, Nora Feld, will be refunded to their original payment method.</AlertDialogDescription>
        </AlertDialogHeader>
        <dl className="flex flex-col gap-1.5 border p-3 text-sm">
          {lines.map((line) => (
            <div key={line.label} className="flex justify-between">
              <dt className="text-muted-foreground">{line.label}</dt>
              <dd className="tabular-nums">{line.value}</dd>
            </div>
          ))}
          <Separator className="my-1" />
          <div className="flex justify-between font-medium">
            <dt>Refund total</dt>
            <dd className="tabular-nums">$103.14</dd>
          </div>
        </dl>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Refund $103.14</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
]

export default [...simpleExamples, ...customExamples] satisfies Example[]
