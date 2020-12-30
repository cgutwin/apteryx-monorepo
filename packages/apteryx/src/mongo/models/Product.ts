import { model } from "mongoose"
import productSchema from "../schema/product"

export default model("Product", productSchema)
