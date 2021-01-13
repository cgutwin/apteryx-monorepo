import { GraphQLInputObjectType, GraphQLString } from "graphql"

export default new GraphQLInputObjectType({
  name: "GraphQLProductInputType",
  fields: {
    name: { type: GraphQLString },
    upc: { type: GraphQLString }
  }
})
