import { AnimateSharedLayout } from "framer-motion"
import PropTypes from "prop-types"
import React from "react"
import Segment from "./Segment"
import { ControlsBase } from "./styles"

function SegmentedControls({ segments, selected, onSegmentChange, ...props }) {
  const segmentDisplay = segments.map((segment, i) => (
    <Segment
      key={i}
      selected={selected === i}
      onClick={onSegmentChange.bind(this, i)}
    >
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
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  selected: PropTypes.number.isRequired
}

export default SegmentedControls
