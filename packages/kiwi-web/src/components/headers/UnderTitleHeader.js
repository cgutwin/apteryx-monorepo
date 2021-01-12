import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

export default function UnderTitleHeader({
  action = null,
  title = "NO_TITLE",
  subtitle = "NO_SUBTITLE",
  children
}) {
  return (
    <HeaderWrapper>
      <HeaderItemsWrapper>
        {action}
        {children}
      </HeaderItemsWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </HeaderWrapper>
  )
}

UnderTitleHeader.propTypes = {
  action: PropTypes.element,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}

const HeaderWrapper = styled.header`
  padding: 2rem 0 1rem 0;
  margin: 0 2rem;
  border-bottom: 2px solid ${(props) => props.theme.backgroundTint};
`

const HeaderItemsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  // Hack "gap: 2rem" in because Safari doesnt support "@supports" or "gap" properly :roll_eyes:
  *:not(:first-child) {
    margin-left: 2rem;
  }
`
