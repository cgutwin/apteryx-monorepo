import { GraphQLObjectType } from "graphql"
import ExpiryResolver from "../resolvers/expiryResolver"
import createExpiry from "./expiry/createExpiry"
import updatePulled from "./expiry/updatePulled"

export default {
  name: "ExpiryMutation",
  type: new GraphQLObjectType({
    name: "ExpiryMutationType",
    fields: {
      createExpiry,
      updatePulled
    }
  }),
  resolve: (_: any, args: any) => new ExpiryResolver()
}
