import { gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
  mutation createProduct($product: ProductInput!) {
    createProduct(product: $product) {
      upc
    }
  }
`

export default CREATE_PRODUCT
