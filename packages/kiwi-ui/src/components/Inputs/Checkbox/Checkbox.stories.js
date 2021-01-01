import React from "react"
import Checkbox from "./index"

export default {
  title: "Inputs/Checkbox",
  component: Checkbox
}

export const Checked = (args) => (<Checkbox {...args} />)
Checked.args = {
  checked: true,
  styleOverride: {
    color: "white"
  }
}

export const Unchecked = (args) => (<Checkbox {...args} />)
Unchecked.args = {
  checked: false,
  styleOverride: {
    color: "white"
  }
}
