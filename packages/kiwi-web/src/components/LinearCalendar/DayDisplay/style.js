import styled, { css } from "styled-components"

export const Display = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  max-width: max-content;
`

export const Day = styled.h6`
  margin: 0 0 0.5rem 0;
`

export const Date = styled.p`
  align-items: center;
  background: transparent;
  border-radius: 100%;
  border: 2px solid transparent;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  margin: 0;
  max-height: 1rem;
  padding: 1.25rem;
  width: 1rem;

  ${(props) =>
    props.selected &&
    css`
      background: none;
      border: 2px solid #31f58d;
      color: #0d0d1b;
    `}
`
