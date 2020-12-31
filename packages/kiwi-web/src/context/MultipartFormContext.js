import { createContext } from "react"

const MultipartFormContext = createContext({
  formData: {
    data: undefined,
    update: () => null
  },
  formControls: {
    current: {
      value: null,
      id: undefined
    },
    next: () => null,
    prev: () => null,
    goTo: () => null
  }
})

export default MultipartFormContext
