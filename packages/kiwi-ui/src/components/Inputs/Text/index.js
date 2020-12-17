import PropTypes from "prop-types"
import React, { useState } from "react"
import { Input, InputLabel, InputWrapper, LabelText } from "./styles"

export default function TextInput ({ id, name, value = "", label, inputType = "text", ...rest }) {
  const [focused, setFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  return (
    <InputWrapper {...rest}>
      {/* We pass the focused and hasInput values directly to the label for comparison because the element selectors
       are weird and this is just easier. */}
      <InputLabel htmlFor={id} focused={focused} hasInput={inputValue}>
        <LabelText>{label}</LabelText>
      </InputLabel>
      <Input
        id={id}
        name={name}
        type="text"
        inputMode={inputType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(evt) => setInputValue(evt.target.value)}
        value={inputValue}
      />
    </InputWrapper>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string
}
