import PropTypes from "prop-types"
import React from "react"
import ProductCard from "../components/cards/Product"

export default function ExpiringListView({ products, refetch }) {
  return products.map(
    (expiry, i) =>
      // Only map the expiries which aren't marked as pulled.
      !expiry.isPulled && (
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

ExpiringListView.propTypes = {
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
