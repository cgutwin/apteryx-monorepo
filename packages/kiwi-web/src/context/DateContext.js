import { createContext } from "react"

const DateContext = createContext({
  activeDate: null,
  setActiveDate: undefined
})

export default DateContext
