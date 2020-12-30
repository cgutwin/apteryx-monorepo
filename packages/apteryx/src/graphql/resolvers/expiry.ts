import Expiry from "../../mongo/models/expiry"

export default {
  Query: {
    expiring: async function () {
      return Expiry.aggregate([
        {
          $lookup: {
            from: "products",
            localField: "upc",
            foreignField: "upc",
            as: "product"
          }
        }
      ])
    }
  },
  Mutation: {
    // @ts-ignore
    createExpiry: async function (_, { expiry }) {
      return Expiry.create({ ...expiry })
    }
  }
}
