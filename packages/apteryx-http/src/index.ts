import cors from "cors"
import express, { Application } from "express"
import bodyParser from "body-parser"

export default class HTTPServer {
  readonly app: Application = express()
  private readonly port: number

  constructor(port: number) {
    this.port = port
    this.app.use(cors())
    this.app.use(bodyParser.json())
  }

  public listen(): HTTPServer {
    this.app.listen(this.port, (): void => {
      console.log(`Listening on port ${this.port}`)
    })
    return this
  }
}
