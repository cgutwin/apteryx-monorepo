import { ProductInputType, ProductType } from "../types/product"

export default class ProductResolver {
  public allProducts(): ProductType[] {
    return [
      {
        createdOn: new Date(),
        lastModified: new Date(),
        name: "ALL_PRODUCT_0",
        upc: "0"
      }
    ]
  }

  public productByUPC({ upc }: { upc: String }): ProductType {
    return {
      createdOn: new Date(),
      lastModified: new Date(),
      name: "PRODUCT_BY_UPC",
      upc
    }
  }

  public createProduct({ product }: { product: ProductInputType }): ProductType {
    return {
      createdOn: new Date(),
      lastModified: new Date(),
      ...product
    }
  }
}
