import PropTypes from "prop-types"
import React from "react"
import BackIcon from "../../assets/left-arrow.svg"
import { IconButton } from "./styles"

export default function BackButton({ onClick, ...props }) {
  return (
    <IconButton onClick={onClick} {...props}>
      <BackIcon width={"2rem"} height={"2rem"} />
    </IconButton>
  )
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
