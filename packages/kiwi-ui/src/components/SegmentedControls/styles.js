import { motion } from "framer-motion"
import styled, { css } from "styled-components"

export const ControlsBase = styled(motion.ul)`
  background: #e8eaed;
  border-radius: 2rem;
  padding: 0.25rem;
  margin: 0;
  display: flex;
  align-content: center;
  list-style: none;
  font-family: sans-serif;
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
  background: #f3f4f6;
  box-shadow: 0px 1px 4px rgba(13, 13, 27, 0.15);
  border-radius: 2rem;
  width: 100%;
`
