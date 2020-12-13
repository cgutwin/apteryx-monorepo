import * as PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

export default function CreateProductView({ productCode, onCreateProduct }) {
  return (
    <>
      <form>
        <Input type="text" inputMode="numeric" pattern="[0-9]*" />
      </form>
      <button onClick={() => onCreateProduct()}>next</button>
    </>
  )
}

const Input = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  border: 2px solid #dcdfe5;
  border-radius: 1rem;
  box-shadow: none;
  margin: 0.8rem 0;
  max-height: 3rem;
  max-width: 30rem;
  padding: 1rem;
  transition: border 150ms, box-shadow 150ms;
  width: 100%;

  &:focus {
    border: 2px solid #0d0d1b;
  }
`

CreateProductView.propTypes = {
  productCode: PropTypes.string.isRequired,
  onCreateProduct: PropTypes.func.isRequired
}
