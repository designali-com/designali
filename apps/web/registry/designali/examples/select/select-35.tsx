"use client"

import * as React from "react"
import { FolderGitIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Spinner } from "@workspace/ui/components/spinner"

type Repo = { label: string; value: string }

export default function AsyncLoadingSelect() {
  const [repos, setRepos] = React.useState<Repo[] | null>(null)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setRepos([
        { label: "web-app", value: "web-app" },
        { label: "mobile-client", value: "mobile-client" },
        { label: "billing-service", value: "billing-service" },
        { label: "design-tokens", value: "design-tokens" },
      ])
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const loading = repos === null

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="repository">Repository</FieldLabel>
      <Select items={repos ?? []} disabled={loading}>
        <SelectTrigger id="repository" className="w-full">
          {loading ? (
            <Spinner />
          ) : (
            <FolderGitIcon className="text-muted-foreground" />
          )}
          <SelectValue
            placeholder={
              loading ? "Loading repositories..." : "Select a repository"
            }
          />
        </SelectTrigger>
        <SelectContent>
          {(repos ?? []).map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>
        Connect a repository to enable preview deployments.
      </FieldDescription>
    </Field>
  )
}
