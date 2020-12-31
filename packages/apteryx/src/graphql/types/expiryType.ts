import { gql } from "graphql-modules"

export default gql`
  enum ExpiringOnWhen {
    ON
    BEFORE
    AFTER
  }

  # Hack in bigint with float
  input ExpiryInput {
    upc: String!
    expiring: Float!
  }

  type Expiry {
    upc: String!
    expiring: Float!
  }

  type ExpiryLookup {
    upc: String!
    expiring: Float!
    product: [Product]
  }

  extend type Query {
    expiring: [ExpiryLookup]
    expiringOn(date: Float!, when: ExpiringOnWhen!): [ExpiryLookup]
  }

  extend type Mutation {
    createExpiry(expiry: ExpiryInput!): Expiry
  }
`
