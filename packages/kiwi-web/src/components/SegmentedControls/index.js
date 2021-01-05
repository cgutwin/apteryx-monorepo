import { AnimateSharedLayout } from "framer-motion"
import React from "react"
import { ControlsBase } from "./styles"
import Segment from "./Segment"
import PropTypes from "prop-types"

function SegmentedControls({ segments, selected, onSegmentChange, ...props }) {
  const segmentDisplay = segments.map((segment, i) => (
    <Segment key={i} selected={selected === i} onClick={onSegmentChange.bind(this, i)}>
      <p>{segment.name}</p>
    </Segment>
  ))

  return (
    <AnimateSharedLayout>
      <ControlsBase {...props}>{segmentDisplay}</ControlsBase>
    </AnimateSharedLayout>
  )
}

SegmentedControls.propTypes = {
  onSegmentChange: PropTypes.func.isRequired,
  segments: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired
}

export default SegmentedControls
