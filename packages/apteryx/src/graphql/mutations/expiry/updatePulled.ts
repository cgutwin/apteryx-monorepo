import expiry from "../../types/expiry"
import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from "graphql"

export default {
  description: "Updates the pull state of the passed expiry.",
  type: expiry,
  args: {
    upc: { type: new GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLBoolean }
  }
}
