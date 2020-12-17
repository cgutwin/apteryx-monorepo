import styled from "styled-components"

export const ProgressBar = styled.div`
  background: #dcdfe5;
  border-radius: 1rem;
  height: calc(1rem / 2.66667);
  width: 100%;

  &::after {
    background: #31f58d;
    border-radius: 1rem;
    content: "";
    height: inherit;
    position: relative;
    display: block;
    width: ${(props) => props.percent}%;
    transition: width 500ms ease-in-out;
  }
`
