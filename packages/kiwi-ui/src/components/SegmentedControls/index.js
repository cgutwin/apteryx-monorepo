import React from "react"
import styled, { css } from "styled-components"

function SegmentedControls({ segments, selected, onSegmentChange, ...props }) {
  let segmentDisplay = segments.map((segment, i) => (
    <Segment key={i} selected={selected === i} onClick={onSegmentChange.bind(this, i)}>
      <p>{segment.name}</p>
    </Segment>
  ))
  return <ControlsBase {...props}>{segmentDisplay}</ControlsBase>
}

const ControlsBase = styled.ul`
  background: #e8eaed;
  border-radius: 2rem;
  padding: 0.25rem;
  display: flex;
  align-content: center;
  max-height: 2.5rem;
  list-style: none;
  font-family: Manrope, sans-serif;
`

const Segment = styled.li`
  width: 100%;
  text-align: center;
  padding: 0.25rem 0;

  & > p {
    margin: 0;
  }

  ${(props) =>
    props.selected &&
    css`
      background: #f3f4f6;
      box-shadow: 0px 1px 4px rgba(13, 13, 27, 0.15);
      border-radius: 2rem;
      font-weight: 500;
    `}
`

export default SegmentedControls
