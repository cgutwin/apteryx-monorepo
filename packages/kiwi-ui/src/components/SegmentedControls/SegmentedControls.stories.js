import React, { useState } from "react"
import SegmentedControls from "./index"

export default {
  title: "Segmented Controls"
}

const PrimaryTemplate = (args) => {
  const [selectedSegment, setSelectedSegment] = useState(0)
  const segmentChangeHandler = (segment) => {
    setSelectedSegment(segment)
  }
  return <SegmentedControls selected={selectedSegment} onSegmentChange={segmentChangeHandler} {...args} />
}

export const Primary = PrimaryTemplate.bind({})

Primary.args = {
  segments: [
    {
      name: "Products Expiring"
    },
    {
      name: "Pulled"
    }
  ]
}
