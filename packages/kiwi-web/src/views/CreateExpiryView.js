import * as PropTypes from "prop-types"
import React from "react"

export default function CreateExpiryView({ productCode }) {
  return (
    <div>
      <h2>Create Expiry</h2>
      <p>{productCode}</p>
    </div>
  )
}

CreateExpiryView.propTypes = {
  productCode: PropTypes.string.isRequired
}
