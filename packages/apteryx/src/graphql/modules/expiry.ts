import { createModule, gql } from "graphql-modules"
import ExpiryResolver from "../resolvers/expiry"

const ExpiryModule = createModule({
  id: "expiry",
  typeDefs: gql`
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
  `,
  resolvers: ExpiryResolver
})

export default ExpiryModule
