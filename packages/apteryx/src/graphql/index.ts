import { graphqlHTTP } from "express-graphql"
import { GraphiQLOptions } from "express-graphql/renderGraphiQL"
import { execute, schema } from "./application"

export default class GraphQLServer {
  private readonly graphiqlConfig: boolean | GraphiQLOptions

  constructor(graphiqlConfig: boolean | GraphiQLOptions) {
    this.graphiqlConfig = graphiqlConfig
  }

  // noinspection JSUnusedGlobalSymbols
  public loadServer() {
    return graphqlHTTP({
      schema,
      customExecuteFn: execute,
      graphiql: this.graphiqlConfig
    })
  }
}
