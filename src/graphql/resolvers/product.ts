import Product, { ProductClass } from "../../mongo/models/product"

export default {
  Query: {
    // @ts-ignore
    product: async function (_, { upc }): Promise<ProductClass[]> {
      if (upc) return Product.find({ upc })
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
