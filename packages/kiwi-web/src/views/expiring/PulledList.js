import PropTypes from "prop-types"
import React from "react"
import ProductCard from "../../components/cards/Product"

function PulledList({ products, refetch }) {
  return products.map(
    (expiry, i) =>
      // Only map the expiries which are marked as pulled.
      expiry.isPulled && (
        <ProductCard
          key={i}
          product={{
            name: expiry.product[0].name,
            upc: expiry.upc,
            isPulled: expiry.isPulled
          }}
          onChange={refetch}
        />
      )
  )
}

PulledList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      upc: PropTypes.string,
      expiring: PropTypes.number,
      product: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          upc: PropTypes.string
        })
      ),
      isPulled: PropTypes.bool
    })
  ).isRequired,
  refetch: PropTypes.func.isRequired
}

export default PulledList
