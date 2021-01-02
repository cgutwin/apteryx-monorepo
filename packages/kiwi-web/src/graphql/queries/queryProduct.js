import { gql } from "@apollo/client"

const QUERY_PRODUCT = gql`
  query product($upc: String) {
    product(upc: $upc) {
      name
      upc
    }
  }
`

export default QUERY_PRODUCT
