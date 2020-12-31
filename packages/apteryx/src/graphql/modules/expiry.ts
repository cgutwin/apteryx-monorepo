import { createModule } from "graphql-modules"
import ExpiryResolver from "../resolvers/expiry"
import expiryType from "../types/expiryType"

const ExpiryModule = createModule({
  id: "expiry",
  typeDefs: [expiryType],
  resolvers: ExpiryResolver
})

export default ExpiryModule
