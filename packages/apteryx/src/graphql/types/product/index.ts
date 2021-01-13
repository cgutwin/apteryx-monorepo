import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql"
import { GraphQLDate, GraphQLDateTime } from "graphql-iso-date"

export interface ProductInputType {
  name: String
  upc: String
}

export interface ProductType extends ProductInputType {
  createdOn: Date
  lastModified: Date
}

export default new GraphQLObjectType({
  name: "Product",
  fields: {
    createdOn: { type: GraphQLDateTime },
    lastModified: { type: GraphQLDateTime },
    name: { type: GraphQLString },
    upc: { type: GraphQLString }
  }
})
