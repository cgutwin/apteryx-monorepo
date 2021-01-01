import React, { useContext, useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import MultiformContext from "../context/MultiformContext"

export default function AddExpiryForm() {
  const title = "Set Expiry Info"
  const { formData, setFormData, currentForm, numOfForms, onFormChange } = useContext(MultiformContext)
  const [formPartData, setFormPartData] = useState({
    expiryDate: new Date()
  })
  const subscript = formData.product.name

  useEffect(() => {
    onFormChange({
      currentForm: currentForm + 1,
      title,
      subscript
    })
  }, [])

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault()
        setFormData({ ...formData, expiry: { ...formPartData } })
      }}
    >
      <DatePicker
        selected={formPartData.expiryDate}
        onChange={(date) => setFormPartData({ ...formPartData, expiryDate: date })}
        minDate={new Date()}
      />
      <input type="submit" value={currentForm + 1 === numOfForms ? "Done" : "Next"} />
    </form>
  )
}
