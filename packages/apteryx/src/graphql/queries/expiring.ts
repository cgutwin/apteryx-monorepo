import { GraphQLList, GraphQLObjectType } from "graphql"
import expiry from "../types/expiry"
import ExpiryResolver from "../resolvers/expiryResolver"
import allExpiringInput from "../types/expiry/inputs/allExpiringInput"

export default {
  name: "ExpiryQuery",
  type: new GraphQLObjectType({
    name: "ExpiryQueryType",
    fields: {
      allExpiring: {
        description: "All products with an associated expiry date.",
        type: new GraphQLList(expiry),
        args: {
          expiringOn: { type: allExpiringInput }
        }
      }
    }
  }),
  resolve: (_: any, args: any) => new ExpiryResolver()
}
