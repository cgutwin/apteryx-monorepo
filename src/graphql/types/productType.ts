import { gql } from "graphql-modules"

export default gql`
  input ProductInput {
    name: String!
    upc: String!
  }

  type Product {
    name: String!
    upc: String!
  }

  extend type Query {
    product(upc: String): [Product]
  }

  extend type Mutation {
    createProduct(product: ProductInput!): Product
  }
`
