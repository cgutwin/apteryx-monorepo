import GraphQLServer from "@apteryx/graphql"
import HTTPServer from "@apteryx/http"

const graphQlServer = new GraphQLServer(true).loadServer()
const server = new HTTPServer(4000, [
  {
    path: "/",
    middleware: graphQlServer
  }
])

export { server }
