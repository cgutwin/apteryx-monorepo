import React, { useState } from "react"
import ViewContext from "./context/ViewContext"
import ExpiringView from "./views/ExpiringView"

function App() {
  const [currentView, setCurrentView] = useState(<ExpiringView />)

  return (
    /* TODO: Provide some sort of history stack */
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
