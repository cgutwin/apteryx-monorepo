import Product from "../../mongo/models/product"

export default {
  Query: {
    product: async function () {
      return Product.find({})
    }
  },
  Mutation: {
    // @ts-ignore
    createProduct: async function (_, { product }) {
      return Product.create({ ...product })
    }
  }
}
