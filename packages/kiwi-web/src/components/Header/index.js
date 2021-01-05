import PropTypes from "prop-types"
import React from "react"
import AddIcon from "../icons/Plus"
import * as Styled from "./styles"

export default function Header({ title, onButtonClick, children }) {
  return (
    <Styled.Header>
      <Styled.TitleContent>
        <Styled.ViewTitle>{title}</Styled.ViewTitle>
        <Styled.NewEntryButton onClick={onButtonClick}>
          <AddIcon width={"inherit"} height={"inherit"} />
        </Styled.NewEntryButton>
      </Styled.TitleContent>
      <div>{children}</div>
    </Styled.Header>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}
