import cors, { CorsOptions } from "cors"
import express, { Application } from "express"
import bodyParser from "body-parser"

type MiddlewareTypedef = {
  path: string
  middleware: any
}

export default class HTTPServer {
  readonly app: Application = express()
  private readonly port: number

  constructor(port: number, middleware?: MiddlewareTypedef[], corsOptions?: CorsOptions | undefined) {
    this.port = port
    this.app.use(cors(corsOptions))
    this.app.use(bodyParser.json())

    if (middleware) this.loadMiddleware(middleware)
  }

  public listen(): this {
    this.app.listen(this.port, (): void => {
      console.log(`Listening on port ${this.port}`)
    })
    return this
  }

  private loadMiddleware(middleware: MiddlewareTypedef[]) {
    for (const middlewareKey of middleware) {
      this.app.use(middlewareKey.path, middlewareKey.middleware)
    }
  }
}
