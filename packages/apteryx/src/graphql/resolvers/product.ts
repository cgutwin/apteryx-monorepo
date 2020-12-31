import Product, { ProductClass } from "../../mongo/models/product"

export default {
  Query: {
    product: async function (): Promise<ProductClass[]> {
      return Product.find({})
    }
  },
  Mutation: {
    // @ts-ignore
    createProduct: async function (_, { product }): Promise<ProductClass[]> {
      return Product.create({ ...product })
    }
  }
}
