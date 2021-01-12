import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import { TRANSITION_TIME_MS } from "../../themes"

export const ControlsBase = styled(motion.ul)`
  background: ${(props) => props.theme.backgroundAlt};
  align-content: center;
  border-radius: 2rem;
  display: flex;
  font-family: sans-serif;
  padding: 0.25rem;
  list-style: none;
  margin: 0;
  transition: background ${TRANSITION_TIME_MS}, color ${TRANSITION_TIME_MS};
`

export const SegmentDisplay = styled(motion.li)`
  width: 100%;
  text-align: center;
  display: grid;

  & > p {
    margin: 0.25rem;
    z-index: 1;
    pointer-events: none;
  }

  & > * {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  ${(props) =>
    props.selected &&
    css`
      font-weight: 500;
    `}
`

export const SelectedSegment = styled(motion.div)`
  background: ${(props) => props.theme.background};
  box-shadow: 0px 1px 4px rgba(13, 13, 27, 0.15);
  border-radius: 2rem;
  transition: background ${TRANSITION_TIME_MS}, color ${TRANSITION_TIME_MS};
  width: 100%;
`
