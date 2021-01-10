import { createModule } from "graphql-modules"
import productResolver from "../resolvers/product"
import productType from "../types/productType"

const ProductModule = createModule({
  id: "product",
  typeDefs: [productType],
  resolvers: productResolver
})

export default ProductModule
