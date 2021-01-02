import PropTypes from "prop-types"
import React, { useState } from "react"
import { Input, InputLabel, InputWrapper, LabelText } from "./styles"

// TODO: Refactor to @kiwi/ui.
function TextBasedInput({ inputId, defaultValue = "", label, ...rest }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState(defaultValue)

  return (
    <InputWrapper>
      {/*
       We pass the focused and hasInput values directly to the label for comparison because the element selectors
       are weird and this is just easier.
       */}
      <InputLabel htmlFor={inputId} focused={focused} hasInput={value}>
        <LabelText>{label}</LabelText>
      </InputLabel>
      <Input
        value={value}
        onBlur={() => setFocused(false)}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setFocused(true)}
        {...rest}
      />
    </InputWrapper>
  )
}

TextBasedInput.propTypes = {
  defaultValue: PropTypes.any,
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default TextBasedInput
