import { useMutation } from "@apollo/client"
import { TextInput } from "@kiwi/ui"
import React, { useContext } from "react"
import styled from "styled-components"
import MultipartFormContext from "../context/MultipartFormContext"
import CREATE_PRODUCT from "../graphql/mutations/createProduct"
import serializeFormData from "./serializeFormData"

export default function AddExpiry() {
  const multiPartFormContext = useContext(MultipartFormContext)
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    const formDataPart = new FormData(evt.target)
    const serializedFormData = serializeFormData(formDataPart)

    multiPartFormContext.formData.update({
      [multiPartFormContext.formControls.current.id]: serializedFormData
    })

    createProduct({
      variables: {
        product: {
          name: multiPartFormContext.formData.data.productData.ProductName,
          upc: multiPartFormContext.formData.data.productData.ProductUPC
        }
      }
    })

    alert(JSON.stringify(multiPartFormContext.formData.data))
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <TextInput
        id="ExpiryDateInput"
        name="ExpiryDate"
        label="Expiry Date"
        value={multiPartFormContext.formData.data[multiPartFormContext.formControls.current.id]?.ExpiryDate || ""}
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
