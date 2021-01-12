import React, { useContext } from "react"
import FullWidthSubmit from "../components/buttons/FullWidthSubmit"
import TextBasedInput from "../components/inputs/TextBasedInput"
import MultipartFormContext from "../context/MultipartFormContext"
import serializeFormData from "../utils/serializeFormData"

export default function NewExpiryForm() {
  const {
    setFormData,
    nextForm,
    formData,
    currentForm,
    numberOfForms
  } = useContext(MultipartFormContext)

  const onFormSubmit = (evt) => {
    evt.preventDefault()
    const expiryData = serializeFormData(new FormData(evt.target))
    setFormData((prevState) => ({ ...prevState, expiry: expiryData }))
    nextForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <TextBasedInput
        defaultValue={
          formData?.expiry?.expiring ||
          new Date(Date.now() + 86400000).toLocaleDateString()
        }
        inputId="expiring"
        label="Expiry Date (yyyy-mm-dd)"
        min={new Date().toLocaleDateString()}
        name="expiring"
        type="date"
        placeholder=""
      />
      <FullWidthSubmit
        text={currentForm + 1 === numberOfForms ? "Submit" : "Next"}
      />
    </form>
  )
}
