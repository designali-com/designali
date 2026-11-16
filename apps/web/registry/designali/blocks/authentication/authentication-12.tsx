"use client"

import { useState } from "react"
import {
  ChevronRight,
  Plus,
  Trash2,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const initialAccounts = [
  {
    name: "Ali Imam",
    email: "ali@designali.com",
    org: "Designali",
    color: "from-primary to-primary",
    status: "Signed in",
  },
  {
    name: "Ali Imam",
    email: "hello@designali.com",
    org: "Personal",
    color: "from-primary to-primary",
    status: "Signed out",
  },
  {
    name: "A. Imam",
    email: "ali@example.com",
    org: "Dalim Works",
    color: "from-primary to-chart-2",
    status: "Session expired",
  },
]

export default function Authentication12() {
  const [accounts, setAccounts] = useState(initialAccounts)
  const [editing, setEditing] = useState(false)

  return (
    <section className="flex min-h-[640px] w-full items-center justify-center bg-muted/40 px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <span className="mx-auto flex size-10 items-center justify-center bg-foreground font-sans text-sm font-bold text-background">
            ~
          </span>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">Choose an account</h2>
          <p className="mt-1 text-sm text-muted-foreground">to continue to designali.com</p>
        </div>

        <ul className="mt-8 divide-y border bg-background">
          {accounts.map((account) => (
            <li key={account.email}>
              <div className="flex items-center gap-4 p-4">
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white",
                    account.color
                  )}
                >
                  {account.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .replace(".", "")}
                </span>
                <button type="button" disabled={editing} className="min-w-0 flex-1 text-start disabled:cursor-default">
                  <span className="block truncate text-sm font-medium">{account.name}</span>
                  <span className="block truncate text-sm text-muted-foreground">{account.email}</span>
                </button>
                {editing ? (
                  <button
                    type="button"
                    aria-label={`Remove ${account.email}`}
                    onClick={() => setAccounts(accounts.filter((item) => item.email !== account.email))}
                    className="flex size-8 items-center justify-center text-muted-foreground hover:text-destructive dark:hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                ) : (
                  <span className="flex shrink-0 items-center gap-2">
                    <span
                      className={cn(
                        "hidden text-xs sm:inline",
                        account.status === "Signed in" ? "text-chart-3 dark:text-primary" : "text-muted-foreground"
                      )}
                    >
                      {account.status}
                    </span>
                    <ChevronRight className="size-4 text-muted-foreground" />
                  </span>
                )}
              </div>
            </li>
          ))}
          <li>
            <button type="button" className="flex w-full items-center gap-4 p-4 text-sm hover:bg-muted/50">
              <span className="flex size-10 items-center justify-center rounded-full border border-dashed">
                <Plus className="size-4" />
              </span>
              Use another account
            </button>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between text-sm">
          <Button variant="ghost" size="sm" onClick={() => setEditing(!editing)}>
            {editing ? "Done" : "Remove an account"}
          </Button>
          <a href="#" className="text-muted-foreground hover:text-foreground">Help</a>
        </div>
      </div>
    </section>
  )
}
