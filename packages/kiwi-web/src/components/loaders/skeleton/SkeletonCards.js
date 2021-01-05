import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"

function SkeletonCards({ numberToRender = 1 }) {
  const renderCards = () => {
    const cards = []
    for (let i = 0; i < numberToRender; i++) {
      cards.push(<Card key={i} />)
    }
    return cards
  }

  return renderCards()
}

SkeletonCards.propTypes = {
  numberToRender: PropTypes.number
}

const fadeInFromHalf = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`

export const Card = styled.div`
  align-items: center;
  animation: 750ms ${fadeInFromHalf} infinite ease-in-out;
  animation-direction: alternate;
  background: white;
  border-radius: 1rem;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 1rem;
`

export default SkeletonCards
