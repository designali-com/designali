import { Suspense } from "react"

import LogosClient from "./logos-client"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LogosClient />
    </Suspense>
  )
}