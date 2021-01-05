import { gql } from "@apollo/client"

const ALL_PULLED = gql`
  query allPulled($date: Float) {
    queryAllPulled(date: $date) {
      upc
      product {
        name
      }
      isPulled
    }
  }
`

export default ALL_PULLED
