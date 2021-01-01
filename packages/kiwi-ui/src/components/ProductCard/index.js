import PropTypes from "prop-types"
import React from "react"
import { Checkbox } from "../Inputs"
import { Card } from "./styles"

function ProductCard({ name, upc, checkboxProps, ...rest }) {
  return (
    <Card {...rest}>
      <div>
        <h6>{name}</h6>
        <p>{upc}</p>
      </div>
      <Checkbox {...checkboxProps} />
    </Card>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  upc: PropTypes.string.isRequired
}

export default ProductCard
