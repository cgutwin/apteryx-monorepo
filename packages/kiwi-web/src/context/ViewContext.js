import { createContext } from "react"

const ViewContext = createContext({
  currentView: null,
  setCurrentView: undefined
})

export default ViewContext
