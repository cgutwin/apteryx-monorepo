import React from "react"
import TextInput from "./index"

export default {
  title: "Inputs/Text"
}

const Template = (args) => <TextInput {...args} />

export const Text = Template.bind({})
Text.args = { id: "ProductNameInput", value: "Product Name", label: "Product Name" }
