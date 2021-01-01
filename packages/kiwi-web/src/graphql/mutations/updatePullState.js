import { gql } from "@apollo/client"

const UPDATE_PULL_STATE = gql`
  mutation updatePullState($upc: String!, $value: Boolean!) {
    updatePullState(upc: $upc, value: $value) {
      isPulled
    }
  }
`

export default UPDATE_PULL_STATE
