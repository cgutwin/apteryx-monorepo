import React from "react"
import ProductCard from "../../components/cards/Product"

function ExpiringList({ products, refetch }) {
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

export default ExpiringList
