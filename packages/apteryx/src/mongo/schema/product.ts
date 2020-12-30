import { Schema } from "mongoose"

const productSchema = new Schema({
  id: String,
  name: String
})

export default productSchema
