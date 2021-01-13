import { GraphQLObjectType, GraphQLString } from "graphql"
import expiring from "../queries/expiring"
import product from "../queries/product"

export default new GraphQLObjectType({
  name: "RootQueryType",
  fields: (): any => ({
    ping: {
      type: GraphQLString,
      resolve: () => "pong"
    },
    expiring,
    product
  })
})
