import { GraphQLSchema } from "graphql"
import query from "./types/query"
import mutation from "./types/mutation"

export default new GraphQLSchema({
  query,
  mutation
})
