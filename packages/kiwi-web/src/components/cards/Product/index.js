import { useMutation } from "@apollo/client"
import PropTypes from "prop-types"
import React from "react"
import UPDATE_PULL_STATE from "../../../graphql/mutations/updatePullState"
import Component from "./component"

function ProductCard({ product, onChange }) {
  const [togglePullState] = useMutation(UPDATE_PULL_STATE, {
    variables: {
      upc: product.upc,
      value: !product.isPulled
    }
  })

  const onChangeHandler = () => {
    togglePullState().then(() => onChange())
  }

  return <Component product={product} onChange={onChangeHandler} />
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    upc: PropTypes.string.isRequired,
    isPulled: PropTypes.bool.isRequired
  }),
  onChange: PropTypes.func.isRequired
}

export default ProductCard
