import * as PropTypes from "prop-types"
import React from "react"

export default function CreateExpiryView({ productCode }) {
  return (
    <>
      <h2>Create Expiry</h2>
      <p>{productCode}</p>
    </>
  )
}

CreateExpiryView.propTypes = {
  productCode: PropTypes.string.isRequired
}
