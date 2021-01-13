import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"
import product from "../types/product"
import ProductResolver from "../resolvers/productResolver"

export default {
  name: "ProductQuery",
  type: new GraphQLObjectType({
    name: "ProductQueryType",
    fields: {
      allProducts: {
        description: "All products in the database.",
        type: new GraphQLList(product)
      },
      productByUPC: {
        description: "Query a product by the corresponding UPC code.",
        type: product,
        args: {
          upc: { type: new GraphQLNonNull(GraphQLString) }
        }
      }
    }
  }),
  resolve: (_: any, args: any) => new ProductResolver()
}
