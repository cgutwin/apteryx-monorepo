import styled, { css } from "styled-components"

export const InputReset = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  border: none;
  box-shadow: none;
`

export const InputWrapper = styled.div`
  display: grid;

  //All children overlap in the wrapper, so set all children to be grid row/column 1.
  & > * {
    grid-row: 1;
    grid-column: 1;
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

export const Input = styled(InputReset)`
  &:focus {
    border: 2px solid ${(props) => props.theme.accent};
    outline: none;
  }

  // This is just the background colour of the view, but TODO: change to a dynamic prop in the future.
  background: ${(props) => props.theme.background};
  border: 2px solid ${(props) => props.theme.fade};
  color: ${(props) => props.theme.text};
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  margin: 0.5rem 0;
  transition: border 200ms;
  width: 100%;
`

export const InputLabel = styled.label`
  /* If the input of the associated label is focused OR has an input, we want to
   move the placeholder text up and out of the way. */
  ${({ focused, hasInput }) =>
    (focused || hasInput) &&
    css`
      left: 2rem !important;
      top: 0 !important;
      font-size: 0.8rem !important;
    `};

  //If the input is focused, we just want to make the colour not faded anymore.
  ${({ focused }) =>
    focused &&
    css`
      color: ${(props) => props.theme.accent}!important;
    `};

  color: ${(props) => props.theme.text};
  font-size: 1rem;
  height: fit-content;
  left: 1.5rem;
  pointer-events: none;
  position: relative;
  transition: color 150ms, top 150ms, left 150ms, font-size 150ms;
  top: 35%;
  width: fit-content;
`

export const LabelText = styled.span`
  background: ${(props) => props.theme.background};
  margin: 0;
  padding: 0 0.5rem;
  width: fit-content;
`
