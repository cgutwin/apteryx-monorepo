import { createApplication } from "graphql-modules"
import RootModule, * as modules from "./modules"

const app = createApplication({
  modules: [RootModule, modules.ProductModule]
})

export const schema = app.schema
export const execute = app.createExecution()
