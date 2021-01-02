import { gql } from "@apollo/client"

const CREATE_EXPIRY = gql`
  mutation createExpiry($expiry: ExpiryInput!) {
    createExpiry(expiry: $expiry) {
      upc
    }
  }
`

export default CREATE_EXPIRY
