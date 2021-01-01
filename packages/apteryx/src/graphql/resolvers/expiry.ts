import Expiry from "../../mongo/models/expiry"
import { toUnixDatestamp } from "../util"

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
    queryAllPulled: async function (_, { date }) {
      const unixDatestamp: number | null = date ? toUnixDatestamp(date) : null
      // when date exists, set a condition that expiring = unixDatestamp, else don't set it.
      const condition = {
        $cond: {
          if: date,
          then: {
            expiring: unixDatestamp
          },
          else: null
        }
      }

      return Expiry.aggregate([
        // evaluate the condition, and inserts itself as a condition if true.
        { $match: { $expr: { condition }, isPulled: true } },
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
      const unixDatestamp: number = toUnixDatestamp(date)
      const date0: number = unixDatestamp
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
    },
    // @ts-ignore
    updatePullState: async function (_, { upc, value }) {
      return Expiry.findOneAndUpdate({ upc }, { $set: { isPulled: value } }, { new: true })
    }
  }
}
