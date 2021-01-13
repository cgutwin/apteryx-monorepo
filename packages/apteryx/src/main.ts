import GraphQLServer from "./graphql/server"
import HTTPServer from "./http"

const port = (process.env.PORT as unknown) as number
const graphQlServer = new GraphQLServer(true).loadServer()
const server = new HTTPServer(
  port,
  [
    {
      path: "/",
      middleware: graphQlServer
    }
  ]
)

export { server }
