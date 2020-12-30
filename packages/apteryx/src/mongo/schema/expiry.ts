import { Schema } from "mongoose"

const expirySchema = new Schema({
  upc: String,
  expiring: String
})

export default expirySchema
