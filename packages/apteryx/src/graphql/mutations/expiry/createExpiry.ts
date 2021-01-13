import { GraphQLNonNull } from "graphql"
import expiry from "../../types/expiry"
import expiryInput from "../../types/expiry/inputs/expiryInput"

export default {
  description: "Adds an expiry to the database with the associated metadata.",
  type: expiry,
  args: {
    product: { type: new GraphQLNonNull(expiryInput) }
  }
}
