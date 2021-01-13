import { GraphQLNonNull, GraphQLObjectType } from "graphql"
import product from "../types/product"
import GraphQLProductInputType from "../types/product/inputs/productInput"
import ProductResolver from "../resolvers/productResolver"

export default {
  name: "ProductMutation",
  type: new GraphQLObjectType({
    name: "ProductMutationType",
    fields: {
      createProduct: {
        description: "Creates a product given the passed metadata.",
        type: product,
        args: {
          product: { type: new GraphQLNonNull(GraphQLProductInputType) }
        }
      }
    }
  }),
  resolve: (_: any, args: any) => new ProductResolver()
}
