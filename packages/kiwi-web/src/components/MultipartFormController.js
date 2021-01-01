import * as PropTypes from "prop-types"
import React, { useState } from "react"
import MultiformContext from "../context/MultiformContext"

export default function MultipartFormController({ forms, onFormChange }) {
  const [formData, setFormData] = useState(null)
  const [currentForm, setCurrentForm] = useState(0)

  return (
    <MultiformContext.Provider
      value={{
        formData,
        setFormData,
        numOfForms: forms.length,
        currentForm,
        setCurrentForm,
        onFormChange
      }}
    >
      {forms[currentForm]}
    </MultiformContext.Provider>
  )
}

MultipartFormController.propTypes = {
  forms: PropTypes.array.isRequired,
  onFormChange: PropTypes.func.isRequired
}
