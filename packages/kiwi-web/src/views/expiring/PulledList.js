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

export default PulledList
