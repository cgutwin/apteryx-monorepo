import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { TRANSITION_TIME_MS } from "../../themes"
import AddButton from "../buttons/AddButton"

function ActionHeader({ title = "NO_TITLE", changeTheme, navigate, children }) {
  return (
    <HeaderWrapper>
      <TitleBar>
        <h1 onDoubleClick={() => changeTheme()}>{title}</h1>
        <AddButton
          onClick={async () =>
            await navigate(`${process.env.PUBLIC_PATH.slice(0, -1)}/scan`)
          }
        />
      </TitleBar>
      <>{children}</>
    </HeaderWrapper>
  )
}

ActionHeader.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
}

const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.backgroundAlt};
  border-radius: 0 0 1rem 1rem;
  padding: 2rem 2rem 1rem 2rem;
  transition: background ${TRANSITION_TIME_MS};
  user-select: none;
`

const TitleBar = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export default ActionHeader
