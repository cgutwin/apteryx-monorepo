import { motion } from "framer-motion"
import styled from "styled-components"
import { TRANSITION_TIME_MS } from "../../../themes"

export const Card = styled(motion.div)`
  align-items: center;
  background: ${(props) => props.theme.backgroundAlt};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 1rem;
  transition: background ${TRANSITION_TIME_MS};
  user-select: none;
`
