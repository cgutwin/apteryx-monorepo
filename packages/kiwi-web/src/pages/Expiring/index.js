import { Router } from "@reach/router"
import React, { Suspense } from "react"

// Lazy Imports
const Expiring = React.lazy(() => import("./Expiring"))
const NewExpiry = React.lazy(() => import("./NewExpiry"))

export default function ExpiringRouter({ changeTheme }) {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Router>
        <Expiring path="/" changeTheme={changeTheme} />
        <NewExpiry path="/new/:upc" />
      </Router>
    </Suspense>
  )
}
