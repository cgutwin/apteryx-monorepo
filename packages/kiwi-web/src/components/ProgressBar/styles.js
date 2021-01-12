import styled from "styled-components"

export const ProgressBar = styled.div`
  background: ${(props) => props.theme.backgroundTint};
  border-radius: 1rem;
  height: calc(1rem / 2.66667);
  width: 100%;

  &::after {
    background: ${(props) => props.theme.accent};
    border-radius: 1rem;
    content: "";
    height: inherit;
    position: relative;
    display: block;
    width: ${(props) => props.percent}%;
    transition: width 500ms ease-in-out;
  }
`
