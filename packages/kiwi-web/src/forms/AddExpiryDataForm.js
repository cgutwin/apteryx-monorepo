import React, { useContext } from "react"
import TextBasedInput from "../components/Inputs/TextBasedInput"
import MultiformContext from "../context/MultiformContext"
import serializeFormData from "../utils/serializeFormData"

function AddExpiryDataForm() {
  const { formData, setFormData, next } = useContext(MultiformContext)

  const onFormSubmit = (evt) => {
    evt.preventDefault()
    const expiryFormData = serializeFormData(new FormData(evt.target))
    setFormData((prevState) => ({ ...prevState, expiry: expiryFormData }))
    next()
  }

  return (
    <form onSubmit={(evt) => onFormSubmit(evt)}>
      <TextBasedInput
        defaultValue={formData?.expiry?.expiring || new Date(Date.now() + 86400000).toLocaleDateString()}
        inputId="expiryDate"
        label="Expiry Date (yyyy-mm-dd)"
        min={new Date().toLocaleDateString()}
        name="expiring"
        type="date"
        placeholder=""
      />
      <input type="submit" />
    </form>
  )
}

export default AddExpiryDataForm
