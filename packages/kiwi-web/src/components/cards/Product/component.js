import Checkbox from "../../inputs/Checkbox"
import { useAnimation } from "framer-motion"
import PropTypes from "prop-types"
import React from "react"
import { Card } from "./styles"

function ProductCardComponent({ product, onChange, ...rest }) {
  const cardControls = useAnimation()
  const variants = {
    visible: {
      opacity: 1
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  }

  return (
    <Card whileTap={{ scale: 0.96 }} animate={cardControls} variants={variants} {...rest}>
      <div>
        <h6>{product.name}</h6>
        <p>{product.upc}</p>
      </div>
      <Checkbox
        checked={product.isPulled}
        onChange={() => {
          cardControls.start("hidden").then(() => onChange())
        }}
      />
    </Card>
  )
}

ProductCardComponent.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    upc: PropTypes.string.isRequired,
    isPulled: PropTypes.bool.isRequired
  }),
  onChange: PropTypes.func.isRequired
}

export default ProductCardComponent
