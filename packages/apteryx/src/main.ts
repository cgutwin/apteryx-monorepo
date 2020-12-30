import GraphQLServer from "./graphql"
import HTTPServer from "./http"

const graphQlServer = new GraphQLServer(true).loadServer()
const server = new HTTPServer(4000, [
  {
    path: "/",
    middleware: graphQlServer
  }
])

export { server }
