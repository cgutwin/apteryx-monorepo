import { ExpiryInputType, ExpiryType } from "../types/expiry"

enum expiringOnQualifierEnum {
  ON = "ON",
  BEFORE = "BEFORE",
  AFTER = "AFTER"
}

type expiringProductsArgs = {
  date: Date
  qualifier?: expiringOnQualifierEnum
}

export default class ExpiryResolver {
  public allExpiring({ expiringOn }: { expiringOn: expiringProductsArgs }): ExpiryType[] {
    const { date } = { ...expiringOn }

    return [
      {
        createdOn: new Date(),
        expiryDate: date,
        lastModified: new Date(),
        pulled: true,
        upc: "0"
      }
    ]
  }

  public createExpiry({ product }: { product: ExpiryInputType }): ExpiryType {
    return {
      ...product,
      createdOn: new Date(),
      lastModified: new Date(),
      pulled: false
    }
  }

  public updatePulled({ upc, state }: { upc: String; state?: Boolean }) {
    console.log(upc, state)
  }
}
