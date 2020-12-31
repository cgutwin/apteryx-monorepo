import { getModelForClass, modelOptions, pre, prop } from "@typegoose/typegoose"

@pre<ExpiryClass>("save", function () {
  const dateString: string = new Date(this.expiring).toString().split(" ").splice(1, 3).join(" ")
  const dateMs = Date.parse(new Date(dateString).toString())

  this.expiring = dateMs
})
@modelOptions({ options: { customName: "expiries" } })
class ExpiryClass {
  @prop({ type: String, unique: true })
  public upc!: string

  @prop({ type: Number })
  public expiring!: any

  @prop({ type: Boolean, default: false })
  public isPulled!: boolean
}

export default getModelForClass(ExpiryClass)
export { ExpiryClass }
