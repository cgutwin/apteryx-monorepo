import { createModule, gql } from "graphql-modules"

const RootModule = createModule({
  id: "root",
  typeDefs: gql`
    type Query {
      ping: String
    }
    type Mutation
  `,
  resolvers: {
    Query: {
      ping(): string {
        return "pong"
      }
    }
  }
})

export default RootModule
export { default as ProductModule } from "./product"
export { default as ExpiryModule } from "./expiry"
