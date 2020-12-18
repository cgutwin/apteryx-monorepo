import { TextInput } from "@kiwi/ui"
import PropTypes from "prop-types"
import React, { useContext } from "react"
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
      <TextInput
        id="ProductNameInput"
        name="ProductName"
        label="Product Name"
        value={multiPartFormContext.formData.data[multiPartFormContext.formControls.current.id]?.ProductName || ""}
        style={{
          fontFamily: "Manrope, sans-serif"
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
      <input type="submit" value="next" />
    </form>
  )
}

AddProductData.propTypes = {
  productCode: PropTypes.string
}
