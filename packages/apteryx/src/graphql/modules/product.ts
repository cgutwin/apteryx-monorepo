import { createModule, gql } from "graphql-modules"

const ProductModule = createModule({
  id: "product",
  typeDefs: gql`
    type Product {
      id: ID!
      name: String!
    }
    extend type Query {
      product: [Product]
    }
  `
})

export default ProductModule
