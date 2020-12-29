import { TextInput } from "@kiwi/ui"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import styled from "styled-components"
import MultipartFormContext from "../context/MultipartFormContext"
import serializeFormData from "./serializeFormData"

export default function AddProductData({ productCode }) {
  const multiPartFormContext = useContext(MultipartFormContext)

  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    const formDataPart = new FormData(evt.target)
    const serializedFormData = serializeFormData(formDataPart)

    multiPartFormContext.formData.update({
      [multiPartFormContext.formControls.current.id]: serializedFormData
    })
    multiPartFormContext.formControls.next()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <section>
        <TextInput
          id="ProductNameInput"
          name="ProductName"
          label="Product Name"
          value={multiPartFormContext.formData.data[multiPartFormContext.formControls.current.id]?.ProductName || ""}
          style={{
            fontFamily: "Manrope, sans-serif",
            marginBottom: "1rem"
          }}
        />
        <TextInput
          id="ProductUPCInput"
          name="ProductUPC"
          label="Product UPC"
          inputType="decimal"
          value={
            multiPartFormContext.formData.data[multiPartFormContext.formControls.current.id]?.ProductUPC ||
            productCode ||
            0
          }
          style={{
            fontFamily: "Manrope, sans-serif"
          }}
        />
      </section>
      <SubmitButton type="submit" value="Next" />
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

AddProductData.propTypes = {
  productCode: PropTypes.string
}
