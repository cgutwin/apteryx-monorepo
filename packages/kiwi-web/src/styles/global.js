import { createGlobalStyle } from "styled-components"
import { TRANSITION_TIME_MS } from "../themes"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background ${TRANSITION_TIME_MS}, color ${TRANSITION_TIME_MS};
  }
  
  .padded {
    padding: 0 2rem;
  }
`
