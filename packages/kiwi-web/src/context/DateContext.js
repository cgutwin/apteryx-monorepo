import { createContext } from "react"

const DateContext = createContext({
  selectedDate: undefined,
  setSelectedDate: function () {
    return null
  }
})

export default DateContext
