import styled from "styled-components"
import { motion } from "framer-motion"

export const Card = styled(motion.div)`
  align-items: center;
  background: white;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 1rem;
  user-select: none;
`

export const GridCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  display: grid;
  margin: 0.5rem 0;
  padding: 1rem;
  user-select: none;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);

  & > * {
    grid-row: 1;
  }
`
