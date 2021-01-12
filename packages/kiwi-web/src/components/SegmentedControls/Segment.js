import PropTypes from "prop-types"
import React from "react"
import { SegmentDisplay, SelectedSegment } from "./styles"

function Segment({ selected, onClick, children }) {
  const spring = {
    type: "spring",
    stiffness: 800,
    damping: 50
  }

  return (
    <SegmentDisplay
      whileTap={{ scale: 0.96 }}
      selected={selected}
      onClick={onClick}
    >
      {children}
      {selected && (
        <SelectedSegment
          layoutId="selected"
          initial={false}
          transition={spring}
        />
      )}
    </SegmentDisplay>
  )
}

Segment.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
}

export default Segment
