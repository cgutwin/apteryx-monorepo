import { AnimateSharedLayout } from "framer-motion"
import React from "react"
import { ControlsBase, SegmentDisplay, SelectedSegment } from "./styles"

function Segment({ selected, onClick, children }) {
  const spring = {
    type: "spring",
    stiffness: 800,
    damping: 50
  }

  return (
    <SegmentDisplay whileTap={{ scale: 0.96 }} selected={selected} onClick={onClick}>
      {children}
      {selected && <SelectedSegment layoutId="selected" initial={false} transition={spring} />}
    </SegmentDisplay>
  )
}

function SegmentedControls({ segments, selected, onSegmentChange, ...props }) {
  const segmentDisplay = segments.map((segment, i) => (
    <Segment selected={selected === i} onClick={onSegmentChange.bind(this, i)}>
      <p>{segment.name}</p>
    </Segment>
  ))

  return (
    <AnimateSharedLayout>
      <ControlsBase {...props}>{segmentDisplay}</ControlsBase>
    </AnimateSharedLayout>
  )
}

export default SegmentedControls
