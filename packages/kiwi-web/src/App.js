import React, { useState } from "react"
import ViewContext from "./context/ViewContext"
import ExpiringView from "./views/expiring/ExpiringView"

function App() {
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
