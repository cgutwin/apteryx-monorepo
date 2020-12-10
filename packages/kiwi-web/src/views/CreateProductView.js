import * as PropTypes from "prop-types"
import React from "react"

export default function CreateProductView({ productCode, onCreateProduct }) {
  return (
    <div>
      <h2>Create Product</h2>
      <p>{productCode}</p>
      <button onClick={() => onCreateProduct()}>next</button>
    </div>
  )
}

CreateProductView.propTypes = {
  productCode: PropTypes.string.isRequired,
  onCreateProduct: PropTypes.func.isRequired
}
