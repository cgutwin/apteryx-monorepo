import { GraphQLObjectType } from "graphql"
import expiring from "../mutations/expiry"
import product from "../mutations/product"

export default new GraphQLObjectType({
  name: "RootMutationType",
  fields: (): any => ({
    expiring,
    product
  })
})
