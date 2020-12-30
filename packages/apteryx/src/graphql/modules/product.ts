import { createModule, gql } from "graphql-modules"
import productResolver from "../resolvers/product"

const ProductModule = createModule({
  id: "product",
  typeDefs: gql`
    input ProductInput {
      id: ID!
      name: String!
    }
    type Product {
      id: ID!
      name: String!
    }
    extend type Query {
      product: [Product]
    }
    extend type Mutation {
      createProduct(product: ProductInput!): Product
    }
  `,
  resolvers: productResolver
})

export default ProductModule
