import { gql } from "@apollo/client"

const ALL_EXPIRING_ON = gql`
  query allExpiringOn($date: Float!, $when: ExpiringOnWhen!) {
    expiringOn(date: $date, when: $when) {
      upc
      expiring
      product {
        name
        upc
      }
      isPulled
    }
  }
`

export default ALL_EXPIRING_ON
