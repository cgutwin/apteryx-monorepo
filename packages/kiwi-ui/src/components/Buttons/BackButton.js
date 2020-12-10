import PropTypes from "prop-types"
import React from "react"
import BackIcon from "../../assets/icons/left-arrow.svg"
import { IconButton } from "./styles"

export default function BackButton({ onClick, ...props }) {
  return (
    <IconButton onClick={onClick} {...props}>
      <BackIcon width={"inherit"} height={"inherit"} />
    </IconButton>
  )
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  props: PropTypes.node.isRequired
}
