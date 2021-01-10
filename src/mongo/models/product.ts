import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"

@modelOptions({ options: { customName: "products" } })
class ProductClass {
  @prop({ required: true, type: String })
  public name!: string

  @prop({ required: true, unique: true, type: String })
  public upc!: string
}

export default getModelForClass(ProductClass)
export { ProductClass }
