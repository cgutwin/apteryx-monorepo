import React from "react"
import ProductCard from "./index"

export default {
  title: "Cards/Product Card"
}

const Template = (args) => <ProductCard {...args} />
export const Primary = Template.bind({})
Primary.args = { name: "Test Product", upc: "0123456789012" }
