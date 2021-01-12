import React from "react"
import styled from "styled-components"

export default function FullWidthSubmit({ text }) {
  return <SubmitButton type="submit" value={text} />
}

const SubmitButton = styled.input`
  background: ${(props) => props.theme.accent};
  border: none;
  border-radius: 2rem;
  padding: 1rem;
  position: absolute;
  bottom: 2rem;
  width: calc(100% - 4rem);
`
