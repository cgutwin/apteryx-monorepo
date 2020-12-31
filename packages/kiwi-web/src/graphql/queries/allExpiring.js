import { gql } from "@apollo/client"

const ALL_EXPIRING = gql`
  query allExpiring {
    expiring {
      expiring
      product {
        name
        upc
      }
    }
  }
`

export default ALL_EXPIRING
