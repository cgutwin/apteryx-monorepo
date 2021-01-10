import { createApplication } from "graphql-modules"
import * as gqlModules from "./modules"

const app = createApplication({
  modules: [gqlModules.default, gqlModules.ExpiryModule, gqlModules.ProductModule]
})

export const schema = app.schema
export const execute = app.createExecution()
