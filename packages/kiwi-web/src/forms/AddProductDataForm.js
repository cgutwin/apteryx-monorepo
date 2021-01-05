import PropTypes from "prop-types"
import React, { useContext } from "react"
import TextBasedInput from "../components/inputs/TextBasedInput"
import MultiformContext from "../context/MultiformContext"
import serializeFormData from "../utils/serializeFormData"

function AddProductDataForm({ code = "" }) {
  const { formData, setFormData, next } = useContext(MultiformContext)

  const onFormSubmit = (evt) => {
    evt.preventDefault()
    const productFormData = serializeFormData(new FormData(evt.target))
    setFormData((prevState) => ({ ...prevState, product: productFormData }))
    next()
  }

  return (
    <form onSubmit={(evt) => onFormSubmit(evt)}>
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
      <input type="submit" />
    </form>
  )
}

AddProductDataForm.propTypes = {
  code: PropTypes.string
}

export default AddProductDataForm
