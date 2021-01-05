import PropTypes from "prop-types"
import React from "react"
import Check from "../../../assets/check.svg"
import { CheckboxStyle, Input } from "./style"

function Checkbox({ checked, styleOverride, ...props }) {
  return (
    <div>
      <label>
        <Input aria-label="checkbox" checked={checked} type="checkbox" {...props} />
        <CheckboxStyle checked={checked}>
          <Check
            style={{
              visibility: checked ? "visible" : "hidden",
              ...styleOverride
            }}
          />
        </CheckboxStyle>
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  styleOverride: PropTypes.object.isRequired
}

export default Checkbox
