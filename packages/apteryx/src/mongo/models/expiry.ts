import { getModelForClass, prop } from "@typegoose/typegoose"

class ExpiryClass {
  @prop({ type: String })
  public upc!: string

  @prop({ type: String })
  public expiring!: string
}

export default getModelForClass(ExpiryClass)
export { ExpiryClass }
