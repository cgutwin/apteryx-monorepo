import React, { useState } from "react"
import ViewContext from "./context/ViewContext"
import PostScanningView from "./views/PostScanningView"

function App() {
  const [currentView, setCurrentView] = useState(<PostScanningView productCode="065800130098" />)

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
