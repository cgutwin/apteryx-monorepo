import * as PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import MultiformContext from "../context/MultiformContext"

function MultipartFormController({ forms, onFormChange }) {
  const [formData, setFormData] = useState({})
  const [currentForm, setCurrentForm] = useState(0)
  // By setting a will submit, we conditionally submit on formData updates, so we can access the latest state.
  const [willSubmit, setWillSubmit] = useState(false)

  useEffect(() => {
    if (willSubmit) submitForm()
  }, [formData, willSubmit])

  // When the form changes, we want to update the parent on which form is currently displayed. This is so we can
  // access metadata based on the currentForm index.
  useEffect(() => {
    if (onFormChange)
      onFormChange({
        formData,
        currentForm,
        nav: {
          next: nextFormInStack,
          prev: prevFormInStack
        }
      })
  }, [onFormChange ? currentForm : null])

  const triggerSubmit = () => setWillSubmit(true)

  // Don't call this directly. Call triggerSubmit instead.
  const submitForm = () => {
    alert(JSON.stringify(formData))
  }

  const nextFormInStack = (submitIfLast = true) => {
    if (currentForm + 1 !== forms.length) setCurrentForm((prevState) => prevState + 1)
    else if (submitIfLast) triggerSubmit()
    else throw new Error("Multipart form at last index.")
  }

  const prevFormInStack = () => {
    if (currentForm - 1 >= 0) setCurrentForm((prevState) => prevState - 1)
    else throw new Error("Multipart form at first index.")
  }

  return (
    <MultiformContext.Provider
      value={{
        formData,
        setFormData,
        triggerSubmit,
        next: nextFormInStack,
        prev: prevFormInStack
      }}
    >
      {forms[currentForm].element}
    </MultiformContext.Provider>
  )
}

MultipartFormController.propTypes = {
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  onFormChange: PropTypes.func
}

export default MultipartFormController
