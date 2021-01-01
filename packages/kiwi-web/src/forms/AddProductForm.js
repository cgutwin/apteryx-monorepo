import * as PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"
import MultiformContext from "../context/MultiformContext"
import { TextInput } from "@kiwi/ui"

export default function AddProductForm({ upc = "" }) {
  const title = "Create Product Entry"
  const [formPartData, setFormPartData] = useState({
    name: null,
    upc
  })
  const { formData, setFormData, numOfForms, currentForm, setCurrentForm, onFormChange } = useContext(MultiformContext)
  const [subscript, setSubscript] = useState(upc)

  useEffect(() => {
    onFormChange({
      currentForm: currentForm + 1,
      title,
      subscript
    })
  }, [subscript])

  useEffect(() => setSubscript(formPartData.upc), [formPartData.upc])

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault()
        if (currentForm + 1 !== numOfForms) setCurrentForm(currentForm + 1)
        setFormData({ ...formData, product: { ...formPartData } })
      }}
    >
      <TextInput
        id="ProductNameInput"
        name="ProductName"
        label="Product Name"
        value={formData?.product?.name || formPartData.name || ""}
        onChange={(evt) => setFormPartData({ ...formPartData, name: evt.target.value })}
        style={{
          fontFamily: "Manrope, sans-serif",
          marginBottom: "1rem"
        }}
      />
      <TextInput
        id="ProductUPCInput"
        name="ProductUPC"
        label="Product UPC/PLU"
        inputType="decimal"
        value={formData?.product?.upc || formPartData.upc || upc || ""}
        onChange={(evt) => setFormPartData({ ...formPartData, upc: evt.target.value })}
        style={{
          fontFamily: "Manrope, sans-serif",
          marginBottom: "1rem"
        }}
      />
      <input type="submit" value={currentForm + 1 === numOfForms ? "Done" : "Next"} />
    </form>
  )
}

AddProductForm.propTypes = {
  upc: PropTypes.string
}
