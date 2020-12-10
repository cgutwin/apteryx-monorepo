import * as PropTypes from "prop-types"
import React from "react"

export default function CreateProductView({ productCode, onCreateProduct }) {
  return (
    <>
      <p>{productCode}</p>
      <button onClick={() => onCreateProduct()}>next</button>
    </>
  )
}

CreateProductView.propTypes = {
  productCode: PropTypes.string.isRequired,
  onCreateProduct: PropTypes.func.isRequired
}
