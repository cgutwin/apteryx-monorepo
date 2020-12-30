import { Schema } from "mongoose"

const productSchema = new Schema({
  name: String,
  upc: String
})

export default productSchema
