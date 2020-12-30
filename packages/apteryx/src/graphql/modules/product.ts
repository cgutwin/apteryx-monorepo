import { createModule, gql } from "graphql-modules"
import productResolver from "../resolvers/product"

const ProductModule = createModule({
  id: "product",
  typeDefs: gql`
    input ProductInput {
      name: String!
      upc: String!
    }
    type Product {
      name: String!
      upc: String!
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
