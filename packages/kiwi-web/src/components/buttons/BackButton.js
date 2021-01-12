import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import BackArrowNarrow from "../../static/icons/back-arrow-narrow.svg"
import { IconButton } from "./styles"

export default function BackButton({ onClick, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      <BackArrowNarrow />
    </Button>
  )
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

const Button = styled(IconButton)`
  background: ${(props) => props.theme.fade};
  color: ${(props) => props.theme.text};
  border-radius: 2rem;
`
