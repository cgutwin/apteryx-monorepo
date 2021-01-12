import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import CameraIcon from "../../static/icons/camera.svg"
import { IconButton } from "./styles"

export default function AddButton({ onClick, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      <CameraIcon />
    </Button>
  )
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

const Button = styled(IconButton)`
  background: ${(props) => props.theme.accent};
  border-radius: 2rem;
`
