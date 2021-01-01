import styled, { css } from "styled-components"

export const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CheckboxStyle = styled.div`
  background: transparent;
  display: inline-block;
  border: 2px solid rgba(0, 0, 0, 0.33);
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  transition: all 100ms;
  padding: 0.2rem;
  
  ${Input}:focus & {
    border: 2px solid #0D0D1B;
    box-shadow: 0 0 5px 1px rgba(13, 13, 27, 0.2);
  }
  
  ${props => props.checked && css`
    background: #31F58D;
    border: 2px solid rgba(255, 255, 255, 0.66);
  `}
`
