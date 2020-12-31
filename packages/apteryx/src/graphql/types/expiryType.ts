import { gql } from "graphql-modules"

export default gql`
  input ExpiryInput {
    upc: String!
    expiring: String!
  }

  type Expiry {
    upc: String!
    expiring: String!
  }

  type ExpiryLookup {
    upc: String!
    expiring: String!
    product: [Product]
  }

  extend type Query {
    expiring: [ExpiryLookup]
  }

  extend type Mutation {
    createExpiry(expiry: ExpiryInput!): Expiry
  }
`
