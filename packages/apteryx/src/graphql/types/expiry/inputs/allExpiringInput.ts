import { GraphQLInputObjectType } from "graphql"
import { GraphQLDate } from "graphql-iso-date"
import ExpiringOnQualifierEnum from "../enums/expiringOnQualifierEnum"

export default new GraphQLInputObjectType({
  name: "AllExpiringInputType",
  fields: {
    date: { type: GraphQLDate },
    qualifier: { type: ExpiringOnQualifierEnum }
  }
})
