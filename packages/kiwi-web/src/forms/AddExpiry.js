import { TextInput } from "@kiwi/ui"
import React, { useContext } from "react"
import MultipartFormContext from "../context/MultipartFormContext"
import serializeFormData from "./serializeFormData"

export default function AddExpiry() {
  const multiPartFormContext = useContext(MultipartFormContext)

  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    const formDataPart = new FormData(evt.target)
    const serializedFormData = serializeFormData(formDataPart)

    multiPartFormContext.formData.update({
      [multiPartFormContext.formControls.current.id]: serializedFormData
    })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <TextInput
        id="ExpiryDateInput"
        name="ExpiryDate"
        label="Expiry Date"
        style={{
          fontFamily: "Manrope, sans-serif"
        }}
      />
      <input type="submit" value="Done" />
    </form>
  )
}
