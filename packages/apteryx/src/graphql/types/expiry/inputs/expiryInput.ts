import { GraphQLInputObjectType, GraphQLString } from "graphql"
import { GraphQLDate } from "graphql-iso-date"

export default new GraphQLInputObjectType({
  name: "ExpiryInputType",
  fields: {
    expiryDate: { type: GraphQLDate },
    upc: { type: GraphQLString }
  }
})
