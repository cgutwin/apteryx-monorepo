import PropTypes from "prop-types"
import React, { useContext } from "react"
import FullWidthSubmit from "../components/buttons/FullWidthSubmit"
import TextBasedInput from "../components/inputs/TextBasedInput"
import MultipartFormContext from "../context/MultipartFormContext"
import serializeFormData from "../utils/serializeFormData"

export default function NewProductForm({ code = "" }) {
  const {
    setFormData,
    nextForm,
    formData,
    currentForm,
    numberOfForms
  } = useContext(MultipartFormContext)

  const onFormSubmit = (evt) => {
    evt.preventDefault()
    const productData = serializeFormData(new FormData(evt.target))
    setFormData((prevState) => ({ ...prevState, product: productData }))
    nextForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <TextBasedInput
        required
        defaultValue={formData?.product?.name}
        inputId="productName"
        label="Product Name"
        name="name"
        type="text"
      />
      <TextBasedInput
        required
        defaultValue={formData?.product?.upc || code}
        inputId="productUpc"
        inputMode="decimal"
        label="Product UPC"
        name="upc"
        type="text"
      />
      <FullWidthSubmit
        text={currentForm + 1 === numberOfForms ? "Submit" : "Next"}
      />
    </form>
  )
}

NewProductForm.propTypes = {
  code: PropTypes.string
}
