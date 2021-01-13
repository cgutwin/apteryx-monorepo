import { GraphQLEnumType } from "graphql"

export default new GraphQLEnumType({
  name: "ExpiringOnQualifierEnum",
  values: {
    ON: { value: "ON" },
    BEFORE: { value: "BEFORE" },
    AFTER: { value: "AFTER" }
  }
})
