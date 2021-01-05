import { createContext } from "react"

const MultiformContext = createContext({
  formData: null,
  setFormData: () => null,
  triggerSubmit: () => null,
  next: () => null,
  prev: () => null
})

export default MultiformContext
