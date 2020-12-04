import { Header } from "@kiwi/ui"
import * as PropTypes from "prop-types"
import React from "react"

function ExpiringView({ children }) {
  return (
    <div>
      <Header title={"test"} />
      expiring view
    </div>
  )
}

ExpiringView.propTypes = {
  children: PropTypes.node.isRequired
}

export default ExpiringView
