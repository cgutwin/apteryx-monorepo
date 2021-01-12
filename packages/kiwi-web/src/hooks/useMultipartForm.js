import PropTypes from "prop-types"
import React, { useState } from "react"
import MultipartFormContext from "../context/MultipartFormContext"

export default function useMultipartForm(forms, onSubmit) {
  const [currentForm, setCurrentForm] = useState(0)
  // Global form data
  const [formData, setFormData] = useState({})

  // Rendered current form in the passed forms stack.
  const Form = forms[currentForm].element

  /**
   * @function nextFormHandler
   * Determines whether to submit or navigate within the forms based on the current form and the number of forms passed.
   *
   * @param {boolean} submitIfLast - Sets whether to submit or navigate when the currentForm === forms.length.
   * @throws Throws an error when form tries to navigate past the last form.
   * */
  const nextFormHandler = (submitIfLast = true) => {
    if (currentForm + 1 !== forms.length)
      setCurrentForm((prevState) => prevState + 1)
    else if (submitIfLast) onSubmit()
    else throw new Error("Multipart form at last index.")
  }

  return {
    form: {
      // Render function, makes passing props to the current form possible.
      render: ({ ...props }) => (
        <MultipartFormContext.Provider
          value={{
            nextForm: nextFormHandler,
            prevForm: () => setCurrentForm((prevState) => prevState - 1),
            currentForm,
            numberOfForms: forms.length,
            formData,
            setFormData
          }}
        >
          <Form {...props} />
        </MultipartFormContext.Provider>
      ),
      ...forms[currentForm]
    },
    progress: (currentForm + 1) / forms.length,
    currentForm,
    formData,
    prevForm: () => setCurrentForm((prevState) => prevState - 1),
    submit: onSubmit
  }
}

useMultipartForm.propTypes = {
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.node.isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired
}
