import { TextInput } from "@kiwi/ui"
import React, { useContext } from "react"
import styled from "styled-components"
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

    alert(JSON.stringify(multiPartFormContext.formData.data))
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
      <SubmitButton type="submit" value="Create Expiry" />
    </form>
  )
}

const SubmitButton = styled.input`
  background: #31f58d;
  border-radius: 2rem;
  border: none;
  width: calc(100% - 4rem);
  padding: 1rem;
  position: absolute;
  bottom: 4rem;
`
