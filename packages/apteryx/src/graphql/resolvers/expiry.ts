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
    },
    // @ts-ignore
    expiringOn: async function (_, { date, when }) {
      // Remove the time from the date, there really is no point.
      const dateString: string = new Date(date).toString().split(" ").splice(1, 3).join(" ")
      const dateObject: Date = new Date(dateString)
      const date0: number = Date.parse(dateObject.toString())
      const date1: number = date0 + 86400000

      switch (when) {
        case "BEFORE":
          return Expiry.aggregate([
            { $match: { expiring: { $lt: date0 } } },
            {
              $lookup: {
                from: "products",
                localField: "upc",
                foreignField: "upc",
                as: "product"
              }
            }
          ])
        case "AFTER":
          return Expiry.aggregate([
            { $match: { expiring: { $gt: date0 } } },
            {
              $lookup: {
                from: "products",
                localField: "upc",
                foreignField: "upc",
                as: "product"
              }
            }
          ])
        case "ON":
          return Expiry.aggregate([
            { $match: { expiring: { $eq: date0 } } },
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
    }
  },
  Mutation: {
    // @ts-ignore
    createExpiry: async function (_, { expiry }) {
      return Expiry.create({ ...expiry })
    }
  }
}
