import React, { useState } from "react"
import ViewContext from "./context/ViewContext"
import ExpiringView from "./views/expiring/ExpiringView"

function App() {
  // Elements are set and rendered as the currentView, with setCurrentView accepting an element as its parameter.
  const [currentView, setCurrentView] = useState(<ExpiringView />)

  return (
    <ViewContext.Provider
      value={{
        currentView,
        setCurrentView
      }}
    >
      {currentView}
    </ViewContext.Provider>
  )
}

export default App
