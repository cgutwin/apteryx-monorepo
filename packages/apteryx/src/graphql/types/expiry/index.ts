import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql"
import { GraphQLDate, GraphQLDateTime } from "graphql-iso-date"

export interface ExpiryInputType {
  expiryDate: Date
  pulled?: Boolean
  upc: String
}

export interface ExpiryType extends ExpiryInputType {
  createdOn: Date
  lastModified: Date
}

export default new GraphQLObjectType({
  name: "Expiry",
  fields: {
    createdOn: { type: GraphQLDateTime },
    expiryDate: { type: GraphQLDate },
    lastModified: { type: GraphQLDateTime },
    pulled: { type: GraphQLBoolean },
    upc: { type: GraphQLString }
  }
})
