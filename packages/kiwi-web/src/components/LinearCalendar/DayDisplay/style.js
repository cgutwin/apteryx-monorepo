import { motion } from "framer-motion"
import styled from "styled-components"

export const DateWrapper = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0 0.5rem;
  // The display should be faded if the date is before today, and it is not selected.
  opacity: ${(props) => (props.dateBeforeToday && !props.selected ? 0.5 : 1.0)};
  transition: opacity 200ms;
  width: fit-content;
`

export const DayStyle = styled.h6`
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
`

export const DateStyle = styled.div`
  align-items: center;
  border-radius: 100%;
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 1rem;

  & > * {
    grid-row: 1;
    grid-column: 1;
  }
`

export const SelectedOutline = styled(motion.div)`
  padding: 1.2rem;
  border: 2px solid transparent;
  border-radius: 2rem;
`
