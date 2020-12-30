import { createApplication } from "graphql-modules"
import RootModule, * as modules from "./modules"

const app = createApplication({
  modules: [RootModule, modules.ProductModule, modules.ExpiryModule]
})

export const schema = app.schema
export const execute = app.createExecution()
